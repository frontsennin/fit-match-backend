import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateFitnessClassDto } from '../dto/CreateFitnessClass.dto';
import { FitnessClassService } from '../services/fitness-class.service';

@ApiTags('fitness-class')
@Controller('fitness-class')
export class FitnessClassController {

    constructor(
        private fitnessClassService: FitnessClassService
    ) {}

    @Get()
    GetClasses() {
        return 'fitness-class'
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
    CreateFinessClass(@Body() createFitnessClassDto: CreateFitnessClassDto) {
        return this.fitnessClassService.createFinessClass(createFitnessClassDto)
    }
}
