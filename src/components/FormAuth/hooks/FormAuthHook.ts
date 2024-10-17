import * as Yup from 'yup';
import FormAuthType from '../../../models/enums/typeFormAuth';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRef, useState } from 'react';
import { login, registerAuth } from '../../../api/services/auth';
import AuthUtils from '../../../utils/auth-utils';
import { redirect, useNavigate } from 'react-router-dom';
import { Register } from '../../../models/interfaces/auth';
import { Toast, ToastMessage } from 'primereact/toast';

interface Props {
    typeForm: FormAuthType
}

interface LoginFormInputs {
    email: string;
    password: string;
}

interface RegisterFormInputs {
    username: string; 
    imageUrl: string; 
    email: string;
    password: string;
    confirmPassword: string;
}

export const useFormAuth = () => {
    const [typeForm, setTypeForm] = useState(FormAuthType.LOGIN)
    const [toastMessage, setToastMessage] = useState("")
    const navigate = useNavigate()
    const toastTopRight = useRef(null);

    const loginSchema = Yup.object().shape({
        email: Yup.string().email('Digite um email válido').required('Email é obrigatório'),
        password: Yup.string().required('Senha é obrigatória'),
    });
      
    
    const registerSchema = Yup.object().shape({
        username: Yup.string().required('Username é obrigatório'),
        email: Yup.string().email('Digite um email válido').required('Email é obrigatório'),
        imageUrl: Yup.string().required('Email é obrigatório'),
        password: Yup.string().required('Senha é obrigatória'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password')], 'Senhas não coincidem')
          .required('Confirmar senha é obrigatório'),
    });

    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs & RegisterFormInputs>({
        resolver: yupResolver(typeForm === FormAuthType.REGISTER ? registerSchema : loginSchema),
      });
    
    const onSubmit: SubmitHandler<LoginFormInputs & RegisterFormInputs> = async (data) => {
        const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
        if(typeForm === FormAuthType.LOGIN){
            const res = await login(data)
            if(res.token){
                showMessage(toastTopRight, "success", "Login feito com sucesso")
                AuthUtils.setToken(res.token)
                await delay(2000);
                navigate("/dashboard")
            }else{
                showMessage(toastTopRight, "error", "senha ou email errado")
            }
        }else{
            const res = await registerAuth(data as unknown as Register)
            if(res.token){
                showMessage(toastTopRight, "success", "conta criada com sucesso")
                AuthUtils.setToken(res.token)
                await delay(2000);
                navigate("/dashboard")
            }else{
                showMessage(toastTopRight, "error", "algo deu errado, tente novamente!")
            }
        }
    };

    const showMessage = (ref: React.RefObject<Toast>, severity: ToastMessage['severity'], message: string) => {
        ref.current?.show({ severity: severity, summary: message, detail: message, life: 3000 });
    };

    return {
        onSubmit,
        register,
        handleSubmit,
        errors,
        typeForm,
        setTypeForm,
        toastTopRight
    }
      
}