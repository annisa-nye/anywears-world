import SiteHeader from "@/components/layout/SiteHeader";
import Landing from "@/components/home/Landing";
import About from "@/components/home/About";
import ArchivePreview from "@/components/home/ArchivePreview";
import BusinessCard from "@/components/home/BusinessCard";
import SectionDivider from "@/components/layout/SectionDivider";

export default function Home() {
  return (
    <>
      <SiteHeader showJourney />

      <main>
        <Landing />
        <About />
        <SectionDivider page="II" />
        <ArchivePreview />
        <SectionDivider page="III"/>
        <BusinessCard />
        <SectionDivider page="IV"/>
         {/* Extra scroll space for the final sticky heading */}
         <div
          aria-hidden="true"
          className="h-24 bg-canvas md:h-32"
        />
      </main>
    </>
  );
}
