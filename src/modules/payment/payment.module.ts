import { PaymentService } from './services/payment.service';
import { PaymentController } from './controllers/payment.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PaymentModel, PaymentSchema } from '../../models/payment.model';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: PaymentModel.name,
                schema: PaymentSchema
            }
        ])
    ],
    controllers: [
        PaymentController,],
    providers: [
        PaymentService,],
})
export class PaymentModule { }
