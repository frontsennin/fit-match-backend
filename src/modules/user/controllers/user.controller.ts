/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { UserModel } from 'src/models/user.model';
import { CreateUserDto } from '../dto/CreateUser.dto';
import { UserService } from '../services/user.service';

@ApiTags('user')
@Controller('user')
export class UserController {

    constructor(
        private userService: UserService
    ) {}

    @Get()
    Get() {
        return 'user'
    }

    @Post()
    @UsePipes(new ValidationPipe())
    @ApiBody({
        type: CreateUserDto,
        examples: {
            body: {
                summary: "Empty Body",
                description: "Description for when an empty body is used",
                value: {} as CreateUserDto
            },
        }
    })
    CreateUser(@Body() createUserDto:CreateUserDto) {
        return this.userService .createUser(createUserDto)
    }
}
