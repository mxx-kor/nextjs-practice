'use client';

import {createContext, useContext, useEffect, useState} from 'react';
import {io, Socket} from 'socket.io-client';

type SocketContextType = {
  socket: Socket | null;
  isConnected: boolean;
};

const SocketContext = createContext<SocketContextType>({
  socket: null,
  isConnected: false,
});

export const useSocket = () => {
  return useContext(SocketContext);
};

export const SocketProvider = ({children}: {children: React.ReactNode}) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const socket: Socket = io(process.env.NEXT_PUBLIC_SITE_URL!, {
      path: '/api/socket/io',
      addTrailingSlash: false,
    });

    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('error', (error: Error) => {
      console.error(error);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    setSocket(socket);

    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, []);

  return (
    <SocketContext.Provider value={{socket, isConnected}}>
      {children}
    </SocketContext.Provider>
  );
};
