import { iconRightArrow } from "@/assets";
import { Container } from ".";

export default function Service() {
  return (
    <>
      <Container>
        <section className="bg-web-design rounded-lg py-10 mb-10">
          <div className="info flex flex-col items-center ">
            <h3 className="text-[40px] font-medium leading-12 tracking-wide text-white uppercase">
              web design
            </h3>
            <div className=" flex items-center gap-6">
              <a
                href=""
                className="font-medium text-base text-white tracking-wider hover:underline  "
              >
                view projcet
              </a>
              <img className="h-3" src={iconRightArrow} alt="" />
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}
