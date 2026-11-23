"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const AUTO_FLIP_DELAY = 2000;
const ENTER_THRESHOLD = 0.5;
const EXIT_THRESHOLD = 0.12;

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

    function cancelTimer() {
      if (timer !== null) {
        clearTimeout(timer);
        timer = null;
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visibility = entry.intersectionRatio;

        // Start the interaction once Contact is sufficiently visible.
        if (!isInContact && visibility >= ENTER_THRESHOLD) {
          isInContact = true;

          if (
            !reducedMotion.matches &&
            !hasAutoFlipped.current
          ) {
            cancelTimer();

            timer = setTimeout(() => {
              if (!hasAutoFlipped.current && isInContact) {
                setIsFlipped(true);
                hasAutoFlipped.current = true;
              }

              timer = null;
            }, AUTO_FLIP_DELAY);
          }
        }

        // Reset only when Contact is almost entirely out of view.
        if (isInContact && visibility <= EXIT_THRESHOLD) {
          isInContact = false;
          cancelTimer();

          setIsFlipped(false);
          hasAutoFlipped.current = false;
        }
      },
      {
        threshold: [
          0,
          EXIT_THRESHOLD,
          ENTER_THRESHOLD,
          1,
        ],
      }
    );

    observer.observe(contact);

    return () => {
      observer.disconnect();
      cancelTimer();
    };
  }, []);

  function flipToBack() {
    hasAutoFlipped.current = true;
    setIsFlipped(true);
  }

  function flipToFront() {
    hasAutoFlipped.current = true;
    setIsFlipped(false);
  }

  return (
    <div className="relative mx-auto w-full max-w-[560px] pt-7">
      {/* Editorial interaction label */}
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
      <div
        className="relative w-full"
        style={{
          perspective: "1200px",
          WebkitPerspective: "1200px",
        }}
      >
        {/* Rotating card */}
        <div
          className="
            relative aspect-[1.6] w-full
            rounded-[20px]
            transition-transform duration-[1500ms]
            ease-[cubic-bezier(0.45,0,0.2,1)]
            motion-reduce:transition-none
          "
          style={{
            transformStyle: "preserve-3d",
            WebkitTransformStyle: "preserve-3d",
            willChange: "transform",
            transform: isFlipped
              ? "rotateY(180deg)"
              : "rotateY(0deg)",
          }}
        >
          {/* FRONT */}
          <div
            className="
              absolute inset-0 overflow-hidden
              rounded-[20px] bg-[#DCE2FF]
            "
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "translateZ(0.1px)",
            }}
            aria-hidden={isFlipped}
            inert={isFlipped}
          >
            <button
              type="button"
              onClick={flipToBack}
              aria-label="Flip business card to view the back"
              className="
                relative flex h-full w-full cursor-pointer
                items-end justify-start overflow-hidden
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-brand-blue
              "
            >
              <Image
                src="/images/branding/pixelated_flower.png"
                alt="Pixelated blue flower illustration"
                width={1584}
                height={960}
                unoptimized
                loading="eager"
                className="
                  block h-auto w-[86%] origin-bottom-left
                  scale-[1.2] object-contain
                "
              />
            </button>
          </div>

          {/* BACK */}
          <div
            className="
              absolute inset-0 cursor-pointer
              overflow-hidden rounded-[20px]
              bg-[#DCE2FF] p-[7%] text-brand-blue
            "
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg) translateZ(0.1px)",
            }}
            aria-hidden={!isFlipped}
            inert={!isFlipped}
            onClick={(event) => {
              if (
                (event.target as HTMLElement).closest("a")
              ) {
                return;
              }

              flipToFront();
            }}
          >
            <button
              type="button"
              onClick={flipToFront}
              aria-label="Turn business card to the front"
              className="
                sr-only focus:not-sr-only
                focus:absolute focus:bottom-3 focus:right-3
                focus:z-20 focus:bg-canvas focus:px-3
                focus:py-2 focus:text-brand-blue
              "
            >
              Turn card to front
            </button>

            <div className="flex h-full flex-col justify-between">
              {/* Editorial text */}
              <div
                className="
                  flex flex-col
                  text-[clamp(0.9rem,2.5vw,1.65rem)]
                  leading-[1.3] tracking-tight
                "
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

              {/* Contact details and logo */}
              <div className="flex items-end justify-between gap-3">
                <div
                  className="
                    flex flex-col
                    text-[clamp(0.6rem,1.5vw,0.95rem)]
                    leading-[1.2]
                  "
                >
                  <a
                    href="mailto:desk@anywears.world"
                    onClick={(event) => event.stopPropagation()}
                    className="
                      inline-block text-inherit
                      underline underline-offset-4 decoration-1
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
                  alt="Anywears logo"
                  width={960}
                  height={960}
                  unoptimized
                  loading="eager"
                  className="
                    h-auto w-[26%] max-w-[140px]
                    object-contain
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
