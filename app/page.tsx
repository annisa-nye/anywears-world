import About from "@/components/About";
import Archive from "@/components/Archive";
import BusinessCard from "@/components/BusinessCard";
import Everywhere from "@/components/Everywhere";
import Experience from "@/components/Experience";
import FullScreenNavigation from "@/components/FullScreenNavigation";
import Landing from "@/components/Landing";
import ComingSoon from "@/components/ComingSoon";

export default function Home() {
    // Show only the business card when SITE_MODE is "coming-soon"
    if (process.env.SITE_MODE === "coming-soon") {
      return <ComingSoon />;
    }
    // Otherwise, show the full website
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
