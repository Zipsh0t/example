import React from 'react';
import GeneralButton from '../../components/GeneralButton/GeneralButton';

function AdminHomepage () {
    const buttonPressed = () => {
        alert('Thanks');
    }
    return (
        <div>
            <header>Welcome to the homepage!</header>
    
            <GeneralButton 
                text= "Press Here!"
                onClick={buttonPressed}
            />
        </div>
    )
}

export default AdminHomepage;