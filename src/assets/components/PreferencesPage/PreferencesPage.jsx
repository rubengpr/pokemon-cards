import './PreferencesPage.css';
import { ReturnButton } from '../ReturnButton/ReturnButton';
import { LabelInput } from '../LabelInput/LabelInput';
import { Button } from '../Button/Button';
import PropTypes from 'prop-types';
import { Checkbox } from '../Checkbox/Checkbox';

export function PreferencesPage() {
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
                    <LabelInput labelName="Language" id="language" />
                    <LabelInput labelName="Time Zone" id="timezone" />
                    <LabelInput labelName="View Mode" id="mode" />
                    <LabelInput labelName="View Mode" id="mode" />
                    <Checkbox checkboxText="Get updates through WhatsApp" id="whatsappUpdates" />
                    <Checkbox checkboxText="Activate push notifications" id="pushNotifications" />
                    <Button buttonText="Save" />
                </div>
            </div>
        </div>
    )
}

PreferencesPage.propTypes = {
    labelName: PropTypes.string,
    id: PropTypes.string,
    buttonText: PropTypes.string,
}