import React from 'react'
import * as S from './styles'
import { FaHouse, FaPlus } from 'react-icons/fa6'
import { useSideBar } from './hooks/sideBarHook'
import { IoExitOutline } from 'react-icons/io5'

const SideBar = () => {
    const { selectedPage, handleChangePage, handleLoggout } = useSideBar()

    return (
        <S.Container>
            <S.ContainerTitle>
                <S.Title>PatrulhaPet</S.Title>
            </S.ContainerTitle>
            <S.ContainerButtonAndImage isPage={selectedPage("/dashboard")} onClick={() => handleChangePage("/dashboard")}>
                <FaHouse/>
                <S.TitleButton>Dashboard</S.TitleButton>
            </S.ContainerButtonAndImage>
            <S.ContainerButtonAndImage isPage={selectedPage("/register/animal")} onClick={() => handleChangePage("/register/animal")}>
                <FaPlus/>
                <S.TitleButton>Cadastrar animal</S.TitleButton>
            </S.ContainerButtonAndImage>
            <S.ContainerLoggout onClick={handleLoggout}>
                <S.TitleLoggout>Sair</S.TitleLoggout>
                <IoExitOutline />
            </S.ContainerLoggout>
        </S.Container>
    )
}

export default SideBar