import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { NotificationStatus } from "src/models/notification.model";

export class CreateNotificationDto {
    @IsNotEmpty()
    @IsNumber()
    notificationId: number

    @IsNotEmpty()
    @IsNumber()
    userId: number;

    @IsNotEmpty()
    @IsString()
    content: string;

    @IsNotEmpty()
    status: NotificationStatus;

    @IsNotEmpty()
    @IsDate()
    createdAt: Date;
}