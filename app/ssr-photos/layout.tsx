import Title from '@/components/Title';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <>
      <Title backNav={true} />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
