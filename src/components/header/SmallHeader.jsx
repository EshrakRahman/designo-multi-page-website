import { Container } from "@/components";

export default function SmallHeader({ title, description }) {
  return (
    <>
      <Container fullWidth={true}>
        <header className="bg-header-small bg-peach md:rounded-lg">
          <div className="content py-30 flex flex-col items-center space-y-4">
            <h1 className="font-medium text-white md:text-5xl md:leading-12 text-3xl leading-8 ">
              {title}
            </h1>
            <p className="font-normal text-white leading-6 text-center max-w-90 md:max-w-110 x-auto">
              {description}
            </p>
          </div>
        </header>
      </Container>
    </>
  );
}
