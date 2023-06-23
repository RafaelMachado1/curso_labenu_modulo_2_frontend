import React from 'react'
import { ContainerPostagem, Image, Description } from './styles'

const TelaDaPostagem = (props) => {


  return (
    (props.url && props.descricao ?
      
   
      <ContainerPostagem>
        <Image src={props.url} alt={props.descricao} />
        <Description>{props.titulo}</Description>
        <Description>{props.descricao}</Description>
      </ContainerPostagem>
      :
      <ContainerPostagem>
      <Image src={"https://th.bing.com/th/id/OIP.fUb1dtHBgj_DA7S9Cgbn8QHaHa?w=165&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"} alt='drone view' />
      <Description>{"insira seu post"}</Description>
    </ContainerPostagem >)

    )
}

export default TelaDaPostagem