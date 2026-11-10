import FlippingCard from "./business-card/FlippingCard";

export default function BusinessCard() {
  return (
    <footer
      id="business-card"
      aria-labelledby="business-card-heading"
      className="bg-canvas px-6 py-28 text-charcoal
        sm:px-10 md:py-40"
    >
      <div className="mx-auto max-w-6xl">

        {/* Minimal section heading */}
        <h2
          id="business-card-heading"
          className="mb-20 text-sm font-normal
            lowercase md:mb-28"
        >
          take a card.
        </h2>

        {/* Interactive business card */}
        <FlippingCard />

        {/* Minimal closing details */}
        <div className="mt-28 flex items-center
          justify-between text-xs
          tracking-wide text-charcoal/50
          md:mt-40"
        >
          <span>anywears.</span>
          <span>for anyone, anywhere.</span>
        </div>
      </div>
    </footer>
  );
}
