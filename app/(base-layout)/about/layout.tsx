interface LayoutProps {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <>
      {props.children}
      {props.team}
      {props.analytics}
    </>
  );
};

export default Layout;
