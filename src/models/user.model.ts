import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Role } from "./role.model";

@Schema()
export class UserModel {
    @Prop({ unique: true})
    userId: number;

    @Prop({ required: true })
    username: string;

    @Prop({ required: true })
    cpf: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    phoneNumber: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: true })
    profilePicture: string;

    @Prop({ required: true })
    role: Role;
}

export const UserSchema = SchemaFactory.createForClass(UserModel)