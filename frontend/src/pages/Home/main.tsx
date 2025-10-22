/**
 * @page HomePage
 * @summary Home page with welcome message and navigation
 * @domain core
 * @type page-component
 * @category public
 */

export const HomePage = () => {
  return (
    <div className="flex min-h-[calc(100vh-12rem)] items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">Sistema de Cadastro de Bancos</h1>
        <p className="mb-8 text-lg text-gray-600">
          Gerencie os dados básicos dos bancos do sistema financeiro brasileiro
        </p>
        <div className="flex justify-center gap-4">
          <button className="rounded-md bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition-colors">
            Começar
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
