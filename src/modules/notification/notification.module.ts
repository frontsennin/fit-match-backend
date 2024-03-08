import { NotificationService } from './services/notification.service';
import { NotificationController } from './controllers/notification.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NotificationModel, NotificationSchema } from 'src/models/notification.model';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: NotificationModel.name,
                schema: NotificationSchema
            }
        ])
    ],
    controllers: [
        NotificationController,],
    providers: [
        NotificationService,],
})
export class NotificationModule { }
