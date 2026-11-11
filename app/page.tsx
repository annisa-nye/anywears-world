import About from "@/components/About";
import Archive from "@/components/Archive";
import BusinessCard from "@/components/BusinessCard";
import ComingSoon from "@/components/ComingSoon";
import Everywhere from "@/components/Everywhere";
import Experience from "@/components/Experience";
import FullScreenNavigation from "@/components/FullScreenNavigation";
import Landing from "@/components/Landing";

export default function Home() {
  // Production: two vertically scrolling sections
  if (process.env.SITE_MODE === "coming-soon") {
    return (
      <main>
        <Landing enterHref="#reveal" />
        <ComingSoon />
      </main>
    );
  }

  // Development: complete website
  return (
    <>
      <FullScreenNavigation />
      <main>
        <Landing />
        <About />
        <Archive />
        <Experience />
        <Everywhere />
        <BusinessCard />
      </main>
    </>
  );
}
