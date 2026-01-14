import { Container, Service } from "../shared";

export default function AppServiceContainer() {
  return (
    <>
      <Container>
        <section className="grid mb-50 md:mb-0 grid-cols-1 grid-rows-2 md:grid-cols-2 gap-6 pb-20">
          <Service className=" " title="web desing" bgImg="bg-web-design" />
          <Service title="graphic desing" bgImg="bg-graphic-design" />
        </section>
      </Container>
    </>
  );
}
