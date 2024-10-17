import { AxiosResponse } from "axios";
import { Login, LoginResponse } from "../../models/interfaces/auth";
import api from "../api";


export const AuthAPI = () => {
    
    const postAuth = (formLogin: Login): Promise<AxiosResponse<LoginResponse>> => {
        return api.post<LoginResponse>(`/auth/login`, formLogin);
    };

    return {
        postAuth
    };
  };