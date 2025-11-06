import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, Circle } from "lucide-react";

interface QuestionNavigationProps {
  totalQuestions: number;
  currentQuestion: number;
  answers: (boolean | null)[];
  onQuestionSelect: (index: number) => void;
}

export const QuestionNavigation = ({
  totalQuestions,
  currentQuestion,
  answers,
  onQuestionSelect,
}: QuestionNavigationProps) => {
  return (
    <div className="grid grid-cols-10 gap-2">
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
            className={`relative ${
              isAnswered && isCorrect ? "border-success border-2" : ""
            } ${
              isAnswered && !isCorrect ? "border-destructive border-2" : ""
            } ${
              !isAnswered ? "border-muted-foreground border-2" : ""
            }`}
          >
            {i + 1}
            {isAnswered && (
              <div className="absolute -top-1 -right-1">
                {isCorrect ? (
                  <CheckCircle2 className="h-3 w-3 text-success" />
                ) : (
                  <XCircle className="h-3 w-3 text-destructive" />
                )}
              </div>
            )}
            {!isAnswered && (
              <div className="absolute -top-1 -right-1">
                <Circle className="h-3 w-3 text-muted-foreground" />
              </div>
            )}
          </Button>
        );
      })}
    </div>
  );
};
