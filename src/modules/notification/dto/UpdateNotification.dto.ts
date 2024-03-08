import { IsDate, IsOptional, IsNumber, IsString } from "class-validator";
import { NotificationStatus } from "src/models/notification.model";

export class UpdateNotificationDto {
    @IsOptional()
    @IsNumber()
    notificationId?: number

    @IsOptional()
    @IsNumber()
    userId?: number;

    @IsOptional()
    @IsString()
    content?: string;

    @IsOptional()
    status?: NotificationStatus;

    @IsOptional()
    @IsDate()
    createdAt?: Date;
}