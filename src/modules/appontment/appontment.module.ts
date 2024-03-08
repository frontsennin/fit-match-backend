import { AppontmentService } from './services/appontment.service';
import { AppontmentController } from './controllers/appontment.controller';

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppointmentModel, AppointmentSchema } from '../../models/appointment.model';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: AppointmentModel.name,
                schema: AppointmentSchema
            }
        ])
    ],
    controllers: [
        AppontmentController,],
    providers: [
        AppontmentService,],
})
export class AppontmentModule { }
