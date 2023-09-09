import React, {useState, useEffect} from "react";
import GlobalStyle from "./GlobalStyle";

import Container from "./Components/Container";
import Header from "./Components/Header";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaOscuro } from "./Components/UI/temas";
import { BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";

console.log(temaClaro, temaOscuro);

function App() {
  const initialTema = localStorage.getItem('tema') === 'true';
  const [tema, setTema] = useState(initialTema);

  useEffect(() => {
    localStorage.setItem('tema', tema.toString());
  }, [tema]);

  const toggleTema = () =>{
    setTema((tema) => !tema)
  }
  return (
    <ThemeProvider theme={ tema ? temaClaro : temaOscuro }>
      <GlobalStyle />
      <BtnTema onClick={toggleTema}>
        <SwitcherTema tema={tema}/>
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
