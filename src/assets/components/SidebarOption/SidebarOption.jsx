import { Link } from 'react-router-dom'
import './SidebarOption.css'
import PropTypes from 'prop-types'

export function SidebarOption({ optionIcon, optionName, page }) {
    return(
        
        <Link to={page}>
            <div className='sidebar-option'>
                <img className='option-img' src={optionIcon} alt="An icon" />
                <p className='option-title'>{optionName}</p>
            </div>
        </Link>
    )
}

SidebarOption.propTypes = {
    optionIcon: PropTypes.string,
    optionName: PropTypes.string,
    page: PropTypes.string,

}