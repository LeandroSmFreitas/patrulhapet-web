import { AxiosResponse } from "axios";
import { Login, LoginResponse, Register } from "../../models/interfaces/auth";
import api from "../api";


export const AuthAPI = () => {
    
    const postAuth = (formLogin: Login): Promise<AxiosResponse<LoginResponse>> => {
        return api.post<LoginResponse>(`/auth/login`, formLogin);
    };

    const registerAuth = (formRegister: Register): Promise<AxiosResponse<LoginResponse>> => {
        return api.post<LoginResponse>(`/auth/register`, formRegister);
    };

    return {
        postAuth,
        registerAuth
    };
  };