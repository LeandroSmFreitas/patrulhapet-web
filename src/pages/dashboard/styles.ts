import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    background: #101113;
    align-items: center;
`

export const ContainerDash = styled.div`
    width: calc(100% - 290px);
    min-height: calc(100vh - 40px);
    max-height: calc(100vh - 40px);
    border-radius: 20px;
    background: #2a3240;
    display:flex;
    flex-direction: column;
    align-items: center;
`

export const ContainerTableAndTitle = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const ContainerTable = styled.div`
    width: 100%;
`

export const TitleDash = styled.span`
    font-family: 'Catamaran';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 42px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 40px;
    margin-top: 40px;
`