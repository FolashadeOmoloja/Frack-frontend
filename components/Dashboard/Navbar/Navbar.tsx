import DashboardMainNavbar from "./MainNav";
import MobileNav from "./MobileNav";

const DashboardNavbar = ({ activeItem }: { activeItem?: number }) => {
  return (
    <>
      <DashboardMainNavbar activeItem={activeItem} />
      <MobileNav />
    </>
  );
};

export default DashboardNavbar;
