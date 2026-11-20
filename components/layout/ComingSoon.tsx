import Link from "next/link";

type ComingSoonProps = {
  section: string;
  title: string;
  description: string;
  backHref: string;
};

export default function ComingSoon({
  section,
  title,
  description,
  backHref,
}: ComingSoonProps) {
  return (
    <main className="flex min-h-[calc(100dvh-3.5rem)] flex-col bg-canvas px-6 py-8 text-charcoal md:px-12 md:py-12">
      <div className="flex items-center justify-between">
        <Link
          href={backHref}
          className="text-xs lowercase transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-brand-blue"
        >
          ← back to anywears.
        </Link>

        <span className="text-[10px] uppercase tracking-[0.12em] text-charcoal/40">
          {section}
        </span>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center gap-5 text-center">
        <p className="text-xs lowercase text-charcoal/45">
          an ongoing collection
        </p>

        <h1 className="max-w-2xl text-4xl font-normal tracking-tight md:text-7xl">
          {title}
        </h1>

        <p className="max-w-sm text-sm leading-relaxed text-charcoal/60 md:text-base">
          {description}
        </p>

        <p className="font-enter text-3xl lowercase text-brand-blue md:text-5xl">
          coming soon.
        </p>
      </div>

      <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.12em] text-charcoal/40">
        <span>collected over time</span>
        <span>anywears world</span>
      </div>
    </main>
  );
}
