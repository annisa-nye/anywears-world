"use client";

import { useEffect, useState } from "react";

const JOURNEY_SECTIONS = [
  { id: "landing", label: "Home" },
  { id: "about", label: "About" },
  { id: "archive", label: "Archive" },
  { id: "contact", label: "Contact" },
] as const;

type SectionId = (typeof JOURNEY_SECTIONS)[number]["id"];

const HEADER_HEIGHT = 56;
const READING_LINE = HEADER_HEIGHT + 1;

export default function JourneyNavigation() {
  const [activeSection, setActiveSection] =
    useState<SectionId | null>(null);

  useEffect(() => {
    let frame = 0;

    function updateActiveSection() {
      const landing = document.getElementById("landing");

      // Hide journey circles while the Landing is visible.
      if (
        landing &&
        landing.getBoundingClientRect().bottom > 0
      ) {
        setActiveSection(null);
      
        // Remove the section hash when returning to Landing.
        const homeUrl =
          window.location.pathname + window.location.search;
      
        if (window.location.hash) {
          window.history.replaceState(
            window.history.state,
            "",
            homeUrl
          );
        }
      } else {
        let currentSection: SectionId = "about";

        // Determine which journey circle is active.
        for (const section of JOURNEY_SECTIONS) {
          const element = document.getElementById(section.id);

          if (
            element &&
            element.getBoundingClientRect().top <= HEADER_HEIGHT + 1
          ) {
            currentSection = section.id;
          }
        }

        setActiveSection(currentSection);

        const newHash = `#${currentSection}`;

        const newUrl = `${window.location.pathname}${window.location.search}${newHash}`;

        if (
          window.location.pathname +
            window.location.search +
            window.location.hash !== newUrl
        ) {
          window.history.replaceState(
            window.history.state,
            "",
            newUrl
          );
        }
      }

      // Manage sticky heading visibility.
      JOURNEY_SECTIONS.forEach((section, index) => {
          // Landing has no sticky heading.
        if (section.id === "landing") return;

        const element = document.getElementById(section.id);
        const heading = document.getElementById(
          `${section.id}-heading`
        );

        if (!element || !heading) return;


        const nextSection = JOURNEY_SECTIONS[index + 1];

        const nextElement = nextSection
          ? document.getElementById(nextSection.id)
          : null;

        const nextChapterHasStarted =
          nextElement !== null &&
          nextElement.getBoundingClientRect().top <= READING_LINE;

        // Only use the current section's bottom for
        // single-viewport chapters.
        // Aftercare spans two viewports.
        const sectionHasEnded =
          element.getBoundingClientRect().bottom <= READING_LINE;

        heading.dataset.journeyHidden =
          nextChapterHasStarted || sectionHasEnded
            ? "true"
            : "false";
      });
    }

    function scheduleUpdate() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActiveSection);
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
  }, []);

  function navigateToSection(id: SectionId) {
    const element = document.getElementById(id);
    if (!element) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const targetPosition =
      id === "landing"
      ? 0
      : window.scrollY +
        element.getBoundingClientRect().top;

    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }

  const isVisible = activeSection !== null;

  return (
    <nav
      aria-label="Homepage journey"
      aria-hidden={!isVisible}
      inert={!isVisible}
      className={`
        transition-opacity duration-300
        motion-reduce:transition-none
        ${
          isVisible
            ? "opacity-100"
            : "pointer-events-none opacity-0"
        }
      `}
    >
      <div className="flex items-center justify-center">
        {JOURNEY_SECTIONS.map((section, index) => {
          const isActive = activeSection === section.id;

          return (
            <div
              key={section.id}
              className="flex items-center"
            >
              <button
                type="button"
                onClick={() => navigateToSection(section.id)}
                aria-label={`Go to ${section.label}`}
                aria-current={
                  isActive ? "location" : undefined
                }
                title={section.label}
                className="
                  flex h-10 w-9
                  items-center justify-center
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-brand-blue
                "
              >
                <span
                  aria-hidden="true"
                  className={`
                    block rounded-full
                    transition-all duration-300
                    motion-reduce:transition-none
                    ${
                      isActive
                        ? "h-[7px] w-[7px] bg-brand-blue"
                        : "h-[5px] w-[5px] bg-charcoal/35"
                    }
                  `}
                />
              </button>

              {index < JOURNEY_SECTIONS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="h-px w-5 bg-charcoal/15"
                />
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
