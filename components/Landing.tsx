
import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

const LANDING_GIF_PATH = "/images/landing/landing-2.gif";

const LANDING_MEDIA_WIDTH = 480;
const LANDING_MEDIA_HEIGHT = 640;

function landingGifExists(): boolean {
  const absolutePath = path.join(
    process.cwd(),
    "public",
    "images",
    "landing",
    "landing-2.gif"
  );

  return fs.existsSync(absolutePath);
}

type LandingProps = {
  enterHref?: string;
  showIntroductionLabel?: boolean;
};

export default function Landing({
  enterHref = "#about",
  showIntroductionLabel = false,
}: LandingProps) {
  const hasLandingGif = landingGifExists();

  return (
    <section
      id="landing"
      aria-labelledby="landing-title"
      className="flex min-h-dvh flex-col bg-brand-blue text-brand-pink"
    >
      <h1 id="landing-title" className="sr-only">
        Anywears World
      </h1>

      <div
        className="min-h-12 shrink-0 basis-[10dvh] sm:basis-[12dvh]"
        aria-hidden="true"
      />
      <div className="flex min-h-0 flex-1 items-center justify-center px-6 pb-4 pt-2 sm:px-10">
        <figure className="mx-auto flex max-h-[min(52dvh,36rem)] w-full max-w-[min(92vw,28rem)] flex-col items-center justify-center">
          {hasLandingGif ? (
            <Image
              src={LANDING_GIF_PATH}
              alt="Anywears editorial moving image"
              width={LANDING_MEDIA_WIDTH}
              height={LANDING_MEDIA_HEIGHT}
              priority
              unoptimized
              className="h-auto max-h-[min(52dvh,36rem)] w-auto max-w-full object-contain"
            />
          ) : (
            <div
              className="aspect-[3/4] w-full max-w-[min(92vw,28rem)] border border-brand-pink/35 bg-brand-blue"
              role="img"
              aria-label="Placeholder for the Anywears landing animation"
            />
          )}
        </figure>
      </div>

      <div className="flex shrink-0 justify-center px-6 pb-[max(1.75rem,env(safe-area-inset-bottom))] pt-4 sm:pb-10 sm:pt-6">
        
        <a
          href={enterHref}
          aria-label="Scroll down"
          className="inline-flex h-12 w-12 items-center justify-center
            text-brand-pink transition-transform duration-300
            hover:translate-y-1
            focus-visible:outline focus-visible:outline-2
            focus-visible:outline-offset-4
            focus-visible:outline-brand-pink
            motion-reduce:transition-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m5 6 7 7 7-7" />
            <path d="m5 13 7 7 7-7" />
          </svg>
        </a>

      </div>
    </section>
  );
}
