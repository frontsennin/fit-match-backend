import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FitnessClassModel {
    @PrimaryGeneratedColumn()
    classId: number;

    @Column({nullable: false})
    className: string;

    @Column({nullable: false})
    maxParticipants: number;

    @Column({nullable: false})
    currentParticipants: number
}