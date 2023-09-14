import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Profile } from './typeorm/entities/Profile';
import { User } from './typeorm/entities/User';
import { UsersModule } from './users/users.module';
import { GamesModule } from './games/games.module';
import { Game } from './games/entities/game.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port:  3306,
    username: 'root',
    password: '',
    database: 'netballscore',
    entities: [User, Profile, Game],
    synchronize: true
  }), UsersModule, GamesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
