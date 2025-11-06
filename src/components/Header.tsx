export const Header = () => {
  return (
    <header className="bg-header text-header-foreground py-4 px-6 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Arg Driver" className="w-12 h-12" />
          <h1 className="text-xl font-bold">Test de Conducir - Categoría A</h1>
        </div>
      </div>
    </header>
  );
};
