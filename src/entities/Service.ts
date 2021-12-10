import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { QuestionEntity } from './Question';
import { CommentEntity } from './Comment';

@Entity('service')
export class ServiceEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  service_id: string;

  @Column('varchar', { length: 50 })
  type: string;

  @Column('int')
  rating_quantity: number;

  @Column('varchar', { array: true, default: [], nullable: false })
  coordinates: number[];

  @Column('varchar', { length: 100 })
  description: string;

  @Column('varchar', { length: 250, nullable: false })
  summary: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => QuestionEntity, question => question.service, {
    cascade: true,
    eager: true,
  })
  questions: QuestionEntity[];

  @OneToMany(() => CommentEntity, comment => comment.service, {
    cascade: true,
    eager: true,
  })
  comments: CommentEntity[];
}
