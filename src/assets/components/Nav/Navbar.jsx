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
            <input className='sidebar-input' type="text" placeholder='Search' />
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
        </nav>
    )
}