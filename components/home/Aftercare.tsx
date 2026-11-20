import Image from "next/image";
import ViewportSection from "@/components/layout/ViewportSection";
import FeaturedReviews from "@/components/aftercare/FeaturedReviews";
import ReviewArchive from "@/components/aftercare/ReviewArchive";
import StickySectionTitle from "@/components/layout/StickySectionTitle";

export default function Aftercare() {
  return (
    <div className="relative">
      {/* Shared heading across both Aftercare viewports */}
      <StickySectionTitle
        id="aftercare-heading"
        title="aftercare."
        as="h2"
        className="
          ml-6 mt-6 -mb-14
          md:ml-12 md:mt-10 
        "
      />
      {/* Viewport 01 — Introduction and preparation */}
      <ViewportSection
        id="aftercare"
        labelledBy="aftercare-heading"
      >
        <div className="flex h-full min-h-0 flex-col">
          <div className="shrink-0 space-y-3 pt-6 md:pt-10">
            <h3 className="text-3xl font-normal tracking-tight md:text-5xl">
              the little things.
            </h3>

            <p className="max-w-md text-sm leading-relaxed text-charcoal/65 md:text-base">
              every piece is carefully wrapped and passed along,
              ready for its next chapter.
            </p>
          </div>

          <div
            className="
              grid min-h-0 flex-1
              grid-cols-[1.1fr_0.9fr]
              gap-4 py-6
              md:gap-12 md:py-10
            "
          >
            <figure className="relative min-h-0">
              <Image
                src="/images/aftercare/packaging/aftercare_box.jpeg"
                alt="Anywears parcel decorated with flowers"
                fill
                sizes="(max-width: 767px) 50vw, 45vw"
                className="object-contain object-bottom"
              />
            </figure>

            <figure className="relative min-h-0 md:translate-y-5">
              <Image
                src="/images/aftercare/packaging/aftercare_lace.jpeg"
                alt="Hand-wrapped parcel finished with lace"
                fill
                sizes="(max-width: 767px) 40vw, 35vw"
                className="object-contain object-bottom"
              />
            </figure>
          </div>

          <p className="shrink-0 pb-1 text-right text-xs lowercase text-charcoal/45">
            from one wardrobe to another.
          </p>
        </div>
      </ViewportSection>

      {/* Viewport 02 — Real customer experiences */}
      <ViewportSection
        id="aftercare-reviews"
        labelledBy="aftercare-heading"
      >
        <div className="flex h-full min-h-0 flex-col">
          <div className="flex shrink-0 items-center justify-between gap-4">

          </div>

          <div className="flex min-h-0 flex-1 flex-col py-5 md:py-8">
            <FeaturedReviews />
          </div>

          <div className="shrink-0 space-y-5 pb-1 text-center md:space-y-7">
            <ReviewArchive />

            <p className="font-enter text-3xl lowercase text-brand-blue md:text-5xl">
              packed with love by anywears
            </p>
          </div>
        </div>
      </ViewportSection>
    </div>
  );
}
