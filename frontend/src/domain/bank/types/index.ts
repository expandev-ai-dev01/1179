/**
 * @types Bank
 * @summary Bank domain type definitions
 * @domain bank
 * @category types
 */

export interface Bank {
  id: number;
  code: string;
  name: string;
  dateCreated: Date;
  dateModified: Date;
  deleted: boolean;
}

export interface CreateBankDto {
  code: string;
  name: string;
}

export interface BankFormData {
  code: string;
  name: string;
}

export interface BankApiResponse {
  success: boolean;
  data: Bank;
  message?: string;
}

export interface BankApiError {
  success: boolean;
  error: {
    code: string;
    message: string;
  };
}
