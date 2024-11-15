import React from 'react';
import styles from './GeneralButton.module.css'

function GeneralButton({ text, onClick, type='button', disabled = false }) {
    return (
        <button
            onClick={onClick}
            className={styles.generalButton}
            disabled={disabled}
            type={type}
        >
            {text} 
        </button>
    )
}

export default GeneralButton;