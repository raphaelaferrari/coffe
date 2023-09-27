import styled from "styled-components";

export const Main = styled.main`
    background-color: #ffe6a7;
    width: 100%;
    height: auto;
`

export const Section = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const Card = styled.div`
    height: 350px;
    width: 300px;
    border: 1px solid #432818;
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ImgCard = styled.img`
    margin-top: 25px;
	height: 200px;
    width: 250px;
`

export const Div = styled.div`
margin-top: 5px;
    display: flex;
`

export const Button = styled.button`
    height: 100%;
    font-size: 16px;
    margin: 0 20px;
    background-color: #ffe6a7;
    border: none;
`

export const ButtonAdc = styled.button`
    margin-top: 5px;
    height: 30px;
    width: 60%;
    border-radius: 10px;
    background-color: #432818;
    color: white;
    font-size: 14px;
    border: none;
`