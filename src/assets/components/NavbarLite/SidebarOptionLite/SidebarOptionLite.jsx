import { Link } from 'react-router-dom'
import './SidebarOptionLite.css'
import { PropTypes } from 'prop-types'

export function SidebarOptionLite({ optionIcon, page }) {
    return(
        <Link to={page}>
            <img className='icon-sidebar-lite' src={optionIcon} alt="An icon" />
        </Link>
    )
}

SidebarOptionLite.propTypes = {
    optionIcon: PropTypes.string,
    page: PropTypes.string,
}