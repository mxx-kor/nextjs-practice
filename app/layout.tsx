import {Container} from '@mui/material';
import {Inter} from 'next/font/google';

import Header from '@/components/header/Header';
import NextAuthProvider from '@/components/provider/NextAuthProvider';
import QueryProvider from '@/components/provider/QueryProvider';
import ThemeRegistry from '@/components/provider/ThemeRegistry';

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
        <QueryProvider>
          <ThemeRegistry options={{key: 'mui'}}>
            <NextAuthProvider>
              <Container maxWidth='md'>
                <Header />
                {props.children}
                {props.modal}
              </Container>
            </NextAuthProvider>
          </ThemeRegistry>
        </QueryProvider>
      </body>
    </html>
  );
}
