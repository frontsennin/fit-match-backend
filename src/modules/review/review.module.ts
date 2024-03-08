import { ReviewService } from './services/review.service';
import { ReviewController } from './controllers/review.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReviewModel, ReviewSchema } from '../../models/review.model';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: ReviewModel.name,
                schema: ReviewSchema
            }
        ])
    ],
    controllers: [
        ReviewController,],
    providers: [
        ReviewService,],
})
export class ReviewModule { }
