import { useEffect, useMemo, useState } from "react";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { questions, Question } from "@/data/questions";
import { getFavoriteIds, toggleFavorite } from "@/utils/favorites";
import { Star } from "lucide-react";
import { LanguageSelector } from "@/components/LanguageSelector";
import { FeedbackFooter } from "@/components/FeedbackFooter";

const Favorites = () => {
  const [language, setLanguage] = useState<"es" | "en" | "ru">("es");
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  useEffect(() => {
    setFavoriteIds(getFavoriteIds());
  }, []);

  const favoriteQuestions: Question[] = useMemo(() => {
    const idSet = new Set(favoriteIds);
    return questions.filter((q) => idSet.has(q.id));
  }, [favoriteIds]);

  const texts = {
    title: { es: "Preguntas interesantes", en: "Interesting questions", ru: "Избранные вопросы" },
    empty: { es: "Aún no marcaste preguntas.", en: "You haven't marked any questions yet.", ru: "Вы еще не отметили вопросы." },
    remove: { es: "Quitar", en: "Remove", ru: "Убрать" },
  } as const;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto py-12 px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">{texts.title[language]}</h2>
          <LanguageSelector language={language} onLanguageChange={setLanguage} />
        </div>

        {favoriteQuestions.length === 0 ? (
          <div className="text-muted-foreground">{texts.empty[language]}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteQuestions.map((q) => (
              <Card key={q.id} className="p-4 flex flex-col gap-3">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold text-lg flex-1">{q.question[language]}</h3>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                      const nowFav = toggleFavorite(q.id);
                      setFavoriteIds((prev) => {
                        const set = new Set(prev);
                        if (nowFav) set.add(q.id); else set.delete(q.id);
                        return Array.from(set);
                      });
                    }}
                    aria-label={texts.remove[language]}
                  >
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  </Button>
                </div>
                {q.image && (
                  <img src={q.image} alt="Question" className="w-full h-auto rounded" />
                )}
                <ul className="space-y-2">
                  {q.answers.map((a, idx) => (
                    <li key={idx} className={`px-3 py-2 rounded border ${a.correct ? "bg-emerald-50 border-emerald-200" : "bg-background"}`}>
                      <span className="font-semibold mr-2">{String.fromCharCode(65 + idx)}.</span>
                      <span>{a.text[language]}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        )}
      </main>
      <FeedbackFooter language={language} />
    </div>
  );
};

export default Favorites;
