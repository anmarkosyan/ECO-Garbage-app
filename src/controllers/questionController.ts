import { Request, Response, NextFunction } from "express";
import { getManager } from "typeorm";
import { QuestionRepository } from "../services/question";
import {HttpErr} from "../exceptions/HttpError";
import ExceptionMessages from "../exceptions/messages";
import StatusCode from "../exceptions/statusCodes";



export class QuestionController {
  static async createQuestion(req: Request, res: Response, next: NextFunction) {
    try{
      const newService = await req.body;
      if(!newService.description || newService.description.trim() === ''){
        return next(HttpErr.badRequest(ExceptionMessages.INVALID.INPUT))
      }
      console.log("aaaaaaaaaaaaaaaaaaaa");
      const commentData = await QuestionRepository.createQuestion(newService);
      console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbb")
      res.status(StatusCode.CreateRequest).json(commentData);
      console.log('ccccccccccccccccccccccccccccccc')
    }catch {
      next(HttpErr.internalServerError(ExceptionMessages.INVALID.INPUT))
    }
  }

  static async getAllQuestions(req: Request, res: Response, next: NextFunction) {
    try {
      const commentData = await QuestionRepository.getAllQuestions();
      res.status(StatusCode.SuccessRequest).json(commentData);
    }catch {
      next(HttpErr.internalServerError(ExceptionMessages.INVALID.INPUT))
    }
  }

  static async getQuestion(req: Request, res: Response, next: NextFunction) {
    try{
      const {id} = req.params;
      if(
          !id.match('^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$')
      ){
        return next(HttpErr.badRequest(ExceptionMessages.INVALID.ID));
      }
      const commentData = await QuestionRepository.getQuestion(id);
      res.status(StatusCode.SuccessRequest).json(commentData);
    }catch {
      next(HttpErr.internalServerError(ExceptionMessages.INVALID.INPUT));
    }
  }

  static async updateQuestion(req: Request, res: Response, next: NextFunction) {
    try{
      const {id} = req.params;
      if(!id.match('^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$')){
        return next(HttpErr.badRequest(ExceptionMessages.INVALID.ID));
      }
      const newQuestion = req.body;
      const commentData = await QuestionRepository.updateQuestion(id,newQuestion);
      res.status(StatusCode.SuccessRequest).json(commentData)
    }catch {
      next(HttpErr.internalServerError(ExceptionMessages.INVALID.INPUT))
    }
  }

  static async deleteQuestion(req: Request, res: Response, next: NextFunction) {
    try{
        const {id} = req.params;
        if(!id.match('^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$')){
          return next(HttpErr.badRequest(ExceptionMessages.INVALID.ID));
        }
        const commentData = await QuestionRepository.deleteQuestion(id);
        res.status(StatusCode.SuccessRequest).json(commentData);
    }catch {
      next(HttpErr.internalServerError(ExceptionMessages.INVALID.INPUT))
    }
  }
}
