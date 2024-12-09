import './PokemonCardBody.css'
import PropType from 'prop-types'

export function PokemonCardBody({ id, pokemon, type, pokemonImage, pokemonWeight, pokemonHeight, habitat, hp }) {
    function capFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

      let imgClass = ''

      switch(type) {
        case 'fire':
            imgClass = 'img-wrapper img-fire'
            break;
        case 'grass':
            imgClass = 'img-wrapper img-grass'
            break;
        case 'electric':
            imgClass = 'img-wrapper img-electric'
            break;
        case 'water':
            imgClass = 'img-wrapper img-water'
            break;
        case 'poison':
            imgClass = 'img-wrapper img-poison'
            break;
        case 'normal':
            imgClass = 'img-wrapper img-normal'
            break;
        case 'ghost':
            imgClass = 'img-wrapper img-ghost'
            break;
        case 'bug':
            imgClass = 'img-wrapper img-bug'
            break;
        case 'fighting':
            imgClass = 'img-wrapper img-fighting'
            break;
        case 'rock':
            imgClass = 'img-wrapper img-rock'
            break;
        case 'fairy':
            imgClass = 'img-wrapper img-fairy'
            break;
        case 'ground':
            imgClass = 'img-wrapper img-ground'
            break;
        case 'psychic':
            imgClass = 'img-wrapper img-psychic'
            break;
      }

      let iconClass = ''

      switch(type) {
        case 'fire':
            iconClass = 'icon-fire.png'
            break;
        case 'grass':
            iconClass = 'icon-grass.png'
            break;
        case 'electric':
            iconClass = 'icon-electric.png'
            break;
        case 'water':
            iconClass = 'icon-water.png'
            break;
        case 'poison':
            iconClass = 'icon-poison.png'
            break;
        case 'normal':
            iconClass = 'icon-normal.png'
            break;
        case 'ghost':
            iconClass = 'icon-ghost.png'
            break;
        case 'bug':
            iconClass = 'icon-bug.png'
            break;
        case 'fighting':
            iconClass = 'icon-fighting.png'
            break;
        case 'rock':
            iconClass = 'icon-rock.png'
            break;
        case 'fairy':
            iconClass = 'icon-fairy.png'
            break;
        case 'ground':
            iconClass = 'icon-ground.png'
            break;
        case 'psychic':
            iconClass = 'icon-psychic.png'
            break;
      }
    
    return(
        <div className='pokemon-card-body'>
            <div className='card-header'>
                <div className='test'>
                    <p className='pokemon-name'>{capFirstLetter(pokemon)}</p>
                    <img className='icon-type' src={iconClass} alt="An icon displaying the Pokémon type" />
                </div>
                <div className='hp-box'>
                    <p className='hp-text'>HP</p>
                    <p className='hp-number'>{hp}</p>
                </div>
            </div>
            <div className={imgClass}>
                <img className='pokemon-img' src={pokemonImage} alt="Pokémon image" />
            </div>
            <div className='wh-box'>
                <p>Pokémon {id}</p>
                <p>Weight: {pokemonWeight}kg</p>
                <p>Height: {pokemonHeight}cm</p>
            </div>
            <p>Habitat: {capFirstLetter(habitat)}</p>
        </div>
    )
}

PokemonCardBody.propTypes = {
    id: PropType.number,
    pokemon: PropType.string,
    type: PropType.string,
    typeIcon: PropType.string,
    pokemonImage: PropType.string,
    pokemonWeight: PropType.number,
    pokemonHeight: PropType.number,
    habitat: PropType.string,
    description: PropType.string,
    hp: PropType.number,
}