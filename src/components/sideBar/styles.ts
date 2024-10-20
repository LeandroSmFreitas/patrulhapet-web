import styled from "styled-components";

interface Props {
    isPage?: boolean;
}

export const Container = styled.div`
    width: 280px;
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: transparent;
`

export const ContainerTitle = styled.div`
    width: 90%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border-bottom: 1px solid #606873;
    margin-bottom: 40px;
`

export const Title = styled.span`
    font-family: 'Catamaran';
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 42px;
    text-align: center;
    color: #FFFFFF;
`

export const ContainerButtonAndImage = styled.button<Props>`
    width: 90%;
    height: 48px;
    display: flex;
    align-items: center;
    background: transparent;
    outline: none;
    border: ${({ isPage }) => isPage ? "1px solid white" : "none"};
`

export const TitleButton = styled.span`
    font-family: 'Catamaran';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    color: #FFFFFF;
    margin-left: 10px;
`

export const ContainerLoggout = styled.button`
    width: 220px;
    height: 64px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px 12px 12px;
    gap: 12px;
    background: #606873;
    border: 1px solid #606873;
    border-radius: 14px;
    position: absolute;
    bottom: 20px;
    cursor: pointer;
    outline: none;
`

export const TitleLoggout = styled.span`
    font-family: 'Catamaran';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    color: #FFFFFF;
    margin-left: 10px;
`

