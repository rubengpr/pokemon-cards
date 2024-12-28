import './LandingPage.css'
import { Footer } from '../Footer/Footer'
import { Link } from 'react-router-dom'

export function LandingPage() {
    return(
        <div className='landing-page'>
            <div className='landing-body'>
                <img className='pokemon-logo' src="./pokemon-logo.png" alt="Pokémon logo" />
                <h1>The Pokémon cards website</h1>
                <p className='landing-description'>Shuffle between +100 Pokémon cards. Will you catch&apos;em all?</p>
                <Link to="/cards">
                    <button className='primary-button'>Go to cards</button>
                </Link>
            </div>
            <Footer />
        </div>
    )
}