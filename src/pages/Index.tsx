import { useState, useEffect } from "react";
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
  const [testCompleted, setTestCompleted] = useState(false);

  const currentQuestion = activeQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === activeQuestions.length - 1;

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
    setShowResult(true);

    const isCorrect = currentQuestion.answers[index].correct;
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = isCorrect;
    setAnswers(newAnswers);

    // Update statistics for this question
    updateQuestionStat(currentQuestion.id, isCorrect);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      // Save test statistics before completing
      const correctAnswersCount = answers.filter((a) => a === true).length;
      addTestStat(activeQuestions.length, correctAnswersCount);
      setTestCompleted(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const handleRestart = () => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setActiveQuestions(shuffled.slice(0, 20));
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setAnswers(new Array(20).fill(null));
    setTestCompleted(false);
  };

  const handleQuestionSelect = (index: number) => {
    setCurrentQuestionIndex(index);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const correctAnswers = answers.filter((a) => a === true).length;

  const nextButtonText = {
    es: isLastQuestion ? "Ver resultados" : "Siguiente pregunta",
    en: isLastQuestion ? "View results" : "Next question",
    ru: isLastQuestion ? "Посмотреть результаты" : "Следующий вопрос",
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
