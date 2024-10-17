

export interface Login{
    email: string;
    password: string;
}

export interface LoginResponse{
    token: string;
    name: string;
}

export interface Register{
    username: string;
    email: string;
    password: string;
    imageUrl: string;
}