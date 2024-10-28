import { createContext, useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { loginSuccess} from '../../redux/slice/authslice';

export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);

    if (!context) {
        throw new Error('useAuth debe ser utilizado dentro de AuthProvider.');
    }

    return context;
};

export const AuthProvider = ({ children }) => {
    const dispatch = useDispatch();
    const login = async (formData) => {
        try {
            const response = await axios.post('/Authentication/AuthenticateUser', formData);
            console.log(response)
            if (response.data && response.data.token) {
                dispatch(loginSuccess(response.data));
                return { user: response.data.user, token: response.data.token };
            } else {
                throw new Error('El token no se recibi贸 en la respuesta del servidor.');
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                throw new Error('No se pudo iniciar sesi贸n: ' + error.response.data.message);
            } else {
                throw new Error('No se pudo iniciar sesi贸n: ' + (error.response?.data?.message || error.message));
            }
        }
    };

   
    return (
        <authContext.Provider value={{login}}>
            {children}
        </authContext.Provider>
    );
};