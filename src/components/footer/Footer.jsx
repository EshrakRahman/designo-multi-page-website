import {
  iconFacebook,
  iconInstagram,
  iconPinterest,
  iconTwitter,
  iconYoutube,
  logoLight,
} from "@/assets";
import { Container, GetInTouch } from "@/components";

export default function Footer() {
  return (
    <>
      <footer className="bg-black pt-80 md:pt-60 relative z-20">
        <Container>
          <div className="absolute inset-x-0 top-0 -translate-y-1/2 z-30">
            <GetInTouch />
          </div>
          <div className="flex md:py-8 top w-full md:border-b md:border-white/10 flex-col md:flex-row items-center justify-center md:justify-between">
            <div className="left w-full md:w-auto flex flex-col md:flex-row items-center justify-center md:justify-between">
              <div className="logo w-50.5">
                <img src={logoLight} alt="designo logo" />
              </div>
              <div className=" py-6 border-b md:hidden w-full h-0.5 border-white/10"></div>
            </div>
            <div className="navlinks  right flex mt-5 md:mt-0 flex-col items-center md:items-center md:flex-row space-y-6 md:space-x-6 md:space-y-0">
              <a href="" className="nav-link-desktop  text-white">
                Our compnay
              </a>
              <a href="" className="nav-link-desktop  text-white">
                Location
              </a>
              <a href="" className="nav-link-desktop text-white">
                Contact
              </a>
            </div>
          </div>
          <div className="bottom md:py-8">
            <div className="address flex flex-col md:flex-row md:space-y-0 md:space-x-6 md:justify-between items-center space-y-6 justify-center pt-4 pb-8">
              <address className="not-italic text-white/50 text-center md:text-left">
                <strong className="block text-base font-bold leading-6">
                  Designo Central Office
                </strong>
                <span className="block text-base font-normal leading-6">
                  3886 Wellington Street
                </span>
                <span className="block text-base font-normal leading-6">
                  Toronto, Ontario M9C 3J5
                </span>
              </address>
              <address className="not-italic text-white/50 text-center md:text-left">
                <strong className="block text-base font-bold leading-6">
                  Designo Central Office
                </strong>
                <span className="block text-base font-normal leading-6">
                  3886 Wellington Street
                </span>
                <span className="block text-base font-normal leading-6">
                  Toronto, Ontario M9C 3J5
                </span>
              </address>
              <div className="social-links flex space-x-4 py-6 md:self-end md:py-0">
                <img src={iconFacebook} alt="Facebook icon" />
                <img src={iconYoutube} alt="Youtube icon" />
                <img src={iconTwitter} alt="Twitter icon" />
                <img src={iconPinterest} alt="Pinterest icon" />
                <img src={iconInstagram} alt="Instagram icon" />
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}
