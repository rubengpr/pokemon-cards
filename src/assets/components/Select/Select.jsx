import './Select.css'
import PropTypes from 'prop-types'

export function Select({ labelName, id, option1, option2 }) {
    return(
        <div className='input-select-wrapper'>
            <label className="label-input" htmlFor={id}>{labelName}</label>
            <select className="input-select" name={id} id={id}>
                <option value="barcelona">{option1}</option>
                <option value="madrid">{option2}</option>
            </select>
        </div>
    )
}

Select.propTypes = {
    labelName: PropTypes.string,
    id: PropTypes.string,
    option1: PropTypes.string,
    option2: PropTypes.string,
}