'use client';

import {Box, Container} from '@mui/material';
import {useRouter} from 'next/navigation';
import {MouseEventHandler, useCallback, useEffect, useRef} from 'react';

export default function Modal({children}: {children: React.ReactNode}) {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === overlay.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay],
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onDismiss();
    },
    [onDismiss],
  );

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onKeyDown]);

  return (
    <Box
      ref={overlay}
      sx={{
        position: 'fixed',
        inset: 0,
        textAlign: 'center',
        zIndex: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
      onClick={onClick}
    >
      <Container
        maxWidth='xs'
        ref={wrapper}
        sx={{
          paddingY: '4rem',
          marginTop: '15rem',
          backgroundColor: '#323131',
          borderRadius: '1rem',
        }}
      >
        {children}
      </Container>
    </Box>
  );
}
