import SideNavigation from "@/app/_components/SideNavigation";

const Layout = ({ children }) => {
  return (
    <div className="grid grid-cols-[16rem_1fr] max-md:grid-cols-[3rem_1fr] h-full gap-12 max-md:gap-4">
      <SideNavigation />
      <div className="py-2">{children}</div>
    </div>
  );
};

export default Layout;
