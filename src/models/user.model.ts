import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "./role.model";

@Entity()
export class UserModel {
    @PrimaryGeneratedColumn()
    userId: number;

    @Column({nullable: false})
    username: string;

    @Column({nullable: false})
    cpf: string;

    @Column({nullable: false})
    email: string;

    @Column({nullable: false})
    phoneNumber: string;

    @Column({nullable: false})
    password: string;

    @Column({nullable: false})
    profilePicture: string;

    @Column({nullable: false})
    role: Role
}