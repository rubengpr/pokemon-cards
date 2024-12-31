import './Checkbox.css';
import PropTypes from 'prop-types';

export function Checkbox({ checkboxText, id }) {
    return(
        <div className="checkbox">
            <input className='checkbox-input' type="checkbox" id={id} />
            <p className='checkbox-text'>{checkboxText}</p>
        </div>
    )
}

Checkbox.propTypes = {
    checkboxText: PropTypes.string,
    id: PropTypes.string,
}