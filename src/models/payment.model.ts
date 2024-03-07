import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PaymentModel {
    @PrimaryGeneratedColumn()
    paymentId:number;

    @Column({nullable: false})
    userId :number;

    @Column({nullable: false})
    amount: number;

    @Column({nullable: false})
    paymentDate: Date;

    @Column({nullable: false})
    status: PaymentStatus;

    @Column({nullable: false})
    paymentMethod: PaymentMethod;
}

export enum PaymentStatus {
    PAYED,
    PENDING,
    CANCELED,
    FAIL
}

export enum PaymentMethod {
    CREDIT,
    DEBIT,
    PIX
}