import { imageMapAustralia, imageMapCanada } from "@/assets";

export default function LocationCard() {
  return (
    <>
      <section>
        <div className="img">
          <img className="w-full " src={imageMapCanada} alt="" />
        </div>
        <div className="details flex flex-col justify-center items-center mt-6">
          <p className="text-peach font-medium text-3xl leading-8 tracking-normal ">
            Canada
          </p>
          <address>
            <div className=" flex flex-col items-center gap-2 mt-6">
              <p className="text-black font-bold text-base leading-6 tracking-normal">
                Designo Central Office
              </p>
              <p>3886 Wellington Street</p>
              <p>Toronto, Ontario M9C 3J5</p>
            </div>
            <div className="flex flex-col items-center gap-2 mt-6">
              <p className="text-black font-bold text-base leading-6 tracking-normal">
                Contact
              </p>
              <a
                href="tel:+12538638967"
                className=" hover:text-blue-800 hover:underline transition-colors block"
              >
                +1 253-863-8967
              </a>
              <a
                href="mailto:contact@designo.co"
                className=" hover:text-blue-800 hover:underline transition-colors"
              >
                contact@designo.co
              </a>
            </div>
          </address>
        </div>
      </section>
    </>
  );
}
