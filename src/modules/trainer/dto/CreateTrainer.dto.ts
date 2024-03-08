import { IsArray, IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateTrainerDto {
    @IsNotEmpty()
    @IsString()
    cpf: string;

    @IsNotEmpty()
    @IsString()
    crefi: string;

    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    phoneNumber: string;

    @IsNotEmpty()
    @IsNumber()
    userId:number;

    @IsNotEmpty()
    @IsArray()
    specialization: string[] = [];

    @IsNotEmpty()
    @IsBoolean()
    availability: boolean = true;
}