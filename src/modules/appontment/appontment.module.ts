import { AppontmentService } from './services/appontment.service';
import { AppontmentController } from './controllers/appontment.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [
        AppontmentController,],
    providers: [
        AppontmentService,],
})
export class AppontmentModule { }
