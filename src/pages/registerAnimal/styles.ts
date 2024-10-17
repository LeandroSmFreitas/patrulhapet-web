import styled from "styled-components"

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

export const ContainerForm = styled.form`
    width: 50%;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 70px;
    border-radius: 20px;
`