import './PokedexPage.css';
import { PropTypes } from 'prop-types';

export function PokedexPage() {
    return(
        <h1>Hello!</h1>
    )
}

PokedexPage.propTypes = {
    countCards: PropTypes.number,
    navIsHidden: PropTypes.bool,
    navLiteIsHidden: PropTypes.bool,
}