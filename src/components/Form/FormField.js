import React from "react";
import TextInput from "../TextInput/TextInput";
import styles from './Form.module.css';

function FormField ({ type, text, value, onChange, placeholder }) {
    return (
        <div className={styles.formFieldContainer}>
            <div className={styles.labelDiv}>
                <label>{text}</label>
            </div>
            <div className={styles.inputDiv}>
            <TextInput
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
            </div>
        </div>
               
        
        
    )
}

export default FormField