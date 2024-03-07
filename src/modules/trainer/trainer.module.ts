import { TrainerService } from './services/trainer.service';
import { TrainerController } from './controllers/trainer.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [
        TrainerController,],
    providers: [
        TrainerService,],
})
export class TrainerModule { }
