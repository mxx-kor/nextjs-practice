'use client';
import {Stack} from '@mui/material';
import Link from 'next/link';

import GifWrapper from '../giphy/GifWrapper';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header>
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        marginBottom={5}
      >
        <GifWrapper>
          <GifWrapper.Gif />
        </GifWrapper>
        <Stack direction='row' gap={3}>
          <Link className={styles.headerNav} href='/'>
            <h2>Home</h2>
          </Link>
          <Link className={styles.headerNav} href='/chat'>
            <h2>chat</h2>
          </Link>
          <Link className={styles.headerNav} href='/about'>
            <h2>about</h2>
          </Link>
          <Link className={styles.headerNav} href='/login'>
            <h2>login</h2>
          </Link>
        </Stack>
      </Stack>
    </header>
  );
};

export default Header;
