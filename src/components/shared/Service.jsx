import { iconRightArrow } from "@/assets";

export default function Service({ title, bgImg, className = "" }) {
  return (
    <>
      <section
        className={`${bgImg} ${className} rounded-lg py-20 flex items-center justify-center relative group overflow-hidden cursor-pointer`}
      >
        <div className="absolute  inset-0 bg-peach opacity-0 group-hover:opacity-90 transition-all duration-300 "></div>
        <div className="info relative z-10 flex flex-col items-center justify-center ">
          <h3 className="text-4xl md:text-[28px] font-medium md:leading-9 leading-12 tracking-wide text-white uppercase">
            {title}
          </h3>
          <div className=" flex items-center gap-6">
            <a
              href=""
              className="font-medium text-base text-white tracking-wider hover:underline  uppercase"
            >
              view projcet
            </a>
            <img className="h-3" src={iconRightArrow} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
