import ViewportSection from "@/components/layout/ViewportSection";
import PackagingGallery from "@/components/aftercare/PackagingGallery";
import ReviewGallery from "@/components/aftercare/ReviewGallery";
import { kindWords } from "@/lib/review-data";

export default function Aftercare() {
  return (
    <>
      {/* First viewport — Packaging */}
      <ViewportSection
        id="aftercare"
        labelledBy="aftercare-heading"
      >
        <div className="flex h-full min-h-0 w-full flex-col">
          <h2
            id="aftercare-heading"
            className="shrink-0 text-sm font-normal lowercase"
          >
            aftercare.
          </h2>

          <PackagingGallery />
        </div>
      </ViewportSection>

      {/* Second viewport — Reviews */}
      <ViewportSection
        id="aftercare-reviews"
        labelledBy="kind-words-heading"
      >
        <div className="flex h-full min-h-0 w-full flex-col">
          <h2
            id="kind-words-heading"
            className="mb-6 shrink-0 text-sm font-normal lowercase"
          >
            kind words.
          </h2>

          <div className="flex min-h-0 flex-1 flex-col">
            <ReviewGallery
              reviews={kindWords}
              previewCount={6}
            />
          </div>
        </div>
      </ViewportSection>
    </>
  );
}
