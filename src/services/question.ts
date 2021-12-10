import {DeepPartial, EntityRepository, getConnection, getRepository, Repository} from 'typeorm';
import {QuestionEntity} from "../entities/Question";
import {HttpErr} from "../exceptions/HttpError";
import ExceptionMessages from "../exceptions/messages";
import {ServiceEntity} from "../entities/Service";

@EntityRepository(QuestionEntity)
export class QuestionRepository extends Repository<QuestionEntity> {
  static async getAllQuestions() {
    return await getRepository(QuestionEntity).find();
  }

  static async getQuestion(questionId:string) {
    const question = await getRepository(QuestionEntity).findOne(questionId);
    if(!question) {
      return HttpErr.notFound(ExceptionMessages.NOT_FOUND.QUESTION);
    }
    return question;
  }

  static async createQuestion(newQuestion: DeepPartial<QuestionEntity>) {
    const newQuest = await getRepository(QuestionEntity).create(newQuestion);
    const service_id = await newQuestion.service_id;
    const service = await getRepository(ServiceEntity).findOne(service_id);
    if(!service){
      return HttpErr.notFound(ExceptionMessages.NOT_FOUND.SERVICE);
    }

    await getRepository(QuestionEntity).save(newQuest);
    return newQuest;
  }

  static async updateQuestion(id:string, newQuestion: Partial<QuestionEntity>) {
    const question = await getRepository(QuestionEntity).findOne(id);
    if(question){
      await getRepository(QuestionEntity).merge(question, newQuestion);
      const updatedData = await getRepository(QuestionEntity).save(question);
      return updatedData;
    }else{
      throw HttpErr.notFound(ExceptionMessages.NOT_FOUND.QUESTION);
    }
  }

  static async deleteQuestion(id:string) {
    const question = await getRepository(QuestionEntity).findOne(id);
    if(question) {
      await getConnection()
          .createQueryBuilder()
          .update(QuestionEntity)
          .delete()
          .where({question_id:id})
          .execute()
      return {Message:"Question deleted..."}
    }else{
      throw HttpErr.notFound(ExceptionMessages.NOT_FOUND.QUESTION);
    }
  }
}
