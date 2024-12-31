import './LabelInput.css';
import PropTypes from 'prop-types';

export function LabelInput({ labelName, id }) {
    return(
        <div className='profile-label-input'>
            <label className="label-input" htmlFor={id}>{labelName}</label>
            <input className='primary-input' id={id} type="text" />
        </div>
    )
}

LabelInput.propTypes = {
    labelName: PropTypes.string,
    id: PropTypes.string,
}