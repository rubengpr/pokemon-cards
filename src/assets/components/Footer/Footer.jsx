import './Footer.css'

export function Footer() {
    return(
        <div className='footer-wrapper'>
            <p className="footer-text">Made by rubengpr</p>
            <a href="https://github.com/rubengpr">
                <img className="footer-image" src="public/github-logo.svg" alt="Github Logo" />
            </a>
        </div>
    )
}