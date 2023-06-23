import { FormContainer, Form, Input, StyledLabel } from "./styled";

export const FormularioCadastro = ({titulo, url, descricao, changeTitulo, changeUrl, changeDescricao}) => {
//fazendo a desestrururação da props e chamando o onChange e value no input

  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
      <StyledLabel htmlFor="Titulo">
          Titulo:
          <Input id="Titulo" onChange={changeTitulo} value={titulo}/>
        </StyledLabel>

        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" onChange={changeUrl} value={url}/>
        </StyledLabel>

        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao"  onChange={changeDescricao} value={descricao}/>
        </StyledLabel>
      </Form>
    </FormContainer>
  );
};


export default FormularioCadastro