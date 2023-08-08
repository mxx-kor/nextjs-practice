import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <Link href='/'>Logo</Link>
        <Link href='/about'>about</Link>
        <Link href='/login'>login</Link>
      </nav>
    </header>
  );
};

export default Header;
