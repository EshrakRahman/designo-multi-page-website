import { DesktopNavbar, Footer, MobileNav } from "@/components";
import { LocationCard, LocationCardContainer } from "@/components/location";

export default function Location() {
  return (
    <>
      <MobileNav />
      <DesktopNavbar />
      <LocationCardContainer />
      <Footer />
    </>
  );
}
