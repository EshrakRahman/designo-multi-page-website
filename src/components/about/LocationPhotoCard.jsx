import {
  illustrationCanada,
  illustrationAustralia,
  illustrationUK,
} from "@/assets";
import { Container } from "../shared";

export default function LocationPhotoCard() {
  return (
    <>
      <Container>
        <section className="grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 justify-center items-center gap-8 min-h-150 ">
          <div className="canada flex flex-col items-center gap-6 text-center">
            <div className="">
              <img
                src={illustrationCanada}
                alt="buildings illustration from canada"
              />
            </div>

            <p className="font-medium text-xl leading-6 tracking-wider text-black uppercase  ">
              Canada
            </p>
            <button className="btn-regular-feature">See location</button>
          </div>

          <div className="australia flex flex-col items-center gap-6 text-center">
            <div className="">
              <img
                src={illustrationAustralia}
                alt="buildings illustration from australia"
              />
            </div>

            <p className="font-medium text-xl leading-6 tracking-wider text-black uppercase  ">
              Australia
            </p>
            <button className="btn-regular-feature">See location</button>
          </div>

          <div className="uk flex flex-col items-center gap-6 text-center">
            <div className="">
              <img src={illustrationUK} alt="buildings illustration from UK" />
            </div>

            <p className="font-medium text-xl leading-6 tracking-wider text-black uppercase  ">
              United Kingdom
            </p>
            <button className="btn-regular-feature">See location</button>
          </div>
        </section>
      </Container>
    </>
  );
}
