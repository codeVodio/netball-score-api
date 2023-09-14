import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'games'})
export class Game {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    team1: string;

    @Column()
    team1Score: number;

    @Column()
    team2: string;

    @Column()
    team2Score: number;

    @Column()
    league: string;

    @Column()
    date: string;
}
