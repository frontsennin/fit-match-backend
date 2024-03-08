import { IsDate, IsOptional, IsNumber, IsString } from "class-validator";

export class UpdateReviewDto {
    @IsOptional()
    @IsNumber()
    userId?: number;

    @IsOptional()
    @IsNumber()
    trainerId?: number;

    @IsOptional()
    @IsNumber()
    rating?: number;

    @IsOptional()
    @IsString()
    comment?: string;

    @IsOptional()
    @IsDate()
    createdAt?: Date;
}