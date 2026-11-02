import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

const LANDING_GIF_PATH = "/images/landing.gif";

/** Default display size — update width/height to match landing.gif when added. */
const LANDING_MEDIA_WIDTH = 480;
const LANDING_MEDIA_HEIGHT = 640;

function landingGifExists(): boolean {
  const absolutePath = path.join(
    process.cwd(),
    "public",
    "images",
    "landing.gif",
  );
  return fs.existsSync(absolutePath);
}

export default function Landing() {
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
        className="shrink-0 min-h-12 basis-[10dvh] sm:basis-[12dvh]"
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
          {/* Replace the Image above with a looping <video> here when optimising media. */}
        </figure>
      </div>

      <div className="flex shrink-0 justify-center px-6 pb-[max(1.75rem,env(safe-area-inset-bottom))] pt-4 sm:pb-10 sm:pt-6">
      <a
  href="#about"
  className="font-enter text-3xl lowercase leading-none transition-opacity hover:opacity-75 sm:text-4xl md:text-[2.75rem]"
>
  enter
</a>
      </div>
    </section>
  );
}
