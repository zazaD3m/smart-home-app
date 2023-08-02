import images from "../assets/images";
import Card from "./Card";

const Main = () => {
  return (
    <main className="grid gap-12 sm:gap-16 md:gap-24 lg:gap-32 px-8 overflow-hidden">
      <section aria-labelledby="qualities" className="relative">
        <img
          src={images.dots}
          alt="dots"
          aria-hidden="true"
          className="hidden lg:block absolute top-1/2 -translate-y-1/2 -left-24 xl:-left-7"
        />
        <img
          src={images.dots}
          alt="dots"
          aria-hidden="true"
          className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-24 xl:-right-7"
        />
        <h2 id="qualities" className="sr-only">
          Our Qualities
        </h2>
        <div className="container mx-auto max-w-5xl flex gap-12 flex-wrap items-start justify-center md:justify-between">
          <Card />
        </div>
      </section>
    </main>
  );
};
export default Main;
