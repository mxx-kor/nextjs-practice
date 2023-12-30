'use client';

import {Button, Stack} from '@mui/material';
import Link from 'next/link';

import {useAuth} from '../provider/AuthProvider';
import styles from './Header.module.css';

const Header = () => {
  const {isLogin, logout} = useAuth();
  return (
    <header>
      <Stack direction='row' gap={3} alignItems='center'>
        <Link className={styles.headerNav} href='/'>
          <h2>Home</h2>
        </Link>
        <Link className={styles.headerNav} href='/chat'>
          <h2>chat</h2>
        </Link>
        <Link className={styles.headerNav} href='/about'>
          <h2>about</h2>
        </Link>
        {isLogin ? (
          <Button
            size='small'
            color='secondary'
            variant='contained'
            onClick={logout}
          >
            Logout
          </Button>
        ) : (
          <Link href='/login' passHref>
            <Button size='small' color='info' variant='contained'>
              Login
            </Button>
          </Link>
        )}
      </Stack>
    </header>
  );
};

export default Header;
