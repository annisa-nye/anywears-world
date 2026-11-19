import ViewportSection from "@/components/layout/ViewportSection";
import FlippingCard from "@/components/business-card/FlippingCard";

export default function BusinessCard() {
  return (
    <ViewportSection
      id="business-card"
      labelledBy="business-card-heading"
    >
      <div
        className="
          flex min-h-0 flex-1
          flex-col justify-center
        "
      >
        {/* Heading and card grouped together */}
        <div className="mx-auto w-full max-w-3xl">
          <h2
            id="business-card-heading"
            className="
              mb-5 text-sm font-normal
              lowercase tracking-normal
            "
          >
            take a card.
          </h2>

          <FlippingCard />
        </div>
      </div>
    </ViewportSection>
  );
}
