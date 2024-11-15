import React, { useState } from 'react';
import GeneralButton from '../../components/GeneralButton/GeneralButton';
import LoginDTO from '../../dtos/loginDTO/loginDTO';
import styles from './Login.module.css';
import FormField from '../../components/Form/FormField';
import Form from '../../components/Form/Form';
import { useAuth } from '../../contexts/authContext';
import { useNavigate } from 'react-router-dom';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';



function Login () {
    const [loginDTO, setLoginDTO] = useState(new LoginDTO());
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleChange = (field) => (e) => {
        setLoginDTO(prev => {
            const newLoginDTO = Object.create(Object.getPrototypeOf(prev));
            Object.assign(newLoginDTO, prev);
            newLoginDTO.updateField(field, e.target.value);
            return newLoginDTO;
        })
    }

    const attemptLogin = async () => {
        setLoading(true);
        const response = await login(loginDTO);
        if (response) {
            navigate('/admin/home');
        }
        setLoading(false);
    }


    const fields = [
        { value: loginDTO.username, name: "username", placeholder: "Username" },
        { value: loginDTO.password, type: 'password', name: "password", placeholder: "Password" }
    ]

    return (
        <div>
            { loading ? 
            <LoadingScreen />
            :  
            <div>
                <h1>Login</h1>

                <Form onSubmit={attemptLogin}>
                    {fields.map(field => (
                        <FormField
                            key={field.name}
                            type={field.type}
                            text={field.placeholder}
                            value={field.value}
                            onChange={handleChange(field.name)}
                            placeholder={field.placeholder}
                        />
                    ))}

                    <GeneralButton 
                        type="submit"
                        text="Login"
                    />
                </Form>
            </div>
            }
        </div>
    )
}

export default Login;