/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PaymentModel } from 'src/models/payment.model';
import { CreatePaymentDto } from '../dto/CreatePayment.dto';
import { UpdatePaymentDto } from '../dto/UpdatePayment.dto';

@Injectable()
export class PaymentService {

    constructor(
        @InjectModel(PaymentModel.name) private paymentModel: Model<PaymentModel>
    ) { }

    createPayment(createPaymentDto: CreatePaymentDto) {
        const newNotification = new this.paymentModel(createPaymentDto);

        return newNotification.save();
    }

    getAll() {
        return this.paymentModel.find()
    }

    getById(id: string) {
        return this.paymentModel.findById(id)
    }

    updateById(id: string, updatePaymentDto: UpdatePaymentDto) {
        return this.paymentModel.findByIdAndUpdate(id, updatePaymentDto, { new: true })
    }

    deleteById(id: string) {
        return this.paymentModel.findByIdAndDelete(id)
    }

}
