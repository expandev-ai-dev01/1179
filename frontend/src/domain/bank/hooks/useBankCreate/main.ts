/**
 * @hook useBankCreate
 * @summary Manages bank creation with mutation handling
 * @domain bank
 * @type domain-hook
 * @category data
 *
 * @dependencies
 * - @tanstack/react-query: For mutation management
 * - bankService: For API calls
 *
 * @parameters
 * @param {Object} options - Hook parameters
 * @param {Function} options.onSuccess - Success callback
 * @param {Function} options.onError - Error callback
 *
 * @returns {Object} Hook return object
 * @returns {Function} returns.create - Function to create bank
 * @returns {boolean} returns.isCreating - Loading state
 * @returns {Error|null} returns.error - Error state
 *
 * @examples
 * ```tsx
 * const { create, isCreating } = useBankCreate({
 *   onSuccess: (bank) => console.log('Created:', bank),
 *   onError: (error) => console.error('Error:', error)
 * });
 *
 * await create({ code: '001', name: 'Banco do Brasil' });
 * ```
 */

import { useMutation } from '@tanstack/react-query';
import { bankService } from '../../services/bankService';
import type { UseBankCreateOptions, UseBankCreateReturn } from './types';

export const useBankCreate = (options: UseBankCreateOptions = {}): UseBankCreateReturn => {
  const { onSuccess, onError } = options;

  const mutation = useMutation({
    mutationFn: bankService.create,
    onSuccess: (data) => {
      onSuccess?.(data);
    },
    onError: (error: Error) => {
      onError?.(error);
    },
  });

  return {
    create: mutation.mutateAsync,
    isCreating: mutation.isPending,
    error: mutation.error,
  };
};
