import Image from "next/image";
import Link from "next/link";

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

const imageLayouts = [
  "md:col-span-7 md:col-start-1 md:w-[90%]",
  "md:col-span-5 md:col-start-8 md:mt-28",
  "md:col-span-5 md:col-start-1 md:mt-12",
  "md:col-span-7 md:col-start-6 md:mt-0 md:ml-auto md:w-[90%]",
];

export default function ArchivePreview() {
  return (
    <section
      id="archive"
      aria-labelledby="archive-preview-heading"
      className="bg-canvas px-6 py-28 text-charcoal md:px-12 md:py-36"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="flex items-center justify-between gap-4">
          <h2
            id="archive-preview-heading"
            className="text-sm font-normal lowercase"
          >
            archive.
          </h2>

          <span className="text-[10px] uppercase tracking-[0.12em] text-charcoal/45">
            selected objects
          </span>
        </div>

        {/* Editorial composition */}
        <div
          className="
            mx-auto mt-20 grid max-w-[720px]
            grid-cols-2 items-start
            gap-x-5 gap-y-12
            md:mt-28 md:max-w-[920px]
            md:grid-cols-12
            md:gap-x-6 md:gap-y-20
          "
        >
          {previewImages.map((image, index) => (
            <figure
              key={image.src}
              className={[
                "min-w-0",
                index % 2 === 1 ? "relative top-10 md:top-0" : "",
                imageLayouts[index],
              ].join(" ")}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={1000}
                sizes="(max-width: 767px) 45vw, 45vw"
                className="block h-auto w-full"
              />
            </figure>
          ))}
        </div>

        {/* Link to full archive */}
        <div className="mx-auto mt-28 flex max-w-[920px] justify-end md:mt-32">
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
    </section>
  );
}
