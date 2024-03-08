import { Transform } from "class-transformer";
import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString, MinDate } from "class-validator";
import { AppointmentStatus } from "src/models/appointment.model";

export class UpdateAppointmentDto {
    @IsOptional()
    @IsNumber()
    userId?: number;

    @IsOptional()
    @IsNumber()
    trainerId?: number;

    @IsOptional()
    @Transform(({ value }) => value && new Date(value))
    @IsDate()
    @MinDate(new Date())
    dateTime?: Date;

    @IsOptional()
    status?: AppointmentStatus;
}