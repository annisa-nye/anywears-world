import Image from "next/image";
import Link from "next/link";

const previewImages = [
  {
    src: "/images/archive/preview/01.jpeg",
    alt: "Selected fashion piece from the Anywears archive",
  },
  {
    src: "/images/archive/preview/02.jpeg",
    alt: "Selected vintage piece from the Anywears archive",
  },
  {
    src: "/images/archive/preview/03.jpeg",
    alt: "Selected designer piece from the Anywears archive",
  },
  {
    src: "/images/archive/preview/04.jpeg",
    alt: "Selected item from the Anywears collection",
  },
];

export default function ArchivePreview() {
  return (
    <section
      id="archive"
      aria-labelledby="archive-preview-heading"
      className="bg-canvas px-6 py-28 text-charcoal md:px-12 md:py-40"
    >
      <div className="mx-auto max-w-6xl">
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

        <div className="mt-20 grid grid-cols-2 items-start gap-x-5 gap-y-12 md:mt-28 md:gap-x-16 md:gap-y-24">
          {previewImages.map((image, index) => (
            <figure
              key={image.src}
              className={
                index % 2 === 1
                  ? "translate-y-10 md:translate-y-24"
                  : ""
              }
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={1000}
                sizes="(max-width: 768px) 45vw, 40vw"
                className="block h-auto w-full"
              />
            </figure>
          ))}
        </div>

        <div className="mt-32 flex justify-end md:mt-48">
          <Link
            href="/archive"
            className="border-b border-current pb-1 text-sm transition-opacity hover:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue"
          >
            explore the archive ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
