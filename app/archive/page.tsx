import type { Metadata } from "next";
import Archive from "@/components/archive/Archive";

export const metadata: Metadata = {
  title: "archive. — anywears",
  description:
    "An independent archive of curated vintage and contemporary fashion.",
};

export default function ArchivePage() {
  return (
    <main className="min-h-dvh bg-canvas text-charcoal">
      <Archive />
    </main>
  );
}
