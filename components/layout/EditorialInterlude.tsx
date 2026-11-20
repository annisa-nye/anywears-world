import Image from "next/image";

type EditorialInterludeProps = {
  src: string;
  alt: string;
  variant?: "full" | "framed";
  caption?: string;
};

export default function EditorialInterlude({
  src,
  alt,
  variant = "full",
  caption,
}: EditorialInterludeProps) {
  const isFull = variant === "full";

  return (
    <section
      className={`
        relative h-auto
        scroll-mt-14 overflow-hidden
        bg-canvas
        ${isFull ? "" : "px-6 py-8 md:px-12 md:py-12"}
      `}
      aria-label={alt}
    >
      <div
        className={`
          relative w-full
          ${isFull ? "" : "mx-auto max-w-6xl"}
        `}
      >
        <Image
            src={src}
            alt={alt}
            width={1600}
            height={1200}
            sizes="100vw"
            className={
            isFull
                ? "block h-auto w-full"
                : "block h-auto w-full object-contain"
            }
  />
      </div>

      {caption && (
        <p
          className={`
            absolute bottom-6 right-6
            text-xs lowercase tracking-wide
            md:bottom-10 md:right-12
            ${
              isFull
                ? "text-white drop-shadow-md"
                : "text-charcoal/60"
            }
          `}
        >
          {caption}
        </p>
      )}
    </section>
  );
}
