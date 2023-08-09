import Title from '@/components/Title';

interface LayoutProps {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <>
      <Title backNav={true} />
      <main>
        {props.children}
        {props.team}
        {props.analytics}
      </main>
    </>
  );
};

export default Layout;
