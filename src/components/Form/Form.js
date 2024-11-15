import React from "react";
import styles from './Form.module.css';

function Form ({ onSubmit, children }) {
    return (
        <form 
            className={styles.alignedForm}
            onSubmit={onSubmit}
        >
            {children}
        </form>
    )

}

export default Form;