import { Request, Response, NextFunction } from "express";
import { getManager } from "typeorm";
import { QuestionRepository } from "../services/question";


const manager = () => getManager().getCustomRepository(QuestionRepository);

export class QuestionController {
  static async createQuestion(req: Request, res: Response, next: NextFunction) {

  }

  static async getAllQuestions(
    req: Request,
    res: Response,
    next: NextFunction
  ) {}

  static async getQuestion(req: Request, res: Response, next: NextFunction) {}

  static async updateQuestion(req: Request, res: Response, next: NextFunction) {}

  static async deleteQuestion(req: Request, res: Response, next: NextFunction) {}
}
