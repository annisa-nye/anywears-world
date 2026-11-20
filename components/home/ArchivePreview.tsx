import Image from "next/image";
import Link from "next/link";
import ViewportSection from "@/components/layout/ViewportSection";
import StickySectionTitle from "@/components/layout/StickySectionTitle";

const previewImages = [
  {
    src: "/images/archive/preview/01-leather-collection.jpeg",
    alt: "A collection of colourful vintage leather bags",
  },
  {
    src: "/images/archive/preview/02-turquoise-pleats.jpeg",
    alt: "Turquoise pleated asymmetric top displayed on a wooden hanger",
  },
  {
    src: "/images/archive/preview/03-plaid-skirt.jpeg",
    alt: "Olive and navy plaid pleated skirt styled outdoors",
  },
  {
    src: "/images/archive/preview/04-burgundy-boots.jpeg",
    alt: "Burgundy pointed-toe knee-high leather boots",
  },
];

// Mobile: editorial staggered layout.
// Desktop: horizontal composition with subtle offsets.
const imageLayouts = [
  // Leather collection — top left
  "left-0 top-[1%] h-[42%] w-[48%] " +
    "md:h-[72%] md:w-[25%] md:-translate-y-6",

  // Turquoise pleats — upper right
  "right-0 top-[16%] h-[38%] w-[48%] " +
    "md:h-[61%] md:w-[22%] md:translate-y-8",

  // Plaid skirt — lower left
  "left-0 bottom-[9%] h-[38%] w-[48%] " +
    "md:h-[67%] md:w-[23%] md:translate-y-4",

  // Burgundy boots — bottom right
  "right-0 bottom-0 h-[38%] w-[48%] " +
    "md:h-[66%] md:w-[24%] md:-translate-y-5",
];

export default function ArchivePreview() {
  return (
    <ViewportSection
      id="archive"
      labelledBy="archive-heading"
    >
      {/* Sticky heading is outside the inner gallery layout */}
      <StickySectionTitle
        id="archive-heading"
        title="archive."
      />

      {/* Gallery and CTA share the remaining viewport height */}
      <div className="relative flex min-h-0 flex-1 flex-col">
        {/* Right-aligned editorial label */}
        <span
          className="
            pointer-events-none absolute
            right-0 top-4
            text-[10px] uppercase
            tracking-[0.12em] text-charcoal/45
          "
        >
          selected objects
        </span>

        {/* Image composition */}
        <div className="flex min-h-0 flex-1 py-4 md:py-6">
          <div
            className="
              relative mx-auto h-full
              w-full max-w-[1100px]
              md:flex md:items-center
              md:justify-between md:gap-6
            "
          >
            {previewImages.map((image, index) => (
              <figure
                key={image.src}
                className={`
                  absolute min-h-0 min-w-0
                  md:relative md:inset-auto
                  md:shrink-0
                  ${imageLayouts[index]}
                `}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 767px) 48vw, 25vw"
                  className="object-contain object-center"
                />
              </figure>
            ))}
          </div>
        </div>

        {/* Link to full archive */}
        <div
          className="
            mx-auto flex w-full
            max-w-[1100px]
            shrink-0 justify-end pb-1
          "
        >
          <Link
            href="/archive"
            className="
              border-b border-current pb-1
              text-sm transition-opacity
              hover:opacity-50
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-brand-blue
            "
          >
            explore the archive ↗
          </Link>
        </div>
      </div>
    </ViewportSection>
  );
}
