const PLACEHOLDER_COUNT = 4;

export default function Archive() {
  return (
    <section
      id="archive"
      aria-labelledby="archive-heading"
      className="border-t border-charcoal/10 px-6 py-24 sm:px-10 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 md:mb-16">
          <h2
            id="archive-heading"
            className="text-xl font-light tracking-wide sm:text-2xl"
          >
            Archive / 001
          </h2>
        </header>
        <ul
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8"
          aria-label="Archive image placeholders"
        >
          {Array.from({ length: PLACEHOLDER_COUNT }, (_, index) => (
            <li key={index}>
              <div
                className="aspect-[3/4] w-full border border-charcoal/15 bg-charcoal/[0.03]"
                role="img"
                aria-label={`Archive image placeholder ${index + 1}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
