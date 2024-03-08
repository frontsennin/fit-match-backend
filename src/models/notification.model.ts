import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class NotificationModel {
    @Prop({ unique: true, required: true })
    notificationId: number

    @Prop({ required: true })
    userId: number;

    @Prop({ required: true })
    content: string;

    @Prop({ required: true })
    status: NotificationStatus;

    @Prop({ required: true })
    createdAt: Date;
}

export enum NotificationStatus {
    READ,
    NOT_READ
}

export const NotificationSchema = SchemaFactory.createForClass(NotificationModel)