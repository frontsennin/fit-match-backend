/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common';

@Controller('payment')
export class PaymentController {
    
    @Get()
    Get() {
        return 'payment'
    }
}
