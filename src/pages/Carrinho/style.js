import styled from "styled-components";

export const Main = styled.main`
    background-color: #ffe6a7;
    
`
export const SectionCompras = styled.section`
    width: 100%;
    height: auto;
    @media screen and (min-device-height : 300px) {
		min-height: 80vh;
    }
    @media screen and (min-device-height : 700px) {
		min-height: 80vh;
    }
`
export const SectionEfetuarCompra = styled.section`
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`
export const Card = styled.div`
    width: 100%;
    display: flex;
    @media screen and (max-device-width : 729px) {
        flex-direction: column;
        justify-content: center;
	}

    @media screen and (min-device-width : 730px) {
        flex-direction: row;
        justify-content: center;    
    }
    
`

export const ImgCard = styled.img`
    margin-top: 25px;
    height: 200px;
    width: 250px;

`
export const Div = styled.div`

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        width: 100%;
        margin-top: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media screen and (min-device-width : 481px) and (max-device-width : 729px) {
        width: 100%;
        margin-top: 5px;
        margin-left: 20px;
        display: flex;
        flex-direction: row;
        justify-content: first baseline;
        align-items: center;
    }

    @media screen and (min-device-width : 730px) and (max-device-width : 1199px) {
        width: 50%;
        margin-top: 5px;
        display: flex;
        flex-direction: row;
        justify-content: first baseline;
        align-items: center;
    }
    @media screen and (min-device-width : 1200px) {
        width: 50%;
        margin-top: 5px;
        display: flex;
        flex-direction: row;
        justify-content: first baseline;
        align-items: center;
    }



`

export const DivInfo = styled.div`
    margin-top: 5px;
    display: flex;
    
    
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        flex-direction: column;
        justify-content: center;
        
    }

    @media screen and (min-device-width : 481px) and (max-device-width : 729px) {
        flex-direction: column;
    justify-content: center;
    }

    @media screen and (min-device-width : 730px) and (max-device-width : 1199px) {
        flex-direction: column;
    justify-content: center;
    }
    @media screen and (min-device-width : 1200px) {
        flex-direction: column;
        justify-content: center;
    }
`
export const PInfo = styled.p`
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {

}

@media screen and (min-device-width : 481px) and (max-device-width : 729px) {
    margin: 8px 15px;
}

@media screen and (min-device-width : 730px) and (max-device-width : 1199px) {
    margin: 10px 15px;
}
@media screen and (min-device-width : 1200px) {
    margin: 10px 15px;
}

   
`

export const DivQuantidade = styled.div`
    display: flex;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        margin: 20px 0;
        
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
        margin: 20px 20px 20px 0;
        
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
    }

    @media screen and (min-device-width : 801px) and (max-device-width : 1199px) {
        margin-top: 5px;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    @media screen and (min-device-width : 1200px) {
        margin-top: 5px;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
`

export const DivButton = styled.div`
    
    display: flex;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        margin: 20px 0;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
        margin: 20px 20px 20px 0;
        
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
    }

    @media screen and (min-device-width : 801px) and (max-device-width : 1199px) {
        margin-top: 5px;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    @media screen and (min-device-width : 1200px) {
        margin-top: 5px;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
`

export const Button = styled.button`
    height: 100%;
    font-size: 25px;
    margin: 0  20px;
    background-color: #ffe6a7;
    border: none;
`
export const PValor = styled.p`
    margin-right: 15px;
`
export const ButtonExcluir = styled.button`
    margin-top: 5px;
    margin-right: 20px;
    height: 30px;
    width: 130px;
    border-radius: 10px;
    background-color: #432818;
    color: white;
    font-size: 14px;
    border: none;
`

export const ButtonContinuar = styled.button`
    margin-top: 5px;
    height: 30px;
    width: 130px;
    border-radius: 10px;
    background-color: #432818;
    color: white;
    font-size: 14px;
    border: none;
`