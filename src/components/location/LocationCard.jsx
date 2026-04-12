import { Container } from "../shared";

export default function LocationCard({
  country,
  image,
  officeName,
  address,
  phone,
  email,
  index,
}) {
  const isEven = index % 2 === 0;
  return (
    <Container fullWidth={true}>
      <section
        className={`h-178.5 md:h-full my-6 md:mb-25 md:mt-15 lg:flex  lg:gap-6 ${isEven ? "lg:flex-row-reverse" : ""}`}
      >
        <div className="img lg:w-87.5  md:mb-6 lg:mb-0">
          <img
            className="w-full md:rounded-3xl lg:h-81.5"
            src={image}
            alt={`Map of ${country}`}
          />
        </div>
        <div className="details lg:h-81.5 lg:w-full md:pt-6 md:rounded-3xl md:p-20 flex flex-col justify-center items-center md:items-start py-14 two-circles-pattern bg-[#FDF3F0]">
          <p className="text-peach font-medium text-3xl leading-8 tracking-normal ">
            {country}
          </p>
          <address className="not-italic md:flex md:gap-15">
            <div className=" flex flex-col items-center md:items-start gap-2 mt-6">
              <p className="text-black font-bold text-base leading-6 tracking-normal">
                {officeName}
              </p>
              <p className="whitespace-pre-line text-center md:text-start">
                {address}
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start mt-6 ">
              <p className="text-black font-bold text-base leading-6 pb-2  tracking-normal">
                Contact
              </p>
              <a
                href="tel:+12538638967"
                className=" hover:text-blue-800 hover:underline transition-colors block "
              >
                {phone}
              </a>
              <a
                href="mailto:contact@designo.co"
                className=" hover:text-blue-800 hover:underline transition-colors"
              >
                {email}
              </a>
            </div>
          </address>
        </div>
      </section>
    </Container>
  );
}
