/**
 * @api {post} /internal/bank Create Bank
 * @apiName CreateBank
 * @apiGroup Bank
 * @apiVersion 1.0.0
 *
 * @apiDescription Creates a new bank with the specified code and name
 *
 * @apiParam {String} code Bank code (1-3 digits)
 * @apiParam {String} name Bank name (max 100 characters)
 *
 * @apiSuccess {Number} id Bank identifier
 * @apiSuccess {String} code Bank code
 * @apiSuccess {String} name Bank name
 * @apiSuccess {Date} dateCreated Creation timestamp
 *
 * @apiError {String} ValidationError Invalid parameters provided
 * @apiError {String} DuplicateError Bank code already exists
 * @apiError {String} ServerError Internal server error
 */

import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import {
  CrudController,
  errorResponse,
  StatusGeneralError,
  successResponse,
} from '@/middleware/crud';
import { bankCreate } from '@/services/bank';

const securable = 'BANK';

const bodySchema = z.object({
  code: z
    .string()
    .min(1, 'Bank code is required')
    .max(3, 'Bank code must be at most 3 digits')
    .regex(/^\d{1,3}$/, 'Bank code must contain only digits'),
  name: z
    .string()
    .min(1, 'Bank name is required')
    .max(100, 'Bank name must be at most 100 characters'),
});

/**
 * @summary
 * Creates a new bank in the system
 *
 * @function postHandler
 * @module api/v1/internal/bank
 *
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {NextFunction} next - Express next function
 *
 * @returns {Promise<void>}
 *
 * @throws {ValidationError} When parameters fail validation
 * @throws {DuplicateError} When bank code already exists
 * @throws {ServerError} When unexpected error occurs
 */
export async function postHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  const operation = new CrudController([{ securable, permission: 'CREATE' }]);

  const [validated, error] = await operation.create(req, bodySchema);

  if (!validated) {
    return next(error);
  }

  try {
    const data = await bankCreate({
      ...validated.credential,
      ...validated.params,
    });

    res.status(201).json(successResponse(data));
  } catch (error: any) {
    if (error.message === 'bankCodeAlreadyExists') {
      res.status(409).json(errorResponse('Bank code already exists', 'DUPLICATE_CODE'));
    } else {
      next(StatusGeneralError);
    }
  }
}
