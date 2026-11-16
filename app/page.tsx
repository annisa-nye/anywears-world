import About from "@/components/About";
import Archive from "@/components/Archive";
import BusinessCard from "@/components/BusinessCard";
import ComingSoon from "@/components/ComingSoon";
import Everywhere from "@/components/Everywhere";
import Experience from "@/components/Experience";
import FullScreenNavigation from "@/components/FullScreenNavigation";
import Landing from "@/components/Landing";
import { logPageRenderCompleted, logPageRenderStarted } from "@/instrumentation";
import { connection } from "next/server";

export const instant = false;

export default async function Home() {
  await connection();

  const siteMode =
    process.env.SITE_MODE === "coming-soon" ? "coming-soon" : "archive";

  logPageRenderStarted(siteMode);

  // Production: two vertically scrolling sections
  if (siteMode === "coming-soon") {
    logPageRenderCompleted(siteMode);
    return (
      <main>
        <Landing enterHref="#reveal" />
        <ComingSoon />
      </main>
    );
  }

  // Development: complete website
  logPageRenderCompleted(siteMode);

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
