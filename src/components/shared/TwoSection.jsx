import { Container } from ".";

export default function TwoSection({
  title,
  images,
  bgImg,
  paragraphs,
  titleColor,
  textColor,
  bgColor,
  reverse = true,
}) {
  return (
    <>
      <Container fullWidth={true}>
        <section
          className={`flex flex-col lg:my-auto lg:flex-row ${
            reverse ? " lg:flex-row-reverse" : ""
          }`}
        >
          <div className="img lg:order- lg:w-[40%] ">
            <img
              className=" w-full md:hidden"
              src={images.mobile}
              alt="about us image"
            />
            <img
              className=" w-full hidden md:block rounded-tr-2xl rounded-tl-2xl lg:hidden"
              src={images.tablet}
              alt="about us image"
            />
            <img
              className={`w-full hidden  ${
                reverse
                  ? "rounded-tr-2xl rounded-br-2xl"
                  : " rounded-tl-2xl rounded-bl-2xl"
              } lg:block`}
              src={images.desktop}
              alt="about us image"
            />
          </div>
          <div
            className={`info lg:w-[60%] md:rounded-b-2xl  ${
              reverse
                ? "lg:rounded-b-none lg:rounded-tl-2xl lg:rounded-bl-2xl"
                : "lg:rounded-tr-2xl lg:rounded-br-2xl"
            } lg:order-  ${bgImg} space-y-6 lg:items-start   ${bgColor} px-10 py-20 flex items-center flex-col`}
          >
            <h1
              className={`font-medium text-3xl leading-9 ${titleColor} lg:text-left`}
            >
              {title}
            </h1>
            {paragraphs.map((para, i) => (
              <p
                key={i}
                className={` text-base leading-6 ${textColor} text-center lg:text-left`}
              >
                {para}
              </p>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
}
