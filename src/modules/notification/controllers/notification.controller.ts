/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateNotificationDto } from '../dto/CreateNotification.dto';
import { NotificationService } from '../services/notification.service';

@ApiTags('notification')
@Controller('notification')
export class NotificationController {

    constructor(
        private notificationService: NotificationService
    ) {}
    
    @Get()
    Get() {
        return 'notification'
    }

    @Post()
    @UsePipes(new ValidationPipe())
    @ApiBody({
        type: CreateNotificationDto,
        examples: {
            body: {
                summary: "Empty Body",
                description: "Description for when an empty body is used",
                value: {} as CreateNotificationDto
            },
        }
    })
    CreateNotification(@Body() createNotificationDto: CreateNotificationDto) {
        return this.notificationService.createNotification(createNotificationDto)
    }
}
