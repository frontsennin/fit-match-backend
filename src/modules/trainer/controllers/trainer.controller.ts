/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, HttpException, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateTrainerDto } from '../dto/CreateTrainer.dto';
import { TrainerService } from '../services/trainer.service';
import mongoose from 'mongoose';
import { UpdateTrainerDto } from '../dto/UpdateTrainer.dto';

@ApiTags('trainer')
@Controller('trainer')
export class TrainerController {

    constructor(
        private trainerService: TrainerService
    ) {}
    
    @Get()
    getAll() {
        return this.trainerService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException('Please use a valid Trainer ID', 404);
        const finded = await this.trainerService.getById(id);
        if (!finded) throw new HttpException('Trainer not found', 404);

        return finded
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

    @Patch(':id')
    @UsePipes(new ValidationPipe())
    @ApiBody({
        type: UpdateTrainerDto,
        examples: {
            body: {
                summary: "Empty Body",
                description: "Description for when an empty body is used",
                value: {} as UpdateTrainerDto
            },
        }
    })
    async updateById(
        @Param('id') id: string,
        @Body() updateTrainerDto: UpdateTrainerDto
    ) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException('Please use a valid Trainer ID', 404);
        const updated = await this.trainerService.updateById(id, updateTrainerDto)

        if (!updated) throw new HttpException('Trainer not found', 404);

        return updated
    }

    @Delete(':id')
    async deleteById(
        @Param('id') id: string,
    ) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException('Please use a valid Trainer ID', 404);

        const deleted = await this.trainerService.deleteById(id)
        if (!deleted) throw new HttpException('Trainer not found', 404);
        return;
    }
}
