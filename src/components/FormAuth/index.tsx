import React from 'react'
import * as S from './styles'
import Input from '../input'
import FormAuthType from '../../models/enums/typeFormAuth'
import { useFormAuth } from './hooks/FormAuthHook'

const FormAuth = () => {
    const { onSubmit, errors, handleSubmit, register, typeForm, setTypeForm } = useFormAuth()

    return (
        <S.ContainerFormAndImage>
            <S.ContainerForm onSubmit={handleSubmit(onSubmit)}>
                <S.Title>{typeForm === FormAuthType.LOGIN ? "Fazer login" : "Criar conta"}</S.Title>
                <S.Description>{typeForm === FormAuthType.LOGIN ? "Bem-vindo de volta! Faça o seu login para acessar o seu painel" : "Bem-vindo! preencha os campos abaixo para criar a sua conta."}</S.Description>
                { typeForm === FormAuthType.REGISTER && <Input placeholder='Username' {...register("username")} error={errors.username?.message}/> }
                <Input placeholder='Email' {...register("email")} error={errors.email?.message}/>
                <Input placeholder='Senha' {...register("password")} error={errors.password?.message}/>
                { typeForm === FormAuthType.REGISTER && <Input placeholder='Confirmar senha' {...register("confirmPassword")} error={errors.confirmPassword?.message}/> }
                <S.ConfirmButton type='submit'>{typeForm === FormAuthType.LOGIN ? "Fazer login" : "Criar conta"}</S.ConfirmButton>
                <S.ContainerDescriptionHaveAccount>
                    <S.DescriptionHaveAccount>Você não tem uma conta?</S.DescriptionHaveAccount>
                    <S.DescriptionLogin onClick={() => typeForm === FormAuthType.LOGIN ? setTypeForm(FormAuthType.REGISTER) : setTypeForm(FormAuthType.LOGIN)}>Faça seu {typeForm === FormAuthType.LOGIN ? "registro" : "login"}</S.DescriptionLogin>
                </S.ContainerDescriptionHaveAccount>
            </S.ContainerForm>
        </S.ContainerFormAndImage>
    )
}

export default FormAuth