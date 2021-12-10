import { Request, Response, NextFunction } from 'express';
import { getManager } from 'typeorm';
import { CommentRepository } from '../services/comment';
import { CommentEntity } from '../entities/Comment';
import { IComment } from '../interfaces';
import { HttpErr } from '../exceptions/HttpError';
import ExceptionMessages from "../exceptions/messages";
import ExceptionMsg from "../exceptions/msg";

import StatusCode from '../exceptions/statusCodes';

const manager = () => getManager().getCustomRepository(CommentRepository);

export class CommentController {
  static async createComment(req: Request, res: Response, next: NextFunction) {
    try {
      const { content, service_id } = req.body;
      const comment = new CommentEntity();
      if (!content || content.trim() === '') {

        return next(HttpErr.badRequest(ExceptionMsg.NOT_DEFINED));

        

      }
      comment.content = content;
      comment.service_id = service_id;

      const commentData = await manager().createComment(comment);
      res.status(StatusCode.CreateRequest).json(commentData);
    } catch {
      next(HttpErr.internalServerError(ExceptionMessages.INVALID.INPUT));
    }
  }

  static async getAllComments(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await manager().getAllComments();
      res.status(StatusCode.SuccessRequest).json(data);
    } catch {
      next(HttpErr.internalServerError(ExceptionMessages.INVALID.INPUT));
    }
  }

  static async getComment(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      if (
        !id.match(
          '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$'
        )
      ) {
        return next(HttpErr.badRequest(ExceptionMessages.INVALID.ID));
      }
      const oneData = await manager().getComment(id);
      if (!oneData) {
        return next(HttpErr.notFound(ExceptionMessages.NOT_FOUND.COMMENT));
      }
      res.status(StatusCode.SuccessRequest).json(oneData);
    } catch {
      next(HttpErr.internalServerError(ExceptionMessages.INVALID.INPUT));
    }
  }

  static async updateComment(req: Request, res: Response, next: NextFunction) {
    try {
      const { content } = req.body;
      const { id } = req.params;
      if (
        !id.match(
          '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$'
        )
      ) {
        return next(HttpErr.badRequest(ExceptionMessages.INVALID.ID));
      }

      const updatedData: IComment = {};

      if (content && content.trim()) {
        updatedData.content = content;
      }

      const updateData = await manager().updateComment(id, updatedData);
      res.status(StatusCode.SuccessRequest).json(updateData);
    } catch {
      next(HttpErr.internalServerError(ExceptionMessages.INVALID.INPUT));
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
        return next(HttpErr.badRequest(ExceptionMessages.INVALID.ID));
      }
      const data = await manager().deleteComment(id);
      if (!data) {
        return next(HttpErr.notFound(ExceptionMessages.NOT_FOUND.COMMENT));
      }

      res.status(200).json({
        message: 'Comment successfully deleted.',
      });
    } catch (e) {
      next(HttpErr.internalServerError(ExceptionMessages.INVALID.INPUT));
    }
  }
}
