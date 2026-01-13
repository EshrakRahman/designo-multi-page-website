import { DesktopNavbar, MobileNav, Footer, HomeHeader } from "@/components";
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
