import styled from "styled-components";

export const HaederStyle = styled.header`
    background-color: #432818;
    color: white;
    height: 70px;
    
    padding: 0 10px 0 10px;
    @media screen and (max-device-width : 480px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (min-device-width : 481px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    @media screen and (min-device-width : 1200px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

export const H1= styled.h1`
    @media screen and (max-device-width : 480px) {
        display: grid;
        grid-column: 1/2;
        align-items: center;
    }

    @media screen and (min-device-width : 481px) {
        
    }

    @media screen and (min-device-width : 1200px) {
        
    }
`

export const Nav= styled.nav`
    display: grid;
    grid-column: 2/3;
    justify-content: center;
    align-items: center;
    @media screen and (max-device-width : 480px) {
        
    }

    @media screen and (min-device-width : 370px) {
        
    }

    @media screen and (min-device-width : 1200px) {
        
    }
`

export const Ul = styled.ul`
     @media screen and (max-device-width : 480px) {
        
        display: none;
        z-index: 1;
        position: absolute;
    }
    
    @media screen and (max-device-width : 300px) {
        margin: 0 0 0 60px;
    }

    @media screen and (min-device-width : 301px) and (max-device-width : 350px) {
        margin: 0 50px 0 0;
    }

    @media screen and (max-device-width : 450px) {
        margin-left: 90%;
    }
    
    @media screen and (max-device-width : 480px) {
        margin-left: 95%;
    }

    @media screen and (min-device-width : 481px) {
        display: flex;
        list-style: none;
    }

    @media screen and (min-device-width : 1200px) {
        display: flex;
        list-style: none;
    }
    
`

export const DivMenu = styled.div`
    @media screen and (max-device-width : 480px) {
        position: relative;
        display: inline-block;
        margin-right: 15px;
        &:hover ${Ul} {
            display: block;
        }
        
    }

    @media screen and (min-device-width : 481px) {
        
    }

    @media screen and (min-device-width : 1200px) {
        
    }
    
`

export const ButtonMenu = styled.button`
@media screen and (max-device-width : 480px) {
    display: inline-block;
    color: white;
    background-color: #432818;
    border: none;
    width: 14vw;
    
    }
    @media screen and (max-device-width : 300px) {
        padding-right: 30px;
    }

    @media screen and (min-device-width : 301px) and (max-device-width : 350px) {
        margin-left: 80%;
    }

    @media screen and (max-device-width : 450px) {
        margin-left: 90%;
    }
    
    @media screen and (max-device-width : 480px) {
        margin-left: 95%;
    }

    @media screen and (min-device-width : 481px) {
        display: none;
    }

    @media screen and (min-device-width : 1200px) {
        display: none;
    }
    
`


export const Li = styled.button`

@media screen and (max-device-width : 480px) {
    width: 70px;
    text-decoration: none;
    display: block;
    display: flex;
    /* align-items: center; */
    background-color: #ffe6a7;
    color: black;
    border: 1px solid #432818;
    }

    @media screen and (min-device-width : 481px) {
        background-color: #432818;
        color: white;
        border: none;
        margin-left: 10px;
    }

    @media screen and (min-device-width : 1200px) {
        background-color: #432818;
        color: white;
        border: none;
        margin-left: 10px;
    }
    
`