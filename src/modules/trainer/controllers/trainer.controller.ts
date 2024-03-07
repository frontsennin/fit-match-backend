/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('trainer')
@Controller('trainer')
export class TrainerController {
    
    @Get()
    Get() {
        return 'trainer'
    }
}
