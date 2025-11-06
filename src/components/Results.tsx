import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, RotateCcw } from "lucide-react";

interface ResultsProps {
  correctAnswers: number;
  totalQuestions: number;
  language: "es" | "en" | "ru";
  onRestart: () => void;
}

export const Results = ({
  correctAnswers,
  totalQuestions,
  language,
  onRestart,
}: ResultsProps) => {
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  const passed = percentage >= 80;

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card className="p-8 text-center">
        <div className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center ${
          passed ? "bg-success/10" : "bg-destructive/10"
        }`}>
          {passed ? (
            <CheckCircle2 className="h-12 w-12 text-success" />
          ) : (
            <XCircle className="h-12 w-12 text-destructive" />
          )}
        </div>

        <h2 className="text-3xl font-bold mb-2">
          {language === "es" && (passed ? "¡Aprobado!" : "No aprobado")}
          {language === "en" && (passed ? "Passed!" : "Not Passed")}
          {language === "ru" && (passed ? "Сдано!" : "Не сдано")}
        </h2>

        <div className="text-6xl font-bold text-primary mb-6">{percentage}%</div>

        <div className="text-lg mb-8">
          {language === "es" && `${correctAnswers} de ${totalQuestions} respuestas correctas`}
          {language === "en" && `${correctAnswers} of ${totalQuestions} correct answers`}
          {language === "ru" && `${correctAnswers} из ${totalQuestions} правильных ответов`}
        </div>

        <Button onClick={onRestart} size="lg" className="gap-2">
          <RotateCcw className="h-5 w-5" />
          {language === "es" && "Reintentar"}
          {language === "en" && "Try Again"}
          {language === "ru" && "Попробовать снова"}
        </Button>
      </Card>
    </div>
  );
};
