import { useContext } from "react"
import Haeder from "../../components/Haeder/Haeder"
import { GlobalContext } from "../../context/GlobalContext"
import { Div, Div2, Div3, DivTextoImg, H1, Img, ImgCard, Section, SectionImg } from "./style"
import Footer from "../../components/Footer/Footer"
import { useNavigate } from "react-router-dom"
import { goToCardapio } from "../../routes/coordinator"

const Home = () => {
    const navigate = useNavigate()
    const context = useContext(GlobalContext)
    const { tempero, cardapio } = context
    return (
        <>

            <Haeder />


            <Div>
                <SectionImg>

                    <Img src={tempero}></Img>
                    
                    <DivTextoImg>
                        <p>Bem-vindo</p>
                        <p>Ao melhor restaurante do Brasil</p>
                    </DivTextoImg>

                </SectionImg>
                
                <H1>~ Confira nossos pratos ~</H1>
                <Section>

                   
                    <Div2>
                        {cardapio.map((prato) => {
                            return (
                                <Div3 key={prato.id} onClick={() => goToCardapio(navigate)}>

                                    <ImgCard src={prato.img}></ImgCard>

                                </Div3>

                            )
                        })}
                    </Div2>
                </Section>

            </Div>

            <Footer />


        </>
    )
}

export default Home