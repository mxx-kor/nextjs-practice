import {Container} from '@mui/material';
import {Inter} from 'next/font/google';

import Header from '@/components/header/Header';
import {AuthProvider} from '@/components/provider/AuthProvider';

import ThemeRegistry from './ThemeRegistry';

const inter = Inter({subsets: ['latin']});

export const metadata = {
  title: 'Next Practice',
  description: '일단 연습용',
};

export default function RootLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body className={inter.className}>
        <ThemeRegistry options={{key: 'mui'}}>
          <AuthProvider>
            <Container maxWidth='md'>
              <Header />
              {props.children}
              {props.modal}
            </Container>
          </AuthProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
