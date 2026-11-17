import Link from "next/link";
import Archive from "@/components/archive/Archive";

export default function ArchivePage() {
  return (
    <main className="min-h-dvh bg-canvas text-charcoal">

      {/* Back navigation */}
      <div className="px-6 pt-8 md:px-12 md:pt-10">
        <Link
          href="/#archive"
          className="
            inline-flex items-center gap-2
            text-sm font-normal
            transition-opacity hover:opacity-50
            focus-visible:outline
            focus-visible:outline-2
            focus-visible:outline-offset-4
            focus-visible:outline-brand-blue
          "
        >
          <span aria-hidden="true">←</span>
          <span>back to anywears</span>
        </Link>
      </div>

      {/* Full archive */}
      <Archive />

    </main>
  );
}
