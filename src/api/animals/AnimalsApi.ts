import { AxiosResponse } from "axios";
import { Login, LoginResponse } from "../../models/interfaces/auth";
import api from "../api";
import { Animals } from "../../models/interfaces/animals";


export const AnimalsAPI = () => {
    
    const getAllAnimals = (): Promise<AxiosResponse<Animals[]>> => {
        return api.get<Animals[]>(`/animals`);
    };

    const updateStatus = (id: number): Promise<AxiosResponse<Animals>> => {
        return api.patch<Animals>(`/animals/${id}/status`);
    };

    return {
        getAllAnimals,
        updateStatus
    };
  };