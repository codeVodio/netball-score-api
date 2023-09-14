export type CreateUserParams = {
    username : string;
    password: string;
}

export type UpdateUserParams = {
    username : string;
    password: string;
}

export type CreateUserProfileParams = {
    firstname: string;
    lastname: string;
    age: number;
    dob: string;
}

export type CreateGameParams = {
    team1: string;
    team1Score: number;
    team2: string;
    team2Score: number;
    league: string;
    date: string;
}