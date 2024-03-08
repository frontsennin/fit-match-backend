/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, HttpException, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateNotificationDto } from '../dto/CreateNotification.dto';
import { NotificationService } from '../services/notification.service';
import mongoose from 'mongoose';
import { UpdateNotificationDto } from '../dto/UpdateNotification.dto';

@ApiTags('notification')
@Controller('notification')
export class NotificationController {

    constructor(
        private notificationService: NotificationService
    ) {}

    @Get()
    getAll() {
        return this.notificationService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException('Please use a valid Notification ID', 404);
        const finded = await this.notificationService.getById(id);
        if (!finded) throw new HttpException('Notification not found', 404);

        return finded
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

    @Patch(':id')
    @UsePipes(new ValidationPipe())
    @ApiBody({
        type: UpdateNotificationDto,
        examples: {
            body: {
                summary: "Empty Body",
                description: "Description for when an empty body is used",
                value: {} as UpdateNotificationDto
            },
        }
    })
    async updateById(
        @Param('id') id: string,
        @Body() updateNotificationDto: UpdateNotificationDto
    ) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException('Please use a valid Notification ID', 404);
        const updated = await this.notificationService.updateById(id, updateNotificationDto)

        if (!updated) throw new HttpException('Notification not found', 404);

        return updated
    }

    @Delete(':id')
    async deleteById(
        @Param('id') id: string,
    ) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException('Please use a valid Notification ID', 404);

        const deleted = await this.notificationService.deleteById(id)
        if (!deleted) throw new HttpException('Notification not found', 404);
        return;
    }
}
