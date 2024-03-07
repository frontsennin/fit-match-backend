/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('appontment')
@Controller('appontment')
export class AppontmentController {
    
    @Get()
    Get() {
        return 'appontment'
    }
}
