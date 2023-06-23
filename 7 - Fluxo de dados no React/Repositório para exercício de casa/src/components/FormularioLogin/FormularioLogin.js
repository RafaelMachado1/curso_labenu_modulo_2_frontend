import React, { useState } from "react";
import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel
} from "../FormularioPostagem/styled";

const FormularioLogin = (props) => {
  const [nome, setNome] = useState("");

  const [foto, setFoto] = useState("");

  function onChangeNome(event) {
    setNome(event.target.value);
  }

  function onChangeFoto(event) {
    setFoto(event.target.value);
  }

  const login = () => {
    const usuario = {
      nome: nome,
      foto: foto
    };
    props.setLogin(usuario);
    props.setPageFlow(2);
  };

  return (
    <FormContainer>
      <Form>
        <StyledLabel>
          Nome:
          <Input onChange={onChangeNome} type={"text"} value={nome} />
        </StyledLabel>
        <StyledLabel>
          Foto de Perfil
          <Input onChange={onChangeFoto} type={"text"} value={foto} />
        </StyledLabel>
        <SendButton onClick={login}>Fazer Login</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioLogin;
