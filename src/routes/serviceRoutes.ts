import { Router } from 'express';
import { ServiceController } from '../controllers/serviceController';
import {
  createServiceDto,
  ratingUpdateDto,
  updateServiceDto,
} from '../dtos/service.dtos';
import { validateRequestSchema } from '../middleware/validate-request-schema';

const router = Router();

router
  .route('/')
  .get(ServiceController.getAllServices)
  .post(
    createServiceDto,
    validateRequestSchema,
    ServiceController.createService
  );
router
  .route('/:id')
  .get(ServiceController.getService)
  .patch(
    updateServiceDto,
    validateRequestSchema,
    ServiceController.updateService
  )
  .put(ratingUpdateDto, validateRequestSchema, ServiceController.updateRating)
  .delete(ServiceController.deleteService);

export { router as serviceRoutes };
