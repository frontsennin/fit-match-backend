import { IsDate, IsOptional, IsNumber } from "class-validator";
import { PaymentMethod, PaymentStatus } from "src/models/payment.model";

export class UpdatePaymentDto {
    @IsOptional()
    @IsNumber()
    userId?: number;

    @IsOptional()
    @IsNumber()
    amount?: number;

    @IsOptional()
    @IsDate()
    paymentDate?: Date;

    @IsOptional()
    status?: PaymentStatus;

    @IsOptional()
    paymentMethod?: PaymentMethod;
}