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
                <SidebarOption />
                <SidebarOption />
                <SidebarOption />
                <SidebarOption />
                <SidebarOption />
            </div>
            <hr />
            <div className='options-wrapper'>
                <SidebarOption />
                <SidebarOption />
                <SidebarOption />
            </div>
            <div className='avatar'>
                <img className='sidebar-avatar' src="./public/ash-avatar.png" alt="Avatar image" />
                <div className='text-wrapper'>
                    <p className='username'>Ash Ketchum</p>
                    <p className='user-alias'>@ashpikapika</p>
                </div>
            </div>
        </nav>
    )
}