import { Transform } from "class-transformer";
import { IsDate, IsNotEmpty, IsNumber, IsString, MinDate } from "class-validator";
import { AppointmentStatus } from "src/models/appointment.model";

export class CreateAppointmentDto {
    @IsNotEmpty()
    @IsNumber()
    userId: number;

    @IsNotEmpty()
    @IsNumber()
    trainerId: number;

    @IsNotEmpty()
    @Transform(({ value }) => value && new Date(value))
    @IsDate()
    @MinDate(new Date())
    dateTime: Date;

    @IsNotEmpty()
    status: AppointmentStatus;
}