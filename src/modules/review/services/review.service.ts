/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ReviewModel } from 'src/models/review.model';
import { CreateReviewDto } from '../dto/CreateReview.dto';

@Injectable()
export class ReviewService {

    constructor(
        @InjectModel(ReviewModel.name) private reviewModel: Model<ReviewModel>
    ) { }

    createReview(createReviewDto: CreateReviewDto) {
        const newReview = new this.reviewModel(createReviewDto);

        return newReview.save();
    }

}
