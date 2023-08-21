'use client';
import {Input, Stack} from '@mui/material';
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
        <Link href='/'>
          <GifWrapper>
            <GifWrapper.Gif />
          </GifWrapper>
        </Link>
        <Input />
        <Stack direction='row' gap={3}>
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
