import ReviewGallery, {
  type ReviewImage,
} from "@/components/aftercare/ReviewGallery";

const kindWords: ReviewImage[] = [
  { username: "natbro94", src: "/images/aftercare/reviews/kind-words/01-natbro94.jpeg" },
  { username: "mikkialba", src: "/images/aftercare/reviews/kind-words/02-mikkialba.jpeg" },
  { username: "pips379", src: "/images/aftercare/reviews/kind-words/03-pips379.jpeg" },
  { username: "jnnae_632", src: "/images/aftercare/reviews/kind-words/04-jnnae632.jpeg" },
  { username: "allie_p123", src: "/images/aftercare/reviews/kind-words/05-allie-p123.jpeg" },
  { username: "alana1988", src: "/images/aftercare/reviews/kind-words/06-alana1988.jpeg" },
  { username: "b0nnieee", src: "/images/aftercare/reviews/kind-words/07-b0nnieee.jpeg" },
  { username: "laurajanebelll", src: "/images/aftercare/reviews/kind-words/08-laurajanebelll.jpeg" },
  { username: "ninaaina", src: "/images/aftercare/reviews/kind-words/09-ninaaina.jpeg" },
  { username: "m1ascha3f3r", src: "/images/aftercare/reviews/kind-words/10-m1ascha3f3r.jpeg" },
  { username: "mina000111", src: "/images/aftercare/reviews/kind-words/11-mina000111.jpeg" },
  { username: "soph228", src: "/images/aftercare/reviews/kind-words/12-soph228.jpeg" },
  { username: "kaylakagaras_", src: "/images/aftercare/reviews/kind-words/13-kaylakagaras.jpeg" },
  { username: "becwallace", src: "/images/aftercare/reviews/kind-words/14-becwallace.jpeg" },
  { username: "bryannaarnold8", src: "/images/aftercare/reviews/kind-words/15-bryannaarnold8.jpeg" },
  { username: "goldenkiwiz", src: "/images/aftercare/reviews/kind-words/16-goldenkiwiz.jpeg" },
  { username: "oaticedlatte", src: "/images/aftercare/reviews/kind-words/17-oaticedlatte.jpeg" },
  { username: "sydneyarchive", src: "/images/aftercare/reviews/kind-words/18-sydneyarchive.jpeg" },
  { username: "katesteph87", src: "/images/aftercare/reviews/kind-words/19-katesteph87.jpeg" },
  { username: "thisbutvelveteen", src: "/images/aftercare/reviews/kind-words/20-thisbutvelveteen.jpeg" },
];

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

          <ReviewGallery reviews={kindWords} previewCount={6} />
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
