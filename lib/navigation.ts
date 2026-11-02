export const SECTION_IDS = [
  "landing",
  "about",
  "archive",
  "experience",
  "everywhere",
  "business-card",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

export type NavigationItem = {
  id: SectionId;
  number: string;
  label: string;
  /** Use light trigger colour when this section is active (dark section backgrounds). */
  darkBackground?: boolean;
};

export const NAVIGATION_ITEMS: readonly NavigationItem[] = [
  { id: "landing", number: "01", label: "LANDING" },
  { id: "about", number: "02", label: "ABOUT" },
  { id: "archive", number: "03", label: "ARCHIVE" },
  { id: "experience", number: "04", label: "WHERE IT GOES" },
  { id: "everywhere", number: "05", label: "EVERYWHERE" },
  { id: "business-card", number: "06", label: "CONTACT" },
] as const;

export const NAV_OVERLAY_ID = "fullscreen-nav-overlay";

const READING_LINE_RATIO = 0.35;

export function isSectionId(value: string): value is SectionId {
  return (SECTION_IDS as readonly string[]).includes(value);
}

export function sectionHref(id: SectionId): string {
  return `#${id}`;
}

/** Which section occupies the viewport reading position (stable for stacked layouts). */
export function getActiveSectionAtReadingLine(): SectionId {
  const readingLine = window.innerHeight * READING_LINE_RATIO;
  let active: SectionId = SECTION_IDS[0];

  for (const id of SECTION_IDS) {
    const element = document.getElementById(id);
    if (!element) continue;

    const { top } = element.getBoundingClientRect();
    if (top <= readingLine + 1) {
      active = id;
    } else {
      break;
    }
  }

  return active;
}

export function getNavigationItem(id: SectionId): NavigationItem | undefined {
  return NAVIGATION_ITEMS.find((item) => item.id === id);
}
