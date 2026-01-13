export default function PhotoCard({ img, title, description }) {
  return (
    <>
      <section className=" rounded-t-lg flex flex-col md:flex-row lg:flex-col">
        <div className="img">
          <img
            className="rounded-t-lg md:rounded-l-2xl md:rounded-t-none lg:rounded-tr-2xl lg:rounded-l-none
            lg:rounded-tl-2xl
            "
            src={img}
            alt={title}
          />
        </div>
        <div className="info bg-[#FDF3F0] hover:bg-peach rounded-b-lg md:rounded-bl-none md:rounded-br-2xl md:rounded-r-2xl lg:rounded-bl-2xl py-15 px-8 group lg:rounded-tr-none transition-all duration-300">
          <div className="flex flex-col md:justify-center items-center space-y-6">
            <h2 className="uppercase group-hover:text-white font-medium text-xl leading-4.5 tracking-widest text-peach">
              {title}
            </h2>
            <p className="text-base font-normal leading-4.5 text-center text-dark-grey">
              {description}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
