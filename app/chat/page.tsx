'use client';

import {Box, Button, Slide, Stack, TextField, Typography} from '@mui/material';
import {useSession} from 'next-auth/react';
import {Fragment, useEffect, useState} from 'react';

import {useSocket} from '@/components/provider/SocketProvider';
import useMounted from '@/hooks/useMounted';
import {IMessage} from '@/types/chat';

const Chat = () => {
  const {socket} = useSocket();
  const {data, status} = useSession();
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [currentMessage, setCurrentMessage] = useState<string>('');
  const {isMounted} = useMounted();
  const isLogin = status === 'authenticated';

  const sendMessage = async () => {
    if (currentMessage) {
      const res = await fetch('/api/chat', {
        method: 'POST',
        body: JSON.stringify({
          username: data?.user?.name,
          userId: data?.user.id,
          content: currentMessage,
        }),
      });

      if (res.ok) setCurrentMessage('');
    }
  };

  useEffect(() => {
    socket?.on('message', (message: IMessage) => {
      setMessages((prev) => [...prev, message]);
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
    <Box>
      {messages.map((message, index) => (
        <Fragment key={index}>
          {message.userId === data?.user?.sub ? (
            <Slide direction='left' in={isMounted} mountOnEnter unmountOnExit>
              <Box textAlign='end'>
                <Typography
                  sx={{
                    display: 'inline-block',
                    borderRadius: '0.5rem',
                    backgroundColor: '#BEF0AE',
                    padding: '0.5rem',
                    marginBottom: '1rem',
                    color: 'black',
                  }}
                >
                  {message.content}
                </Typography>
              </Box>
            </Slide>
          ) : (
            <Slide direction='right' in={isMounted} mountOnEnter unmountOnExit>
              <Box>
                <Typography variant='overline' sx={{display: 'block'}}>
                  {message.username}
                </Typography>
                <Typography
                  sx={{
                    display: 'inline-block',
                    borderRadius: '5px',
                    backgroundColor: '#746d69',
                    padding: '5px',
                    marginBottom: '1rem',
                    color: 'white',
                  }}
                >
                  {message.content}
                </Typography>
              </Box>
            </Slide>
          )}
        </Fragment>
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
    </Box>
  );
};

export default Chat;
