import Haeder from "../../components/Haeder/Haeder"
import Footer from "../../components/Footer/Footer"
import { Button, DivText, Form, H1, Input, Main, P, Textarea } from "./style"

const Contato = () => {
    return(
        <>
        <Haeder/>
        <Main>
            
            <DivText>
                <H1>Fale Conosco</H1>

                <P>Email: raphaelaferraridelgado@gmail.com</P>
            </DivText>

            <Form>

                <Input placeholder="Nome"></Input>

                <Input placeholder="Email"></Input>

                <Input placeholder="Telefone"></Input>

                <Textarea placeholder="Digite sua mensagem aqui!"></Textarea>

                <Button type="submit">Enviar</Button>
            </Form>
        </Main>
        <Footer/>
        </>
    )
}

export default Contato