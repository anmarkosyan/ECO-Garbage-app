import { Router } from 'express';
import { QuestionController } from '../controllers/questionController';

const router = Router();

router
  .route('/')
  .get(QuestionController.getAllQuestions)
  .post(QuestionController.createQuestion);
router
  .route('/:id')
  .get(QuestionController.getQuestion)
  .patch(QuestionController.updateQuestion)
  .delete(QuestionController.deleteQuestion);

export { router as questionRoutes };
