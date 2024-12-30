import './PokedexHeader.css';
import { PokemonType } from './PokemonType/PokemonType';
import PropTypes from 'prop-types';

export function PokedexHeader() {    
    return(
        <div className='pokedex-header'>
            <PokemonType iconClass="./icon-bug.png" pokemonType="Bug" />
            <PokemonType iconClass="./icon-dark.png" pokemonType="Dark" />
            <PokemonType iconClass="./icon-dragon.png" pokemonType="Dragon" />
            <PokemonType iconClass="./icon-electric.png" pokemonType="Electric" />
            <PokemonType iconClass="./icon-fairy.png" pokemonType="Fairy" />
            <PokemonType iconClass="./icon-fighting.png" pokemonType="Fighting" />
            <PokemonType iconClass="./icon-fire.png" pokemonType="Fire" />
            <PokemonType iconClass="./icon-flying.png" pokemonType="Flying" />
            <PokemonType iconClass="./icon-ghost.png" pokemonType="Ghost" />
            <PokemonType iconClass="./icon-grass.png" pokemonType="Grass" />
            <PokemonType iconClass="./icon-ground.png" pokemonType="Ground" />
            <PokemonType iconClass="./icon-normal.png" pokemonType="Normal" />
            <PokemonType iconClass="./icon-poison.png" pokemonType="Poison" />
            <PokemonType iconClass="./icon-psychic.png" pokemonType="Psychic" />
            <PokemonType iconClass="./icon-rock.png" pokemonType="Rock" />
            <PokemonType iconClass="./icon-steel.png" pokemonType="Steel" />
            <PokemonType iconClass="./icon-water.png" pokemonType="Water" />
        </div>
    )
}

PokedexHeader.propTypes = {
    iconClass: PropTypes.string,
    pokemonType: PropTypes.string,
}