/**
 * @types BankForm
 * @summary Type definitions for BankForm component
 * @domain bank
 * @category types
 */

import type { BankFormData } from '../../types';

export interface BankFormProps {
  onSubmit: (data: BankFormData) => void;
  onCancel?: () => void;
  isSubmitting?: boolean;
  initialData?: Partial<BankFormData>;
}
