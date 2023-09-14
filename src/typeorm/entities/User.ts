import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./Profile";

@Entity({ name: 'users'})
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @CreateDateColumn()
    createdAt: Date;

    @OneToOne(() => Profile)
    @JoinColumn()
    profile:Profile;
}