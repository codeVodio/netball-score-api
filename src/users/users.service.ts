import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { CreateUserParams, CreateUserProfileParams, UpdateUserParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

    findUsers() {
        return this.userRepository.find();
    }

    findById(id:number){
        return  this.userRepository.findOne({where:{ id }});
    }

    createUser(createUserDetails: CreateUserParams) {
        const newUser = this.userRepository.create({ ...createUserDetails, createdAt: new Date(),
        });
        return this.userRepository.save(newUser)
    }

    updateUser(id: number, updateUserDetails: UpdateUserParams) {
        return this.userRepository.update({ id}, {...updateUserDetails})
    }

    deleteUser(id:number) {
        return  this.userRepository.delete({id});
    }

    async createUserProfile(id: number,createUserProfileDetails: CreateUserProfileParams) {
        const user = await this.userRepository.findOneBy({ id })
        if (!user)
            throw new HttpException('User Not Found', HttpStatus.BAD_REQUEST)
    } 
}
