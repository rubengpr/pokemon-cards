import './CardsPage.css';
import {  Navbar } from '../Nav/Navbar';
import { NavbarLite } from '../NavbarLite/Navbarlite';
import { NavButton } from '../NavButton/NavButton';
import { PokemonCard } from '../PokemonCard/PokemonCard';
import { Button } from '../Button/Button.jsx';
import { PropTypes } from 'prop-types';

export function CardsPage({ countCards, navIsHidden, navLiteIsHidden, handleClick, id, pokemon, type, pokemonWeight, pokemonHeight, pokemonImage, hp, swapNavbar, textEntry }) {      
    return(
        <div className='content'>
            <Navbar
            countCards={countCards}
            navIsHidden={navIsHidden}
            />
            <NavbarLite
            navLiteIsHidden={navLiteIsHidden}
            />
            <NavButton
            swapNavbar={swapNavbar}
            navIsHidden={navIsHidden}/>
            <div className='body-content'>
            <PokemonCard
            id={id}
            pokemon={pokemon}
            type={type}
            pokemonWeight={pokemonWeight}
            pokemonHeight={pokemonHeight}
            pokemonImage={pokemonImage}
            hp={hp}
            textEntry={textEntry}
            />

            <Button
            handleClick={handleClick}
            countCards={countCards}
            />
            </div>
        </div>
    )
}

CardsPage.propTypes = {
    countCards: PropTypes.number,
    navIsHidden: PropTypes.bool,
    navLiteIsHidden: PropTypes.bool,
    handleClick: PropTypes.func,
    id: PropTypes.number,
    pokemon: PropTypes.string,
    type: PropTypes.string,
    pokemonWeight: PropTypes.number,
    pokemonHeight: PropTypes.number,
    pokemonImage: PropTypes.string,
    hp: PropTypes.number,
    swapNavbar: PropTypes.func,
    textEntry: PropTypes.string,
}