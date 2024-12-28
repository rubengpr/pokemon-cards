import './NavbarLite.css'
import { SidebarOptionLite } from './SidebarOptionLite/SidebarOptionLite'
import { PropTypes } from 'prop-types'

export function NavbarLite({ navLiteIsHidden }) {
    const showNavbarLite = navLiteIsHidden
    ? 'nav-lite'
    : 'nav-lite-hide'

    return(
        <nav className={showNavbarLite}>
            <div className='header-lite-img-wrapper'>
                <img className='header-img' src="./public/pokeball.png" alt="A pokeball" />
            </div>
            <div className='options-lite-wrapper top-options-lite'>
                <SidebarOptionLite optionIcon="./public/icon-home.svg" optionName="Home" page="/" />
                <SidebarOptionLite optionIcon="./public/icon-cards.svg" optionName="Cards" page="/cards" />
                <SidebarOptionLite optionIcon="./public/icon-pokedex.svg" optionName="Pokédex" page="/pokedex" />
            </div>
            <hr />
            <div className='bottom-wrapper'>
                <div className='options-lite-wrapper bottom-options'>
                    <SidebarOptionLite optionIcon="./public/icon-settings.svg" optionName="Settings" page="/settings" />
                </div>
                <div className='avatar-lite'>
                    <img className='sidebar-lite-avatar' src="./public/ash-avatar.png" alt="Avatar image" />
                </div>
            </div>
        </nav>
    )
}

NavbarLite.propTypes = {
    navLiteIsHidden: PropTypes.bool,
}