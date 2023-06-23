import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import { useState } from "react";
import TelaUsuarioCadastrado from "./components/TelaUsuarioCadastrado/TelaUsuarioCadastrado.js";

const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
const MainContainer = styled.main`
  height: 100vh;
`

function App() {
  const [mudarTela, setMudarTela] = useState(1)

  function irPara(tela) {
    setMudarTela(tela)
  }

  //Switch case
  switch (mudarTela) {
    case 1:
      return (
        <MainContainer >
          <GlobalStyled />
          <TelaLogin irPara={irPara} />
        </MainContainer>

      );

    case 2:
      return (
        <MainContainer >
          <GlobalStyled />
          <TelaCadastro irPara={irPara} />
        </MainContainer>
      );
      
    case 3:
      return (
        <MainContainer >
          <GlobalStyled />
          <TelaUsuarioCadastrado irPara={irPara} />
        </MainContainer>
      );
  }
}

export default App;


/*Ternário
{mudarTela === "Login" ?
        <TelaLogin irPara={irPara} />
        :
        <TelaCadastro irPara={irPara} />}*/



/*If Else
if (mudarTela === "Login") {
    return (
      <MainContainer >
        <GlobalStyled />
        <TelaLogin />

      </MainContainer>
    )
    } else {
      return (
        <MainContainer >
          <GlobalStyled />
          <TelaCadastro />
        </MainContainer>
      );

    }*/