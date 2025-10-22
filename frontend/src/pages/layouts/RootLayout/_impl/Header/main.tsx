/**
 * @component Header
 * @summary Application header with navigation
 * @domain core
 * @type layout-component
 * @category navigation
 */

import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-xl font-bold text-gray-900">
            Cadastro de Bancos
          </Link>
          <nav className="flex gap-4">
            <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              Início
            </Link>
            <Link to="/banks/new" className="text-gray-600 hover:text-gray-900 transition-colors">
              Novo Banco
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
