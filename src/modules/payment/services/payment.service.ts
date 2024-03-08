/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PaymentModel } from 'src/models/payment.model';
import { CreatePaymentDto } from '../dto/CreatePayment.dto';

@Injectable()
export class PaymentService {

    constructor(
        @InjectModel(PaymentModel.name) private paymentModel: Model<PaymentModel>
    ) { }

    createPayment(createPaymentDto: CreatePaymentDto) {
        const newNotification = new this.paymentModel(createPaymentDto);

        return newNotification.save();
    }

}
