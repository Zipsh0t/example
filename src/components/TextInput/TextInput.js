import React from "react";
import styles from './TextInput.module.css'
        

function TextInput ({ type='text', value, onChange, placeholder }) {

    return (
        <input
            className={styles.TextInput}
            type={type}
            value={value}
            onChange={onChange}
            palceholder={placeholder}
        />
    )
}

export default TextInput;