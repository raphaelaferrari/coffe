import { useContext, useEffect } from "react"
import Haeder from "../../components/Haeder/Haeder"
import { GlobalContext } from "../../context/GlobalContext"
import Footer from "../../components/Footer/Footer"
import { Button, ButtonContinuar, ButtonExcluir, Card, Div, DivButton, DivInfo, DivQuantidade, ImgCard, Main, PInfo, PValor, SectionCompras, SectionEfetuarCompra } from "./style"

const Carrinho = () => {

    const context = useContext(GlobalContext)

    const { cardapio, listaPratos, setListaPratos, guardaListaPratos, pegaListaPratos } = context

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

        const novaLista = [...listaPratos]

        setListaPratos(novaLista)
        guardaListaPratos()

    }

    const removeProdutoCarrinho = (prato) => {
        prato.quantidade = 0
        prato.valorFinal = Number((prato.quantidade * prato.valueUni).toFixed(2))
        prato.adcCarrinho = false

        const novaLista = [...listaPratos]

        setListaPratos(novaLista)
        guardaListaPratos()
    }

    useEffect(() => {
        pegaListaPratos()
    }, [])

    const carrinhoAdc = listaPratos ==null ? setListaPratos(cardapio): listaPratos.filter((prato) => prato.adcCarrinho == true)

    let soma = 0

    for (let i = 0; i < carrinhoAdc.length; i++) {
        soma += carrinhoAdc[i].valorFinal

    }

    return (
        <>

            <Haeder />
            <Main>

                <SectionCompras>
                    {carrinhoAdc.map((prato) => {
                        return (
                            <Card key={prato.id}>

                                <Div>
                                    <ImgCard src={prato.img}></ImgCard>
                                    <DivInfo>
                                        <PInfo>{prato.name}</PInfo>
                                        <PInfo>Vendido por Brasileirinho</PInfo>
                                        <PInfo>Entregue por Brasileirinho</PInfo>
                                        <PInfo>{prato.valueUni.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</PInfo>
                                    </DivInfo>
                                </Div>


                                <DivButton>
                                    <DivQuantidade>
                                        <Button onClick={() => adcQuantidade(prato)}>﹢</Button>
                                        <p>{prato.quantidade}</p>
                                        <Button onClick={() => removeQuantidade(prato)}>﹣</Button>
                                    </DivQuantidade>
                                    <PValor>{prato.valorFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</PValor>

                                    <ButtonExcluir onClick={() => removeProdutoCarrinho(prato)}>Excluir</ButtonExcluir>
                                </DivButton>
                                
                            </Card>
                        )
                    })}

                </SectionCompras>

                <SectionEfetuarCompra>

                    <p>VALOR TOTAL: {soma.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                    <ButtonContinuar>Continuar</ButtonContinuar>
                </SectionEfetuarCompra>
            </Main>
            <Footer />
        </>
    )
}

export default Carrinho