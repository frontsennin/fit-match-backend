/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreatePaymentDto } from '../dto/CreatePayment.dto';
import { PaymentService } from '../services/payment.service';

@ApiTags('payment')
@Controller('payment')
export class PaymentController {

    constructor(
        private paymentService: PaymentService
    ){}
    
    @Get()
    Get() {
        return 'payment'
    }

    @Post()
    @UsePipes(new ValidationPipe())
    @ApiBody({
        type: CreatePaymentDto,
        examples: {
            body: {
                summary: "Empty Body",
                description: "Description for when an empty body is used",
                value: {} as CreatePaymentDto
            },
        }
    })
    CreatePayment(@Body() createPaymentDto: CreatePaymentDto) {
        return this.paymentService.createPayment(createPaymentDto)
    }
}
