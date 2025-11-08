import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Question } from "@/data/questions";
import { CheckCircle2, XCircle, Star } from "lucide-react";

interface QuestionCardProps {
  question: Question;
  currentQuestion: number;
  totalQuestions: number;
  selectedAnswer: number | null;
  showResult: boolean;
  language: "es" | "en" | "ru";
  onAnswerSelect: (index: number) => void;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
}

export const QuestionCard = ({
  question,
  currentQuestion,
  totalQuestions,
  selectedAnswer,
  showResult,
  language,
  onAnswerSelect,
  isFavorite = false,
  onToggleFavorite,
}: QuestionCardProps) => {
  return (
    <div className="w-full">
      <Card className="p-4">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-muted-foreground">
              {language === "es" && `Pregunta ${currentQuestion} de ${totalQuestions}`}
              {language === "en" && `Question ${currentQuestion} of ${totalQuestions}`}
              {language === "ru" && `Вопрос ${currentQuestion} из ${totalQuestions}`}
            </span>
            {onToggleFavorite && (
              <Button
                variant={isFavorite ? "secondary" : "outline"}
                size="sm"
                onClick={onToggleFavorite}
                aria-label={isFavorite ? (language === "es" ? "Quitar de interesantes" : language === "ru" ? "Убрать из избранного" : "Remove from favorites") : (language === "es" ? "Marcar como interesante" : language === "ru" ? "Добавить в избранное" : "Mark as favorite")}
              >
                <Star className={`h-4 w-4 ${isFavorite ? "text-yellow-500 fill-yellow-500" : ""}`} />
              </Button>
            )}
          </div>
          <h2 className="text-2xl font-semibold mb-6">{question.question[language]}</h2>

          {question.image && (
            <div className="mb-6 flex justify-center">
              <img
                src={question.image}
                alt="Traffic scenario"
                className="max-w-full h-auto rounded-lg shadow-md"
              />
            </div>
          )}
        </div>

        <div className="space-y-3">
          {question.answers.map((answer, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = answer.correct;
            const showCorrect = showResult && isCorrect;
            const showWrong = showResult && isSelected && !isCorrect;

            return (
              <Button
                key={index}
                variant={showCorrect ? "default" : showWrong ? "destructive" : isSelected ? "secondary" : "outline"}
                className={`w-full justify-start text-left h-auto py-4 px-6 whitespace-normal ${
                  showCorrect ? "bg-success hover:bg-success" : ""
                }`}
                onClick={() => !showResult && onAnswerSelect(index)}
                disabled={showResult}
              >
                <span className="flex items-center gap-3 w-full">
                  <span className="font-semibold">{String.fromCharCode(65 + index)}.</span>
                  <span className="flex-1">{answer.text[language]}</span>
                  {showCorrect && <CheckCircle2 className="h-5 w-5 flex-shrink-0" />}
                  {showWrong && <XCircle className="h-5 w-5 flex-shrink-0" />}
                </span>
              </Button>
            );
          })}
        </div>
      </Card>
    </div>
  );
};
