/**
 * @summary
 * Zod validation utilities
 *
 * @module utils/zodValidation
 *
 * @description
 * Provides reusable Zod validation schemas
 */

import { z } from 'zod';

/**
 * @constant zString
 * @description Required string validation
 */
export const zString = z.string().min(1, 'Field is required');

/**
 * @constant zNullableString
 * @description Optional string validation
 */
export const zNullableString = z.string().nullable().optional();

/**
 * @constant zName
 * @description Name field validation (1-100 characters)
 */
export const zName = z
  .string()
  .min(1, 'Name is required')
  .max(100, 'Name must be at most 100 characters');

/**
 * @constant zDescription
 * @description Description field validation (1-500 characters)
 */
export const zDescription = z
  .string()
  .min(1, 'Description is required')
  .max(500, 'Description must be at most 500 characters');

/**
 * @constant zNullableDescription
 * @description Optional description field validation
 */
export const zNullableDescription = z
  .string()
  .max(500, 'Description must be at most 500 characters')
  .nullable()
  .optional();

/**
 * @constant zFK
 * @description Foreign key validation (positive integer)
 */
export const zFK = z.coerce.number().int().positive('ID must be a positive integer');

/**
 * @constant zNullableFK
 * @description Optional foreign key validation
 */
export const zNullableFK = z.coerce.number().int().positive().nullable().optional();

/**
 * @constant zBit
 * @description Boolean bit field validation
 */
export const zBit = z.coerce
  .number()
  .int()
  .min(0)
  .max(1)
  .transform((val) => val === 1);

/**
 * @constant zDateString
 * @description Date string validation
 */
export const zDateString = z.string().refine((val) => !isNaN(Date.parse(val)), {
  message: 'Invalid date format',
});
