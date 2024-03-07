import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    roleId: RoleType;

    @Column({nullable: false})
    roleTitle: string;
}

export enum RoleType {
    USER,
    TRAINER,
    ADMIN
}