import Image from "next/image";

const packagingImages = [
  {
    src: "/images/aftercare/packaging/aftercare_blue.jpeg",
    alt: "Blue floral wrapping with a personalised tag for Rose",
    position: "object-center",
    offset: "md:-translate-y-4",
  },
  {
    src: "/images/aftercare/packaging/aftercare_box.jpeg",
    alt: "Anywears parcel decorated with flowers and thank-you stickers",
    position: "object-center",
    offset: "translate-y-3 md:translate-y-5",
  },
  {
    src: "/images/aftercare/packaging/aftercare_kraft.jpeg",
    alt: "Kraft paper packaging finished with delicate white lace",
    position: "object-center",
    offset: "md:-translate-y-2",
  },
  {
    src: "/images/aftercare/packaging/aftercare_mint.jpeg",
    alt: "Mint tissue wrapping with an individual name tag and card",
    position: "object-center",
    offset: "translate-y-3 md:translate-y-4",
  },
  {
    src: "/images/aftercare/packaging/aftercare_unboxing_1.jpeg",
    alt: "Open Anywears box showing pastel parcels and handmade details",
    position: "object-center",
    offset: "md:-translate-y-3",
  },
  {
    src: "/images/aftercare/packaging/aftercare_unboxing_2.jpeg",
    alt: "Handwritten thank-you note and lace-wrapped parcel",
    position: "object-center",
    offset: "translate-y-3 md:translate-y-4",
  },
];

export default function PackagingGallery() {
  return (
    <div className="flex min-h-0 w-full flex-1 flex-col">
      {/* Editorial heading */}
      <div className="flex shrink-0 items-start justify-between gap-4">
        <h3 className="text-base font-normal lowercase md:text-lg">
          packed with love.
        </h3>

        <span className="text-[10px] uppercase tracking-[0.12em] text-charcoal/45">
          01 / the process
        </span>
      </div>

      {/* Photographic composition */}
      <div className="flex min-h-0 flex-1 items-center py-6 md:py-8">
        <div
          className="
            mx-auto grid h-full min-h-0 w-full
            max-w-[1050px]
            grid-cols-2 grid-rows-3
            gap-x-4 gap-y-7
            md:grid-cols-3 md:grid-rows-2
            md:gap-x-9 md:gap-y-8
          "
        >
          {packagingImages.map((image, index) => (
            <figure
              key={image.src}
              className={`
                relative min-h-0 min-w-0
                ${image.offset}
              `}
            >
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 767px) 45vw, 30vw"
                  className={`
                    object-cover
                    ${image.position}
                  `}
                  priority={index === 0}
                />
              </div>
            </figure>
          ))}
        </div>
      </div>

      {/* Editorial closing note */}
      <p className="shrink-0 text-right text-[11px] lowercase tracking-wide text-charcoal/55">
        little details, always.
      </p>
    </div>
  );
}
