import {Button} from '@mui/material';
import Link from 'next/link';
import {signOut, useSession} from 'next-auth/react';

import {saveRedirectInfo} from '@/utils/redirect';

const LoginButton = () => {
  const {status} = useSession();

  return (
    <>
      {status === 'authenticated' ? (
        <Button
          size='small'
          color='secondary'
          variant='contained'
          onClick={() => signOut()}
        >
          Logout
        </Button>
      ) : (
        <Link href='/login' passHref>
          <Button
            size='small'
            color='info'
            variant='contained'
            onClick={saveRedirectInfo}
          >
            Login
          </Button>
        </Link>
      )}
    </>
  );
};

export default LoginButton;
