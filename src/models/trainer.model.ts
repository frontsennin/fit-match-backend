import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TrainerModel {
    @PrimaryGeneratedColumn()
    trainerId:number;

    @Column({nullable: false})
    cpf: string;

    @Column({nullable: false})
    crefi: string;

    @Column({nullable: false})
    email: string;

    @Column({nullable: false})
    phoneNumber: string;

    @Column({nullable: false})
    userId:number;

    @Column({nullable: false})
    specialization: string[] = [];

    @Column({nullable: false})
    availability: boolean = true;
}