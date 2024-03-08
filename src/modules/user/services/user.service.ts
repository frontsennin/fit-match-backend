/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserModel } from 'src/models/user.model';
import { CreateUserDto } from '../dto/CreateUser.dto';

@Injectable()
export class UserService {

    constructor(
        @InjectModel(UserModel.name) private userModel: Model<UserModel>
    ) {}

    createUser(createUserDto: CreateUserDto) {
        const newUser = new this.userModel(createUserDto);

        return newUser.save();
    }
}
