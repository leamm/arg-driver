import { Button } from "@/components/ui/button";

interface LanguageSelectorProps {
  language: "es" | "en" | "ru";
  onLanguageChange: (lang: "es" | "en" | "ru") => void;
}

export const LanguageSelector = ({ language, onLanguageChange }: LanguageSelectorProps) => {
  return (
    <div className="flex gap-2 justify-center">
      <Button
        variant={language === "es" ? "default" : "outline"}
        size="sm"
        onClick={() => onLanguageChange("es")}
        className="gap-2"
        aria-label="Español"
      >
        <img src="/flags/ar.png" alt="Español" className="w-5 h-5" />
        <span className="hidden sm:inline">Español</span>
      </Button>
      <Button
        variant={language === "en" ? "default" : "outline"}
        size="sm"
        onClick={() => onLanguageChange("en")}
        className="gap-2"
        aria-label="English"
      >
        <img src="/flags/us.png" alt="English" className="w-5 h-5" />
        <span className="hidden sm:inline">English</span>
      </Button>
      <Button
        variant={language === "ru" ? "default" : "outline"}
        size="sm"
        onClick={() => onLanguageChange("ru")}
        className="gap-2"
        aria-label="Русский"
      >
        <img src="/flags/ru.png" alt="Русский" className="w-5 h-5" />
        <span className="hidden sm:inline">Русский</span>
      </Button>
    </div>
  );
};
