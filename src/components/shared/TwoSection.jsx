import { Container } from ".";

export default function TwoSection({
  title,
  images,
  bgImg,
  paragraphs,
  titleColor,
  textColor,
}) {
  return (
    <>
      <Container fullWidth={true}>
        <section className="flex flex-col lg:my-auto lg:flex-row">
          <div className="img lg:order-2 lg:w-[40%] ">
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
              className="w-full hidden rounded-tr-2xl rounded-br-2xl lg:block"
              src={images.desktop}
              alt="about us image"
            />
          </div>
          <div
            className={`info lg:w-[60%] md:rounded-b-2xl  lg:rounded-b-none lg:rounded-tl-2xl lg:rounded-bl-2xl lg:order-1  ${bgImg} space-y-6 lg:items-start   bg-peach px-10 py-20 flex items-center flex-col`}
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
