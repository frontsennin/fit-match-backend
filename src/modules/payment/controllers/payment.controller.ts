/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, HttpException, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreatePaymentDto } from '../dto/CreatePayment.dto';
import { PaymentService } from '../services/payment.service';
import mongoose from 'mongoose';
import { UpdatePaymentDto } from '../dto/UpdatePayment.dto';

@ApiTags('payment')
@Controller('payment')
export class PaymentController {

    constructor(
        private paymentService: PaymentService
    ){}
    
    @Get()
    getAll() {
        return this.paymentService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException('Please use a valid Payment ID', 404);
        const finded = await this.paymentService.getById(id);
        if (!finded) throw new HttpException('Payment not found', 404);

        return finded
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

    @Patch(':id')
    @UsePipes(new ValidationPipe())
    @ApiBody({
        type: UpdatePaymentDto,
        examples: {
            body: {
                summary: "Empty Body",
                description: "Description for when an empty body is used",
                value: {} as UpdatePaymentDto
            },
        }
    })
    async updateById(
        @Param('id') id: string,
        @Body() updatePaymentDto: UpdatePaymentDto
    ) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException('Please use a valid Payment ID', 404);
        const updated = await this.paymentService.updateById(id, updatePaymentDto)

        if (!updated) throw new HttpException('Payment not found', 404);

        return updated
    }

    @Delete(':id')
    async deleteById(
        @Param('id') id: string,
    ) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException('Please use a valid Payment ID', 404);

        const deleted = await this.paymentService.deleteById(id)
        if (!deleted) throw new HttpException('Payment not found', 404);
        return;
    }
}
