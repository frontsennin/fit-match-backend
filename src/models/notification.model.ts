import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class NotificationModel {
    @PrimaryGeneratedColumn()
    notificationId: number

    @Column({nullable: false})
    userId: number;

    @Column({nullable: false})
    content: string;

    @Column({nullable: false})
    status: NotificationStatus;

    @Column({nullable: false})
    createdAt: Date;
}

export enum NotificationStatus {
    READ,
    NOT_READ
}