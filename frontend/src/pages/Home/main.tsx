/**
 * @page HomePage
 * @summary Home page with welcome message and navigation
 * @domain core
 * @type page-component
 * @category public
 */

import { useNavigate } from 'react-router-dom';
import { Button } from '@/core/components/Button';

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-[calc(100vh-12rem)] items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">Sistema de Cadastro de Bancos</h1>
        <p className="mb-8 text-lg text-gray-600">
          Gerencie os dados básicos dos bancos do sistema financeiro brasileiro
        </p>
        <div className="flex justify-center gap-4">
          <Button onClick={() => navigate('/banks/new')} variant="primary">
            Cadastrar Novo Banco
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
