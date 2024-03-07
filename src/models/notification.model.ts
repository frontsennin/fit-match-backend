export class NotificationModel {
    notificationId: number
    userId: number;
    content: string;
    status: NotificationStatus;
    createdAt: Date;
}

export enum NotificationStatus {
    READ,
    NOT_READ
}