import DashboardMainNavbar from "./MainNav";
import DashboardMobileNav from "./MobileNav";

const DashboardNavbar = ({ activeItem }: { activeItem?: number }) => {
  return (
    <>
      <DashboardMainNavbar activeItem={activeItem} />
      <DashboardMobileNav />
    </>
  );
};

export default DashboardNavbar;
