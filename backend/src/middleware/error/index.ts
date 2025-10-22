/**
 * @summary
 * Error handling middleware
 *
 * @module middleware/error
 *
 * @description
 * Centralized error handling for the application
 */

import { Request, Response, NextFunction } from 'express';

/**
 * @interface ErrorResponse
 * @description Standard error response format
 *
 * @property {boolean} success - Always false for errors
 * @property {object} error - Error details
 * @property {string} error.code - Error code
 * @property {string} error.message - Error message
 * @property {any} [error.details] - Additional error details
 * @property {string} timestamp - Error timestamp
 */
export interface ErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
    details?: any;
  };
  timestamp: string;
}

/**
 * @summary
 * Express error handling middleware
 *
 * @function errorMiddleware
 * @module middleware/error
 *
 * @param {any} err - Error object
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {NextFunction} next - Express next function
 *
 * @returns {void}
 */
export async function errorMiddleware(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const statusCode = err.statusCode || 500;
  const errorResponse: ErrorResponse = {
    success: false,
    error: {
      code: err.code || 'INTERNAL_SERVER_ERROR',
      message: err.message || 'An unexpected error occurred',
      details: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    },
    timestamp: new Date().toISOString(),
  };

  console.error('Error:', {
    code: errorResponse.error.code,
    message: errorResponse.error.message,
    path: req.path,
    method: req.method,
    stack: err.stack,
  });

  res.status(statusCode).json(errorResponse);
}
