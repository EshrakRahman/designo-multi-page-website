import {
  DesktopNavbar,
  MobileNav,
  SmallHeader,
  Footer,
  HomeHeader,
} from "@/components";

export default function Home() {
  return (
    <>
      <MobileNav />
      <DesktopNavbar />
      <HomeHeader />
    </>
  );
}
