/**
 * @page NotFoundPage
 * @summary 404 error page
 * @domain core
 * @type page-component
 * @category error
 */

import { useNavigate } from 'react-router-dom';
import { Button } from '@/core/components/Button';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-[calc(100vh-12rem)] items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-gray-900">404</h1>
        <h2 className="mb-4 text-2xl font-semibold text-gray-700">Página não encontrada</h2>
        <p className="mb-8 text-gray-600">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Button onClick={() => navigate('/')} variant="primary">
          Voltar para o Início
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
