import {
  DesktopNavbar,
  Footer,
  MobileNav,
  PhotoCardContainer,
  SmallHeader,
} from "@/components";
import { GraphicServiceContainer } from "@/components/Graphicdesign";
import { graphicDesignData } from "@/data";

export default function Graphicdesign() {
  return (
    <>
      <MobileNav />
      <DesktopNavbar />
      <SmallHeader
        title="Graphic Design"
        description="We deliver eye-catching branding materials that are 
                  tailored to meet your business objectives."
      />
      <PhotoCardContainer items={graphicDesignData} />
      <GraphicServiceContainer />
      <Footer />
    </>
  );
}
