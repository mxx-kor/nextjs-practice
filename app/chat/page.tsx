'use client';

import {Button, Stack, TextField} from '@mui/material';
import {useEffect, useState} from 'react';

import {useAuth} from '@/components/provider/AuthProvider';
import {useSocket} from '@/components/provider/SocketProvider';
import {IMessage} from '@/types/chat';

const Chat = () => {
  const {socket} = useSocket();
  const {username, isLogin} = useAuth();
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [currentMessage, setCurrentMessage] = useState<string>('');

  const sendMessage = async () => {
    if (currentMessage) {
      const res = await fetch('/api/chat', {
        method: 'POST',
        body: JSON.stringify({
          user: username,
          content: currentMessage,
        }),
      });

      if (res.ok) setCurrentMessage('');
    }
  };

  useEffect(() => {
    socket?.on('message', (message: IMessage) => {
      messages.push(message);
      setMessages([...messages]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);

  useEffect(() => {
    const handleEnter = (e: KeyboardEvent) => {
      if (e.key === 'Enter') sendMessage();
    };
    window.addEventListener('keyup', handleEnter);
    return () => window.removeEventListener('keyup', handleEnter);
  });

  return (
    <div>
      <h2>{username}</h2>
      {messages.map((message, index) => (
        <div key={index}>
          <span>{message.user}</span>: <span>{message.content}</span>
        </div>
      ))}
      <Stack direction='row' justifyContent='center'>
        <TextField
          size='small'
          id='content'
          disabled={!isLogin}
          placeholder={isLogin ? 'Type message...' : 'Login first'}
          variant='outlined'
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
        />
        <Button variant='outlined' onClick={sendMessage}>
          Send
        </Button>
      </Stack>
    </div>
  );
};

export default Chat;
