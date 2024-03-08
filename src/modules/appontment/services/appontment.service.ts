/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AppointmentModel } from 'src/models/appointment.model';
import { CreateAppointmentDto } from '../dto/CreateAppontment.dto';

@Injectable()
export class AppontmentService {

    constructor(
        @InjectModel(AppointmentModel.name) private appontmentModel: Model<AppointmentModel>
    ) { }

    createAppontment(createAppointmentDto: CreateAppointmentDto) {
        const newAppontment = new this.appontmentModel(createAppointmentDto);

        return newAppontment.save();
    }

}