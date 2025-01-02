import './NavButton.css'
import { PropTypes } from 'prop-types'

export function NavButton({ swapNavbar, navIsHidden }) {
    const arrowIcon = navIsHidden
    ? 'icon-arrow-left.svg'
    : 'icon-arrow-right.svg'

    const arrowPosition = navIsHidden
    ? 'nav-button-full'
    : 'nav-button-lite'

    return(
        <button onClick={swapNavbar} className={arrowPosition}>
            <img src={arrowIcon} alt="An arrow icon" />
        </button>
    )
}

NavButton.propTypes = {
    swapNavbar: PropTypes.func,
    navIsHidden: PropTypes.bool,
}