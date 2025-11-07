import { useState, useEffect, useRef } from "react";
import { Header } from "@/components/Header";
import { QuestionCard } from "@/components/QuestionCard";
import { ProgressSidebar } from "@/components/ProgressSidebar";
import { Results } from "@/components/Results";
import { questions } from "@/data/questions";
import { Button } from "@/components/ui/button";
import { LanguageSelector } from "@/components/LanguageSelector";
import { QuestionNavigation } from "@/components/QuestionNavigation";
import { updateQuestionStat, addTestStat } from "@/utils/statistics";
import { RotateCcw } from "lucide-react";

const STORAGE_KEY = "argdriver_test_state_v1";

const Index = () => {
  const [language, setLanguage] = useState<"es" | "en" | "ru">("es");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [activeQuestions, setActiveQuestions] = useState(() => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    // Use exactly 20 questions
    return shuffled.slice(0, 20);
  });
  const [answers, setAnswers] = useState<(boolean | null)[]>(
    new Array(20).fill(null)
  );
  // Track which answer index was selected for each question (or null if unanswered)
  const [selectedIndices, setSelectedIndices] = useState<(number | null)[]>(
    new Array(20).fill(null)
  );
  const [testCompleted, setTestCompleted] = useState(false);

  const hydratedRef = useRef(false);

  // Load saved state on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const saved = JSON.parse(raw);
      // Basic shape validation
      if (!saved || typeof saved !== "object") return;

      const {
        language: savedLang,
        currentQuestionIndex: savedIndex,
        selectedAnswer: savedSelected,
        showResult: savedShow,
        answers: savedAnswers,
        testCompleted: savedCompleted,
        activeQuestionIds,
        selectedIndices: savedSelectedIndices,
      } = saved;

      // reconstruct activeQuestions from ids
      let reconstructed = [] as typeof activeQuestions;
      if (Array.isArray(activeQuestionIds) && activeQuestionIds.length > 0) {
        const byId = new Map(questions.map((q) => [q.id, q] as const));
        reconstructed = activeQuestionIds
          .map((id: number) => byId.get(id))
          .filter(Boolean) as typeof activeQuestions;
      }

      if (reconstructed.length === 20) {
        setActiveQuestions(reconstructed);
      }

      if (savedLang === "es" || savedLang === "en" || savedLang === "ru") {
        setLanguage(savedLang);
      }
      if (typeof savedIndex === "number" && savedIndex >= 0 && savedIndex < 20) {
        setCurrentQuestionIndex(savedIndex);
      }
      if (savedSelected === null || typeof savedSelected === "number") {
        setSelectedAnswer(savedSelected);
      }
      if (typeof savedShow === "boolean") {
        setShowResult(savedShow);
      }
      if (Array.isArray(savedAnswers) && savedAnswers.length === 20) {
        setAnswers(savedAnswers);
      }
      if (Array.isArray(savedSelectedIndices) && savedSelectedIndices.length === 20) {
        setSelectedIndices(savedSelectedIndices);
        // Reconcile current question selection if not explicitly saved via selectedAnswer/showResult
        if (!savedShow && (savedSelected === undefined || savedSelected === null)) {
          if (typeof savedIndex === "number" && savedIndex >= 0 && savedIndex < 20) {
            const prev = savedSelectedIndices[savedIndex];
            if (prev !== null && prev !== undefined) {
              setSelectedAnswer(prev);
              setShowResult(true);
            }
          }
        }
      }
      if (typeof savedCompleted === "boolean") {
        setTestCompleted(savedCompleted);
      }
    } catch (e) {
      // ignore corrupt state
      console.warn("Failed to load saved test state:", e);
    } finally {
      hydratedRef.current = true;
    }
  }, []);

  // Persist state changes
  useEffect(() => {
    if (!hydratedRef.current) return;
    try {
      const state = {
        language,
        currentQuestionIndex,
        selectedAnswer,
        showResult,
        answers,
        selectedIndices,
        testCompleted,
        activeQuestionIds: activeQuestions.map((q) => q.id),
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn("Failed to save test state:", e);
    }
  }, [language, currentQuestionIndex, selectedAnswer, showResult, answers, selectedIndices, testCompleted, activeQuestions]);

  const currentQuestion = activeQuestions[currentQuestionIndex];
  const allAnswered = answers.every((a) => a !== null);

  const handleAnswerSelect = (index: number) => {
    // If already answered, do nothing (defensive)
    if (selectedIndices[currentQuestionIndex] !== null) return;

    setSelectedAnswer(index);
    setShowResult(true);

    // Store the selected index for this question
    const newSelected = [...selectedIndices];
    newSelected[currentQuestionIndex] = index;
    setSelectedIndices(newSelected);

    const isCorrect = currentQuestion.answers[index].correct;
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = isCorrect;
    setAnswers(newAnswers);

    // Update statistics for this question
    updateQuestionStat(currentQuestion.id, isCorrect);
  };

  const handleNext = () => {
    if (!allAnswered) {
      // Find the next unanswered question by order after the current one.
      // If none ahead, wrap to the beginning.
      const n = answers.length;
      let targetIndex = -1;

      for (let i = currentQuestionIndex + 1; i < n; i++) {
        if (answers[i] === null) {
          targetIndex = i;
          break;
        }
      }
      if (targetIndex === -1) {
        for (let i = 0; i <= currentQuestionIndex; i++) {
          if (answers[i] === null) {
            targetIndex = i;
            break;
          }
        }
      }
      if (targetIndex === -1) targetIndex = currentQuestionIndex; // Defensive fallback

      setCurrentQuestionIndex(targetIndex);
      const prevSelected = selectedIndices[targetIndex];
      if (prevSelected !== null && prevSelected !== undefined) {
        setSelectedAnswer(prevSelected);
        setShowResult(true);
      } else {
        setSelectedAnswer(null);
        setShowResult(false);
      }
    } else {
      // All answered: show results
      const correctAnswersCount = answers.filter((a) => a === true).length;
      addTestStat(activeQuestions.length, correctAnswersCount);
      setTestCompleted(true);
    }
  };

  const handleRestart = () => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setActiveQuestions(shuffled.slice(0, 20));
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setAnswers(new Array(20).fill(null));
    setSelectedIndices(new Array(20).fill(null));
    setTestCompleted(false);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
  };

  const handleQuestionSelect = (index: number) => {
    setCurrentQuestionIndex(index);
    const prevSelected = selectedIndices[index];
    if (prevSelected !== null && prevSelected !== undefined) {
      setSelectedAnswer(prevSelected);
      setShowResult(true);
    } else {
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const correctAnswers = answers.filter((a) => a === true).length;

  const nextButtonText = {
    es: allAnswered ? "Ver resultados" : "Siguiente pregunta",
    en: allAnswered ? "View results" : "Next question",
    ru: allAnswered ? "Посмотреть результаты" : "Следующий вопрос",
  };

  if (testCompleted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto py-12 px-6">
          <Results
            correctAnswers={correctAnswers}
            totalQuestions={activeQuestions.length}
            language={language}
            onRestart={handleRestart}
          />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto py-12 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
          <div className="space-y-6">
            <div className="bg-card p-4 rounded-lg border mb-6">
              <div className="mb-3 text-sm font-medium text-muted-foreground">
                {language === "es" && "Navegación de preguntas"}
                {language === "en" && "Question navigation"}
                {language === "ru" && "Навигация по вопросам"}
              </div>
              <QuestionNavigation
                totalQuestions={activeQuestions.length}
                currentQuestion={currentQuestionIndex + 1}
                answers={answers}
                onQuestionSelect={handleQuestionSelect}
                onRestart={handleRestart}
                language={language}
              />
            </div>

            <QuestionCard
              question={currentQuestion}
              currentQuestion={currentQuestionIndex + 1}
              totalQuestions={activeQuestions.length}
              selectedAnswer={selectedAnswer}
              showResult={showResult}
              language={language}
              onAnswerSelect={handleAnswerSelect}
            />

            <div className="bg-card p-4 rounded-lg border flex items-center justify-between">
              <LanguageSelector 
                language={language} 
                onLanguageChange={setLanguage} 
              />

              {showResult && (
                <Button onClick={handleNext} size="lg">
                  {nextButtonText[language]}
                </Button>
              )}
            </div>
          </div>

          <div className="hidden lg:block">
            <ProgressSidebar
              totalQuestions={activeQuestions.length}
              currentQuestion={currentQuestionIndex + 1}
              answers={answers}
              language={language}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
