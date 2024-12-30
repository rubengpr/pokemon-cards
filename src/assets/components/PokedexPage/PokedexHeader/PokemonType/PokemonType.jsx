import './PokemonType.css';
import PropTypes from 'prop-types';

export function PokemonType({ iconClass, pokemonType }) {
    return(
        <div className='type-wrapper'>
            <div className='type-inner-wrapper'>
                <img className="pokedex-type-icon" src={iconClass} alt="A type icon" />
                <p className='pokedex-type-text'>{pokemonType}</p>
            </div>
            <div className='pokedex-type-counter-wrapper'>
            <p className='pokedex-type-counter'>0</p>
            </div>
        </div>
    )
}

PokemonType.propTypes = {
    iconClass: PropTypes.string,
    pokemonType: PropTypes.string,
}