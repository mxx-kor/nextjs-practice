import {Button, styled} from '@mui/material';
import {signIn} from 'next-auth/react';

import KakaoIcon from './icon/KakaoIcon';

const KakaoLogin = () => {
  return (
    <KakaoButton
      variant='contained'
      startIcon={<KakaoIcon />}
      fullWidth
      onClick={() => signIn('kakao', {callbackUrl: '/login'})}
    >
      카카오 로그인
    </KakaoButton>
  );
};

const KakaoButton = styled(Button)({
  backgroundColor: '#FEE500',
  color: '#000000',
  '&:hover': {
    backgroundColor: '#a2930a',
  },
});

export default KakaoLogin;
