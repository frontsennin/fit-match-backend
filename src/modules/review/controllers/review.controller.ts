/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('review')
@Controller('review')
export class ReviewController {

    @Get()
    Get() {
        return 'review'
    }
}
