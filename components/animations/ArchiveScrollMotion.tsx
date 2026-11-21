"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

type ArchiveScrollMotionProps = {
  children: ReactNode;
  className?: string;
};

export default function ArchiveScrollMotion({
  children,
  className = "",
}: ArchiveScrollMotionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const section = document.getElementById("archive");

    if (!container || !section) return;

    const images = Array.from(
      container.querySelectorAll<HTMLElement>(
        "[data-archive-slide]"
      )
    );

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    let frame = 0;

    function update() {
      if (!section) return;

      if (reducedMotion.matches) {
        images.forEach((image) => {
          image.style.transform = "";
        });
        return;
      }

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // 0 when the section is centred in the viewport.
      // Approaches 1 as it enters or leaves the screen.
      const sectionCentre =
        rect.top + rect.height / 2;

      const viewportCentre = viewportHeight / 2;

      const distance =
        Math.abs(sectionCentre - viewportCentre);

      const progress = Math.min(
        1,
        distance / (viewportHeight * 0.85)
      );

      // Smooth, reversible movement.
      const easedProgress = Math.pow(progress, 1.4);

      const maxSlide = Math.min(
        160,
        window.innerWidth * 0.22
      );

      images.forEach((image) => {
        const side = image.dataset.side;
        const direction = side === "left" ? -1 : 1;

        const offset =
          direction * easedProgress * maxSlide;

        image.style.transform =
          `translate3d(${offset}px, 0, 0)`;
      });
    }

    function scheduleUpdate() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    }

    scheduleUpdate();

    window.addEventListener("scroll", scheduleUpdate, {
      passive: true,
    });
    window.addEventListener("resize", scheduleUpdate);
    reducedMotion.addEventListener("change", scheduleUpdate);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      reducedMotion.removeEventListener("change", scheduleUpdate);
    };
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
