import React from 'react';

import { LayoutCardGrande } from './styles';
import { ImgCardGrande } from './styles';
import { InfoCard } from './styles';
import { TituloCardGrande } from './styles';

 function CardGrande(props) {
   
    return (
        <LayoutCardGrande>
            <ImgCardGrande src={ props.imagem } />
            <InfoCard>
                <TituloCardGrande>{ props.nome }</TituloCardGrande>
                <p>{ props.descricao }</p>
            </InfoCard>
        </LayoutCardGrande>
    )
}

export default CardGrande