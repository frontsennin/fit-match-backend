import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class PaymentModel {
    @Prop({ unique: true, required: true })
    paymentId:number;

    @Prop({ required: true })
    userId :number;

    @Prop({ required: true })
    amount: number;

    @Prop({ required: true })
    paymentDate: Date;

    @Prop({ required: true })
    status: PaymentStatus;

    @Prop({ required: true })
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

export const PaymentSchema = SchemaFactory.createForClass(PaymentModel)