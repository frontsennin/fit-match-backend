export class Role {
    roleId: RoleType;
    roleTitle: string;
}

export enum RoleType {
    USER,
    TRAINER,
    ADMIN
}