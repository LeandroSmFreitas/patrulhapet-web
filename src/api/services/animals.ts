import { AxiosError, AxiosResponse } from "axios";
import HttpStatus from "../../models/enums/httpStatus";
import { Animals, RegisterAnimalFormInputs } from "../../models/interfaces/animals";
import { AnimalsAPI } from "../animals/AnimalsApi";
import AuthUtils from "../../utils/auth-utils";


export const getAllAnimals = async (): Promise<Animals[]> => {
    try {
      const result: AxiosResponse<Animals[], any> = await AnimalsAPI().getAllAnimals();
      console.log(result.status)
      if (result.status === HttpStatus.OK && result.data != null) {
        return Promise.resolve(result.data);
      } else if (result.status === HttpStatus.BAD_REQUEST) {
        return Promise.reject({ status: 404 } as AxiosResponse);
      }else if (result.status === HttpStatus.FORBIDDEN) {
        console.log("aqui")
        AuthUtils.removeToken()
        return Promise.reject({ status: 403 } as AxiosResponse);
      } else {
        return Promise.reject({ status: result.status } as AxiosResponse);
      }
    } catch (error) {
      const { response, status } = error as AxiosError;
      if (status === HttpStatus.FORBIDDEN) {
        AuthUtils.removeToken()
        return Promise.reject({ status: 403 } as AxiosResponse);
      } 

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
      }  else if (result.status === HttpStatus.FORBIDDEN) {
        AuthUtils.removeToken()
        return Promise.reject({ status: 403 } as AxiosResponse);
      }else {
        return Promise.reject({ status: result.status } as AxiosResponse);
      }
    } catch (error) {
      const { response } = error as AxiosError;

      return Promise.reject(response);
    }
}; 

export const registerAnimal = async (animal: RegisterAnimalFormInputs): Promise<Animals> => {
    try {
      const result: AxiosResponse<Animals, any> = await AnimalsAPI().registerAnimal(animal);
      console.log(result)
      if (result.status === HttpStatus.CREATED && result.data != null) {
        return Promise.resolve(result.data);
      } else if (result.status === HttpStatus.BAD_REQUEST) {
        return Promise.reject({ status: 404 } as AxiosResponse);
      }  else if (result.status === HttpStatus.FORBIDDEN) {
        AuthUtils.removeToken()
        return Promise.reject({ status: 403 } as AxiosResponse);
      }else {
        return Promise.reject({ status: result.status } as AxiosResponse);
      }
    } catch (error) {
      const { response } = error as AxiosError;
      console.log(response)
      return Promise.reject(response);
    }
}; 