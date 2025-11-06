import { Card } from "@/components/ui/card";
import { CheckCircle2, XCircle, Circle } from "lucide-react";

interface ProgressSidebarProps {
  totalQuestions: number;
  currentQuestion: number;
  answers: (boolean | null)[];
  language: "es" | "en" | "ru";
}

export const ProgressSidebar = ({
  totalQuestions,
  currentQuestion,
  answers,
  language,
}: ProgressSidebarProps) => {
  const correct = answers.filter((a) => a === true).length;
  const incorrect = answers.filter((a) => a === false).length;
  const unanswered = answers.filter((a) => a === null).length;

  return (
    <Card className="p-6 sticky top-6">
      <div className="bg-primary text-primary-foreground rounded-lg p-4 mb-6 text-center">
        <div className="text-sm font-medium mb-1">
          {language === "es" && "Pregunta"}
          {language === "en" && "Question"}
          {language === "ru" && "Вопрос"}
        </div>
        <div className="text-3xl font-bold">
          {currentQuestion} / {totalQuestions}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <CheckCircle2 className="h-5 w-5 text-success" />
          <div className="flex-1">
            <div className="text-sm text-muted-foreground">
              {language === "es" && "Correctas"}
              {language === "en" && "Correct"}
              {language === "ru" && "Правильные"}
            </div>
            <div className="text-xl font-bold">{correct}</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <XCircle className="h-5 w-5 text-destructive" />
          <div className="flex-1">
            <div className="text-sm text-muted-foreground">
              {language === "es" && "Incorrectas"}
              {language === "en" && "Incorrect"}
              {language === "ru" && "Неправильные"}
            </div>
            <div className="text-xl font-bold">{incorrect}</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Circle className="h-5 w-5 text-muted-foreground" />
          <div className="flex-1">
            <div className="text-sm text-muted-foreground">
              {language === "es" && "Sin responder"}
              {language === "en" && "Unanswered"}
              {language === "ru" && "Без ответа"}
            </div>
            <div className="text-xl font-bold">{unanswered}</div>
          </div>
        </div>
      </div>
    </Card>
  );
};
