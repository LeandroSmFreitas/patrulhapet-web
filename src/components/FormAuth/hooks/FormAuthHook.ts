import * as Yup from 'yup';
import FormAuthType from '../../../models/enums/typeFormAuth';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { login } from '../../../api/services/auth';
import AuthUtils from '../../../utils/auth-utils';
import { redirect, useNavigate } from 'react-router-dom';

interface Props {
    typeForm: FormAuthType
}

interface LoginFormInputs {
    email: string;
    password: string;
}

interface RegisterFormInputs {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export const useFormAuth = () => {
    const [typeForm, setTypeForm] = useState(FormAuthType.LOGIN)
    const navigate = useNavigate()

    const loginSchema = Yup.object().shape({
        email: Yup.string().email('Digite um email válido').required('Email é obrigatório'),
        password: Yup.string().required('Senha é obrigatória'),
    });
      
    
    const registerSchema = Yup.object().shape({
        username: Yup.string().required('Username é obrigatório'),
        email: Yup.string().email('Digite um email válido').required('Email é obrigatório'),
        password: Yup.string().required('Senha é obrigatória'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password')], 'Senhas não coincidem')
          .required('Confirmar senha é obrigatório'),
    });

    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs & RegisterFormInputs>({
        resolver: yupResolver(typeForm === FormAuthType.REGISTER ? registerSchema : loginSchema),
      });
    
    const onSubmit: SubmitHandler<LoginFormInputs & RegisterFormInputs> = async (data) => {
        if(typeForm === FormAuthType.LOGIN){
            const res = await login(data)
            AuthUtils.setToken(res.token)
            navigate("/dashboard")
        }
    };

    return {
        onSubmit,
        register,
        handleSubmit,
        errors,
        typeForm,
        setTypeForm
    }
      
}