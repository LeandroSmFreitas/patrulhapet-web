import React from 'react'
import * as S from './styles'
import SideBar from '../../components/sideBar'
import Input from '../../components/input'
import DropdownStyled from '../../components/dropdown'
import { Controller } from 'react-hook-form'
import useRegisterAnimal from './hooks/registerAnimalHook'
import { Toast } from 'primereact/toast'

const RegisterAnimal = () => {
    const { control, handleSubmit, onSubmit, errors, register, toastTopRight } = useRegisterAnimal()
  return (
    <S.Container>
        <SideBar/>
        <S.ContainerDash>
            <S.ContainerForm onSubmit={handleSubmit(onSubmit)}>
            <S.TitleDash>Cadastre o novo pet para adoção!</S.TitleDash>
                <Input placeholder='Nome' {...register("name")} error={errors.name?.message}/>
                <Input placeholder='Descrição' {...register("description")} error={errors.description?.message}/>
                <Input placeholder='Url da image' {...register("imageUrl")} error={errors.imageUrl?.message}/>
                <Input placeholder='data de nascimento' type='date' {...register("birthDate")} error={errors.birthDate?.message}/>
                <Controller
                    name="category"
                    control={control}
                    render={({ field }) => <DropdownStyled error={errors.category?.message} placeholder='Selecione a categoria' options={["Cachorro", "Gato"]} {...field} />}
                />
                <Controller
                    name="status"
                    control={control}
                    render={({ field }) => <DropdownStyled error={errors.status?.message} placeholder='Selecione o status' options={["Disponível", "Adotado"]} {...field} />}
                />
                <S.ConfirmButton type='submit'>Cadastrar animal</S.ConfirmButton>
            </S.ContainerForm>
        </S.ContainerDash>
        <Toast position="top-right" ref={toastTopRight}/>
    </S.Container>
  )
}

export default RegisterAnimal