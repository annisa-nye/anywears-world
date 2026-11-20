"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { ReviewImage } from "@/lib/review-data";

type ReviewGalleryProps = {
  reviews: ReviewImage[];
  previewCount?: number;
};

export default function ReviewGallery({
  reviews,
  previewCount = 6,
}: ReviewGalleryProps) {
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  const hasMore = reviews.length > previewCount;
  const visibleReviews = expanded
    ? reviews
    : reviews.slice(0, previewCount);

  useEffect(() => {
    if (selected === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelected(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selected]);

  return (
    <>
      <div className="mt-12 md:mt-20">
        {/* Original review screenshots */}
        <div className="columns-1 gap-7 md:columns-2 md:gap-10">
          {visibleReviews.map((review, index) => (
            <figure
              key={review.src}
              className="mb-10 break-inside-avoid md:mb-14"
            >
              <button
                type="button"
                onClick={() => setSelected(index)}
                aria-label={`Enlarge original review from @${review.username}`}
                className="
                  block w-full cursor-zoom-in
                  text-left
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-brand-blue
                "
              >
                <Image
                  src={review.src}
                  alt={`Original Depop review screenshot from @${review.username}`}
                  width={1200}
                  height={900}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="
                    block h-auto w-full
                    transition-opacity duration-300
                    hover:opacity-85
                    motion-reduce:transition-none
                  "
                />
              </button>

              <figcaption
                className="
                  mt-3 flex items-center
                  justify-between
                  text-[10px] tracking-[0.08em]
                  text-charcoal/40
                "
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>view original ↗</span>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Expand collection */}
        {hasMore && (
          <div className="mt-8 flex justify-center md:mt-14">
            <button
              type="button"
              aria-expanded={expanded}
              onClick={() => setExpanded((current) => !current)}
              className="
                cursor-pointer border-b
                border-brand-blue/40 pb-1
                text-xs lowercase text-brand-blue
                transition-colors duration-200
                hover:border-brand-blue
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-brand-blue
              "
            >
              {expanded
                ? "show less ↑"
                : `view all ${reviews.length} ↗`}
            </button>
          </div>
        )}
      </div>

      {/* Full-screen original screenshot */}
      {selected !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Original review from @${reviews[selected].username}`}
          className="
            fixed inset-0 z-[100]
            flex items-center justify-center
            bg-charcoal/90 p-5
            md:p-10
          "
        >
          <button
            type="button"
            onClick={() => setSelected(null)}
            aria-label="Close review"
            className="
              absolute right-5 top-5 z-10
              cursor-pointer
              text-2xl text-white
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-white
              md:right-10 md:top-8
            "
          >
            ×
          </button>

          <div className="relative h-[85dvh] w-full max-w-5xl">
            <Image
              src={reviews[selected].src}
              alt={`Enlarged original review from @${reviews[selected].username}`}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
