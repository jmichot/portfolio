const Layout = (props) => {
  return (
    <div className={`flex h-screen w-screen snap-center ${props.bgColor}`}>
      {props.children}
    </div>
  );
};

export default Layout;
