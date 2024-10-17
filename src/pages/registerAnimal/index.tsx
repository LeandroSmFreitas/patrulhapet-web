import React from 'react'
import * as S from './styles'
import SideBar from '../../components/sideBar'
import Input from '../../components/input'

const RegisterAnimal = () => {
  return (
    <S.Container>
        <SideBar/>
        <S.ContainerDash>
            <S.ContainerForm>
            <S.TitleDash>Cadastre o novo pet para adoção!</S.TitleDash>
                <Input placeholder='Nome' />
                <Input placeholder='Descrição' />
                <Input placeholder='Url da image' />
            </S.ContainerForm>
        </S.ContainerDash>
    </S.Container>
  )
}

export default RegisterAnimal