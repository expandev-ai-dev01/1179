/**
 * @utility formatters
 * @summary Common formatting utilities
 * @domain core
 * @type utility
 * @category formatting
 */

export const formatters = {
  currency: (value: number): string => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  },

  date: (date: Date | string): string => {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return new Intl.DateTimeFormat('pt-BR').format(dateObj);
  },

  dateTime: (date: Date | string): string => {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return new Intl.DateTimeFormat('pt-BR', {
      dateStyle: 'short',
      timeStyle: 'short',
    }).format(dateObj);
  },

  bankCode: (code: string | number): string => {
    const codeStr = String(code).padStart(3, '0');
    return codeStr;
  },
};
