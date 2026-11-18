export default function Aftercare() {
  return (
    <section
      id="aftercare"
      aria-labelledby="aftercare-heading"
      className="
        bg-canvas px-6 py-28
        text-charcoal
        md:px-12 md:py-40
      "
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <h2
          id="aftercare-heading"
          className="
            text-sm font-normal
            lowercase tracking-normal
          "
        >
          aftercare.
        </h2>

        {/* Editorial introduction */}
        <div className="mt-24 md:mt-36">
          <p className="text-xs lowercase text-charcoal/45">
            from one wardrobe to another
          </p>

          <h3
            className="
              mt-5 max-w-3xl
              text-4xl font-normal
              leading-[1.1] tracking-tight
              sm:text-5xl md:text-6xl
            "
          >
            the little things.
          </h3>

          <p
            className="
              mt-8 max-w-md
              text-sm leading-relaxed
              text-charcoal/65
              md:text-base
            "
          >
            a little care goes a long way.
            a collection of kind words
            from the people who wore them next.
          </p>
        </div>

        {/* 01 — Kind words */}
        <div className="mt-28 md:mt-40">
          <div
            className="
              flex items-start justify-between
              gap-6 border-t border-charcoal/10
              pt-6
            "
          >
            <div>
              <h4 className="text-sm font-normal lowercase">
                01 / kind words.
              </h4>

              <p
                className="
                  mt-3 text-xs leading-relaxed
                  text-charcoal/50
                "
              >
                little notes from near and far.
              </p>
            </div>

            <span
              className="
                text-xs tabular-nums
                text-brand-blue
              "
            >
              020
            </span>
          </div>

          {/* ReviewGallery will be inserted here */}
        </div>

        {/* 02 — Designer notes */}
        <div className="mt-28 md:mt-40">
          <div
            className="
              border-t border-charcoal/10
              pt-6
            "
          >
            <h4 className="text-sm font-normal lowercase">
              02 / designer notes.
            </h4>

            <p
              className="
                mt-3 max-w-md
                text-xs leading-relaxed
                text-charcoal/50
              "
            >
              special pieces, new wardrobes.
              prada, dior, gucci & beyond.
            </p>
          </div>

          {/* Designer review gallery will be inserted here */}
        </div>

        {/* Closing */}
        <div className="mt-28 text-center md:mt-44">
          <p
            className="
              font-enter text-4xl
              lowercase text-brand-blue
              sm:text-5xl
            "
          >
            packed with love.
          </p>
        </div>
      </div>
    </section>
  );
}
