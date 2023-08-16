import { useContext } from "react"
import Haeder from "../../components/Haeder/Haeder"
import { Card, ImgCard, Main, Section } from "./style"
import { GlobalContext } from "../../context/GlobalContext"
import Footer from "../../components/Footer/Footer"

const Cardapio = () => {

    const context = useContext(GlobalContext)

    const { cardapio } = context
    return (
        <>
            <Haeder />
            <Main>
                <Section>
                    {cardapio.map((prato) => {
                        return (
                            <Card key={prato.id}>


                                <ImgCard src={prato.img}></ImgCard>


                                <p>{prato.name}</p>

                                <p>{prato.valueUni.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>

                            </Card>

                        )
                    })}

                </Section>

            </Main>

            <Footer />
        </>
    )
}

export default Cardapio