import BackButton from '@/src/components/BackButton';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <>
      <BackButton />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
