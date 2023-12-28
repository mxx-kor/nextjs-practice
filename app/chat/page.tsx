'use client';

import {Button, TextField} from '@mui/material';
import {useEffect, useState} from 'react';

import {useSocket} from '@/components/provider/SocketProvider';
import {IMessage} from '@/types/chat';

const Chat = () => {
  const {socket} = useSocket();
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [currentMessage, setCurrentMessage] = useState<string>('');

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

  useEffect(() => {
    socket?.on('message', (message: IMessage) => {
      messages.push(message);
      setMessages([...messages]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);

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
