/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('payment')
@Controller('payment')
export class PaymentController {
    
    @Get()
    Get() {
        return 'payment'
    }
}
