import { Router } from 'express';
import { CommentController } from '../controllers/commentController';
import { validateRequestSchema } from '../middleware/validate-request-schema';
import { createCommentDto, updateComment } from '../dtos/comment.dtos';

const router = Router();

router
  .route('/')
  .get(CommentController.getAllComments)
  .post(
    createCommentDto,
    validateRequestSchema,
    CommentController.createComment
  );
router
  .route('/:id')
  .get(CommentController.getComment)
  .patch(updateComment, validateRequestSchema, CommentController.updateComment)
  .delete(CommentController.deleteComment);

export { router as commentRoutes };
