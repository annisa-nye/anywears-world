const INSTAGRAM_URL = "https://www.instagram.com/anywears.shop/";

export default function BusinessCard() {
  return (
    <footer
      id="business-card"
      aria-labelledby="business-card-heading"
      className="border-t border-charcoal/10 px-6 py-20 sm:px-10 md:py-28"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 border border-charcoal/20 bg-charcoal/[0.02] p-8 sm:p-12 md:flex-row md:items-end md:justify-between">
        <div>
          <p
            id="business-card-heading"
            className="text-lg tracking-[0.15em] uppercase sm:text-xl"
          >
            anywears.
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-charcoal/75">
            for anyone, anywhere.
          </p>
        </div>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm tracking-wide underline underline-offset-4 decoration-charcoal/30 hover:decoration-charcoal/60"
        >
          @anywears.shop
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </footer>
  );
}
