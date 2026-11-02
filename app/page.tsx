import About from "@/components/About";
import Archive from "@/components/Archive";
import BusinessCard from "@/components/BusinessCard";
import Everywhere from "@/components/Everywhere";
import Experience from "@/components/Experience";
import FullScreenNavigation from "@/components/FullScreenNavigation";
import Landing from "@/components/Landing";

export default function Home() {
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
