import { EntityRepository, Repository } from 'typeorm';
import { CommnetEntity } from '../entities/Comment';

@EntityRepository(CommentEntity)
export class CommentRepository extends Repository<CommentEntity> {
  async getAllComments() {}

  async getComment() {}

  async createComment() {}

  async updateComment() {}

  async deleteComment() {}
}
