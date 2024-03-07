/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common';

@Controller('notification')
export class NotificationController {
    
    @Get()
    Get() {
        return 'notification'
    }
}
