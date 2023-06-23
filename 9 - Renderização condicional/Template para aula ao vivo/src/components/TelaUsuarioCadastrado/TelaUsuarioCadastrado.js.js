import React from "react";
import { Div, SendButton, Titulo } from "./styled";

function TelaUsuarioCadastrado(props) {
    return (
        <Div>
            <Titulo>Você concluiu o cadastro, parabéns!!!</Titulo>
            <SendButton onClick={()=>props.irPara(1)}>Voltar para tela Login</SendButton>
        </Div>
    )
}

export default TelaUsuarioCadastrado;