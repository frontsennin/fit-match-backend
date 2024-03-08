import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class TrainerModel {
    @Prop({ unique: true, required: true })
    trainerId:number;

    @Prop({ required: true })
    cpf: string;

    @Prop({ required: true })
    crefi: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    phoneNumber: string;

    @Prop({ required: true })
    userId:number;

    @Prop({ required: true })
    specialization: string[] = [];

    @Prop({ required: true })
    availability: boolean = true;
}

export const TrainerSchema = SchemaFactory.createForClass(TrainerModel)