import {Container, Stack} from '@mui/material';

import {SocketProvider} from '@/components/provider/SocketProvider';
import SocketIndicator from '@/components/SocketIndicator';
import Title from '@/components/Title';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <SocketProvider>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Title backNav={true} />
        <SocketIndicator />
      </Stack>
      <Container maxWidth='sm'>
        <main>{props.children}</main>
      </Container>
    </SocketProvider>
  );
};

export default Layout;
