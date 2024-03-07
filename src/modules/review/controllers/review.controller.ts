/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common';

@Controller('review')
export class ReviewController {

    @Get()
    Get() {
        return 'review'
    }
}
