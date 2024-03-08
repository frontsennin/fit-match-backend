/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NotificationModel } from 'src/models/notification.model';
import { CreateNotificationDto } from '../dto/CreateNotification.dto';

@Injectable()
export class NotificationService {

    
    constructor(
        @InjectModel(NotificationModel.name) private notificationModel: Model<NotificationModel>
    ) { }

    createNotification(createNotificationDto: CreateNotificationDto) {
        const newNotification = new this.notificationModel(createNotificationDto);

        return newNotification.save();
    }
}
