export class PaymentModel {
    paymentId:number;
    userId :number;
    amount: number;
    paymentDate: Date;
    status: PaymentStatus;
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