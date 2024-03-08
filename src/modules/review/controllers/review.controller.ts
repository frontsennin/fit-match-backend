/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateReviewDto } from '../dto/CreateReview.dto';
import { ReviewService } from '../services/review.service';

@ApiTags('review')
@Controller('review')
export class ReviewController {

    constructor(
        private reviewService: ReviewService
    ) {}

    @Get()
    Get() {
        return 'review'
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
}
