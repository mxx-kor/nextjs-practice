'use client';

import {Box, Button} from '@mui/material';
import Image from 'next/image';
import React from 'react';

import useClipboard from '@/src/hooks/useClipboard';

const Check = () => {
  const {copyToClipboard, isCopied} = useClipboard();

  const handleCopyImage = async () => {
    copyToClipboard({type: 'image/png', url: '/leaves.png'});
  };

  return (
    <Box>
      <Button disabled={isCopied} variant='contained' onClick={handleCopyImage}>
        Copy Image
      </Button>
      <Image src='/leaves.png' width={100} height={100} alt='leaves' />
    </Box>
  );
};

export default Check;
