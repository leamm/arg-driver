import { useState } from "react";
import { Header } from "@/components/Header";
import { QuestionCard } from "@/components/QuestionCard";
import { ProgressSidebar } from "@/components/ProgressSidebar";
import { Results } from "@/components/Results";
import { questions } from "@/data/questions";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [language, setLanguage] = useState<"es" | "en" | "ru">("es");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<(boolean | null)[]>(
    new Array(questions.length).fill(null)
  );
  const [testCompleted, setTestCompleted] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
    setShowResult(true);

    const isCorrect = currentQuestion.answers[index].correct;
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = isCorrect;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setTestCompleted(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setAnswers(new Array(questions.length).fill(null));
    setTestCompleted(false);
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
        <Header language={language} onLanguageChange={setLanguage} />
        <main className="container mx-auto py-12 px-6">
          <Results
            correctAnswers={correctAnswers}
            totalQuestions={questions.length}
            language={language}
            onRestart={handleRestart}
          />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} onLanguageChange={setLanguage} />
      
      <main className="container mx-auto py-12 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
          <div>
            <QuestionCard
              question={currentQuestion}
              currentQuestion={currentQuestionIndex + 1}
              totalQuestions={questions.length}
              selectedAnswer={selectedAnswer}
              showResult={showResult}
              language={language}
              onAnswerSelect={handleAnswerSelect}
            />
            
            {showResult && (
              <div className="mt-6 flex justify-end">
                <Button onClick={handleNext} size="lg">
                  {nextButtonText[language]}
                </Button>
              </div>
            )}
          </div>

          <div className="hidden lg:block">
            <ProgressSidebar
              totalQuestions={questions.length}
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
