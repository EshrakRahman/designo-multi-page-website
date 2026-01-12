import {
  DesktopNavbar,
  MobileNav,
  SmallHeader,
  Footer,
  HomeHeader,
  Service,
} from "@/components";
import { ServiceContainer } from "@/components/home";

export default function Home() {
  return (
    <>
      <MobileNav />
      <DesktopNavbar />
      <HomeHeader />
      <ServiceContainer />
    </>
  );
}
