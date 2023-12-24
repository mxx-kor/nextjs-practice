import {Stack} from '@mui/material';

import {SocketProvider} from '@/components/provider/SocketProvider';
import SocketIndicator from '@/components/SocketIndicator';
import Title from '@/components/Title';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <SocketProvider>
      <Stack direction='row'>
        <Title backNav={true} />
        <SocketIndicator />
      </Stack>
      <main>{props.children}</main>
    </SocketProvider>
  );
};

export default Layout;
