'use client';

import {Box, Button, TextField, Typography} from '@mui/material';
import {useRouter} from 'next/navigation';
import {FormEvent} from 'react';

import KakaoLogin from './KakaoLogin';
import {useAuth} from './provider/AuthProvider';

const SigninForm = () => {
  const {login} = useAuth();
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const username = data.get('username') as string;
    login(username);
    router.back();
  };

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
