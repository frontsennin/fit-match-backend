import { TrainerService } from './services/trainer.service';
import { TrainerController } from './controllers/trainer.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TrainerModel, TrainerSchema } from 'src/models/trainer.model';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: TrainerModel.name,
                schema: TrainerSchema
            }
        ])
    ],
    controllers: [
        TrainerController,],
    providers: [
        TrainerService,],
})
export class TrainerModule { }
