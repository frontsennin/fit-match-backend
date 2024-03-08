import { Body, Controller, Delete, Get, HttpException, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateAppointmentDto } from '../dto/CreateAppontment.dto';
import { AppontmentService } from '../services/appontment.service';
import mongoose from 'mongoose';
import { UpdateAppointmentDto } from '../dto/UpdateAppontment.dto';

@ApiTags('appontment')
@Controller('appontment')
export class AppontmentController {

    constructor(private appontmentService: AppontmentService) { }

    @Get()
    getAll() {
        return this.appontmentService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException('Please use a valid Appontment ID', 404);
        const finded = await this.appontmentService.getById(id);
        if (!finded) throw new HttpException('Appontment not found', 404);

        return finded
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

    @Patch(':id')
    @UsePipes(new ValidationPipe())
    @ApiBody({
        type: UpdateAppointmentDto,
        examples: {
            body: {
                summary: "Empty Body",
                description: "Description for when an empty body is used",
                value: {} as UpdateAppointmentDto
            },
        }
    })
    async updateById(
        @Param('id') id: string,
        @Body() updateAppointmentDto: UpdateAppointmentDto
    ) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException('Please use a valid Appontment ID', 404);
        const updated = await this.appontmentService.updateById(id, updateAppointmentDto)

        if (!updated) throw new HttpException('Appontment not found', 404);

        return updated
    }

    @Delete(':id')
    async deleteById(
        @Param('id') id: string,
    ) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException('Please use a valid Appontment ID', 404);

        const deleted = await this.appontmentService.deleteById(id)
        if (!deleted) throw new HttpException('Appontment not found', 404);
        return;
    }
}
