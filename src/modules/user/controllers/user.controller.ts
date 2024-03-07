/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {

    @Get()
    Get() {
        return 'user'
    }
}
