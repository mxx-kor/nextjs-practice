'use client';

import {Button, TextField} from '@mui/material';
import {useEffect, useState} from 'react';

import {useSocket} from '@/components/provider/SocketProvider';

export interface IMessage {
  user: string;
  content: string;
}

const Chat = () => {
  const {socket} = useSocket();
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [currentMessage, setCurrentMessage] = useState<string>('');

  useEffect(() => {
    socket?.on('message', (message: IMessage) => {
      messages.push(message);
      setMessages([...messages]);
    });
  }, [socket]);

  const sendMessage = async () => {
    if (currentMessage) {
      const res = await fetch('/api/chat', {
        method: 'POST',
        body: JSON.stringify({
          user: 'random',
          content: currentMessage,
        }),
      });

      if (res.ok) setCurrentMessage('');
    }
  };
  return (
    <div>
      {messages.map((message, index) => (
        <div key={index}>
          <span>{message.user}</span>: <span>{message.content}</span>
        </div>
      ))}
      <TextField
        id='content'
        variant='outlined'
        value={currentMessage}
        onChange={(e) => setCurrentMessage(e.target.value)}
      />
      <Button variant='outlined' onClick={sendMessage}>
        Send
      </Button>
    </div>
  );
};

export default Chat;
