import Footer from "../../components/Footer/Footer"
import Haeder from "../../components/Haeder/Haeder"
import { H1, Main, P } from "./style"

const Info = () => {

    return(
        <>
        <Haeder/>
        <Main>
            <H1>Sobre o Brasileirinho</H1>

            <P>Esse site se trata de informações e valores fictícios, o mesmo serve apenas para exemplificação</P>
        
            <P>Caso queira adquirir um produto semelhante a esse ou outro produto web, entre em contato</P>
        </Main>
        <Footer/>
        </>
    )
}

export default Info