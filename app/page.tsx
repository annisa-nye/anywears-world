import About from "@/components/About";
import Archive from "@/components/Archive";
import BusinessCard from "@/components/BusinessCard";
import Everywhere from "@/components/Everywhere";
import Experience from "@/components/Experience";
import Landing from "@/components/Landing";

const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#archive", label: "Archive" },
  { href: "#experience", label: "Experience" },
  { href: "#everywhere", label: "Everywhere" },
  { href: "#business-card", label: "Contact" },
] as const;

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-charcoal/10 bg-canvas/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
          <a
            href="#landing"
            className="text-xs tracking-[0.25em] uppercase hover:opacity-70"
          >
            anywears.
          </a>
          <nav aria-label="Primary">
            <ul className="flex flex-wrap gap-x-5 gap-y-1 text-xs tracking-[0.15em] uppercase">
              {NAV_ITEMS.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="text-charcoal/70 hover:text-charcoal">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <Landing />
        <About />
        <Archive />
        <Experience />
        <Everywhere />
        <BusinessCard />
      </main>
    </>
  );
}
