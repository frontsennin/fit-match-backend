import { IsArray, IsBoolean, IsOptional, IsNumber, IsString } from "class-validator";

export class UpdateTrainerDto {
    @IsOptional()
    @IsString()
    cpf?: string;

    @IsOptional()
    @IsString()
    crefi?: string;

    @IsOptional()
    @IsString()
    email?: string;

    @IsOptional()
    @IsString()
    phoneNumber?: string;

    @IsOptional()
    @IsNumber()
    userId?:number;

    @IsOptional()
    @IsArray()
    specialization?: string[] = [];

    @IsOptional()
    @IsBoolean()
    availability?: boolean = true;
}