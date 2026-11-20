import Link from "next/link";
import JourneyNavigation from "./JourneyNavigation";

type SiteHeaderProps = {
  showJourney?: boolean;
};

export default function SiteHeader({
  showJourney = false,
}: SiteHeaderProps) {
  return (
    <header
      className="
        sticky top-0 z-30
        h-14 w-full
        border-none shadow-none
        bg-canvas text-charcoal
      "
    >
      <div
        className="
          grid h-full w-full
          grid-cols-[1fr_auto_1fr]
          items-center
          px-4 sm:px-6
        "
      >

        {/* Left: active editorial section title */}
        <div className="flex min-w-0 items-center justify-start">
          {showJourney}
        </div>

        {/* Centre: homepage journey tracker */}
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
