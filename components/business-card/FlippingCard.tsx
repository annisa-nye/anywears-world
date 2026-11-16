
"use client";

import Image from "next/image";
import { useState } from "react";

const VINTED_URL =
  "https://www.vinted.com.au/member/3165405155/";

const INSTAGRAM_URL =
  "https://www.instagram.com/anywears.shop/";

const DEPOP_URL =
  "https://www.depop.com/anywearshop/";

export default function FlippingCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="mx-auto w-full max-w-[560px]">
      {/* Perspective container */}
      <div style={{ perspective: "1200px" }}>
        {/* Rotating card */}
        <div
          className="relative aspect-[1.6] w-full
            rounded-[20px]
            transition-transform duration-700
            ease-in-out motion-reduce:transition-none"
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
                onClick={() => setIsFlipped(true)}
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
                    href={DEPOP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline underline-offset-2"
                  >
                    depop: @anywearshop
                  </a>

                  <a
                    href={VINTED_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline underline-offset-2"
                  >
                    vinted: @anywearshop
                  </a>

                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline underline-offset-2"
                  >
                    instagram: @anywears.shop
                  </a>

                  <span className="mt-3">
                    melbourne, au
                  </span>
                </div>

                <Image
                  src="/images/branding/flower.png"
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

    
        <p className="mt-7 text-center text-[11px] font-normal lowercase tracking-[0.08em] text-charcoal/45">
        click to turn ↻
        </p>

    </div>
  );
}
