/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateTrainerDto } from '../dto/CreateTrainer.dto';
import { TrainerService } from '../services/trainer.service';

@ApiTags('trainer')
@Controller('trainer')
export class TrainerController {

    constructor(
        private trainerService: TrainerService
    ) {}
    
    @Get()
    Get() {
        return 'trainer'
    }

    @Post()
    @UsePipes(new ValidationPipe())
    @ApiBody({
        type: CreateTrainerDto,
        examples: {
            body: {
                summary: "Empty Body",
                description: "Description for when an empty body is used",
                value: {} as CreateTrainerDto
            },
        }
    })
    CreateTrainer(@Body() createTrainerDto: CreateTrainerDto) {
        return this.trainerService.createTrainer(createTrainerDto)
    }
}
