import './Navbar.css'
import { SidebarOption } from '../SidebarOption/SidebarOption'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export function Navbar({ countCards, navIsHidden }) {
    const showNavbar = navIsHidden
    ? 'nav-full'
    : 'nav-hide'

    return(
        <nav className={showNavbar}>
            <div className='sidebar-header'>
                <div className='header-img-wrapper'>
                    <img className='header-img' src="./public/pokeball.png" alt="A pokeball" />
                </div>
                <h3 className='app-title'>Pokémon Cards</h3>
            </div>
            <div className='input-wrapper'>
                <img className='icon-search' src="./public/search.svg" alt="A magnifyer glass icon" />
                <input className='sidebar-input' type="text" placeholder='Search' />
            </div>
            <div className='options-wrapper top-options'>
                <SidebarOption optionIcon="./public/icon-home.svg" optionName="Home" page="/" />
                <div className='cards-option'>
                    <SidebarOption optionIcon="./public/icon-cards.svg" optionName="Cards" page="/cards" />
                    <p className='cards-counter'>{countCards}/100</p>
                </div>
                <SidebarOption optionIcon="./public/icon-pokedex.svg" optionName="Pokédex" page="/pokedex" />
            </div>
            <hr />
            <div className='bottom-wrapper'>
                <div className='options-wrapper bottom-options'>
                    <SidebarOption optionIcon="./public/icon-settings.svg" optionName="Settings" page="/settings" />
                </div>
                <Link to="/profile">
                    <div className='avatar'>
                        <img className='sidebar-avatar' src="./public/ash-avatar.png" alt="Avatar image" />
                        <div className='text-wrapper'>
                            <p className='username'>Ash Ketchum</p>
                            <p className='user-alias'>@ashpikapika</p>
                        </div>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    countCards: PropTypes.number,
    navIsHidden: PropTypes.bool,
}