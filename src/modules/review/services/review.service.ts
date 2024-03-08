/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ReviewModel } from '../../../models/review.model';
import { CreateReviewDto } from '../dto/CreateReview.dto';
import { UpdateReviewDto } from '../dto/UpdateReview.dto';

@Injectable()
export class ReviewService {

    constructor(
        @InjectModel(ReviewModel.name) private reviewModel: Model<ReviewModel>
    ) { }

    createReview(createReviewDto: CreateReviewDto) {
        const newReview = new this.reviewModel(createReviewDto);

        return newReview.save();
    }

    getAll() {
        return this.reviewModel.find()
    }

    getById(id: string) {
        return this.reviewModel.findById(id)
    }

    updateById(id: string, updateReviewDto: UpdateReviewDto) {
        return this.reviewModel.findByIdAndUpdate(id, updateReviewDto, { new: true })
    }

    deleteById(id: string) {
        return this.reviewModel.findByIdAndDelete(id)
    }

}
