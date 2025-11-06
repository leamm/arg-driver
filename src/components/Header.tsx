import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  language: "es" | "en" | "ru";
  onLanguageChange: (lang: "es" | "en" | "ru") => void;
}

const languageNames = {
  es: "Español",
  en: "English",
  ru: "Русский",
};

export const Header = ({ language, onLanguageChange }: HeaderProps) => {
  return (
    <header className="bg-header text-header-foreground py-4 px-6 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">A</span>
          </div>
          <h1 className="text-xl font-bold">Test de Conducir</h1>
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="gap-2">
              <Languages className="h-4 w-4" />
              {languageNames[language]}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => onLanguageChange("es")}>
              Español
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onLanguageChange("en")}>
              English
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onLanguageChange("ru")}>
              Русский
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
