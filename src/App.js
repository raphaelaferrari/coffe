import { GlobalStyle } from "./GlobalStyles.styled";
import { GlobalContext } from "./context/GlobalContext";
import Router from "./routes/Router";
import tempero from "./img/temperos.jpg"
import feijoada from "./img/feijoada.jpg"
import arrozCarreteiro from "./img/arroz-carreteiro.jpg"
import boboCamarao from "./img/Bobo-de-Camarao.webp"
import carneDeSol from "./img/Carne-de-sol-com-mandioca.jpg"
import porcaoCoxinha from "./img/porcao-coxinha.jpg" 
import churrasco from "./img/churrasco.jpg"
import acaraje from "./img/acaraje.jpg"
import brigadeiro from "./img/brigadeiro-recheado-com-creme-de-maracuja.jpg"
import tortaLimao from "./img/torta-de-limao-com-chocolate-branco.jpg"
import mousse from "./img/mousse.webp"
import quindim from "./img/quindim.jpeg"
import cocada from "./img/cocada.webp"
import github from "./img/pngwing.com.png"

function App() {

  const cardapio = [
    {id: 1 ,name: "Feijoada", valueUni: 25.00, img: feijoada},
    {id: 2 ,name: "Arroz carreteiro", valueUni: 25.99, img: arrozCarreteiro},
    {id: 3 ,name: "Bobó de camarão", valueUni: 25.99, img: boboCamarao},
    {id: 4 ,name: "Carne de sol com mandioca", valueUni: 25.99, img: carneDeSol},
    {id: 5 ,name: "Porção de coxinha", valueUni: 25.99, img: porcaoCoxinha},
    {id: 6 ,name: "Acarajé", valueUni: 25.99, img: acaraje},
    {id: 7 ,name: "Churrasco", valueUni: 25.99, img: churrasco},
    {id: 8 ,name: "Brigadeiro com recheio de maracuja", valueUni: 25.99, img: brigadeiro},
    {id: 9 ,name: "Torta de limão", valueUni: 25.99, img: tortaLimao},
    {id: 10 ,name: "Mousse de maracujá", valueUni: 25.99, img: mousse},
    {id: 11 ,name: "Quindim", valueUni: 25.99, img: quindim},
    {id: 12 ,name: "Cocadas", valueUni: 25.99, img: cocada},
    
  ]
  
  const context = {
    github: github,
    tempero: tempero,
    cardapio: cardapio
  }
  return (
    <GlobalContext.Provider value={context}>
      <GlobalStyle/>
      <Router/>
    </GlobalContext.Provider>
  );
}

export default App;
