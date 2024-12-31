import { Link } from 'react-router-dom';
import './ReturnButton.css';

export function ReturnButton() {
    return(
        <Link to='/cards' className='return-wrapper'>
            <img className='return-icon' src="./public/arrow-left.svg" alt="An arrow icon pointing to the left" />
            <p className='return-text'>Return to cards</p>
        </Link>
    )
}