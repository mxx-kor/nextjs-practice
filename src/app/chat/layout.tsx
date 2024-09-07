import {Container, Stack} from '@mui/material';

import BackButton from '@/src/components/BackButton';
import {SocketProvider} from '@/src/components/provider/SocketProvider';
import SocketIndicator from '@/src/components/SocketIndicator';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <SocketProvider>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <BackButton />
        <h1>Chat</h1>
        <SocketIndicator />
      </Stack>
      <Container maxWidth='sm'>
        <main>{props.children}</main>
      </Container>
    </SocketProvider>
  );
};

export default Layout;
