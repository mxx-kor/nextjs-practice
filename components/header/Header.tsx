'use client';

import {Box, Stack} from '@mui/material';
import Link from 'next/link';

import {headerMenu} from '@/utils/config';

import LoginButton from '../LoginButton';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <Stack direction='row' gap={3}>
          {headerMenu.map((menu) => (
            <Link
              key={menu.label}
              className={styles.headerNav}
              href={menu.path}
            >
              {menu.label}
            </Link>
          ))}
        </Stack>
        <Box>
          <LoginButton />
        </Box>
      </Stack>
    </header>
  );
};

export default Header;
