import './globals.css';

import {Inter} from 'next/font/google';

import Header from '@/components/Header';

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
        <Header />
        {props.children}
        {props.modal}
      </body>
    </html>
  );
}
