/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AppointmentModel } from '../../../models/appointment.model';
import { CreateAppointmentDto } from '../dto/CreateAppontment.dto';
import { UpdateAppointmentDto } from '../dto/UpdateAppontment.dto';

@Injectable()
export class AppontmentService {

    constructor(
        @InjectModel(AppointmentModel.name) private appontmentModel: Model<AppointmentModel>
    ) { }

    createAppontment(createAppointmentDto: CreateAppointmentDto) {
        const newAppontment = new this.appontmentModel(createAppointmentDto);

        return newAppontment.save();
    }

    

    getAll() {
        return this.appontmentModel.find()
    }

    getById(id: string) {
        return this.appontmentModel.findById(id)
    }

    updateById(id: string, updateAppointmentDto: UpdateAppointmentDto) {
        return this.appontmentModel.findByIdAndUpdate(id, updateAppointmentDto, { new: true })
    }

    deleteById(id: string) {
        return this.appontmentModel.findByIdAndDelete(id)
    }
}
