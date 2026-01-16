import {
  imageAboutHeroDesktop,
  imageAboutHeroMobile,
  imageAboutHeroTablet,
} from "@/assets";
import { Container } from ".";

export default function TwoSection() {
  return (
    <>
      <Container fullWidth={true}>
        <section className="flex flex-col lg:my-auto lg:flex-row">
          <div className="img lg:order-2 lg:w-[40%] ">
            <img
              className=" w-full md:hidden"
              src={imageAboutHeroMobile}
              alt="about us image"
            />
            <img
              className=" w-full hidden md:block rounded-tr-2xl rounded-tl-2xl lg:hidden"
              src={imageAboutHeroTablet}
              alt="about us image"
            />
            <img
              className="w-full hidden rounded-tr-2xl rounded-br-2xl lg:block"
              src={imageAboutHeroDesktop}
              alt="about us image"
            />
          </div>
          <div className="info lg:w-[60%] md:rounded-b-2xl  lg:rounded-b-none lg:rounded-tl-2xl lg:rounded-bl-2xl lg:order-1  about-header space-y-6 lg:items-start   bg-peach px-10 py-20 flex items-center flex-col">
            <h1 className="font-medium text-3xl leading-9 text-white lg:text-left">
              About Us
            </h1>
            <p className=" text-base leading-6 text-white text-center lg:text-left">
              Founded in 2010, we are a creative agency that produces lasting
              results for our clients. We’ve partnered with many startups,
              corporations, and nonprofits alike to craft designs that make real
              impact. We’re always looking forward to creating brands, products,
              and digital experiences that connect with our clients’ audiences.
            </p>
          </div>
        </section>
      </Container>
    </>
  );
}
