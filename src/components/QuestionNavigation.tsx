import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";

interface QuestionNavigationProps {
  totalQuestions: number;
  currentQuestion: number;
  answers: (boolean | null)[];
  onQuestionSelect: (index: number) => void;
  onRestart?: () => void;
  language?: "es" | "en" | "ru";
}

export const QuestionNavigation = ({
  totalQuestions,
  currentQuestion,
  answers,
  onQuestionSelect,
  onRestart,
  language = "es",
}: QuestionNavigationProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-2">
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: totalQuestions }, (_, i) => {
            const isAnswered = answers[i] !== null;
            const isCorrect = answers[i] === true;
            const isCurrent = i === currentQuestion - 1;

            return (
              <Button
                key={i}
                variant={isCurrent ? "default" : "outline"}
                size="sm"
                onClick={() => onQuestionSelect(i)}
                className={`relative rounded-full w-8 h-8 p-0 flex items-center justify-center ${
                  isAnswered && isCorrect ? "border-success border-2" : ""
                } ${
                  isAnswered && !isCorrect ? "border-destructive border-2" : ""
                } ${
                  !isAnswered ? "border-muted-foreground border-2" : ""
                }`}
              >
                {i + 1}
              </Button>
            );
          })}
        </div>

        {onRestart && (
          <Button 
            variant="outline" 
            size="sm" 
            onClick={onRestart}
            className="flex items-center gap-2 shrink-0"
          >
            <RotateCcw className="h-4 w-4" />
            {language === "es" && "Reiniciar"}
            {language === "en" && "Restart"}
            {language === "ru" && "Перезапустить"}
          </Button>
        )}
      </div>
    </div>
  );
};
