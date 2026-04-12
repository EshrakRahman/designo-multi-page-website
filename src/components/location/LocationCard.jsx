import { Container } from "../shared";

export default function LocationCard({
  country,
  image,
  officeName,
  address,
  phone,
  email,
}) {
  return (
    <Container fullWidth={true}>
      <section className="min-h-178.5 my-6 md:my-25 ">
        <div className="img ">
          <img
            className="w-full md:rounded-3xl"
            src={image}
            alt={`Map of ${country}`}
          />
        </div>
        <div className="details md:mt-6 md:rounded-3xl md:p-20 flex flex-col justify-center items-center md:items-start py-14 two-circles-pattern bg-[#FDF3F0]">
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
