/**
 * @utility validators
 * @summary Common validation utilities
 * @domain core
 * @type utility
 * @category validation
 */

export const validators = {
  isValidBankCode: (code: string | number): boolean => {
    const codeStr = String(code);
    return /^\d{1,3}$/.test(codeStr) && parseInt(codeStr) > 0;
  },

  isNotEmpty: (value: string): boolean => {
    return value.trim().length > 0;
  },

  hasMinLength: (value: string, minLength: number): boolean => {
    return value.trim().length >= minLength;
  },

  hasMaxLength: (value: string, maxLength: number): boolean => {
    return value.trim().length <= maxLength;
  },
};
