import { AxiosError, AxiosResponse } from "axios";
import HttpStatus from "../../models/enums/httpStatus";
import { AuthAPI } from "../auth/authApi";
import { Login, LoginResponse } from "../../models/interfaces/auth";


export const login = async (formLogin: Login): Promise<LoginResponse> => {
    try {
      const result: AxiosResponse<LoginResponse, any> = await AuthAPI().postAuth(formLogin);
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