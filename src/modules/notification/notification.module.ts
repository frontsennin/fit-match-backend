import { NotificationService } from './services/notification.service';
import { NotificationController } from './controllers/notification.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [
        NotificationController,],
    providers: [
        NotificationService,],
})
export class NotificationModule { }
