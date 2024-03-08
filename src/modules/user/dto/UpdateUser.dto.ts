import { IsOptional, IsString } from "class-validator";
import { Role } from "src/models/role.model";

export class UpdateUserDto {
    @IsOptional()
    @IsString()
    username?: string;

    @IsOptional()
    @IsString()
    cpf?: string;

    @IsOptional()
    @IsString()
    email?: string;

    @IsOptional()
    @IsString()
    phoneNumber?: string;

    @IsOptional()
    @IsString()
    password?: string;

    @IsOptional()
    @IsString()
    profilePicture?: string;

    @IsOptional()
    role?: Role;
}