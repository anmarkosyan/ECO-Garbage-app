import { Router } from 'express';
import { ServiceController } from '../controllers/serviceController';

const router = Router();

router
  .route('/')
  .get(ServiceController.getAllServices)
  .post(ServiceController.createService);
router
  .route('/:id')
  .get(ServiceController.getService)
  .patch(ServiceController.updateService)
  .delete(ServiceController.deleteService);

export { router as serviceRoutes };
