import React from 'react';
import { LayoutCardPequeno, ImgCardPequeno, TituloCardPequeno, InfoCardPequeno} from "./styles"

function CardPequeno(props) {
        <LayoutCardPequeno>
            <ImgCardPequeno src={props.imagem} />
            <InfoCardPequeno>
                <TituloCardPequeno>{props.nome}</TituloCardPequeno>
                <p>{props.descricao}</p>
            </InfoCardPequeno>
        </LayoutCardPequeno>
}

export default CardPequeno