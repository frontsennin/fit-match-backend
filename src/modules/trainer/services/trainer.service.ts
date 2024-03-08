/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TrainerModel } from 'src/models/trainer.model';
import { CreateTrainerDto } from '../dto/CreateTrainer.dto';

@Injectable()
export class TrainerService {

    constructor(
        @InjectModel(TrainerModel.name) private trainerModel: Model<TrainerModel>
    ) { }

    createTrainer(createTrainerDto: CreateTrainerDto) {
        const newTrainer = new this.trainerModel(createTrainerDto);

        return newTrainer.save();
    }

}
