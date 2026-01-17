import {
  imageWorldClassTalentMobile,
  imageWorldClassTalentTablet,
  imageWorldClassTalentDesktop,
} from "@/assets";
import TwoSection from "../shared/TwoSection";

export default function AboutTalent() {
  return (
    <>
      <TwoSection
        title="World-class talent"
        paragraphs={[
          "We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.",

          "Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.",
        ]}
        images={{
          mobile: imageWorldClassTalentMobile,
          tablet: imageWorldClassTalentTablet,
          desktop: imageWorldClassTalentDesktop,
        }}
        textColor="text-black"
        titleColor="text-peach"
        bgImg="bg-header-small"
        bgColor="bg-[#FDF3F0]"
        reverse={false}
      />
    </>
  );
}
