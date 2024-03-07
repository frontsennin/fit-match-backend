/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('fitness-class')
@Controller('fitness-class')
export class FitnessClassController {

    @Get()
    GetClasses() {
        return 'fitness-class'
    }
}
