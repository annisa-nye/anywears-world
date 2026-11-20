import Landing from "@/components/home/Landing";
import About from "@/components/home/About";
import ArchivePreview from "@/components/home/ArchivePreview";
import Aftercare from "@/components/home/Aftercare";
import BusinessCard from "@/components/home/BusinessCard";
import SiteHeader from "@/components/layout/SiteHeader";
import EditorialInterlude from "@/components/layout/EditorialInterlude";

export default function Home() {
  return (
    <main>
      {/* Prologue */}
      <Landing />

      {/* Sticky editorial header */}
      <SiteHeader showJourney />

      {/* 01 — The beginning */}
      <About />
      
      <EditorialInterlude
        src="/images/archive/preview/01-leather-collection.jpeg"
        alt="A colourful collection of vintage and archive bags"
        variant="full"
      />

      {/* 02 — The discovery */}
      <ArchivePreview />

      {/* 03 — The experience */}
      <Aftercare />

      {/* 04 — The invitation */}
      <BusinessCard />
    </main>
  );
}
