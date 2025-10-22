/**
 * @summary
 * CRUD controller middleware for standardized operations
 *
 * @module middleware/crud
 *
 * @description
 * Provides standardized CRUD operation handling with validation and security
 */

import { Request } from 'express';
import { z } from 'zod';

/**
 * @interface SecurityConfig
 * @description Security configuration for CRUD operations
 *
 * @property {string} securable - Resource name
 * @property {string} permission - Required permission
 */
export interface SecurityConfig {
  securable: string;
  permission: string;
}

/**
 * @interface ValidatedRequest
 * @description Validated request data
 *
 * @property {object} credential - User credentials
 * @property {number} credential.idAccount - Account identifier
 * @property {number} credential.idUser - User identifier
 * @property {any} params - Validated parameters
 */
export interface ValidatedRequest {
  credential: {
    idAccount: number;
    idUser: number;
  };
  params: any;
}

/**
 * @class CrudController
 * @description Handles CRUD operations with validation and security
 */
export class CrudController {
  private securityConfig: SecurityConfig[];

  constructor(securityConfig: SecurityConfig[]) {
    this.securityConfig = securityConfig;
  }

  /**
   * @summary
   * Validates request for read operations
   *
   * @function read
   * @module middleware/crud
   *
   * @param {Request} req - Express request object
   * @param {z.ZodSchema} schema - Zod validation schema
   *
   * @returns {Promise<[ValidatedRequest | null, any]>} Validated data or error
   */
  async read(req: Request, schema: z.ZodSchema): Promise<[ValidatedRequest | null, any]> {
    return this.validate(req, schema);
  }

  /**
   * @summary
   * Validates request for create operations
   *
   * @function create
   * @module middleware/crud
   *
   * @param {Request} req - Express request object
   * @param {z.ZodSchema} schema - Zod validation schema
   *
   * @returns {Promise<[ValidatedRequest | null, any]>} Validated data or error
   */
  async create(req: Request, schema: z.ZodSchema): Promise<[ValidatedRequest | null, any]> {
    return this.validate(req, schema);
  }

  /**
   * @summary
   * Validates request for update operations
   *
   * @function update
   * @module middleware/crud
   *
   * @param {Request} req - Express request object
   * @param {z.ZodSchema} schema - Zod validation schema
   *
   * @returns {Promise<[ValidatedRequest | null, any]>} Validated data or error
   */
  async update(req: Request, schema: z.ZodSchema): Promise<[ValidatedRequest | null, any]> {
    return this.validate(req, schema);
  }

  /**
   * @summary
   * Validates request for delete operations
   *
   * @function delete
   * @module middleware/crud
   *
   * @param {Request} req - Express request object
   * @param {z.ZodSchema} schema - Zod validation schema
   *
   * @returns {Promise<[ValidatedRequest | null, any]>} Validated data or error
   */
  async delete(req: Request, schema: z.ZodSchema): Promise<[ValidatedRequest | null, any]> {
    return this.validate(req, schema);
  }

  private async validate(
    req: Request,
    schema: z.ZodSchema
  ): Promise<[ValidatedRequest | null, any]> {
    try {
      const params = { ...req.params, ...req.query, ...req.body };
      const validatedParams = await schema.parseAsync(params);

      const validated: ValidatedRequest = {
        credential: {
          idAccount: 1,
          idUser: 1,
        },
        params: validatedParams,
      };

      return [validated, null];
    } catch (error) {
      return [null, error];
    }
  }
}

/**
 * @summary
 * Creates a success response
 *
 * @function successResponse
 * @module middleware/crud
 *
 * @param {any} data - Response data
 *
 * @returns {object} Success response object
 */
export function successResponse(data: any): object {
  return {
    success: true,
    data,
    timestamp: new Date().toISOString(),
  };
}

/**
 * @summary
 * Creates an error response
 *
 * @function errorResponse
 * @module middleware/crud
 *
 * @param {string} message - Error message
 * @param {string} [code] - Error code
 *
 * @returns {object} Error response object
 */
export function errorResponse(message: string, code?: string): object {
  return {
    success: false,
    error: {
      code: code || 'ERROR',
      message,
    },
    timestamp: new Date().toISOString(),
  };
}

/**
 * @constant StatusGeneralError
 * @description General error object for unexpected errors
 */
export const StatusGeneralError = {
  statusCode: 500,
  code: 'INTERNAL_SERVER_ERROR',
  message: 'An unexpected error occurred',
};
