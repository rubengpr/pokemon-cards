import './PokedexPage.css';
import { PropTypes } from 'prop-types';
import { Navbar } from '../Nav/Navbar';
import { NavbarLite } from '../NavbarLite/NavbarLite';
import { NavButton } from '../NavButton/NavButton';
import { PokedexHeader } from './PokedexHeader/PokedexHeader';
import { PokedexItem } from './PokedexItem/PokedexItem';

export function PokedexPage({ countCards, navIsHidden, navLiteIsHidden, swapNavbar }) {
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
            <div className='pokedex-body-content'>
                <PokedexHeader />
                <div className='pokedex-item-wrapper'>
                    <PokedexItem />
                    <PokedexItem />
                    <PokedexItem />
                    <PokedexItem />
                    <PokedexItem />
                    <PokedexItem />
                    <PokedexItem />
                    <PokedexItem />
                    <PokedexItem />
                    <PokedexItem />
                    <PokedexItem />
                    <PokedexItem />
                </div>

            </div>
        </div>
    )
}

PokedexPage.propTypes = {
    countCards: PropTypes.number,
    navIsHidden: PropTypes.bool,
    navLiteIsHidden: PropTypes.bool,
    swapNavbar: PropTypes.func,
}