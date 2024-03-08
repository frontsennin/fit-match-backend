import { IsOptional, IsNumber, IsString } from "class-validator";

export class UpdateFitnessClassDto {
    @IsOptional()
    @IsString()
    className?: string;

    @IsOptional()
    @IsNumber()
    maxParticipants?: number;

    @IsOptional()
    @IsNumber()
    currentParticipants?: number
}