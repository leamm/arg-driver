import { NavLink } from "@/components/NavLink";

export const Header = () => {
  return (
    <header className="bg-header text-header-foreground py-4 px-6 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <NavLink to="/">
            <img src="/logo.png" alt="Arg Driver" className="w-12 h-12" />
          </NavLink>
          <h1 className="text-xl font-bold">Test de Conducir - Categoría A</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <NavLink 
                to="/" 
                className="text-header-foreground hover:text-primary transition-colors"
                activeClassName="font-bold text-primary"
              >
                Test
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/favorites" 
                className="text-header-foreground hover:text-primary transition-colors"
                activeClassName="font-bold text-primary"
              >
                Interesantes
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/all" 
                className="text-header-foreground hover:text-primary transition-colors"
                activeClassName="font-bold text-primary"
              >
                Todas
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/statistics" 
                className="text-header-foreground hover:text-primary transition-colors"
                activeClassName="font-bold text-primary"
              >
                Estadísticas
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
