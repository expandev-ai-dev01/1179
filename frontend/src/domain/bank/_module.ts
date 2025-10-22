/**
 * @module bank
 * @summary Bank domain module for managing bank data
 * @domain functional
 * @dependencies List of key module dependencies
 * @version 1.0.0
 * @author Development Team
 * @lastModified 2024-01-15
 */

// Domain public exports - Components
export * from './components/BankForm';

// Domain public exports - Hooks
export * from './hooks/useBankCreate';

// Domain public exports - Services
export { bankService } from './services/bankService';

// Domain public exports - Types
export * from './types';

// Module metadata
export const moduleMetadata = {
  name: 'bank',
  domain: 'functional',
  version: '1.0.0',
  publicComponents: ['BankForm'],
  publicHooks: ['useBankCreate'],
  publicServices: ['bankService'],
  dependencies: {
    internal: ['@/core/components', '@/core/lib/api'],
    external: ['react', 'react-hook-form', 'zod', '@tanstack/react-query'],
    domains: [],
  },
  exports: {
    components: ['BankForm'],
    hooks: ['useBankCreate'],
    services: ['bankService'],
    types: ['Bank', 'CreateBankDto', 'BankFormData', 'BankApiResponse', 'BankApiError'],
  },
} as const;
