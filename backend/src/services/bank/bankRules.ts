/**
 * @summary
 * Bank business logic and operations
 *
 * @module services/bank
 *
 * @description
 * Contains all business rules and operations for bank management
 */

import { BankEntity, BankCreateParams } from './bankTypes';

/**
 * In-memory storage for banks
 * @rule {be-database-requirement} Using in-memory storage as per current development phase
 */
const banks: BankEntity[] = [];
let nextId = 1;

/**
 * @summary
 * Creates a new bank in the system
 *
 * @function bankCreate
 * @module services/bank
 *
 * @param {BankCreateParams} params - Bank creation parameters
 * @param {number} params.idAccount - Account identifier
 * @param {number} params.idUser - User identifier
 * @param {string} params.code - Bank code (1-3 digits)
 * @param {string} params.name - Bank name
 *
 * @returns {Promise<BankEntity>} Created bank entity
 *
 * @throws {Error} When bank code already exists
 *
 * @example
 * const bank = await bankCreate({
 *   idAccount: 1,
 *   idUser: 1,
 *   code: '001',
 *   name: 'Banco do Brasil'
 * });
 */
export async function bankCreate(params: BankCreateParams): Promise<BankEntity> {
  /**
   * @validation Check if bank code already exists
   * @throws {Error}
   */
  const existingBank = banks.find((b) => b.code === params.code && !b.deleted);
  if (existingBank) {
    throw new Error('bankCodeAlreadyExists');
  }

  /**
   * @rule {be-business-rule-001} Normalize bank code to 3 digits with leading zeros
   */
  const normalizedCode = params.code.padStart(3, '0');

  const now = new Date();
  const newBank: BankEntity = {
    id: nextId++,
    idAccount: params.idAccount,
    code: normalizedCode,
    name: params.name,
    dateCreated: now,
    dateModified: now,
    deleted: false,
  };

  banks.push(newBank);

  return newBank;
}
