// TODO: Import library, context, api, jwt decode, toastify, hooks
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // * for navigation
import { jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify';
import userService from '../api/userService';
import { GlobalContext } from '../context/GlobalContext'; // * for get token

// * create authcontext for managing authentication state management
const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null); // * state for saving authentication data
    const [loading, setLoading] = useState(false) // * state for tracking loading state
    const [error, setError] = useState(null); // * also for tracking error state
    const navigate = useNavigate(); // * navigation hooks (pindah url dah)
    const { token, setToken } = useContext(GlobalContext); //* desctructure token and set Token

    //TODO : useEffect hook to set auth state if token is available
    useEffect(() => {
        if (token) {
          // * decode token
          const decodedToken = jwtDecode(token);
          // * set auth state with token and role token
          setAuth({ token, role: decodedToken.role });
        }
      }, [token]); // * dependency array with token, run when token changes

    // TODO : login function  
    const login = async (credentials) => {
        setLoading(true);
        setError(null);
        try {
            // * Make api user call to login
            const response = await userService.login(credentials.email, credentials.password);
            // * get token from response data
            const { token } = response.data; 
            // * decode token
            const decodedToken = jwtDecode(token);
            // * saing token in local storage
            localStorage.setItem('token', token);
            // *  set token in global context
            setToken(token);
            // * set auth state with token and role
            setAuth({ token, role: decodedToken.role });

            // * navigate based on user role using switch case
            switch(decodedToken.role){
                case 'admin':
                case 'member':
                    // * navigate to admin dahboard, why? because they have same layout
                    navigate('/admin-dashboard'); 
                    break;
                case 'customer':
                      // * navigate to customer dashboard
                    navigate('/customer-dashboard');
                    break;
                default:
                    console.error('Login successfull, but no role are found')
            }
        } catch (err) {
            console.error('Error logging in');
            setError('Invalid email or password'); // * error message if login fails
        }finally {
            setLoading(false); // * Set loading state to false after login attempt
        }
    };

    // TODO : register function 
    const register = async (credentials) => {
        setLoading(true);
        setError(null);
        try {
            // * make api user call to register
            await userService.register(credentials.username, credentials.email, credentials.password, credentials.role)
            toast.success('Registrasi berhasil!')
        } catch (error) {
            console.error(error);
            // * set error state if registration failed
            setError('Registration failed');
            // * show error toast
            toast.error('Registrasi gagal!');
        }finally {
            // * Set loading state to false after registration attempt
            setLoading(false);
        }
    }

    // TODO: logout function
    const logout = () => {
        // * Remove token from local storage
        localStorage.removeItem('token')
        // * Set token in global context to null
        setToken(null)
        // * Set auth state to null
        setAuth(null)
      }

    return (
        <AuthContext.Provider value={{ auth, login, register, logout, loading, error }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };