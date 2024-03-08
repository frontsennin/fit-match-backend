import { Body, Controller, Delete, Get, HttpException, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateFitnessClassDto } from '../dto/CreateFitnessClass.dto';
import { FitnessClassService } from '../services/fitness-class.service';
import mongoose from 'mongoose';
import { UpdateFitnessClassDto } from '../dto/UpdateFitnessClass.dto';

@ApiTags('fitness-class')
@Controller('fitness-class')
export class FitnessClassController {

    constructor(
        private fitnessClassService: FitnessClassService
    ) {}

    @Get()
    getAll() {
        return this.fitnessClassService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException('Please use a valid FitnessClass ID', 404);
        const finded = await this.fitnessClassService.getById(id);
        if (!finded) throw new HttpException('FitnessClass not found', 404);

        return finded
    }

    @Post()
    @UsePipes(new ValidationPipe())
    @ApiBody({
        type: CreateFitnessClassDto,
        examples: {
            body: {
                summary: "Empty Body",
                description: "Description for when an empty body is used",
                value: {} as CreateFitnessClassDto
            },
        }
    })
    CreateFitnessClass(@Body() createFitnessClassDto: CreateFitnessClassDto) {
        return this.fitnessClassService.createFinessClass(createFitnessClassDto)
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe())
    @ApiBody({
        type: UpdateFitnessClassDto,
        examples: {
            body: {
                summary: "Empty Body",
                description: "Description for when an empty body is used",
                value: {} as UpdateFitnessClassDto
            },
        }
    })
    async updateById(
        @Param('id') id: string,
        @Body() updateFitnessClassDto: UpdateFitnessClassDto
    ) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException('Please use a valid FitnessClass ID', 404);
        const updated = await this.fitnessClassService.updateById(id, updateFitnessClassDto)

        if (!updated) throw new HttpException('FitnessClass not found', 404);

        return updated
    }

    @Delete(':id')
    async deleteById(
        @Param('id') id: string,
    ) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException('Please use a valid FitnessClass ID', 404);

        const deleted = await this.fitnessClassService.deleteById(id)
        if (!deleted) throw new HttpException('FitnessClass not found', 404);
        return;
    }
}
