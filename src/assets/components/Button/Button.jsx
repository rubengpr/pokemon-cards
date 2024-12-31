import './Button.css'
import PropTypes from 'prop-types'

export function Button ({ handleClick, buttonText }) {
    return (
        <button onClick={handleClick} className='primary-button'>{buttonText}</button>
    )
}

Button.propTypes = {
    handleClick: PropTypes.func,
    buttonText: PropTypes.string,
}