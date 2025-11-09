import { useMemo, useState } from "react";

const LOCAL_PART_CHAR_CODES = [97, 114, 103, 45, 100, 114, 105, 118, 101, 114];
const DOMAIN_PART_CHAR_CODES = [101, 118, 103, 120, 120, 46, 99, 111, 109];

type Language = "es" | "en" | "ru";

const copy: Record<Language, string> = {
  es: "¿Comentarios? Escribinos a",
  en: "Feedback? Email",
  ru: "Есть предложения? Напишите на",
};

const revealCopy: Record<Language, string> = {
  es: "Mostrar email",
  en: "Show email",
  ru: "Показать email",
};

export const FeedbackFooter = ({ language = "es" }: { language?: Language }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const feedbackEmail = useMemo(
    () =>
      `${String.fromCharCode(...LOCAL_PART_CHAR_CODES)}@${String.fromCharCode(
        ...DOMAIN_PART_CHAR_CODES,
      )}`,
    [],
  );

  return (
    <footer className="border-t bg-muted/40 text-sm">
      <div className="container mx-auto px-6 py-6 text-center text-muted-foreground">
        {copy[language]}{" "}
        {isRevealed ? (
          <a
            href={`mailto:${feedbackEmail}`}
            className="text-primary font-semibold hover:underline break-all"
          >
            {feedbackEmail}
          </a>
        ) : (
          <button
            type="button"
            className="text-primary font-semibold hover:underline"
            onClick={() => setIsRevealed(true)}
          >
            {revealCopy[language]}
          </button>
        )}
      </div>
    </footer>
  );
};
