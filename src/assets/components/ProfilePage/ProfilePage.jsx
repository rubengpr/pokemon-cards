import './ProfilePage.css';
import { LabelInput } from '../LabelInput/LabelInput.jsx';
import { Button } from '../Button/Button.jsx';
import { ReturnButton } from '../ReturnButton/ReturnButton.jsx';

export function ProfilePage() {
    return(
        <div className='profile-page'> 
            <div className='profile-navbar'>
                <div className='profile-title'>
                    <h1>Profile</h1>
                </div>
                <div className='profile-navbar-options-wrapper'>
                    <div className='profile-navbar-option'>
                        <p>Personal info</p>
                    </div>
                    <div className='profile-navbar-option'>
                        <p>Preferences</p>
                    </div>
                </div>
            </div>
            <div className='profile-content'>
                <ReturnButton />
                <div className='profile-body'>
                    <LabelInput labelName="Name" id="name" />
                    <LabelInput labelName="Surname" id="surname" />
                    <LabelInput labelName="Email" id="email" />
                    <LabelInput labelName="Phone Number" id="phone" />
                    <LabelInput labelName="City" id="city" />
                    <LabelInput labelName="Country" id="country" />
                    <Button buttonText="Save" />
                </div>
            </div>
        </div>
    )
}