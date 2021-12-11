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

  @Column('varchar')
  type: string;

  @Column('int')
  rating_quantity: number;

  @Column("float",{ array: true, default: [], nullable: false })
  coordinates: number[];

  @Column('varchar',)
  description: string;

  @Column('varchar')
  address: string;

  @Column('varchar', {nullable: false })
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
