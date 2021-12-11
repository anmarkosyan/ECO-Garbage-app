import { Request, Response, NextFunction } from 'express';
import { QuestionRepository } from '../services/question';
import { HttpErr } from '../exceptions/HttpError';
import ExceptionMessages from '../exceptions/messages';
import StatusCode from '../exceptions/statusCodes';

export class QuestionController {
  static async createQuestion(req: Request, res: Response, next: NextFunction) {
    try {
      const newService = await req.body;
      const commentData = await QuestionRepository.createQuestion(newService);
      if (!commentData) {
        return next(HttpErr.notFound(ExceptionMessages.DB_ERROR));
      }
      res.status(StatusCode.CreateRequest).json(commentData);
    } catch {
      next(HttpErr.internalServerError(ExceptionMessages.INTERNAL));
    }
  }

  static async getAllQuestions(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const commentData = await QuestionRepository.getAllQuestions();
      res.status(StatusCode.SuccessRequest).json(commentData);
    } catch {
      next(HttpErr.internalServerError(ExceptionMessages.INTERNAL));
    }
  }

  static async getQuestion(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const questionData = await QuestionRepository.getQuestion(id);
      if (!questionData) {
        return next(HttpErr.notFound(ExceptionMessages.NOT_FOUND.QUESTION));
      }
      res.status(StatusCode.SuccessRequest).json(questionData);
    } catch {
      next(HttpErr.internalServerError(ExceptionMessages.INTERNAL));
    }
  }

  static async updateQuestion(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const newQuestion = req.body;
      const questionData = await QuestionRepository.updateQuestion(
        id,
        newQuestion
      );
      if (!questionData) {
        return next(HttpErr.notFound(ExceptionMessages.NOT_FOUND.QUESTION));
      }

      res.status(StatusCode.SuccessRequest).json(questionData);
    } catch {
      next(HttpErr.internalServerError(ExceptionMessages.INTERNAL));
    }
  }

  static async deleteQuestion(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const questionData = await QuestionRepository.deleteQuestion(id);

      if(!questionData){
        return next(HttpErr.notFound(ExceptionMessages.NOT_FOUND.QUESTION));
      }
      res.status(StatusCode.SuccessRequest).json({
        message: 'Question successfully deleted.'
      });
    } catch {
      next(HttpErr.internalServerError(ExceptionMessages.INVALID.QUESTION));
    }
  }
}
