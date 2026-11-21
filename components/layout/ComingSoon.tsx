import Image from "next/image";
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
    <main className="flex min-h-svh flex-col bg-brand-blue px-6 py-8 text-white md:px-12 md:py-12">
      {/* Top navigation */}
      <div className="flex shrink-0 items-center justify-between">
        <Link
          href={backHref}
          className="text-xs lowercase transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-brand-pink"
        >
          ← back to{" "}
          <span className="text-brand-pink">anywears.</span>
        </Link>

        <span className="text-[10px] uppercase tracking-[0.12em] text-white/50">
          {section}
        </span>
      </div>

      {/* Main content */}
      <div className="flex flex-1 flex-col items-center justify-center py-12 text-center">
        <div className="flex w-full max-w-xl flex-col items-center">
          {/* Heartbeat GIF at full opacity */}
          <Image
            src="/images/landing/landing-3.gif"
            alt="Animated Anywears heartbeat"
            width={560}
            height={560}
            preload
            unoptimized
            className="h-auto max-h-[45svh] w-full object-contain"
          />
        </div>

        {/* Editorial text underneath */}
        <div className="mt-4 flex flex-col items-center gap-4 md:mt-16">
          <h1 className="max-w-2xl text-3xl font-normal tracking-tight md:text-5xl">
            {title}
          </h1>

          <p className="max-w-sm text-sm leading-relaxed text-white/70 md:text-base">
            {description}
          </p>
          
        </div>
      </div>

      {/* Footer */}
      <div className="flex shrink-0 items-center justify-between text-[10px] uppercase tracking-[0.12em] text-white/50">
        <span>an ongoing collection</span>
        <span>anywears world</span>
      </div>
    </main>
  );
}
