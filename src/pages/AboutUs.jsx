import {
  DesktopNavbar,
  MobileNav,
  AboutUsHeader,
  AboutTalent,
  LocationPhotoCard,
  RealDealSection,
} from "@/components";

export default function AboutUs() {
  return (
    <>
      <MobileNav />
      <DesktopNavbar />
      <div className="mb-20">
        <AboutUsHeader />
      </div>
      <AboutTalent />
      <LocationPhotoCard />
      <RealDealSection />
    </>
  );
}
