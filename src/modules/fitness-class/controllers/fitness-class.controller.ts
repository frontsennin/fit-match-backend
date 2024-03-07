/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common';

@Controller('fitness-class')
export class FitnessClassController {

    @Get()
    GetClasses() {
        return 'fitness-class'
    }
}
