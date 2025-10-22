/**
 * @types UseBankCreate
 * @summary Type definitions for useBankCreate hook
 * @domain bank
 * @category types
 */

import type { Bank, CreateBankDto } from '../../types';

export interface UseBankCreateOptions {
  onSuccess?: (bank: Bank) => void;
  onError?: (error: Error) => void;
}

export interface UseBankCreateReturn {
  create: (data: CreateBankDto) => Promise<Bank>;
  isCreating: boolean;
  error: Error | null;
}
