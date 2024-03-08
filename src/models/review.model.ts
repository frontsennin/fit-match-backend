import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class ReviewModel {
    @Prop({ unique: true, required: true })
    reviewId: number;

    @Prop({ required: true })
    userId: number;

    @Prop({ required: true })
    trainerId:number;

    @Prop({ required: true })
    rating: number;

    @Prop({ required: true })
    comment: string;

    @Prop({ required: true })
    createdAt: Date;
}

export const ReviewSchema = SchemaFactory.createForClass(ReviewModel)