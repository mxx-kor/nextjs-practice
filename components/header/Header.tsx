'use client';

import {Button, Stack} from '@mui/material';
import Link from 'next/link';
import {signOut, useSession} from 'next-auth/react';

import {saveRedirectInfo} from '@/utils/redirect';

import styles from './Header.module.css';

const Header = () => {
  const {status} = useSession();
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
        <Link className={styles.headerNav} href='/ssr-photos'>
          <h2>SSR Photos</h2>
        </Link>
        {status === 'authenticated' ? (
          <Button
            size='small'
            color='secondary'
            variant='contained'
            onClick={() => signOut()}
          >
            Logout
          </Button>
        ) : (
          <Link href='/login' passHref>
            <Button
              size='small'
              color='info'
              variant='contained'
              onClick={saveRedirectInfo}
            >
              Login
            </Button>
          </Link>
        )}
      </Stack>
    </header>
  );
};

export default Header;
