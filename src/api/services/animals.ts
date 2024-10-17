import { AxiosError, AxiosResponse } from "axios";
import HttpStatus from "../../models/enums/httpStatus";
import { Animals } from "../../models/interfaces/animals";
import { AnimalsAPI } from "../animals/AnimalsApi";


export const getAllAnimals = async (): Promise<Animals[]> => {
    try {
      const result: AxiosResponse<Animals[], any> = await AnimalsAPI().getAllAnimals();
      if (result.status === HttpStatus.OK && result.data != null) {
        return Promise.resolve(result.data);
      } else if (result.status === HttpStatus.BAD_REQUEST) {
        return Promise.reject({ status: 404 } as AxiosResponse);
      } else {
        return Promise.reject({ status: result.status } as AxiosResponse);
      }
    } catch (error) {
      const { response } = error as AxiosError;

      return Promise.reject(response);
    }
}; 

export const updateStatus = async (id: number): Promise<Animals> => {
    try {
      const result: AxiosResponse<Animals, any> = await AnimalsAPI().updateStatus(id);
      if (result.status === HttpStatus.OK && result.data != null) {
        return Promise.resolve(result.data);
      } else if (result.status === HttpStatus.BAD_REQUEST) {
        return Promise.reject({ status: 404 } as AxiosResponse);
      } else {
        return Promise.reject({ status: result.status } as AxiosResponse);
      }
    } catch (error) {
      const { response } = error as AxiosError;

      return Promise.reject(response);
    }
}; 