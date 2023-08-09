import {ReactNode} from 'react';

import Title from '@/components/Title';

const UserLayout = ({children}: {children: ReactNode}) => {
  return (
    <main>
      <Title backNav={true} />
      {children}
    </main>
  );
};

export default UserLayout;
