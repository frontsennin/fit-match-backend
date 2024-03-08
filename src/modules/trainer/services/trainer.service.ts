/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TrainerModel } from '../../../models/trainer.model';
import { CreateTrainerDto } from '../dto/CreateTrainer.dto';
import { UpdateTrainerDto } from '../dto/UpdateTrainer.dto';

@Injectable()
export class TrainerService {

    constructor(
        @InjectModel(TrainerModel.name) private trainerModel: Model<TrainerModel>
    ) { }

    createTrainer(createTrainerDto: CreateTrainerDto) {
        const newTrainer = new this.trainerModel(createTrainerDto);

        return newTrainer.save();
    }

    getAll() {
        return this.trainerModel.find()
    }

    getById(id: string) {
        return this.trainerModel.findById(id)
    }

    updateById(id: string, updateTrainerDto: UpdateTrainerDto) {
        return this.trainerModel.findByIdAndUpdate(id, updateTrainerDto, { new: true })
    }

    deleteById(id: string) {
        return this.trainerModel.findByIdAndDelete(id)
    }

}
