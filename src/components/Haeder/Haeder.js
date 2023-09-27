import { useNavigate } from "react-router-dom"
import { ButtonMenu, DivMenu, H1, HaederStyle, Li, Nav, Ul } from "./style"
import { goToCardapio, goToCarrinho, goToContato, goToHome, goToInfo } from "../../routes/coordinator"

const Haeder = () => {
    const navigate = useNavigate()

    return (
        <HaederStyle>
            <H1>Brasileirinho</H1>

            <Nav>


                <DivMenu>
                    <ButtonMenu> ☰ </ButtonMenu>

                    <Ul>

                        <Li onClick={() => goToHome(navigate)}>Home</Li>
                        <Li onClick={() => goToCardapio(navigate)}>Cardápio</Li>
                        <Li onClick={() => goToInfo(navigate)}>Quem somos</Li>
                        <Li onClick={() => goToContato(navigate)}>Contato</Li>
                        <Li onClick={() => goToCarrinho(navigate)}>Carrinho</Li>


                    </Ul>
                </DivMenu>



            </Nav>
        </HaederStyle>
    )
}

export default Haeder