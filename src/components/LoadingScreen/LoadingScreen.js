import React from "react";
import styles from './LoadingScreen.module.css';

function LoadingScreen () {
    return (
        <div className={styles.loadingSpinner}>
            <div className={styles.spinner}/>

        </div>        
    )
}
 
export default LoadingScreen;