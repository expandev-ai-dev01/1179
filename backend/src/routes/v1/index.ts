/**
 * @summary
 * V1 API router configuration
 *
 * @module routes/v1
 *
 * @description
 * Configures V1 API routes for external and internal endpoints
 */

import { Router } from 'express';
import externalRoutes from './externalRoutes';
import internalRoutes from './internalRoutes';

const router = Router();

// External (public) routes - /api/v1/external/...
router.use('/external', externalRoutes);

// Internal (authenticated) routes - /api/v1/internal/...
router.use('/internal', internalRoutes);

export default router;
