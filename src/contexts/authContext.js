import React, { createContext, useState, useContext, useEffect} from 'react'; 
import { LOGIN_EXT, POST, JSON_HEADER } from '../lib/networkRequestConstants';
import NetworkRequest from '../lib/networkRequest';
import { toastRef } from './toastContext/toastContext';
import LoginDTO from '../dtos/loginDTO/loginDTO';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext()



export const AuthProvider = ({ children }) => {
    const [userToken, setUserToken] = useState(localStorage.getItem('userToken') || null);
    const navigate = useNavigate();

    useEffect(() => {
        if (!userToken) {
            navigate('/login');
        }
    }, [userToken, navigate]);

    const login = async (loginDTO) => {
        try {
            const data = await NetworkRequest(LOGIN_EXT, POST, JSON_HEADER, loginDTO.jsonify())
            setUserToken(data.token);
            localStorage.setItem('userToken', data.token);
            return true;
        }  catch (error) {
            toastRef.current(error.message);
            return false;
        }
    }

    const logout = () => {
        setUserToken(null);
        localStorage.removeItem('userToken');
    }

    return (
        <AuthContext.Provider value={{ userToken, login }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);