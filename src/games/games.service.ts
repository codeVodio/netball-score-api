import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateGameParams } from 'src/utils/types';
import { Repository } from 'typeorm';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './entities/game.entity';

@Injectable()
export class GamesService {

  constructor(@InjectRepository(Game) private gameRepository: Repository<Game>) {}

  create(createGameDetails: CreateGameParams) {
    const newUser = this.gameRepository.create({ ...createGameDetails,
    });
    return this.gameRepository.save(newUser)
  }

  findAll() {
    return this.gameRepository.find();
  }

  findOne(id: number) {
    return  this.gameRepository.findOne({where:{ id }});
  }

  update(id: number, updateGameDetails: UpdateGameDto) {
    return this.gameRepository.update({id}, {...updateGameDetails})
  }

  remove(id: number) {
    return  this.gameRepository.delete({id});
  }
}
