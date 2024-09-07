import {Box, Container, CssBaseline, Typography} from '@mui/material';

import Modal from '@/src/components/Modal';
import SigninForm from '@/src/components/SigninForm';

const LoginModal = () => {
  return (
    <Modal>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <SigninForm />
        </Box>
      </Container>
    </Modal>
  );
};

export default LoginModal;
