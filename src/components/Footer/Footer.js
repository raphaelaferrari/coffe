import { useNavigate } from "react-router-dom"
import { DivName, DivNav, FooterStyle, Img, LiButton, Small, Ul } from "./style"
import { goToCardapio, goToContato, goToInfo } from "../../routes/coordinator"
import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"

const Footer = () => {
    const navigate = useNavigate()
    const context = useContext(GlobalContext)

    const { github } = context
    return(
        <FooterStyle>
            <DivName>
                <h1>Brasileirinho</h1>
            </DivName>

            <DivNav>
                <Ul>
                    <LiButton onClick={() => goToCardapio(navigate)}>Cardápio</LiButton>
                    <LiButton onClick={() => goToInfo(navigate)}>Quem somos</LiButton>
                    <LiButton onClick={() => goToContato(navigate)}>Contato</LiButton>
                </Ul>
            </DivNav>

            <a href="https://github.com/raphaelaferrari" target="_blank"><Img src={github}></Img></a>
            

            <Small> Copyright &copy; 2023 Raphaela Ferrari - Todos os direitos reservados</Small>
        </FooterStyle>
    )
}

export default Footer