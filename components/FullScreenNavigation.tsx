"use client";

import {
  getActiveSectionAtReadingLine,
  getNavigationItem,
  isSectionId,
  NAV_OVERLAY_ID,
  NAVIGATION_ITEMS,
  type SectionId,
  sectionHref,
} from "@/lib/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";

function getFocusableElements(container: HTMLElement): HTMLElement[] {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  ).filter((el) => !el.hasAttribute("disabled") && el.offsetParent !== null);
}

export default function FullScreenNavigation() {
  const titleId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const navListRef = useRef<HTMLUListElement>(null);
  const scrollLockY = useRef(0);
  const navigateTokenRef = useRef(0);
  const pendingCloseScrollRef = useRef<SectionId | null>(null);
  const wasOpenRef = useRef(false);

  const [isOpen, setIsOpen] = useState(false);
  const [activeSectionId, setActiveSectionId] =
    useState<SectionId>("landing");
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const activeItem = getNavigationItem(activeSectionId);
  const triggerOnDark = activeItem?.darkBackground ?? false;

  const updateActiveSection = useCallback(() => {
    setActiveSectionId(getActiveSectionAtReadingLine());
  }, []);

  const closeMenu = useCallback(() => {
    navigateTokenRef.current += 1;
    pendingCloseScrollRef.current = null;
    setIsOpen(false);
  }, []);

  const openMenu = useCallback(() => {
    setIsOpen(true);
  }, []);

  const scrollToSection = useCallback(
    (id: SectionId, behavior: ScrollBehavior) => {
      const element = document.getElementById(id);
      if (!element) return;

      element.scrollIntoView({ behavior, block: "start" });
      window.history.pushState(null, "", sectionHref(id));
      setActiveSectionId(id);
    },
    [],
  );

  const navigateToSection = useCallback(
    (id: SectionId) => {
      const token = ++navigateTokenRef.current;
      pendingCloseScrollRef.current = id;
      setIsOpen(false);

      if (!prefersReducedMotion) return;

      window.requestAnimationFrame(() => {
        if (token !== navigateTokenRef.current) return;
        if (pendingCloseScrollRef.current !== id) return;

        pendingCloseScrollRef.current = null;
        scrollToSection(id, "auto");
      });
    },
    [prefersReducedMotion, scrollToSection],
  );

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => setPrefersReducedMotion(media.matches);
    syncPreference();
    media.addEventListener("change", syncPreference);
    return () => media.removeEventListener("change", syncPreference);
  }, []);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (isSectionId(hash)) {
      requestAnimationFrame(() => {
        scrollToSection(hash, "auto");
      });
    }

    const onHashChange = () => {
      const nextHash = window.location.hash.slice(1);
      if (isSectionId(nextHash)) {
        setActiveSectionId(nextHash);
      }
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [scrollToSection]);

  useEffect(() => {
    const sections = NAVIGATION_ITEMS.map(({ id }) =>
      document.getElementById(id),
    ).filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      () => {
        updateActiveSection();
      },
      {
        root: null,
        rootMargin: "-20% 0px -45% 0px",
        threshold: [0, 0.15, 0.35, 0.5, 0.75, 1],
      },
    );

    sections.forEach((section) => observer.observe(section));

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        updateActiveSection();
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [updateActiveSection]);

  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;

    if (isOpen) {
      main.setAttribute("inert", "");
    } else {
      main.removeAttribute("inert");
    }

    return () => main.removeAttribute("inert");
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    scrollLockY.current = window.scrollY;
    const { style } = document.body;
    style.position = "fixed";
    style.top = `-${scrollLockY.current}px`;
    style.left = "0";
    style.right = "0";
    style.width = "100%";
    style.overflow = "hidden";

    return () => {
      style.position = "";
      style.top = "";
      style.left = "";
      style.right = "";
      style.width = "";
      style.overflow = "";
      window.scrollTo(0, scrollLockY.current);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const overlay = overlayRef.current;
    const trigger = triggerRef.current;
    if (!overlay) return;

    const focusFirstNavLink = () => {
      const firstLink = navListRef.current?.querySelector<HTMLElement>("a[href]");
      firstLink?.focus();
    };

    focusFirstNavLink();

    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }

      if (event.key !== "Tab") return;

      const navFocusables = getFocusableElements(overlay);
      const focusables = trigger
        ? [trigger, ...navFocusables]
        : navFocusables;

      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (event.shiftKey) {
        if (active === first || !active || !focusables.includes(active)) {
          event.preventDefault();
          last.focus();
        }
      } else if (active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [closeMenu, isOpen]);

  useEffect(() => {
    if (wasOpenRef.current && !isOpen) {
      triggerRef.current?.focus({ preventScroll: true });
    }
    wasOpenRef.current = isOpen;
  }, [isOpen]);

  const handleTriggerClick = () => {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const handleOverlayTransitionEnd = (
    event: React.TransitionEvent<HTMLDivElement>,
  ) => {
    if (prefersReducedMotion) return;
    if (event.propertyName !== "transform") return;
    if (event.target !== event.currentTarget) return;

    const pending = pendingCloseScrollRef.current;
    if (!pending) return;

    const token = navigateTokenRef.current;
    pendingCloseScrollRef.current = null;

    window.requestAnimationFrame(() => {
      if (token !== navigateTokenRef.current) return;
      scrollToSection(pending, "smooth");
    });
  };

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        id="nav-menu-trigger"
        aria-expanded={isOpen}
        aria-controls={NAV_OVERLAY_ID}
        aria-haspopup="dialog"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={handleTriggerClick}
        className={`fixed left-0 top-0 z-50 flex min-h-11 min-w-11 items-center justify-center p-3 text-xl leading-none transition-colors sm:p-4 sm:text-2xl ${
          isOpen || !triggerOnDark ? "text-charcoal" : "text-canvas"
        } motion-reduce:transition-none`}
      >
        <span aria-hidden="true">{isOpen ? "×" : ">"}</span>
      </button>

      <div
        ref={overlayRef}
        id={NAV_OVERLAY_ID}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-hidden={!isOpen}
        onTransitionEnd={handleOverlayTransitionEnd}
        className={`fixed inset-0 z-40 flex h-dvh w-full flex-col bg-canvas transition-transform duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
          isOpen ? "translate-x-0" : "-translate-x-full pointer-events-none"
        }`}
      >
        <h2 id={titleId} className="sr-only">
          Site navigation
        </h2>

        <nav
          aria-label="Primary"
          className="flex flex-1 flex-col justify-center px-8 pb-16 pt-24 sm:px-12 md:px-16 lg:px-24"
        >
          <ul ref={navListRef} className="flex flex-col gap-6 sm:gap-8 md:gap-10">
            {NAVIGATION_ITEMS.map(({ id, number, label }) => {
              const isActive = id === activeSectionId;
              return (
                <li key={id}>
                  <a
                    href={sectionHref(id)}
                    aria-current={isActive ? "location" : undefined}
                    onClick={(event) => {
                      event.preventDefault();
                      navigateToSection(id);
                    }}
                    className={`block text-2xl tracking-wide sm:text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-tight ${
                      isActive
                        ? "font-bold text-cobalt"
                        : "font-normal text-charcoal"
                    }`}
                  >
                    {number} / {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}
