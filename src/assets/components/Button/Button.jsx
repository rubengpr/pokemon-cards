import './Button.css'
import PropType from 'prop-types'

export function Button ({ handleClick }) {
    
    return (
        <button onClick={handleClick} className='primary-button'><img className='button-icon' src="./arrow-right-circle-solid.svg" alt="An arrow icon pointing to right direction" />Get another card</button>
    )
}

Button.propTypes = {
    handleClick: PropType.func,
}