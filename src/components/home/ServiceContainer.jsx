import { Container, Service } from "../shared";

export default function ServiceContainer() {
  return (
    <>
      <Container>
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:grid-rows-2 mb-10">
          <Service
            className="lg:row-span-2 "
            title="web desing"
            bgImg="bg-web-design"
          />
          <Service title="app desing" bgImg="bg-app-design" />
          <Service title="graphic desing" bgImg="bg-graphic-design" />
        </section>
      </Container>
    </>
  );
}
