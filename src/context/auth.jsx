import axios from 'axios';
import { useState, useEffect, createContext, useContext, useCallback } from 'react';
import { axiosOptions, backendURL } from '../../constants';
import { ApiResponse } from '../utils/ApiResponse';
import { ApiError } from '../utils/ApiError';

const AuthContext = createContext();

function AuthProvider({ children })
{
    // Login
    const userLogin = useCallback(async (user, action) => {
        try 
        {
            const response = await axios.post(`${backendURL}/user/login`, user, axiosOptions);
            const { message, data, success } = ApiResponse(response);
            console.log("The message is: ", message);
            action.resetForm();
        } 
        catch (error) 
        {
            console.log(ApiError(error).message);
        }
    },[]);


    return(
        <AuthContext.Provider value={{ userLogin }}>
            { children }
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;