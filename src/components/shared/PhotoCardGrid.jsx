import { Container, PhotoCard } from ".";

export default function PhotoCardGrid({ items, className = "" }) {
  return (
    <>
      <Container>
        <section
          className={`py-20 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:grid-rows-2 lg:gap-8 ${className}`}
        >
          {items.map((item) => (
            <PhotoCard key={item.title} {...item} />
          ))}
        </section>
      </Container>
    </>
  );
}
