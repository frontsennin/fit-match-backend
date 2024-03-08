import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateFitnessClassDto {
    @IsNotEmpty()
    @IsString()
    className: string;

    @IsNotEmpty()
    @IsNumber()
    maxParticipants: number;

    @IsNotEmpty()
    @IsNumber()
    currentParticipants: number
}