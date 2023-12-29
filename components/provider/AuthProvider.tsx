'use client';

import {createContext, useContext, useEffect, useState} from 'react';

interface IAuthContext {
  username: string;
  isLogin: boolean;
  login: (username: string) => void;
  logout: () => void;
}

const AuthContext = createContext<IAuthContext>({
  username: '',
  isLogin: false,
  login: () => {},
  logout: () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const [username, setUsername] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  const login = (username: string) => {
    setUsername(username);
  };

  const logout = () => {
    setUsername('');
  };

  useEffect(() => {
    username ? setIsLogin(true) : setIsLogin(false);
  }, [username]);

  return (
    <AuthContext.Provider value={{username, isLogin, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};
