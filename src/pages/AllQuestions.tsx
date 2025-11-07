import { useEffect, useMemo, useState } from "react";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { LanguageSelector } from "@/components/LanguageSelector";
import { questions, Question } from "@/data/questions";
import { getFavoriteIds, toggleFavorite } from "@/utils/favorites";
import { getQuestionAttempts, QuestionAttempt } from "@/utils/statistics";
import { Star } from "lucide-react";
import { format } from "date-fns";

// Persisted language key shared across pages
const LANG_KEY = "argdriver_lang";

type Lang = "es" | "en" | "ru";

type FilterKey = "all" | "images" | "starred" | "never" | "correct" | "errors";

const labels: Record<Lang, Record<FilterKey | "title" | "empty", string>> = {
  es: {
    title: "Todas las preguntas",
    all: "Todas",
    images: "Con imagen",
    starred: "Interesantes",
    never: "Nunca respondidas",
    correct: "Correctas (última)",
    errors: "Errores (última)",
    empty: "No hay preguntas que coincidan con el filtro seleccionado."
  },
  en: {
    title: "All questions",
    all: "All",
    images: "With image",
    starred: "Starred",
    never: "Never answered",
    correct: "Correct (last)",
    errors: "Errors (last)",
    empty: "No questions match the selected filter."
  },
  ru: {
    title: "Все вопросы",
    all: "Все",
    images: "С изображением",
    starred: "Избранные",
    never: "Никогда не отвечал",
    correct: "Правильно (последний)",
    errors: "Ошибки (последний)",
    empty: "Нет вопросов, соответствующих выбранному фильтру."
  }
};

function usePersistentLanguage(): [Lang, (l: Lang) => void] {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem(LANG_KEY) as Lang | null;
    return saved === "es" || saved === "en" || saved === "ru" ? saved : "es";
  });
  useEffect(() => {
    localStorage.setItem(LANG_KEY, lang);
  }, [lang]);
  return [lang, setLang];
}

function lastAttempt(attempts: QuestionAttempt[] | undefined): QuestionAttempt | undefined {
  if (!attempts || attempts.length === 0) return undefined;
  return attempts[attempts.length - 1];
}

const HistoryDots = ({ attempts }: { attempts: QuestionAttempt[] }) => {
  const MAX = 12;
  const slice = attempts.slice(-MAX);
  return (
    <div className="flex items-center gap-1 mt-3 flex-wrap">
      {slice.length === 0 && (
        <span className="text-xs text-muted-foreground">—</span>
      )}
      {slice.map((a, i) => {
        const color = a.correct ? "bg-green-500" : "bg-red-500";
        const label = `${a.correct ? "✔" : "✘"} ${format(new Date(a.date), "dd/MM/yyyy HH:mm")}`;
        return (
          <Tooltip key={i}>
            <TooltipTrigger asChild>
              <span className={`w-2.5 h-2.5 rounded-full ${color}`} aria-label={label} />
            </TooltipTrigger>
            <TooltipContent>{label}</TooltipContent>
          </Tooltip>
        );
      })}
    </div>
  );
};

