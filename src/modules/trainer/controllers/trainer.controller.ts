/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common';

@Controller('trainer')
export class TrainerController {
    
    @Get()
    Get() {
        return 'trainer'
    }
}
