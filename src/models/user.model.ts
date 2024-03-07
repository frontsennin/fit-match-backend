import { Role } from "./role.model";

export class UserModel {
    userId: number;
    username: string;
    cpf: string;
    email: string;
    phoneNumber: string;
    password: string;
    profilePicture: string;
    role: Role
}