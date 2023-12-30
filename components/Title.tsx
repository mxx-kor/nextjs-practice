'use client';

import {Button} from '@mui/material';
import {usePathname, useRouter} from 'next/navigation';

const Title = ({backNav = false}) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      {backNav && (
        <Button variant='contained' onClick={() => router.back()}>
          뒤로가기
        </Button>
      )}
      <h1>{pathname?.slice(1)}</h1>
    </>
  );
};

export default Title;
