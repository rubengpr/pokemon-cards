import './SidebarOptionLite.css'
import { PropTypes } from 'prop-types'

export function SidebarOptionLite({ optionIcon }) {
    return(
        <img className='icon-sidebar-lite' src={optionIcon} alt="An icon" />
    )
}

SidebarOptionLite.propTypes = {
    optionIcon: PropTypes.string,
}