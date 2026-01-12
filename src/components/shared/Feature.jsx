export default function Feature({ icon, description, title, button = false }) {
  return (
    <>
      <section className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-8 lg:flex-col lg:space-y-6">
        <div className="img">
          <img src={icon} alt={title} />
        </div>
        <div className="info flex flex-col items-center space-y-3">
          <h3 className="text-xl font-medium leading-6.5 tracking-wider text-dark-grey uppercase ">
            {title}
          </h3>
          {button ? (
            <button className="btn-regular-feature ">see location</button>
          ) : (
            <p className="text-base leading-6.5 text-dark-grey text-center md:text-left lg:text-center">
              {description}
            </p>
          )}
        </div>
      </section>
    </>
  );
}
