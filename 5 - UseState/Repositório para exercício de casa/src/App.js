import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import PokemonCard from './Components/PokemonCard/PokemonCard';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
function App() {
  const [pokemon, setPokemon] = useState({
    name: "Pichu",
    type: "Electric",
    evolved: true,
    weight: 2,
    color: 'Yellow',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/b/b9/172Pichu.png/250px-172Pichu.png',
    id: 0
  })

  const [pokemon2, setPokemon2] = useState({
    name: "Gothita",
    type: "Psychic",
    evolved: true,
    weight: 5.8,
    color: 'Purple',
    image: 'https://archives.bulbagarden.net/media/upload/a/a3/574Gothita_BW_anime.png',
    id: 0
  })

  const [pokemon3, setPokemon3] = useState({
    name: "Flaaffy",
    type: "Electric",
    evolved: true,
    weight: 13.3,
    color: 'Yellow',
    image: 'https://archives.bulbagarden.net/media/upload/4/42/180Flaaffy_GS.png',
    id: 0
  })

  const evolucao1 = () => {
    const novoPokemon1 = {
      ...pokemon,
      name: "Pikachu",
      weight: 6,
      image: "https://archives.bulbagarden.net/media/upload/f/f0/025Pikachu_Channel_2.png"
    }
    setPokemon(novoPokemon1)
  }

  const evolucao2 = () => {
    const novoPokemon2 = {
      ...pokemon2,
      name: "Gothorita",
      weight: 18,
      image: "https://archives.bulbagarden.net/media/upload/8/83/575Gothorita_XY_anime.png"
    }
    setPokemon2(novoPokemon2)
  }

  const evolucao3 = () => {
    const novoPokemon3 = {
      ...pokemon3,
      name: "Ampharos",
      weight: 61.5,
      image: "https://archives.bulbagarden.net/media/upload/3/3d/181Ampharos-Mega_XY_anime.png"
    }
    setPokemon3(novoPokemon3)
  }

  // Para fazer seus próximos pokemons, crie novos estados!

  return (<>
    <GlobalStyles />
    <FlexContainer>
      {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
      <PokemonCard
        color={pokemon.color}
        image={pokemon.image}
        name={pokemon.name}
        type={pokemon.type}
        weight={pokemon.weight}
        evolucao={evolucao1}
      />
      <PokemonCard
        /* Crie aqui seus próximos pokemons! */
        color={pokemon2.color}
        image={pokemon2.image}
        name={pokemon2.name}
        type={pokemon2.type}
        weight={pokemon2.weight}
        evolucao={evolucao2}
      />
      <PokemonCard
        color={pokemon3.color}
        image={pokemon3.image}
        name={pokemon3.name}
        type={pokemon3.type}
        weight={pokemon3.weight}
        evolucao={evolucao3}
      />
    </FlexContainer>
  </>

  );
}

export default App;