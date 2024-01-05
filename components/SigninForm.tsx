'use client';

import {Box, Button, TextField, Typography} from '@mui/material';
import {useRouter} from 'next/navigation';
import {signIn, useSession} from 'next-auth/react';
import {FormEvent, useEffect} from 'react';

import {redirectToPreviousPage} from '@/utils/redirect';

import KakaoLogin from './KakaoLogin';

const SigninForm = () => {
  const router = useRouter();
  const {status} = useSession();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const username = data.get('username') as string;
    const prevPath = redirectToPreviousPage();
    signIn('credentials', {
      username,
      callbackUrl: prevPath,
    });
  };

  useEffect(() => {
    const isLogin = status === 'authenticated';
    if (isLogin) {
      router.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return (
    <Box component='form' noValidate onSubmit={handleSubmit} sx={{mt: 1}}>
      <Typography color='grey'>
        {
          "you don't need to sign up, enter user name for chat service that's it 😌"
        }
      </Typography>
      <TextField
        margin='normal'
        required
        fullWidth
        id='username'
        label='User Name'
        name='username'
        autoComplete='off'
        autoFocus
      />
      <Button type='submit' fullWidth variant='contained' sx={{mt: 3, mb: 2}}>
        Sign In
      </Button>
      <KakaoLogin />
    </Box>
  );
};

export default SigninForm;
