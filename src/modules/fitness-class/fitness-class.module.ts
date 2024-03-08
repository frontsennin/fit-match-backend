import { FitnessClassService } from './services/fitness-class.service';
import { FitnessClassController } from './controllers/fitness-class.controller';

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FitnessClassModel, FitnessClassSchema } from '../../models/fitness-class.model';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: FitnessClassModel.name,
                schema: FitnessClassSchema
            }
        ])
    ],
    controllers: [
        FitnessClassController
    ],
    providers: [
        FitnessClassService
    ],
})
export class FitnessClassModule { }
