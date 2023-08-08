import Link from 'next/link';

import Button from '@/components/Button';

const Home = () => {
  return (
    <main>
      아마도 사진 관련 애플리케이션을 구현할 것 같습니다~
      <Link href='/check'>
        <Button />
      </Link>
    </main>
  );
};

export default Home;
