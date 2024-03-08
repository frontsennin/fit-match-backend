/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NotificationModel } from 'src/models/notification.model';
import { CreateNotificationDto } from '../dto/CreateNotification.dto';
import { UpdateNotificationDto } from '../dto/UpdateNotification.dto';

@Injectable()
export class NotificationService {

    
    constructor(
        @InjectModel(NotificationModel.name) private notificationModel: Model<NotificationModel>
    ) { }

    createNotification(createNotificationDto: CreateNotificationDto) {
        const newNotification = new this.notificationModel(createNotificationDto);

        return newNotification.save();
    }

    getAll() {
        return this.notificationModel.find()
    }

    getById(id: string) {
        return this.notificationModel.findById(id)
    }

    updateById(id: string, updateNotificationDto: UpdateNotificationDto) {
        return this.notificationModel.findByIdAndUpdate(id, updateNotificationDto, { new: true })
    }

    deleteById(id: string) {
        return this.notificationModel.findByIdAndDelete(id)
    }
}
