import {
  imageBlogr,
  imageBuilder,
  imageCamp,
  imageExpress,
  imagePhoton,
  imageTransfer,
} from "@/assets";
import { Container, PhotoCard } from "../shared";

export default function PhotoCardContainer() {
  return (
    <>
      <Container>
        <section className="py-20 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:grid-rows-2 lg:gap-8">
          <PhotoCard
            title="express"
            img={imageExpress}
            description="A multi-carrier shipping website for ecommerce businesses"
          />

          <PhotoCard
            title="transfer"
            img={imageTransfer}
            description="Site for low-cost money transfers and sending money within seconds"
          />

          <PhotoCard
            title="photon"
            img={imagePhoton}
            description="A state-of-the-art music player with high-resolution audio and DSP effects"
          />

          <PhotoCard
            title="builder"
            img={imageBuilder}
            description="Connects users with local contractors based on their location"
          />

          <PhotoCard
            title="bloger"
            img={imageBlogr}
            description="Blogr is a platform for creating an online blog or publication"
          />

          <PhotoCard
            title="CAMP"
            img={imageCamp}
            description="Get expert training in coding, data, design, and digital marketing"
          />
        </section>
      </Container>
    </>
  );
}
