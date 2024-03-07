export class AppointmentModel {
    appointmentId: number;
    userId: number;
    trainerId: number;
    dateTime: Date;
    status: AppointmentStatus;
}

export enum AppointmentStatus {
    NEW,
    CONFIRMED,
    PENDING,
    PENDING_PAYMENT,
    CAMCELED
}