import { PartialType } from '@nestjs/mapped-types';
import { CreateGameDto } from './create-game.dto';

export class UpdateGameDto extends PartialType(CreateGameDto) {
    team1: string;
    team1Score: number;
    team2: string;
    team2Score: number;
    league: string;
    date: string;
}
