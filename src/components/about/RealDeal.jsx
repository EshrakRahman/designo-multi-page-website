import {
  imageRealDealDesktop,
  imageRealDealTablet,
  imageRealDealMobile,
} from "@/assets";

import TwoSection from "../shared/TwoSection";

export default function RealDealSection() {
  return (
    <>
      <TwoSection
        title="The real deal"
        paragraphs={[
          "As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.",

          "We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.",
        ]}
        images={{
          mobile: imageRealDealMobile,
          tablet: imageRealDealTablet,
          desktop: imageRealDealDesktop,
        }}
        textColor="text-black"
        titleColor="text-peach"
        bgImg="bg-header-small"
        bgColor="bg-[#FDF3F0]"
        reverse={true}
      />
    </>
  );
}
