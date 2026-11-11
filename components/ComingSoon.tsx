
import FlippingCard from "./business-card/FlippingCard";

export default function ComingSoon() {
  return (
    <section
      id="reveal"
      aria-labelledby="reveal-heading"
      className="flex min-h-dvh flex-col bg-canvas px-6 py-10 text-charcoal sm:px-10"
    >

      <div className="flex flex-1 flex-col items-center justify-center gap-14 py-16">
        <div className="text-center">
          <h2
            id="reveal-heading"
            className="text-lg font-medium tracking-tight md:text-xl"
          >
            anywears world is still being built.
          </h2>

          <p className="mt-4 text-sm text-charcoal/70 md:text-base">
            in the meantime, take a card.
          </p>
        </div>

        <FlippingCard />
      </div>
    </section>
  );
}
