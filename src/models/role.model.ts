import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Role {
    @Prop({ required: true })
    roleId: RoleType;

    @Prop({ required: true })
    roleTitle: string;
}

export enum RoleType {
    USER,
    TRAINER,
    ADMIN
}

export const RoleSchema = SchemaFactory.createForClass(Role)