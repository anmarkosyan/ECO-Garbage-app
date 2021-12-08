import {
  Entity,
  Column,
  OneToMany,
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('service')
export class ServiceEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column('varchar', { length: 100 })
  type?: string;

  @CreateDateColumn()
  created_at?: Date;
}
