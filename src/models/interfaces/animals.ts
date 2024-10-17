import { AnimalCategory, AnimalStatus } from "../enums/Animals";

export interface Animals {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    birthDate: string;
    category: AnimalCategory;
    status: AnimalStatus;
}