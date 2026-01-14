import { Container } from "../shared";

export default function AppServiceContainer() {
  return (
    <>
      <Container>
        <section className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 gap-6 pb-20">
          <Service
            className="lg:row-span-2 "
            title="web desing"
            bgImg="bg-web-design"
          />
          <Service title="graphic desing" bgImg="bg-graphic-design" />
        </section>
      </Container>
    </>
  );
}
