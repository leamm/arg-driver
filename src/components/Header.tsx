import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Home, Star, ListChecks, BarChart2 } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-header text-header-foreground py-3 px-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between gap-3">
        {/* Left: logo + title (title truncates when space is limited) */}
        <div className="flex items-center gap-3 min-w-0">
          <NavLink to="/" className="shrink-0">
            <img src="/logo.png" alt="Arg Driver" className="w-10 h-10 sm:w-12 sm:h-12" />
          </NavLink>
          <h1 className="text-lg sm:text-xl font-bold truncate flex-1">
            Test de Conducir - Categoría A
          </h1>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6">
            <li>
              <NavLink
                to="/"
                className="inline-flex items-center gap-2 text-header-foreground hover:text-primary transition-colors"
                activeClassName="font-bold text-primary"
              >
                <Home className="w-4 h-4" />
                <span>Test</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/favorites"
                className="inline-flex items-center gap-2 text-header-foreground hover:text-primary transition-colors"
                activeClassName="font-bold text-primary"
              >
                <Star className="w-4 h-4" />
                <span>Interesantes</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all"
                className="inline-flex items-center gap-2 text-header-foreground hover:text-primary transition-colors"
                activeClassName="font-bold text-primary"
              >
                <ListChecks className="w-4 h-4" />
                <span>Todas</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statistics"
                className="inline-flex items-center gap-2 text-header-foreground hover:text-primary transition-colors"
                activeClassName="font-bold text-primary"
              >
                <BarChart2 className="w-4 h-4" />
                <span>Estadísticas</span>
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Abrir menú">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <nav className="mt-8">
                <ul className="flex flex-col gap-4">
                  <li>
                    <NavLink
                      to="/"
                      className="flex items-center gap-3 text-lg"
                      activeClassName="text-primary font-semibold"
                    >
                      <Home className="w-5 h-5" />
                      <span>Test</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/favorites"
                      className="flex items-center gap-3 text-lg"
                      activeClassName="text-primary font-semibold"
                    >
                      <Star className="w-5 h-5" />
                      <span>Interesantes</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/all"
                      className="flex items-center gap-3 text-lg"
                      activeClassName="text-primary font-semibold"
                    >
                      <ListChecks className="w-5 h-5" />
                      <span>Todas</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/statistics"
                      className="flex items-center gap-3 text-lg"
                      activeClassName="text-primary font-semibold"
                    >
                      <BarChart2 className="w-5 h-5" />
                      <span>Estadísticas</span>
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
