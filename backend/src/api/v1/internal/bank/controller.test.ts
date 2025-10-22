/**
 * @summary
 * Bank controller tests
 *
 * @module api/v1/internal/bank
 *
 * @description
 * Tests for bank API endpoints
 */

import { Request, Response, NextFunction } from 'express';
import { postHandler } from './controller';
import * as bankService from '@/services/bank';

jest.mock('@/services/bank');

describe('Bank Controller - postHandler', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: NextFunction;

  beforeEach(() => {
    mockRequest = {
      body: {},
      params: {},
      query: {},
    };
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
    mockNext = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create bank with valid parameters', async () => {
    mockRequest.body = {
      code: '001',
      name: 'Banco do Brasil',
    };

    const mockBank = {
      id: 1,
      idAccount: 1,
      code: '001',
      name: 'Banco do Brasil',
      dateCreated: new Date(),
      dateModified: new Date(),
      deleted: false,
    };

    (bankService.bankCreate as jest.Mock).mockResolvedValue(mockBank);

    await postHandler(mockRequest as Request, mockResponse as Response, mockNext);

    expect(mockResponse.status).toHaveBeenCalledWith(201);
    expect(mockResponse.json).toHaveBeenCalledWith(
      expect.objectContaining({
        success: true,
        data: mockBank,
      })
    );
  });

  it('should return 409 for duplicate bank code', async () => {
    mockRequest.body = {
      code: '001',
      name: 'Banco do Brasil',
    };

    (bankService.bankCreate as jest.Mock).mockRejectedValue(new Error('bankCodeAlreadyExists'));

    await postHandler(mockRequest as Request, mockResponse as Response, mockNext);

    expect(mockResponse.status).toHaveBeenCalledWith(409);
    expect(mockResponse.json).toHaveBeenCalledWith(
      expect.objectContaining({
        success: false,
        error: expect.objectContaining({
          code: 'DUPLICATE_CODE',
        }),
      })
    );
  });

  it('should validate required fields', async () => {
    mockRequest.body = {
      code: '',
      name: '',
    };

    await postHandler(mockRequest as Request, mockResponse as Response, mockNext);

    expect(mockNext).toHaveBeenCalled();
  });

  it('should validate bank code format', async () => {
    mockRequest.body = {
      code: 'ABC',
      name: 'Banco Teste',
    };

    await postHandler(mockRequest as Request, mockResponse as Response, mockNext);

    expect(mockNext).toHaveBeenCalled();
  });

  it('should validate bank code length', async () => {
    mockRequest.body = {
      code: '1234',
      name: 'Banco Teste',
    };

    await postHandler(mockRequest as Request, mockResponse as Response, mockNext);

    expect(mockNext).toHaveBeenCalled();
  });
});
