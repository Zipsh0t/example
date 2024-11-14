import React, { useState } from 'react';
import GeneralButton from '../../components/GeneralButton/GeneralButton';
import LoginDTO from '../../dtos/loginDTO/loginDTO';
import NetworkRequest from '../../lib/networkRequest';
import { JSON_HEADER, LOGIN_EXT, POST } from '../../lib/networkRequestConstants';

function Login () {
    const [loginDTO, setLoginDTO] = useState(new LoginDTO())

    const login = async () => {
        try {
            const data = await NetworkRequest(LOGIN_EXT, POST, JSON_HEADER, loginDTO.jsonify())
            alert(data.token);
        }  catch (error) {
            alert(error.message);
           } 
        }

    
    
    const handleChange = (field) => (e) => {
        setLoginDTO(prev => {
            const newLoginDTO = Object.create(Object.getPrototypeOf(prev));
            Object.assign(newLoginDTO, prev);
            newLoginDTO.updateField(field, e.target.value);
            return newLoginDTO;
        })
    }

    const fields = [
        { value: loginDTO.username, name: "username", placeholder: "Username" },
        { value: loginDTO.password, name: "password", placeholder: "Password" }
    ]


    return (
        <div>
            <h1>Login</h1>
            
            {fields.map(field => (
                <input
                    key={field.name}
                    type="text"
                    value={field.value}
                    onChange={handleChange(field.name)}
                    placeholder={field.placeholder}
                />
            ))}



        <GeneralButton 
            onClick={login}
            text="Login"
        />
        
        </div>
    )
}

export default Login;