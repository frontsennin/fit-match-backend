import { IsDate, IsNotEmpty, IsNumber } from "class-validator";
import { PaymentMethod, PaymentStatus } from "src/models/payment.model";

export class CreatePaymentDto {
    @IsNotEmpty()
    @IsNumber()
    userId: number;

    @IsNotEmpty()
    @IsNumber()
    amount: number;

    @IsNotEmpty()
    @IsDate()
    paymentDate: Date;

    @IsNotEmpty()
    status: PaymentStatus;

    @IsNotEmpty()
    paymentMethod: PaymentMethod;
}