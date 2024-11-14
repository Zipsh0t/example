import React from 'react';
import GeneralButton from '../../components/GeneralButton/GeneralButton';

function Homepage () {
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

export default Homepage;