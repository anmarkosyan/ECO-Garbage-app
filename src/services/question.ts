import {DeepPartial, EntityRepository, getConnection, getRepository, Repository} from 'typeorm';
import {QuestionEntity} from "../entities/Question";
import {CommentEntity} from "../entities/Comment";
import {CommentRepository} from "./comment";

@EntityRepository(QuestionEntity)
export class QuestionRepository extends Repository<QuestionEntity> {
  static async getAllQuestions() {}

  static async getQuestion(questionId:string) {}

  static async createQuestion(newQuestion: DeepPartial<QuestionEntity>) {}

  static async updateQuestion(id:string, newQuestion: Partial<QuestionEntity>) {}

  static async deleteQuestion(id:string) {}
}
