import {
  imageAboutHeroDesktop,
  imageAboutHeroMobile,
  imageAboutHeroTablet,
} from "@/assets";
import TwoSection from "../shared/TwoSection";

export default function AboutUsHeader() {
  return (
    <>
      <TwoSection
        title="About Us"
        paragraphs={[
          "Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.",
        ]}
        textColor="text-white"
        titleColor="text-white"
        bgImg="about-header"
        images={{
          mobile: imageAboutHeroMobile,
          tablet: imageAboutHeroTablet,
          desktop: imageAboutHeroDesktop,
        }}
      />
    </>
  );
}
