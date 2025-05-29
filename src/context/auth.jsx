import axios from 'axios';
import { useState, useEffect, createContext, useContext, useCallback } from 'react';
import { axiosOptions, backendURL } from '../../constants';
import { ApiResponse } from '../utils/ApiResponse';
import { ApiError } from '../utils/ApiError';

const AuthContext = createContext();

function AuthProvider({ children })
{
    const [isLoading, setLoading] = useState(false); // Loader
    const [user, setUser] = useState(null); // User payload
    const [isLoggedIn, setLoggedIn] = useState(null); // Login flag

    // Login
    const userLogin = useCallback(async (user, action) => {
        try 
        {
            setLoading(true);
            const response = await axios.post(`${backendURL}/user/login`, user, axiosOptions);
            const { data, message, success } = ApiResponse(response);
            setUser(data.user);
            setLoggedIn(success);
            setLoading(false);

            action.resetForm();
            alert(message);
        } 
        catch (error) 
        {
            alert(ApiError(error).message);
        }
    },[]);

    // Signup
    const userSignup = useCallback(async (user, action) => {
        try 
        {
            setLoading(true);
            const response = await axios.post(`${backendURL}/user/signup`, user, { ...axiosOptions, headers:{ "Content-Type":"multipart/form-data" } });
            action.resetForm();
            setLoading(false);
            alert(ApiResponse(response).message);
        } 
        catch(error) 
        {
            alert(ApiError(error).message);
        }
    },[]);


    return(
        <AuthContext.Provider value={{ userSignup, userLogin, isLoading, setLoading }}>
            { children }
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;