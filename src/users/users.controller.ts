import { Controller, Get, Post, Body, Param, ParseIntPipe, Put, Delete } from '@nestjs/common';
//import { Body } from '@nestjs/common/decorators';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { UpdateUserDto } from './dtos/UpdateUser.dto';
import { CreateUserProfileDto } from './dtos/CreateUserProfile.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUsers() {
    const users = await this.usersService.findUsers();

    return users;
  }

  @Get(':id')
  async getUserById(@Param('id', ParseIntPipe) id:number){
    const user=await  this.usersService.findById(id);
    return user;
  }

  @Post()
  createUsers(@Body() createUserDto: CreateUserDto) {
    this.usersService.createUser(createUserDto);
  }

  @Put(':id')
 async  updataUserById(@Param('id', ParseIntPipe) id:number, 
  @Body() updateUserDto:UpdateUserDto){
    await this.usersService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
    async deleteUserById(@Param('id', ParseIntPipe) id:number){
      await this.usersService.deleteUser(id);
    }

  @Post(':id/profiles')
  createUserProfile(@Param('id', ParseIntPipe) id: number,
  @Body() createUserProfileDto: CreateUserProfileDto){}
}
