import styled from "styled-components";

export const FooterStyle = styled.footer`
    background-color: #432818;
    color: white;
    display: grid;
    @media screen and (max-device-width : 480px) {
        
        grid-template-rows: 1fr 2fr 1fr 1fr;
        height: 220px;
    }
    
    @media screen and (min-device-width : 481px) {
        height: 150px;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
    }

    @media screen and (min-device-width : 1200px) {
        height: 150px;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
    }
`

export const DivName = styled.div`
    font-size: 2vh;
    margin: 10px;
    align-self: center;
    
    @media screen and (max-device-width : 480px) {
        
        grid-row: 1/2;
    }
    
    @media screen and (min-device-width : 481px) {
        grid-column: 1/2;
        grid-row: 1/2;
    }

    @media screen and (min-device-width : 1200px) {
        grid-column: 1/2;
        grid-row: 1/2;
    }
`

export const DivNav = styled.div`
    margin: 10px;
    list-style: none;
    @media screen and (max-device-width : 480px) {
        
        grid-row: 2/3;
    }
    
    @media screen and (min-device-width : 481px) {
        grid-column: 2/3;
        grid-row: 1/2;
        align-self: center;
    justify-self: center;
    }

    @media screen and (min-device-width : 1200px) {
        grid-column: 2/3;
        grid-row: 1/2;
        align-self: center;
    justify-self: center;
    }
`
export const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const Img = styled.img`
    margin-top: 10px;
    height: 40px;
    @media screen and (max-device-width : 480px) {
        margin-left: 10px;
        grid-row: 3/4;
        
    }
    
    @media screen and (min-device-width : 481px) {
        justify-self: center;
        align-self: center;
        grid-column: 3/4;
        grid-row: 1/2;
    }

    @media screen and (min-device-width : 1200px) {
        justify-self: center;
        align-self: center;
        grid-column: 3/4;
        grid-row: 1/2;
    }
`

export const LiButton = styled.button`
background-color: #432818;
border: none;
color: white;
`
export const Small = styled.small`
    justify-self: center;
    align-self: center;
    
    @media screen and (max-device-width : 480px) {
        
        grid-row: 4/5;
        
    }
    
    @media screen and (min-device-width : 481px) {
        grid-column: 1/3;
        grid-row: 2/3;
    }

    @media screen and (min-device-width : 1200px) {
        grid-column: 1/3;
        grid-row: 2/3;
    }
`