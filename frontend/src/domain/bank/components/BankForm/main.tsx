/**
 * @component BankForm
 * @summary Form component for bank creation and editing
 * @domain bank
 * @type domain-component
 * @category form
 *
 * @dependencies
 * - react-hook-form: Form state management
 * - zod: Schema validation
 * - @hookform/resolvers: Zod resolver for react-hook-form
 *
 * @props
 * @param {Function} props.onSubmit - Form submission handler
 * @param {Function} props.onCancel - Cancel handler
 * @param {boolean} props.isSubmitting - Submission loading state
 * @param {Object} props.initialData - Initial form data for editing
 *
 * @examples
 * ```tsx
 * <BankForm
 *   onSubmit={(data) => createBank(data)}
 *   onCancel={() => navigate('/banks')}
 *   isSubmitting={isCreating}
 * />
 * ```
 */

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/core/components/Input';
import { Button } from '@/core/components/Button';
import type { BankFormProps } from './types';
import type { BankFormData } from '../../types';

const bankFormSchema = z.object({
  code: z
    .string()
    .min(1, 'Código do banco é obrigatório')
    .max(3, 'Código deve ter no máximo 3 dígitos')
    .regex(/^\d{1,3}$/, 'Código deve conter apenas números'),
  name: z
    .string()
    .min(1, 'Nome do banco é obrigatório')
    .max(100, 'Nome deve ter no máximo 100 caracteres'),
});

export const BankForm = ({
  onSubmit,
  onCancel,
  isSubmitting = false,
  initialData,
}: BankFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BankFormData>({
    resolver: zodResolver(bankFormSchema),
    defaultValues: initialData,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Input
        label="Código do Banco"
        placeholder="Ex: 001"
        error={errors.code?.message}
        helperText="Código numérico de 1 a 3 dígitos"
        required
        fullWidth
        disabled={isSubmitting}
        {...register('code')}
      />

      <Input
        label="Nome do Banco"
        placeholder="Ex: Banco do Brasil"
        error={errors.name?.message}
        helperText="Nome completo da instituição financeira"
        required
        fullWidth
        disabled={isSubmitting}
        {...register('name')}
      />

      <div className="flex gap-3 justify-end">
        {onCancel && (
          <Button type="button" variant="secondary" onClick={onCancel} disabled={isSubmitting}>
            Cancelar
          </Button>
        )}
        <Button type="submit" variant="primary" disabled={isSubmitting}>
          {isSubmitting ? 'Salvando...' : 'Salvar Banco'}
        </Button>
      </div>
    </form>
  );
};
