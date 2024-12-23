import './Navbar.css'
import { SidebarOption } from '../SidebarOption/SidebarOption'

export function Navbar() {
    return(
        <nav>
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
                <SidebarOption optionIcon="./public/icon-cards.svg" optionName="Cards" page="/cards" />
                <SidebarOption optionIcon="./public/icon-pokedex.svg" optionName="Pokédex" page="/pokedex" />
            </div>
            <hr />
            <div className='bottom-wrapper'>
                <div className='options-wrapper bottom-options'>
                    <SidebarOption optionIcon="./public/icon-settings.svg" optionName="Settings" page="/settings" />
                </div>
                <div className='avatar'>
                    <img className='sidebar-avatar' src="./public/ash-avatar.png" alt="Avatar image" />
                    <div className='text-wrapper'>
                        <p className='username'>Ash Ketchum</p>
                        <p className='user-alias'>@ashpikapika</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}