'use client';

import {Button} from '@mui/material';
import {useRouter} from 'next/navigation';

const BackButton = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <>
      <Button variant='contained' onClick={handleGoBack}>
        뒤로가기
      </Button>
    </>
  );
};

export default BackButton;
