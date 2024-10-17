import styled from "styled-components"

export const ContainerFormAndImage = styled.div`
    width: 500px;
    height: 854px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px;
`

export const ContainerForm = styled.form`
    width: 100%;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 70px;
    background-color: #39434f;
    border-radius: 20px;
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

export const Description = styled.span`
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    color: #D9DFE6;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
`

export const ConfirmButton = styled.button`
    width: 100%;
    height: 48px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #1B85F3;
    border-radius: 14px;
    margin-top: 30px;
    outline: none;
`

export const ContainerDescriptionHaveAccount = styled.div`
    display: flex;
    margin-top: 20px;
`

export const DescriptionHaveAccount = styled.div`
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #C6CED9;
`

export const DescriptionLogin = styled.div`
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #74b4FF;
    margin-left: 10px;
    cursor: pointer;
`