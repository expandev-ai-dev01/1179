/**
 * @summary
 * Bank type definitions
 *
 * @module services/bank
 *
 * @description
 * Type definitions for bank entities and operations
 */

/**
 * @interface BankEntity
 * @description Represents a bank entity in the system
 *
 * @property {number} id - Unique bank identifier
 * @property {number} idAccount - Associated account identifier
 * @property {string} code - Bank code (3 digits with leading zeros)
 * @property {string} name - Bank name
 * @property {Date} dateCreated - Creation timestamp
 * @property {Date} dateModified - Last modification timestamp
 * @property {boolean} deleted - Soft delete flag
 */
export interface BankEntity {
  id: number;
  idAccount: number;
  code: string;
  name: string;
  dateCreated: Date;
  dateModified: Date;
  deleted: boolean;
}

/**
 * @interface BankCreateParams
 * @description Parameters for creating a new bank
 *
 * @property {number} idAccount - Account identifier
 * @property {number} idUser - User identifier
 * @property {string} code - Bank code (1-3 digits)
 * @property {string} name - Bank name
 */
export interface BankCreateParams {
  idAccount: number;
  idUser: number;
  code: string;
  name: string;
}
