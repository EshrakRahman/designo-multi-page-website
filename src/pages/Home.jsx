import { MobileNav } from "@/components";
import { Footer } from "@/components/footer";
import { DesktopNavbar } from "@/components/navbar";

export default function Home() {
  return (
    <>
      <MobileNav />
      <DesktopNavbar />
      <Footer />
    </>
  );
}
