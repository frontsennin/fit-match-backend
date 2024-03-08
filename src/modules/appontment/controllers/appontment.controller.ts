import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateAppointmentDto } from '../dto/CreateAppontment.dto';
import { AppontmentService } from '../services/appontment.service';

@ApiTags('appontment')
@Controller('appontment')
export class AppontmentController {

    constructor(private appontmentService: AppontmentService) { }

    @Get()
    Get() {
        return 'appontment'
    }

    @Post()
    @UsePipes(new ValidationPipe())
    @ApiBody({
        type: CreateAppointmentDto,
        examples: {
            body: {
                summary: "Empty Body",
                description: "Description for when an empty body is used",
                value: {} as CreateAppointmentDto
            },
        }
    })
    CreateAppontment(@Body() createAppointmentDto: CreateAppointmentDto) {
        return this.appontmentService.createAppontment(createAppointmentDto)
    }
}
