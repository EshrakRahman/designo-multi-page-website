import { Container } from ".";

export default function GetInTouch() {
  return (
    <>
      <Container>
        <section className="get-in-touch bg-get-in-touch bg-peach rounded-xl lg:py-20 py-16 space-y-6 lg:space-y-0 lg:px-10 lg:space-x-6 md:px-20 flex flex-col lg:flex-row lg:justify-between items-center">
          <div className="flex flex-col items-center lg:items-start lg:w-2/3 space-y-6">
            <p className="md:text-[40px] text-4xl text-white font-medium leading-10  w-[80%] md:w-3/5 lg:w-3/5 text-center lg:text-left">
              Let’s talk about your project
            </p>
            <p className="text-base font-normal leading-6.5 text-white  lg:text-left lg:w-4/4 lg:w-3/4 text-center w-3/4">
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
          </div>
          <button className="btn-regular">Get in touch</button>
        </section>
      </Container>
    </>
  );
}
