import { EntityRepository, Repository } from 'typeorm';
import {QuestionEntity} from "../entities/Question";

@EntityRepository(QuestionEntity)
export class QuestionRepository extends Repository<QuestionEntity> {
  async getAllQuestions() {}

  async getQuestion() {}

  async createQuestion() {}

  async updateQuestion() {}

  async deleteQuestion() {}
}
