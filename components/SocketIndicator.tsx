'use client';

import {useSocket} from './provider/SocketProvider';

const SocketIndicator = () => {
  const {isConnected} = useSocket();

  if (!isConnected) {
    return <div>Fallback: Polling every 1s</div>;
  }
  return <div>connected!</div>;
};

export default SocketIndicator;
