import { imageHeroPhone } from "@/assets";
import { Container } from "../shared";

export default function HomeHeader() {
  return (
    <>
      <Container fullWidth={true}>
        <header className=" home-header  md:rounded-xl bg-peach flex lg:px-20 mb-10 md:mb-20 lg:mb-25  flex-col lg:flex-row items-center pt-20 overflow-hidden">
          <div className="info flex flex-col  items-start space-y-6 ">
            <h1 className="font-medium text-3xl md:text-5xl md:leading-12 md:max-w-120 lg:text-left leading-9 max-w-75 text-center text-white">
              Award-winning custom designs and digital branding solutions
            </h1>
            <p className="font-normal text-base leading-6 md:leading-6.5 max-w-85 md:max-w-120 lg:text-left  text-center text-white">
              With over 10 years in the industry, we are experienced in creating
              fully responsive websites, app design, and engaging brand
              experiences. Find out more about our services.
            </p>
            <button className="btn-regular">learn more</button>
          </div>
          <div className="img lg:left-25 md:top-22 top-40 relative">
            <img
              className="w-72 scale-200"
              src={imageHeroPhone}
              alt="phone mockup"
            />
          </div>
        </header>
      </Container>
    </>
  );
}
