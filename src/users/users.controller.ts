import { Controller, Get, Post, Body } from '@nestjs/common';
//import { Body } from '@nestjs/common/decorators';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers() {}

  @Post()
  createUsers(@Body() createUserDto: CreateUserDto) {
    this.usersService.createUser(createUserDto);
  }
}
