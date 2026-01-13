import { Container, Service } from "../shared";

export default function WebServiceContainer() {
  return (
    <>
      <Container>
        <section className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 gap-6 pb-20">
          <Service title="app desing" bgImg="bg-app-design" />
          <Service title="graphic desing" bgImg="bg-graphic-design" />
        </section>
      </Container>
    </>
  );
}
