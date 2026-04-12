import { LocationCard, locationsData } from ".";

export default function LocationCardContainer() {
  return (
    <section className="location-container">
      {locationsData.map((location) => (
        <LocationCard key={location.id} {...location} />
      ))}
    </section>
  );
}
