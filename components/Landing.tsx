export default function Landing() {
  return (
    <section
      id="landing"
      aria-labelledby="landing-title"
      className="flex min-h-[85vh] flex-col items-center justify-center px-6 py-24 text-center sm:px-10"
    >
      <h1
        id="landing-title"
        className="text-4xl font-light tracking-[0.2em] uppercase sm:text-5xl md:text-6xl"
      >
        anywears.
      </h1>
      <p className="mt-6 max-w-md text-sm tracking-[0.35em] uppercase text-charcoal/70 sm:text-base">
        An Independent Archive
      </p>
    </section>
  );
}
