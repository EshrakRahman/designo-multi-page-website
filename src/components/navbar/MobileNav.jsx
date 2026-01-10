import { iconClose, iconHamburger, logoDark } from "@/assets";
import { useState } from "react";
import { Container } from "@/components";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="py-8 relative md:hidden ">
        <Container>
          <div className="flex justify-between">
            <div className="logo w-50.5">
              <img src={logoDark} alt="desingo logo" />
            </div>
            <div className="left">
              <button onClick={() => setIsOpen(!isOpen)}>
                <img
                  className="hover:cursor-pointer"
                  src={isOpen ? iconClose : iconHamburger}
                  alt={isOpen ? "Close menu" : "Open menu"}
                />
              </button>
            </div>
          </div>
        </Container>

        {isOpen && (
          <div className="navlinks bg-black flex flex-col w-full absolute top-full px-6 space-y-6 left-0 py-8">
            <a href="" className="nav-link">
              Our compnay
            </a>
            <a href="" className="nav-link">
              Location
            </a>
            <a href="" className="nav-link">
              Contact
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
