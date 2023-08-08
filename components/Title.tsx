'use client';

import {usePathname, useRouter} from 'next/navigation';

const Title = ({backNav = false}) => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <>
      {backNav && <button onClick={() => router.back()}>뒤로가기</button>}
      <h1>{pathname}</h1>
    </>
  );
};

export default Title;
