/**
 * @summary
 * Bank business rules tests
 *
 * @module services/bank
 *
 * @description
 * Unit tests for bank business logic
 */

import { bankCreate } from './bankRules';
import { BankCreateParams } from './bankTypes';

describe('bankCreate', () => {
  it('should create bank with valid parameters', async () => {
    const params: BankCreateParams = {
      idAccount: 1,
      idUser: 1,
      code: '1',
      name: 'Banco do Brasil',
    };

    const result = await bankCreate(params);

    expect(result).toHaveProperty('id');
    expect(result.code).toBe('001');
    expect(result.name).toBe(params.name);
    expect(result.idAccount).toBe(params.idAccount);
    expect(result.deleted).toBe(false);
  });

  it('should normalize bank code to 3 digits', async () => {
    const params: BankCreateParams = {
      idAccount: 1,
      idUser: 1,
      code: '1',
      name: 'Banco Teste',
    };

    const result = await bankCreate(params);

    expect(result.code).toBe('001');
  });

  it('should throw error for duplicate bank code', async () => {
    const params: BankCreateParams = {
      idAccount: 1,
      idUser: 1,
      code: '237',
      name: 'Bradesco',
    };

    await bankCreate(params);

    await expect(bankCreate(params)).rejects.toThrow('bankCodeAlreadyExists');
  });

  it('should set creation and modification timestamps', async () => {
    const params: BankCreateParams = {
      idAccount: 1,
      idUser: 1,
      code: '341',
      name: 'Itaú',
    };

    const result = await bankCreate(params);

    expect(result.dateCreated).toBeInstanceOf(Date);
    expect(result.dateModified).toBeInstanceOf(Date);
    expect(result.dateCreated.getTime()).toBe(result.dateModified.getTime());
  });

  it('should handle multiple banks with different codes', async () => {
    const params1: BankCreateParams = {
      idAccount: 1,
      idUser: 1,
      code: '104',
      name: 'Caixa Econômica Federal',
    };

    const params2: BankCreateParams = {
      idAccount: 1,
      idUser: 1,
      code: '033',
      name: 'Santander',
    };

    const result1 = await bankCreate(params1);
    const result2 = await bankCreate(params2);

    expect(result1.id).not.toBe(result2.id);
    expect(result1.code).toBe('104');
    expect(result2.code).toBe('033');
  });
});
