import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class FitnessClassModel {
    @Prop({ unique: true, required: true })
    classId: number;

    @Prop({ required: true })
    className: string;

    @Prop({ required: true })
    maxParticipants: number;

    @Prop({ required: true })
    currentParticipants: number
}

export const FitnessClassSchema = SchemaFactory.createForClass(FitnessClassModel)