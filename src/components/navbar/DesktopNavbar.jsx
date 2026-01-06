import { logoDark } from "@/assets";
import Container from "../Container";

export default function Desktop() {
  return (
    <>
      <Container>
        <nav className="hidden py-6 md:flex items-center justify-between">
          <div className="logo w-50.5">
            <img src={logoDark} alt="Designo logo" />
          </div>
          <div className="navlinks flex px-6 space-x-6 left-0 py-8">
            <a href="" className="nav-link-desktop text-black">
              Our compnay
            </a>
            <a href="" className="nav-link-desktop">
              Location
            </a>
            <a href="" className="nav-link-desktop">
              Contact
            </a>
          </div>
        </nav>
      </Container>
    </>
  );
}
