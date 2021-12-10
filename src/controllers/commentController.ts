import { Request, Response, NextFunction } from 'express';
import { getManager } from 'typeorm';
import { CommentRepository } from '../services/comment';
import { CommentEntity } from '../entities/Comment';
import { IComment, newComment } from '../interfaces';

const manager = () => getManager().getCustomRepository(CommentRepository);

export class CommentController {
  static async createComment(req: Request, res: Response, next: NextFunction) {
    try {
      const { content, service_id } = req.body;
      const comment = new CommentEntity();
      if (!content || content.trim() === '') {
        return new Error('errorrrrrr');
        //return next(HttpErr.badRequest(ExceptionMessages.INVALID.TITLE));
      }
      comment.content = content;
      comment.service_id = service_id;
      const commentData = await manager().createComment(comment);
      res.status(200).json(commentData);
    } catch {
      throw new Error('errorrrrr!!!!!!!!!!!!!!!!');
      // next(HttpErr.internalServerError(ExceptionMessages.INVALID.INPUT));
    }
  }

  static async getAllComments(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await manager().getAllComments();
      res.status(200).json(data);
    } catch {
      throw new Error('errorrrrrrr!!!!!!!!!!');
      //next(HttpErr.internalServerError(ExceptionMessages.INVALID.INPUT));
    }
  }

  static async getComment(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const oneData = await manager().getComment(id);
      if (!oneData) {
        return new Error('errorrrrr');
        //return next(HttpErr.notFound(ExceptionMessages.NOT_FOUND.COMMENT));
      }
      res.status(200).json(oneData);
    } catch {
      throw new Error('errorrrr');
      //next(HttpErr.internalServerError(ExceptionMessages.INVALID.INPUT));
    }
  }

  static async updateComment(req: Request, res: Response, next: NextFunction) {
    try {
      const { text } = req.body;
      const { id } = req.params;

      const updatedData: IComment = {};

      if (text && text.trim()) {
        updatedData.content = text;
      }

      const updateData = await manager().updateComment(id, updatedData);
      res.status(200).json(updateData);
    } catch {
      throw new Error('errorrrrr');
      //next(HttpErr.internalServerError(ExceptionMessages.INVALID.INPUT));
    }
  }

  static async deleteComment(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      if (
        !id.match(
          '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$'
        )
      ) {
        return new Error('errorrrr');
        //return next(HttpErr.badRequest(ExceptionMessages.INVALID.ID));
      }
      const data = await manager().deleteComment(id);
      if (!data) {
        return new Error('errooooor');
        //return next(HttpErr.notFound(ExceptionMessages.NOT_FOUND.BOARD));
      }

      res.status(200).json({
        message: 'Comment successfully deleted.',
      });
    } catch (e) {
      throw new Error('errorrrr');
      //next(HttpErr.internalServerError(ExceptionMessages.INVALID.INPUT));
    }
  }
}
