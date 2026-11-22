import ViewportSection from "@/components/layout/ViewportSection";
import StickySectionTitle from "@/components/layout/StickySectionTitle";
import FlippingCard from "@/components/business-card/FlippingCard";
import ShopLinks from "@/components/business-card/ShopLinks";

export default function BusinessCard() {
  return (
    <ViewportSection
      id="contact"
      labelledBy="contact-heading"
    >
      <StickySectionTitle
        id="contact-heading"
        title="contact."
        as="h2"
      />

      <div className="flex min-h-0 flex-1 flex-col justify-center">
        <div className="mx-auto w-full max-w-3xl">
          <FlippingCard />

          {/* Shop links directly beneath the card */}
          <div className="mt-10 md:mt-8">
            <ShopLinks />
          </div>
        </div>
      </div>
    </ViewportSection>
  );
}
