import {DeepPartial, EntityRepository, getRepository, Repository} from 'typeorm';
import {CommentEntity} from "../entities/Comment";

@EntityRepository(CommentEntity)
export class CommentRepository extends Repository<CommentEntity> {
  static async getAllComments() {};

  static async getComment(commentId:string) {}

  static async createComment(newComment:DeepPartial<CommentEntity>) {}

  static async updateComment(id:string, newComment:Partial<CommentEntity>) {}

  static  async deleteComment() {}
}
