import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class AppointmentModel {
    @Prop({ unique: true, required: true })
    appointmentId: number;
    
    @Prop({ required: true })
    userId: number;

    @Prop({ required: true })
    trainerId: number;

    @Prop({ required: true })
    dateTime: Date;

    @Prop({ required: true })
    status: AppointmentStatus;
}

export enum AppointmentStatus {
    NEW,
    CONFIRMED,
    PENDING,
    PENDING_PAYMENT,
    CAMCELED
}

export const AppointmentSchema = SchemaFactory.createForClass(AppointmentModel)