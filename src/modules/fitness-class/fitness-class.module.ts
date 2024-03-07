import { FitnessClassService } from './services/fitness-class.service';
import { FitnessClassController } from './controllers/fitness-class.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [
        FitnessClassController
    ],
    providers: [
        FitnessClassService
    ],
})
export class FitnessClassModule { }
