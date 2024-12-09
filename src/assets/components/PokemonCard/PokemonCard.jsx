import './PokemonCard.css'
import PropType from 'prop-types'
import { PokemonCardBody } from './PokemonCardHeader/PokemonCardBody/PokemonCardBody'

export function PokemonCard({ id, pokemon, pokemonWeight, pokemonHeight, habitat, pokemonImage, hp, type }) {
    
    let cardClass = ''

    switch(type) {
      case 'fire':
          cardClass = 'pokemon-card-fire'
          break;
      case 'grass':
          cardClass = 'pokemon-card-grass'
          break;
      case 'electric':
          cardClass = 'pokemon-card-electric'
          break;
      case 'water':
          cardClass = 'pokemon-card-water'
          break;
      case 'poison':
          cardClass = 'pokemon-card-poison'
          break;
      case 'normal':
          cardClass = 'pokemon-card-normal'
          break;
      case 'ghost':
          cardClass = 'pokemon-card-ghost'
          break;
      case 'bug':
          cardClass = 'pokemon-card-bug'
          break;
      case 'fighting':
          cardClass = 'pokemon-card-fighting'
          break;
      case 'rock':
          cardClass = 'pokemon-card-rock'
          break;
      case 'fairy':
          cardClass = 'pokemon-card-fairy'
          break;
      case 'ground':
          cardClass = 'pokemon-card-ground'
          break;
      case 'psychic':
          cardClass = 'pokemon-card-psychic'
          break;
    }

    
    return(
        <div className='card-wrapper'>
            <div className={cardClass}>
                <PokemonCardBody
                id={id}
                pokemon={pokemon}
                type={type}
                pokemonWeight={pokemonWeight}
                pokemonHeight={pokemonHeight}
                habitat={habitat}
                pokemonImage={pokemonImage}
                hp={hp}
                />
            </div>
        </div>
    )
}

PokemonCard.propTypes = {
    id: PropType.number,
    pokemon: PropType.string,
    type: PropType.string,
    pokemonWeight: PropType.number,
    pokemonHeight: PropType.number,
    habitat: PropType.string,
    pokemonImage: PropType.string,
    hp: PropType.number,
}