import { AxiosResponse } from "axios";
import { Login, LoginResponse } from "../../models/interfaces/auth";
import api from "../api";
import { Animals, RegisterAnimalFormInputs } from "../../models/interfaces/animals";


export const AnimalsAPI = () => {
    
    const getAllAnimals = (): Promise<AxiosResponse<Animals[]>> => {
        return api.get<Animals[]>(`/animals`);
    };

    const updateStatus = (id: number): Promise<AxiosResponse<Animals>> => {
        return api.patch<Animals>(`/animals/${id}/status`);
    };

    const registerAnimal = (animal: RegisterAnimalFormInputs): Promise<AxiosResponse<Animals>> => {
        return api.post<Animals>(`/animals`, animal);
    };

    return {
        getAllAnimals,
        updateStatus,
        registerAnimal
    };
  };