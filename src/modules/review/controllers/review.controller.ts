/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, HttpException, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateReviewDto } from '../dto/CreateReview.dto';
import { ReviewService } from '../services/review.service';
import mongoose from 'mongoose';
import { UpdateReviewDto } from '../dto/UpdateReview.dto';

@ApiTags('review')
@Controller('review')
export class ReviewController {

    constructor(
        private reviewService: ReviewService
    ) {}

    @Get()
    getAll() {
        return this.reviewService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException('Please use a valid Review ID', 404);
        const finded = await this.reviewService.getById(id);
        if (!finded) throw new HttpException('Review not found', 404);

        return finded
    }

    @Post()
    @UsePipes(new ValidationPipe())
    @ApiBody({
        type: CreateReviewDto,
        examples: {
            body: {
                summary: "Empty Body",
                description: "Description for when an empty body is used",
                value: {} as CreateReviewDto
            },
        }
    })
    CreateReview(@Body() createReviewDto: CreateReviewDto) {
        return this.reviewService.createReview(createReviewDto)
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe())
    @ApiBody({
        type: UpdateReviewDto,
        examples: {
            body: {
                summary: "Empty Body",
                description: "Description for when an empty body is used",
                value: {} as UpdateReviewDto
            },
        }
    })
    async updateById(
        @Param('id') id: string,
        @Body() updateReviewDto: UpdateReviewDto
    ) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException('Please use a valid Review ID', 404);
        const updated = await this.reviewService.updateById(id, updateReviewDto)

        if (!updated) throw new HttpException('Review not found', 404);

        return updated
    }

    @Delete(':id')
    async deleteById(
        @Param('id') id: string,
    ) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException('Please use a valid Review ID', 404);

        const deleted = await this.reviewService.deleteById(id)
        if (!deleted) throw new HttpException('Review not found', 404);
        return;
    }
}
