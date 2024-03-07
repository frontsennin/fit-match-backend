import { PaymentService } from './services/payment.service';
import { PaymentController } from './controllers/payment.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [
        PaymentController,],
    providers: [
        PaymentService,],
})
export class PaymentModule { }
