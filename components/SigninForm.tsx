'use client';
import {Box, Button, Grid, Link, TextField} from '@mui/material';
import {FormEvent} from 'react';

const SigninForm = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Box component='form' noValidate onSubmit={handleSubmit} sx={{mt: 1}}>
      <TextField
        margin='normal'
        required
        fullWidth
        id='email'
        label='Email'
        name='email'
        autoComplete='off'
        autoFocus
      />
      <TextField
        margin='normal'
        required
        fullWidth
        defaultValue=''
        name='password'
        label='Password'
        type='password'
        id='password'
        autoComplete='off'
      />
      <Button type='submit' fullWidth variant='contained' sx={{mt: 3, mb: 2}}>
        Sign In
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href='#' variant='body2'>
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link href='#' variant='body2'>
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SigninForm;
