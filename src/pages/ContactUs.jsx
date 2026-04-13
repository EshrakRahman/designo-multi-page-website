import {
  DesktopNavbar,
  Footer,
  LocationPhotoCard,
  MobileNav,
} from "@/components";
import { ContactForm } from "@/components/contact";

export default function ContactUs() {
  return (
    <>
      <MobileNav />
      <DesktopNavbar />
      <ContactForm />
      <LocationPhotoCard />
      <Footer getInTouch={true} />
    </>
  );
}
