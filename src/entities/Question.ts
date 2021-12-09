import {
    BaseEntity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
    ManyToOne, Entity,
} from 'typeorm';
import {ServiceEntity} from "./Service";
import {JoinColumn} from "typeorm/browser";


@Entity("question")
export class QuestionEntity extends BaseEntity{
    @PrimaryGeneratedColumn("uuid")
    question_id: string;

    @Column("varchar", {length:50})
    description: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(( ) => ServiceEntity, service => service.questions, {onDelete: "CASCADE", eager: false})
    @JoinColumn({name:"service_id"})
    service: ServiceEntity;


}
