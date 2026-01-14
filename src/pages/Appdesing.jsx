import { MobileNav, SmallHeader } from "@/components";
import Desktop from "@/components/navbar/DesktopNavbar";

export default function Appdesing() {
  return (
    <>
      <MobileNav />
      <Desktop />
      <SmallHeader
        title="App Design"
        description="Our mobile designs bring intuitive digital solutions
                    to your customers right at their fingertips."
      />
    </>
  );
}
