"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function FlippingCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const hasAutoFlipped = useRef(false);

  useEffect(() => {
    const contact = document.getElementById("contact");
    if (!contact) return;

    let timer: ReturnType<typeof setTimeout> | null = null;
    let isInContact = false;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible =
          entry.isIntersecting &&
          entry.intersectionRatio >= 0.40;

        if (isVisible && !isInContact) {
          isInContact = true;

          if (!reducedMotion.matches && !hasAutoFlipped.current) {
            timer = setTimeout(() => {
              setIsFlipped(true);
              hasAutoFlipped.current = true;
              timer = null;
            }, 800);
          }
        }

        if (!isVisible && isInContact) {
          isInContact = false;

          if (timer !== null) {
            clearTimeout(timer);
            timer = null;
          }

          // Reset the card whenever Contact is left.
          setIsFlipped(false);
          hasAutoFlipped.current = false;
        }
      },
      {
        threshold: [0, 0.40, 1],
      }
    );

    observer.observe(contact);

    return () => {
      observer.disconnect();

      if (timer !== null) {
        clearTimeout(timer);
      }
    };
  }, []);


  return (
    <div className="relative mx-auto w-full max-w-[560px] pt-7">
      <span
        aria-hidden="true"
        className="
          pointer-events-none absolute right-0 top-0
          text-[10px] uppercase tracking-[0.12em]
          text-charcoal/45
        "
      >
        click / tap to interact ↻
      </span>
      {/* Perspective container */}
      <div style={{ perspective: "1200px" }}>
        {/* Rotating card */}
        <div
          className="
            relative aspect-[1.6] w-full
            rounded-[20px]
            transition-transform duration-1000
            ease-[cubic-bezier(0.22,1,0.36,1)]
            motion-reduce:transition-none"
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped
              ? "rotateY(180deg)"
              : "rotateY(0deg)",
          }}
        >

            {/* FRONT */}
            <div
            className="absolute inset-0 overflow-hidden
                rounded-[20px] bg-[#DCE2FF]"
            style={{ backfaceVisibility: "hidden" }}
            aria-hidden={isFlipped}
            inert={isFlipped}
            >
            <button
                type="button"
                onClick={() => {
                  hasAutoFlipped.current = true;
                  setIsFlipped(true);

                }}
                aria-label="Flip business card to view the back"
                className="relative flex h-full w-full cursor-pointer
                items-end justify-start overflow-hidden
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-brand-blue"
            >
                <Image
                src="/images/branding/pixelated_flower.png"
                alt="Pixelated blue flower illustration"
                width={1584}
                height={960}
                unoptimized
                className="block h-auto w-[86%] origin-bottom-left
                    scale-[1.2] object-contain"
                />
            </button>
            </div>


          {/* BACK */}

          <div 
            className="absolute inset-0 cursor-pointer overflow-hidden rounded-[20px] bg-[#DCE2FF] p-[7%] text-brand-blue"
            style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
            }}
            aria-hidden={!isFlipped}
            inert={!isFlipped}
            onClick={(event) => {
                // Don't flip when clicking a social link.
                if ((event.target as HTMLElement).closest("a")) return;
                hasAutoFlipped.current = true;
                setIsFlipped(false);
            }}
>

            <button
            type="button"
            onClick={() => setIsFlipped(false)}
            aria-label="Turn business card to the front"
            className="sr-only focus:not-sr-only
                focus:absolute focus:bottom-3 focus:right-3
                focus:z-20 focus:bg-canvas focus:px-3
                focus:py-2 focus:text-brand-blue"
            >
            Turn card to front
            </button>

            <div className="flex h-full flex-col justify-between">
              {/* Editorial text */}
              <div
                className="flex flex-col
                  text-[clamp(0.9rem,2.5vw,1.65rem)]
                  leading-[1.3] tracking-tight"
              >
                <span className="self-start">
                  hand-picked.
                </span>

                <span className="self-end">
                  vintage.
                </span>

                <span className="self-center">
                  contemporary finds.
                </span>
              </div>

              {/* Social links and flower artwork */}
              <div className="flex items-end justify-between gap-3">
                <div
                  className="flex flex-col
                    text-[clamp(0.6rem,1.5vw,0.95rem)]
                    leading-[1.2]"
                >
                <a
                  href="mailto:desk@anywears.world"
                  onClick={(event) => event.stopPropagation()}
                  className="
                    inline-block text-inherit
                    underline underline-offset-4 decoration-0.5
                    transition-opacity duration-200
                    hover:opacity-60
                    focus-visible:outline-2
                    focus-visible:outline-brand-blue
                  "
                >
                  desk@anywears.world
                </a>
                  <span className="mt-3">
                    melbourne → berlin
                  </span>
                </div>

                <Image
                  src="/images/branding/logo.png"
                  alt="Anywears flower symbol"
                  width={960}
                  height={960}
                  unoptimized
                  className="h-auto w-[26%] max-w-[140px]
                    object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
