import Image from "next/image";
import ViewportSection from "@/components/layout/ViewportSection";

export default function About() {
  return (
    <ViewportSection
      id="about"
      labelledBy="about-heading"
    >
      {/* Section heading */}
      <h2
        id="about-heading"
        className="shrink-0 text-sm font-normal lowercase tracking-normal"
      >
        about
      </h2>

      {/* Photograph + introduction */}
      <div
        className="
          grid min-h-0 flex-1
          grid-cols-1
          grid-rows-[minmax(0,1fr)_auto]
          gap-5 pt-6

          md:grid-cols-2
          md:grid-rows-1
          md:items-center
          md:gap-12 md:pt-8
        "
      >
        {/* Photograph */}
        <figure
          className="
            flex min-h-0 w-[85%]
            flex-col justify-center
            justify-self-end

            md:col-start-2 md:row-start-1
            md:h-auto md:w-full md:self-center
          "
        >
          <div className="w-full">
            <Image
              src="/images/about/abbotsford-2026.jpeg"
              alt="Pink and white flowers growing against a rugged garage wall in Abbotsford"
              width={1280}
              height={960}
              sizes="(max-width: 767px) 85vw, 50vw"
              className="
                  block h-auto w-full
                  object-contain object-right
                  md:max-h-[65dvh]
              "
            />
          </div>

          <figcaption
            className="
              mt-3 shrink-0
              text-[11px] uppercase
              tracking-[0.14em]
              text-charcoal/55
            "
          >
            abbotsford, 2026
          </figcaption>
        </figure>

        {/* Introduction */}
        <div
          className="
            max-w-md space-y-4
            pb-2

            md:col-start-1 md:row-start-1
            md:self-center md:space-y-6
            md:pb-0
          "
        >
          <p className="text-base font-normal leading-relaxed md:text-lg">
            an independent archive of things found, worn and passed along.
          </p>

          <p className="text-base font-normal leading-relaxed md:text-lg">
            a little corner of the internet for everything{" "}
            <span className="text-brand-blue lowercase leading-none">
              anywears
            </span>{" "}
            has been, and everywhere it&apos;s going.
          </p>
        </div>
      </div>
    </ViewportSection>
  );
}
