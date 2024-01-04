'use client';

import {SessionProvider} from 'next-auth/react';
import {ReactNode} from 'react';

interface AuthProviderProps {
  children: ReactNode;
}

const NextAuthProvider = ({children}: AuthProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default NextAuthProvider;
