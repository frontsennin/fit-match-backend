/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FitnessClassModel } from 'src/models/fitness-class.model';
import { CreateFitnessClassDto } from '../dto/CreateFitnessClass.dto';

@Injectable()
export class FitnessClassService {
    constructor(
        @InjectModel(FitnessClassModel.name) private fitnessClassModel: Model<FitnessClassModel>
    ) { }

    createFinessClass(createFitnessClassDto: CreateFitnessClassDto) {
        const newAppontment = new this.fitnessClassModel(createFitnessClassDto);

        return newAppontment.save();
    }
}
