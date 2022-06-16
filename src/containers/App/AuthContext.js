import { useState, createContext, useMemo, useContext, useEffect } from 'react';
import SessionStorage from '../../lib/utils/storage';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        const userFromStorage = new SessionStorage().getItem('userInfo');
        userFromStorage && setUser(userFromStorage);
    }, []);

    const login = async (username, password) => {

        setLoading(true);

        try {
            const userInfo = await fetchLoginFake(username, password);
            new SessionStorage().storeItem('userInfo', userInfo);
            setUser(userInfo);
        } catch(error) {
            setError(error);
        } finally {
            setLoading(false);
        }
        
    };

    const logout = () => {
        new SessionStorage().clearItem('userInfo')
        setUser(undefined);
    }

    const memoedValue = useMemo(
        () => ({
            user,
            loading,
            error,
            login,
            logout,
        }),
        [user, loading, error]
    );

    return (
        <AuthContext.Provider value={memoedValue}>
            {children}
        </AuthContext.Provider>
    );

}

export default function useAuth() {
    return useContext(AuthContext);
}

const fetchLoginFake = (username, password) => 
  new Promise((res, rej) => {
    setTimeout(() => {
        if(username === 'admin' && password === 'admin') {
            res({ username: 'JohnDoe@', firstName: 'John', lastName: 'Doe' });
        } else {
            rej({ message: 'Invalid email and password' });
        }
    }, 1000)
});