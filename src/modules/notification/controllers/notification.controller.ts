/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('notification')
@Controller('notification')
export class NotificationController {
    
    @Get()
    Get() {
        return 'notification'
    }
}
