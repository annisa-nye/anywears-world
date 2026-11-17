"use client";

import { useEffect, useState } from "react";

const JOURNEY_SECTIONS = [
  { id: "about", label: "About" },
  { id: "archive", label: "Archive" },
  { id: "aftercare", label: "Aftercare" },
  { id: "business-card", label: "Contact" },
] as const;

type SectionId = (typeof JOURNEY_SECTIONS)[number]["id"];

export default function JourneyNavigation() {
  const [activeSection, setActiveSection] =
    useState<SectionId | null>(null);

  useEffect(() => {
    let frame = 0;

    function updateActiveSection() {
      const readingLine = window.innerHeight * 0.4;

      const landing = document.getElementById("landing");

        // Only reveal the journey navigation once the entire
        // Landing section has scrolled above the viewport.
        if (landing && landing.getBoundingClientRect().bottom > 0) {
        setActiveSection(null);
        return;
        }

      let currentSection: SectionId = "about";

      for (const section of JOURNEY_SECTIONS) {
        const element = document.getElementById(section.id);

        if (!element) continue;

        if (
          element.getBoundingClientRect().top <= readingLine
        ) {
          currentSection = section.id;
        }
      }

      setActiveSection(currentSection);
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
    
        const headerHeight = 56;
    
        const targetPosition =
        window.scrollY +
        element.getBoundingClientRect().top -
        headerHeight;
    
        window.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: reduceMotion ? "auto" : "smooth",
        });
    }
    
    // Keep the navigation mounted, but visually hidden
    // while the visitor is viewing the Landing.
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