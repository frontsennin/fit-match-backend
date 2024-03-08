/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FitnessClassModel } from 'src/models/fitness-class.model';
import { CreateFitnessClassDto } from '../dto/CreateFitnessClass.dto';
import { UpdateFitnessClassDto } from '../dto/UpdateFitnessClass.dto';

@Injectable()
export class FitnessClassService {
    constructor(
        @InjectModel(FitnessClassModel.name) private fitnessClassModel: Model<FitnessClassModel>
    ) { }

    createFinessClass(createFitnessClassDto: CreateFitnessClassDto) {
        const newAppontment = new this.fitnessClassModel(createFitnessClassDto);

        return newAppontment.save();
    }

    getAll() {
        return this.fitnessClassModel.find()
    }

    getById(id: string) {
        return this.fitnessClassModel.findById(id)
    }

    updateById(id: string, updateFitnessClassDto: UpdateFitnessClassDto) {
        return this.fitnessClassModel.findByIdAndUpdate(id, updateFitnessClassDto, { new: true })
    }

    deleteById(id: string) {
        return this.fitnessClassModel.findByIdAndDelete(id)
    }
}
