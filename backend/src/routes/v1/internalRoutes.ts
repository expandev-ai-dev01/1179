/**
 * @summary
 * Internal (authenticated) API routes configuration
 *
 * @module routes/v1/internalRoutes
 *
 * @description
 * Configures authenticated API endpoints
 */

import { Router } from 'express';
import * as bankController from '@/api/v1/internal/bank/controller';

const router = Router();

// Bank routes
router.post('/bank', bankController.postHandler);

export default router;
