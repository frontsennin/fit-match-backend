import { ReviewService } from './services/review.service';
import { ReviewController } from './controllers/review.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [
        ReviewController,],
    providers: [
        ReviewService,],
})
export class ReviewModule { }
