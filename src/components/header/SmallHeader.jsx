import { Container } from "@/components";

export default function SmallHeader() {
  return (
    <>
      <header className="bg-header-small bg-peach ">
        <Container>
          <div className="content py-40 flex flex-col items-center space-y-4">
            <h1 className="font-medium text-white md:text-5xl md:leading-12 text-3xl leading-8 ">
              Web Design
            </h1>
            <p className="font-normal text-white leading-6 text-center max-w-80 md:max-w-110 x-auto">
              We build websites that serve as powerful marketing tools and bring
              memorable brand experiences.
            </p>
          </div>
        </Container>
      </header>
    </>
  );
}
