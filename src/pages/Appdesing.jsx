import {
  MobileNav,
  SmallHeader,
  DesktopNavbar,
  PhotoCardContainer,
  Footer,
} from "@/components";
import { AppServiceConotainer } from "@/components/appdesign";
import { appDesignData } from "@/data";

export default function Appdesing() {
  return (
    <>
      <MobileNav />
      <DesktopNavbar />
      <SmallHeader
        title="App Design"
        description="Our mobile designs bring intuitive digital solutions
                    to your customers right at their fingertips."
      />

      <PhotoCardContainer items={appDesignData} />
      <AppServiceConotainer />
      <Footer />
    </>
  );
}
