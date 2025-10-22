/**
 * @page BankCreatePage
 * @summary Bank creation page with form and validation
 * @domain bank
 * @type form-page
 * @category management
 *
 * @routing
 * - Path: /banks/new
 * - Params: none
 * - Query: none
 * - Guards: Authentication required
 *
 * @layout
 * - Layout: RootLayout
 * - Sections: Header, Form
 * - Navigation: Back to list
 *
 * @data
 * - Sources: Bank API
 * - Loading: Form submission state
 * - Caching: None (creation only)
 *
 * @userFlows
 * - Primary: Fill form and submit to create bank
 * - Secondary: Cancel and return to list
 * - Error: Display validation or API errors
 */

import { useNavigate } from 'react-router-dom';
import { BankForm } from '@/domain/bank/components/BankForm';
import { useBankCreate } from '@/domain/bank/hooks/useBankCreate';
import type { BankFormData } from '@/domain/bank/types';
import type { BankCreatePageProps } from './types';

export const BankCreatePage = (props: BankCreatePageProps) => {
  const navigate = useNavigate();

  const { create, isCreating } = useBankCreate({
    onSuccess: (bank) => {
      alert(`Banco "${bank.name}" cadastrado com sucesso!`);
      navigate('/');
    },
    onError: (error) => {
      if (error.message.includes('409')) {
        alert('Código do banco já existe. Por favor, utilize outro código.');
      } else {
        alert('Erro ao cadastrar banco. Por favor, tente novamente.');
      }
    },
  });

  const handleSubmit = async (data: BankFormData) => {
    try {
      await create(data);
    } catch (error) {
      console.error('Error creating bank:', error);
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Cadastrar Novo Banco</h1>
        <p className="mt-2 text-gray-600">
          Preencha os dados abaixo para cadastrar um novo banco no sistema
        </p>
      </div>

      <div className="rounded-lg bg-white p-6 shadow-md">
        <BankForm onSubmit={handleSubmit} onCancel={handleCancel} isSubmitting={isCreating} />
      </div>
    </div>
  );
};

export default BankCreatePage;
