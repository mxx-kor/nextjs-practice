'use client';

import {Chip} from '@mui/material';

import {useSocket} from './provider/SocketProvider';

const SocketIndicator = () => {
  const {isConnected} = useSocket();

  if (!isConnected) {
    return <Chip label='Polling every 1s' color='error' />;
  }
  return <Chip label='connected' color='success' />;
};

export default SocketIndicator;
