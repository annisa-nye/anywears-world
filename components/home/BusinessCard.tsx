import ViewportSection from "@/components/layout/ViewportSection";
import FlippingCard from "@/components/business-card/FlippingCard";
import StickySectionTitle from "@/components/layout/StickySectionTitle";

export default function BusinessCard() {
  return (
    <ViewportSection
      id="business-card"
      labelledBy="business-card-heading"
    >
      <StickySectionTitle id="business-card-heading" title="contact." as="h2" />
      <div
        className="
          flex min-h-0 flex-1
          flex-col justify-center
        "
      >
        {/* Heading and card grouped together */}
        <div className="mx-auto w-full max-w-3xl">


          <FlippingCard />
        </div>
      </div>
    </ViewportSection>
  );
}
