import { useContext, useEffect } from "react"
import Haeder from "../../components/Haeder/Haeder"
import { Button, ButtonAdc, Card, Div, ImgCard, Main, Section } from "./style"
import { GlobalContext } from "../../context/GlobalContext"
import Footer from "../../components/Footer/Footer"

const Cardapio = () => {

    const context = useContext(GlobalContext)

    const { cardapio, listaPratos, setListaPratos, guardaListaPratos, pegaListaPratos} = context

    const adcQuantidade = (prato) => {
        prato.quantidade += 1
        prato.valorFinal = Number((prato.quantidade * prato.valueUni).toFixed(2))

        const novaLista = [...listaPratos]

        setListaPratos(novaLista)
        guardaListaPratos()
    }

    const removeQuantidade = (prato) => {
        
        if (prato.quantidade > 0) {
            prato.quantidade -= 1
        }

        prato.valorFinal = Number((prato.quantidade * prato.valueUni).toFixed(2))

        if (prato.quantidade < 1) {
            prato.adcCarrinho = false
        }

        console.log(prato);
        const novaLista = [...listaPratos]

        setListaPratos(novaLista)
        guardaListaPratos()
        
    }

    const adcCarrinho = (prato) => {

        if (prato.quantidade == 0) {
            prato.quantidade = 1
            prato.valorFinal = Number((prato.quantidade * prato.valueUni).toFixed(2))
            prato.adcCarrinho = true

            const novaLista = [...listaPratos]

            setListaPratos(novaLista)
            
           
        }else{
            prato.adcCarrinho = true

            const novaLista = [...listaPratos]

            setListaPratos(novaLista)
        }
        guardaListaPratos()
        
    }

    useEffect(() => {
        pegaListaPratos()
    }, [])
    return (
        <>
            <Haeder />
            <Main>
                <Section>
                    {listaPratos == null ? setListaPratos(cardapio)
                    :
                    listaPratos.map((prato) => {
                        return (
                            <Card key={prato.id}>


                                <ImgCard src={prato.img}></ImgCard>


                                <p>{prato.name}</p>

                                <p>{prato.valueUni.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                                <Div>
                                    <Button onClick={() => adcQuantidade(prato)}>﹢</Button>
                                    <p>{prato.quantidade}</p>
                                    <Button onClick={() => removeQuantidade(prato)}>﹣</Button>
                                </Div>
                                <ButtonAdc onClick={() => adcCarrinho(prato)}>Adicionar</ButtonAdc>
                            </Card>

                        )
                    })
                
                }

                </Section>

            </Main>

            <Footer />
        </>
    )
}

const rootElements = document.getElementById('root')
export default Cardapio