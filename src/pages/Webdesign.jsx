import {
  DesktopNavbar,
  MobileNav,
  SmallHeader,
  PhotoCardContainer,
  WebServiceContainer,
  Footer,
} from "@/components";
import { webDesignData } from "@/data";

export default function Webdesign() {
  return (
    <>
      <MobileNav />
      <DesktopNavbar />
      <SmallHeader
        title="Web Design"
        description="We build websites that serve as powerful marketing tools and bring
              memorable brand experiences."
      />
      <PhotoCardContainer items={webDesignData} />
      <WebServiceContainer />
      <Footer />
    </>
  );
}
