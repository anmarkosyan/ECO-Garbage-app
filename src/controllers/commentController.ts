import { Request, Response, NextFunction } from "express";
import { getManager } from "typeorm";
import { CommentRepository } from "../services/comment";


const manager = () => getManager().getCustomRepository(CommentRepository);

export class CommentController {
  static async createComment(req: Request, res: Response, next: NextFunction) {

  }

  static async getAllComments(
    req: Request,
    res: Response,
    next: NextFunction
  ) {}

  static async getComment(req: Request, res: Response, next: NextFunction) {}

  static async updateComment(req: Request, res: Response, next: NextFunction) {}

  static async deleteComment(req: Request, res: Response, next: NextFunction) {}
}
