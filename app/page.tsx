import About from "@/components/home/About";
import Aftercare from "@/components/home/Aftercare";
import ArchivePreview from "@/components/home/ArchivePreview";
import BusinessCard from "@/components/home/BusinessCard";
import Landing from "@/components/home/Landing";

import FullScreenNavigation from "@/components/layout/FullScreenNavigation";

export default function Home() {
  return (
    <>
      <FullScreenNavigation />

      <main>
        {/* Prologue */}
        <Landing />

        {/* 01 — The beginning */}
        <About />

        {/* 02 — The discovery */}
        <ArchivePreview />

        {/* 03 — The experience */}
        <Aftercare />

        {/* 04 — The invitation */}
        <BusinessCard />
      </main>
    </>
  );
}
