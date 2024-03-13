const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-4 md:grid-rows-1 m-3 h-full">{children}</div>;
};

export default Layout;
