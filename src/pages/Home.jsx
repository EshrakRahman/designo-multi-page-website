import {
  DesktopNavbar,
  MobileNav,
  SmallHeader,
  Footer,
  HomeHeader,
  Service,
} from "@/components";

export default function Home() {
  return (
    <>
      <MobileNav />
      <DesktopNavbar />
      <HomeHeader />
      <Service />
    </>
  );
}
