import {
  DesktopNavbar,
  MobileNav,
  SmallHeader,
  Footer,
  HomeHeader,
  Service,
  Feature,
} from "@/components";
import { FeatureContainer, ServiceContainer } from "@/components/home";

export default function Home() {
  return (
    <>
      <MobileNav />
      <DesktopNavbar />
      <HomeHeader />
      <ServiceContainer />
      <FeatureContainer />
      <Footer />
    </>
  );
}
