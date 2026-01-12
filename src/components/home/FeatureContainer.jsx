import {
  illustrationFriendly,
  illustrationPassionate,
  illustrationResourceful,
} from "@/assets";
import { Container, Feature } from "../shared";

export default function FeatureContainer() {
  return (
    <>
      <Container>
        <section className="mb-45 flex flex-col gap-8 md:gap-12 py-15 lg:flex-row ">
          <Feature
            title="passionate"
            icon={illustrationPassionate}
            description="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
          />
          <Feature
            title="resourceful"
            icon={illustrationResourceful}
            description="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."
          />
          <Feature
            title="friendly"
            icon={illustrationFriendly}
            description="We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
          />
        </section>
      </Container>
    </>
  );
}
