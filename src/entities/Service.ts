import {
    Entity,
    Column,
    BaseEntity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('service')
export class ServiceEntity extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("varchar", { length: 50 })
    type: string;

    @Column("varchar", { array: true, default: [], nullable: false })
    coordinates: number[];

    @Column("varchar", { length: 100 }, )
    description: string;

    @Column("varchar", { length: 250, nullable: false })
    summary: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}