const QuestionBlock = ({ q, lang, isStarred, onToggle }: { q: Question; lang: Lang; isStarred: boolean; onToggle: () => void }) => {
  const attempts = getQuestionAttempts(q.id);
  const last = lastAttempt(attempts);
  const hasImage = !!q.image;
  return (
    <Card className="p-4">
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-lg font-semibold">{q.question[lang]}</h3>
        <div className="shrink-0">
          <Button
            variant={isStarred ? "secondary" : "outline"}
            size="sm"
            onClick={onToggle}
            aria-label={
              isStarred
                ? (lang === "es" ? "Quitar de interesantes" : lang === "ru" ? "Убрать из избранного" : "Remove from favorites")
                : (lang === "es" ? "Marcar como interesante" : lang === "ru" ? "Добавить в избранное" : "Mark as favorite")
            }
            title={
              isStarred
                ? (lang === "es" ? "Quitar de interesantes" : lang === "ru" ? "Убрать из избранного" : "Remove from favorites")
                : (lang === "es" ? "Marcar como interesante" : lang === "ru" ? "Добавить в избранное" : "Mark as favorite")
            }
          >
            <Star className={`h-4 w-4 ${isStarred ? "text-yellow-500 fill-yellow-500" : ""}`} />
          </Button>
        </div>
      </div>
      {hasImage && (
        <div className="mb-3 flex justify-center">
          <img src={q.image!} alt="Question" className="max-w-full h-auto rounded" />
        </div>
      )}
      <ul className="space-y-2">
        {q.answers.map((a, idx) => (
          <li key={idx} className={`px-3 py-2 rounded border ${a.correct ? "bg-emerald-50 border-emerald-200" : "bg-background"}`}>
            <span className="font-semibold mr-2">{String.fromCharCode(65 + idx)}.</span>
            <span>{a.text[lang]}</span>
          </li>
        ))}
      </ul>
      <div className="mt-2">
        <div className="text-xs text-muted-foreground">
          {last
            ? `${(lang === "es" && "Última respuesta:") || (lang === "en" && "Last answer:") || "Последний ответ:"} ${format(new Date(last.date), "dd/MM/yyyy HH:mm")} • ${last.correct ? ((lang === "es" && "Correcta") || (lang === "en" && "Correct") || "Верно") : ((lang === "es" && "Incorrecta") || (lang === "en" && "Incorrect") || "Неверно")}`
            : (lang === "es" && "Nunca respondida") || (lang === "en" && "Never answered") || "Никогда не отвечал"}
        </div>
        <HistoryDots attempts={attempts} />
      </div>
    </Card>
  );
};

const AllQuestions = () => {
  const [lang, setLang] = usePersistentLanguage();
  const [filter, setFilter] = useState<FilterKey>("all");
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);
  const isFav = useMemo(() => new Set(favoriteIds), [favoriteIds]);
  const [statsById, setStatsById] = useState<Record<number, { attempts: QuestionAttempt[] }>>({});

  useEffect(() => {
    setFavoriteIds(getFavoriteIds());
    // Build attempts map once on mount (reads from localStorage)
    const map: Record<number, { attempts: QuestionAttempt[] }> = {};
    for (const q of questions) {
      map[q.id] = { attempts: getQuestionAttempts(q.id) };
    }
    setStatsById(map);
  }, []);

  const filtered = useMemo(() => {
    return questions.filter((q) => {
      const attempts = statsById[q.id]?.attempts || [];
      const last = lastAttempt(attempts);
      switch (filter) {
        case "all":
          return true;
        case "starred":
          return isFav.has(q.id);
        case "images":
          return !!q.image;
        case "never":
          return attempts.length === 0;
        case "correct":
          return !!last && last.correct === true;
        case "errors":
          return !!last && last.correct === false;
        default:
          return true;
      }
    });
  }, [filter, isFav, statsById]);

  const langLabels = labels[lang];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-6">
          <h2 className="text-2xl font-bold flex-1">{langLabels.title}</h2>
          <LanguageSelector language={lang} onLanguageChange={setLang} />
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {(["all", "images", "starred", "never", "correct", "errors"] as FilterKey[]).map((key) => (
            <Button key={key} variant={filter === key ? "default" : "outline"} size="sm" onClick={() => setFilter(key)}>
              {langLabels[key]}
            </Button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center text-muted-foreground">{langLabels.empty}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {filtered.map((q) => (
              <QuestionBlock
                key={q.id}
                q={q}
                lang={lang}
                isStarred={isFav.has(q.id)}
                onToggle={() => {
                  const nowFav = toggleFavorite(q.id);
                  setFavoriteIds((prev) => {
                    const s = new Set(prev);
                    if (nowFav) s.add(q.id); else s.delete(q.id);
                    return Array.from(s);
                  });
                }}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default AllQuestions;
