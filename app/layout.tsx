import {Container} from '@mui/material';
import {Inter} from 'next/font/google';

import Header from '@/components/Header';

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
    <html lang='en'>
      <body className={inter.className}>
        <ThemeRegistry options={{key: 'mui'}}>
          <Container maxWidth='md'>
            <Header />
            {props.children}
            {props.modal}
          </Container>
        </ThemeRegistry>
      </body>
    </html>
  );
}
