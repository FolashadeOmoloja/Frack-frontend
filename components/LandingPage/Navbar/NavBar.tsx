import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

export default function Navbar({ activeItem }: { activeItem?: number }) {
  return (
    <>
      <MainNav activeItem={activeItem} />
      <MobileNav />
    </>
  );
}
