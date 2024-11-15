import React, { createContext, useState, useCallback} from 'react';
import styles from './toastContext.module.css'


const ToastContext = createContext();
export const toastRef = React.createRef();

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([])

    const addToast = useCallback((message) => {
        const id = Date.now()
        setToasts((prevToasts)=> [...prevToasts, {id, message}])
    })

    const removeToast = useCallback((id) => {
        setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
    })

    toastRef.current = addToast
    
    return (
        <ToastContext.Provider value={addToast}>
            {children}
            { toasts.length > 0 &&
            <div>
                <div className={styles.toastOverlay} />
                <div className={styles.toastContainer}>
                            <label>{toasts[0].message}</label>
                            <button 
                                onClick={() => removeToast(toasts[0].id)}
                                className={styles.boldButton}                            
                            >    
                                Dismiss
                            </button>
                        </div>
                   </div>
                    } 
        </ToastContext.Provider>
    )
}