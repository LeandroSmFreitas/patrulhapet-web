import { AnimalCategory, AnimalStatus } from "../enums/Animals";

export interface Animals {
    id: number;
    name: string;
    description: string;
    age: number;
    imageUrl: string;
    birthDate: string;
    category: AnimalCategory;
    status: AnimalStatus;
}

export interface RegisterAnimalFormInputs {
    name: string;
    description: string;
    imageUrl: string;
    birthDate: Date;
    status: string;
    category: string;
  }