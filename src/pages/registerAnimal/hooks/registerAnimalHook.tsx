import React, { useEffect, useRef } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import AuthUtils from '../../../utils/auth-utils';
import { useNavigate } from 'react-router-dom';
import { RegisterAnimalFormInputs } from '../../../models/interfaces/animals';
import { registerAnimal } from '../../../api/services/animals';
import { AnimalCategory, AnimalStatus } from '../../../models/enums/Animals';
import { ToastMessage } from 'primereact/toast';

const useRegisterAnimal = () => {
    const navigate = useNavigate()
    const toastTopRight = useRef(null);

    useEffect(() => {
        !AuthUtils.isAuthenticated() && navigate("/")
    },[])

    const schema = Yup.object().shape({
        name: Yup.string().required('Campo é obrigatório'),
        description: Yup.string().required('Campo é obrigatório'),
        imageUrl: Yup.string().required('Campo é obrigatório'),
        birthDate: Yup.date().required('Campo é obrigatório'),
        status: Yup.string().required('Seleção é obrigatória'),
        category: Yup.string().required('Seleção é obrigatória'),
    });
      
    const { control, register, handleSubmit, formState: { errors } } = useForm<RegisterAnimalFormInputs>({
        resolver: yupResolver(schema),
    });
    
    const onSubmit: SubmitHandler<RegisterAnimalFormInputs> = async (data) => {
        const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
        const res = await registerAnimal({
            category: data.category === "Cachorro" ? AnimalCategory.DOG : AnimalCategory.CAT,
            status: data.status === "Adotado" ? AnimalStatus.DISABLED : AnimalStatus.ENABLED,
            name: data.name,
            description: data.description,
            birthDate: data.birthDate,
            imageUrl: data.imageUrl
        })
        if(res.name){
            showMessage(toastTopRight, "success", "Animal cadastrado")
            await delay(2000)
            navigate("/dashboard")
        }else{
            showMessage(toastTopRight, "error", "Erro ao cadastrar o animal, tente novamente!")
        }
    };

    const showMessage = (ref: React.RefObject<Toast>, severity: ToastMessage['severity'], message: string) => {
        ref.current?.show({ severity: severity, summary: message, detail: message, life: 3000 });
    };

    return {
        control,
        handleSubmit,
        errors,
        onSubmit,
        register,
        toastTopRight
    }
}

export default useRegisterAnimal