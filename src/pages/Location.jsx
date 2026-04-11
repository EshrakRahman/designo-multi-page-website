import { DesktopNavbar, Footer, MobileNav } from "@/components";
import { LocationCard } from "@/components/location";

export default function Location() {
  return (
    <>
      <MobileNav />
      <DesktopNavbar />
      <LocationCard />
      {/* <Footer /> */}
    </>
  );
}
