'use client';

import {signOut, useSession} from 'next-auth/react';
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
  const {data, status} = useSession();
  const [username, setUsername] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  const login = (username: string) => {
    setUsername(username);
  };

  const logout = () => {
    if (status === 'authenticated') {
      signOut();
    }
    if (status === 'unauthenticated') {
      setUsername('');
    }
  };

  useEffect(() => {
    if (status === 'authenticated') {
      const kakaoUsername = data.user?.name as string;
      setUsername(kakaoUsername);
    }
    if (status === 'unauthenticated') {
      setUsername('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  useEffect(() => {
    username ? setIsLogin(true) : setIsLogin(false);
  }, [username]);

  return (
    <AuthContext.Provider value={{username, isLogin, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};
