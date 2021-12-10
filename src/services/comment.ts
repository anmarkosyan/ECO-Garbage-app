import { EntityRepository, Repository } from 'typeorm';
import { CommentEntity } from '../entities/Comment';
import { newComment, IComment } from '../interfaces';

@EntityRepository(CommentEntity)
export class CommentRepository extends Repository<CommentEntity> {
  async getAllComments() {
    const comments = await this.createQueryBuilder('comment').getMany();
    return comments;
  }

  async getComment(commentId: string) {
    const comment = await this.createQueryBuilder('comment')
      .select()
      .where('comment_id = :query', { query: commentId })
      .getOne();

    return comment;
  }

  async createComment(newComment: newComment) {
    return await this.save(newComment);
  }

  async updateComment(id: string, content: IComment) {
    const updatedComment = await this.createQueryBuilder('comment')
      .update(CommentEntity)
      .set({ ...content })
      .where('comment_id = :query', { query: id })
      .execute()
      .then(() => this.findOne(id));

    return updatedComment;
  }

  async deleteComment(id: string) {
    const data = await this.findOne(id);
    await this.createQueryBuilder('comment')
      .delete()
      .from(CommentEntity)
      .where('comment_id = :query', { query: id })
      .execute();

    return data;
  }
}
