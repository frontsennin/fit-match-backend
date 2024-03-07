/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common';

@Controller('appontment')
export class AppontmentController {
    
    @Get()
    Get() {
        return 'appontment'
    }
}
