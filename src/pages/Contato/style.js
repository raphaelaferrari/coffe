import styled from "styled-components";

export const Main = styled.main`
    height: 800px;
    background-color: #ffe6a7;
    width: 100%;
`

export const DivText = styled.div`
    margin: 0 0 0 10%; 
    
`

export const H1 = styled.h1`
    padding: 50px 0 0 0;
`
export const P = styled.p`
    padding: 30px 0 0 0;
`

export const Form = styled.form`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Input = styled.input`
    margin-bottom: 30px;
    @media screen and (max-device-width : 480px) {
        width: 80%;
        height: 3vh;
	}

    @media screen and (min-device-width : 481px) {
        width: 70%;
        height: 5vh;
    }

    @media screen and (min-device-width : 1200px) {
        width: 40%;
        height: 5vh;
    }
`

export const Textarea = styled.textarea`
    margin-bottom: 30px;
    resize: none;
    @media screen and (max-device-width : 480px) {
        width: 80%;
        height: 20vh;
	}

    @media screen and (min-device-width : 481px) {
        width: 70%;
        height: 20vh;
    }

    @media screen and (min-device-width : 1200px) {
        width: 40%;
        height: 20vh;
    }
`

export const Button = styled.button`
    width: 100px;
    height: 30px;
`