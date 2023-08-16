import styled, { keyframes } from "styled-components";

export const Div = styled.div`
    width: 100%;
	height: 1200px;
	background-color: #ffe6a7;
	
`
export const Img = styled.img`

	filter: brightness(30%);
    width: 100%;
	@media screen and (max-device-width : 480px) {
       height: 20vh;
    }

    @media screen and (min-device-width : 481px) {
		height: 25vh;
    }

    @media screen and (min-device-width : 1200px) {
        height: 80vh;
    }
`
export const SectionImg = styled.section`
	width: 100%;
	display: inline-block;
	position: relative;
`
export const DivTextoImg = styled.div`
	position: absolute;
  	color: white;
	@media screen and (max-device-width : 480px) {
        top: 50px;
  		right: 20px;
		font-size: 2vh;
	}

    
    @media screen and (min-device-width : 481px) {
        top: 100px;
  		right: 20px;
		font-size: 4vh;
    }

    @media screen and (min-device-width : 1200px) {
        top: 190px;
  		right: 20px;
		font-size: 6vh;
    }
`
export const ImgCard = styled.img`
	height: 100%;
	@media screen and (max-device-width : 480px) {
		width: 100vw;
    }

    @media screen and (min-device-width : 481px) {
		width: 550px;
    }

    @media screen and (min-device-width : 1200px) {
        width: 550px;
    }
`

export const H1 = styled.h1`
	
	display: flex;
	justify-content: center;
	@media screen and (max-device-width : 480px) {
        margin: 90px;
	}

    @media screen and (min-device-width : 481px) {
        margin: 70px;
    }

    @media screen and (min-device-width : 1200px) {
        margin: 30px;
    }
`
const animacao = keyframes`
    0% { transform: translateX(0); }
	100% { transform: translateX(calc(-550px *4 ))}
`
export const Div2 = styled.div`
    animation: ${animacao}  30s linear infinite;
    display: flex;
	width: calc(-550px * 4 );
`
export const Div3 = styled.div`
	height: 400px;
	width: 550px;
`
export const Section = styled.div`
    background: white;
	box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .125);
	height: 400px;
	margin: auto;
	overflow:hidden;
	position: relative;
	width: 100%;

`;