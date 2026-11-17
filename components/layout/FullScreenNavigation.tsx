"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";

const NAV_OVERLAY_ID = "site-navigation-overlay";

const NAVIGATION_ITEMS = [
  { number: "01", label: "home.", href: "/" },
  { number: "02", label: "archive.", href: "/archive" },
  { number: "03", label: "contact.", href: "/contact" },
] as const;

function getFocusableElements(container: HTMLElement): HTMLElement[] {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  ).filter((element) => !element.hasAttribute("disabled") && element.offsetParent !== null);
}

function isActiveRoute(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function FullScreenNavigation() {
  const pathname = usePathname();
  const titleId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const navListRef = useRef<HTMLUListElement>(null);
  const scrollLockY = useRef(0);
  const wasOpenRef = useRef(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOverLanding, setIsOverLanding] = useState(false);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  // Keep the existing pink menu trigger while it sits over the cobalt landing.
  // This detects the background without rewriting the URL hash during scrolling.
  useEffect(() => {
    const updateTriggerColour = () => {
      const landing = pathname === "/" ? document.getElementById("landing") : null;
      if (!landing) {
        setIsOverLanding(false);
        return;
      }
      const rect = landing.getBoundingClientRect();
      setIsOverLanding(rect.top <= 24 && rect.bottom > 24);
    };

    const frame = window.requestAnimationFrame(updateTriggerColour);
    window.addEventListener("scroll", updateTriggerColour, { passive: true });
    window.addEventListener("resize", updateTriggerColour);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateTriggerColour);
      window.removeEventListener("resize", updateTriggerColour);
    };
  }, [pathname]);

  // Prevent the content behind the menu from receiving keyboard focus.
  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;
    if (isOpen) main.setAttribute("inert", "");
    else main.removeAttribute("inert");
    return () => main.removeAttribute("inert");
  }, [isOpen, pathname]);

  // Lock page scrolling while the overlay is open, restoring the scroll position.
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

  // Trap focus inside the menu and allow Escape to close it.
  useEffect(() => {
    if (!isOpen) return;

    const overlay = overlayRef.current;
    const trigger = triggerRef.current;
    if (!overlay) return;

    navListRef.current?.querySelector<HTMLElement>("a[href]")?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }
      if (event.key !== "Tab") return;

      const overlayFocusables = getFocusableElements(overlay);
      const focusables = trigger ? [trigger, ...overlayFocusables] : overlayFocusables;
      if (!focusables.length) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (event.shiftKey) {
        if (active === first || !active || !focusables.includes(active)) {
          event.preventDefault();
          last.focus();
        }
      } else if (active === last || !active || !focusables.includes(active)) {
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
        onClick={() => setIsOpen((open) => !open)}
        className={`fixed left-0 top-0 z-50 flex min-h-11 min-w-11 items-center justify-center p-3 text-xl leading-none transition-colors sm:p-4 sm:text-2xl ${
          isOpen ? "text-charcoal" : isOverLanding ? "text-brand-pink" : "text-charcoal"
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
        inert={!isOpen}
        className={`fixed inset-0 z-40 flex h-dvh w-full flex-col bg-canvas transition-transform duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
          isOpen ? "translate-x-0" : "-translate-x-full pointer-events-none"
        }`}
      >
        <h2 id={titleId} className="sr-only">Site navigation</h2>
        <nav
          aria-label="Primary"
          className="flex flex-1 flex-col justify-center px-8 pb-16 pt-24 sm:px-12 md:px-16 lg:px-24"
        >
          <ul ref={navListRef} className="flex flex-col gap-6 sm:gap-8 md:gap-10">
            {NAVIGATION_ITEMS.map(({ number, label, href }) => {
              const isActive = isActiveRoute(pathname, href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={isActive ? "page" : undefined}
                    onClick={closeMenu}
                    className={`block text-2xl tracking-wide sm:text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-tight ${
                      isActive ? "font-bold text-brand-blue" : "font-normal text-charcoal"
                    }`}
                  >
                    {number} / {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}
