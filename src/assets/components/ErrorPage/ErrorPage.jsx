import './ErrorPage.css'
import { Link } from 'react-router-dom'
import { Footer } from '../Footer/Footer'

export function ErrorPage() {
    return(
        <div className='error-page'>
            <div className='error-body'>
                <img className='error-image' src="./public/pikachu-cry.png" alt="An illustration of a Pikachu crying" />
                <h1 className='error-title'>Oh oh..</h1>
                <p className='error-description'>This page does not exist. Get back to the cards game page and try another URL.</p>
                <Link to="cards">
                    <button className='primary-button'>Go to cards</button>
                </Link>
            </div>
            <Footer />
        </div>
    )
}