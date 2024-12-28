import { Navbar } from '../Nav/Navbar';
import { NavbarLite } from '../NavbarLite/Navbarlite';
import './PokedexPage.css';
import { PropTypes } from 'prop-types';

export function PokedexPage({ countCards, navIsHidden, navLiteIsHidden }) {
    return(
        <>
            <Navbar
            countCards={countCards}
            navIsHidden={navIsHidden}
            />
            <NavbarLite
            navLiteIsHidden={navLiteIsHidden}
            />
        </>
    )
}

PokedexPage.propTypes = {
    countCards: PropTypes.number,
    navIsHidden: PropTypes.bool,
    navLiteIsHidden: PropTypes.bool,
}