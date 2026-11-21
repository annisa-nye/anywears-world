"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import JourneyNavigation from "./JourneyNavigation";

type SiteHeaderProps = {
  showJourney?: boolean;
};

export default function SiteHeader({
  showJourney = false,
}: SiteHeaderProps) {
  const [pastLanding, setPastLanding] = useState(false);

  useEffect(() => {
    if (!showJourney) return;

    let frame = 0;

    function updateHeader() {
      const landing = document.getElementById("landing");

      setPastLanding(
        !landing || landing.getBoundingClientRect().bottom <= 0
      );
    }

    function scheduleUpdate() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateHeader);
    }

    scheduleUpdate();

    window.addEventListener("scroll", scheduleUpdate, {
      passive: true,
    });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [showJourney]);

  const isVisible = !showJourney || pastLanding;

  return (
    <header
      className={`
        sticky top-0 z-30
        h-14 w-full
        border-none shadow-none
        bg-canvas text-charcoal
        transition-opacity duration-300
        motion-reduce:transition-none
        ${showJourney ? "-mb-14" : ""}
        ${
          isVisible
            ? "opacity-100"
            : "pointer-events-none opacity-0"
        }
      `}
    >
      <div
        className="
          grid h-full w-full
          grid-cols-[1fr_auto_1fr]
          items-center
          px-4 sm:px-6
        "
      >
        {/* Left: reserved for sticky editorial headings */}
        <div className="min-w-0" />

        {/* Centre: journey navigation */}
        <div className="flex items-center justify-center">
          {showJourney && <JourneyNavigation />}
        </div>

        {/* Right: Anywears identity */}
        <div className="flex items-center justify-end">
          <Link
            href="/"
            aria-label="Anywears — Home"
            className="
              text-xs font-normal lowercase
              tracking-normal text-brand-blue
              transition-opacity duration-200
              hover:opacity-60
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-brand-blue
              motion-reduce:transition-none
            "
          >
            anywears.
          </Link>
        </div>
      </div>
    </header>
  );
}