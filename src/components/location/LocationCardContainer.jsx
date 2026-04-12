import { LocationCard, locationsData } from ".";

export default function LocationCardContainer() {
  return (
    <section className="location-container mb-65">
      {locationsData.map((location, index) => (
        <LocationCard key={location.id} index={index} {...location} />
      ))}
    </section>
  );
}
