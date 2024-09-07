'use client';

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import Image from 'next/image';

import useClipboard from '@/src/hooks/useClipboard';
import {PhotoType} from '@/src/types/photo';

const PhotoCard = ({thumbnailUrl, title, url}: PhotoType) => {
  const {copyToClipboard, isCopied} = useClipboard();

  const handleCopyLink = (url: string) => {
    copyToClipboard(url);
  };

  return (
    <Card sx={{display: 'flex', justifyContent: 'space-between'}}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <CardContent>
          <Typography variant='h5'>{title}</Typography>
        </CardContent>
        <CardActions>
          <Button
            disabled={isCopied}
            size='small'
            color='primary'
            variant='contained'
            onClick={() => handleCopyLink(url)}
          >
            Share as Link
          </Button>
        </CardActions>
      </Box>
      <Image
        src={thumbnailUrl}
        alt={`${title} thumbnail`}
        width={150}
        height={150}
        priority
      />
    </Card>
  );
};

export default PhotoCard;
