import React from 'react';
import styles from './GeneralButton.module.css'

function GeneralButton({ text, onClick, disabled = false }) {
    return (
    <button
         onClick={onClick}
        className={styles.generalButton}
        disabled={disabled}
    >

        {text} 
    </button>
    )
}

export default GeneralButton;