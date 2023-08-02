import { partners } from "../assets/images";

const Partners = () => {
  return (
    <section
      aria-labelledby="partners"
      className="text-center grid gap-8 place-items-center"
    >
      <div className="grid gap-4">
        <h2 id="partners" className="text-4xl font-bold text-amber-400">
          Our Partners
        </h2>
        <p className="w-full max-w-lg">
          We’ve partnered with hundreds of smart home brands to help you create
          a smart home that fits your needs and doesn’t lock you in.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 md:gap-x-16 max-w-2xl mx-auto">
        {partners.map((item, id) => (
          <div
            key={id}
            className="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md"
          >
            <img src={item} alt="/" className="h-16 w-16" />
          </div>
        ))}
      </div>
    </section>
  );
};
export default Partners;
