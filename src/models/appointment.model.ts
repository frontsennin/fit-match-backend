import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AppointmentModel {
    @PrimaryGeneratedColumn()
    appointmentId: number;

    @Column({nullable: false})
    userId: number;
    
    @Column({nullable: false})
    trainerId: number;

    @Column({nullable: false})
    dateTime: Date;

    @Column({nullable: false})
    status: AppointmentStatus;
}

export enum AppointmentStatus {
    NEW,
    CONFIRMED,
    PENDING,
    PENDING_PAYMENT,
    CAMCELED
}