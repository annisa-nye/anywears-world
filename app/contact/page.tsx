import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "contact. — anywears",
  description: "Get in touch with Anywears.",
};

export default function ContactPage() {
  return (
    <main className="min-h-dvh bg-canvas px-6 py-28 text-charcoal md:px-12 md:py-40">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-sm font-normal lowercase">
          contact.
        </h1>

        <div className="flex min-h-[55dvh] flex-col items-center justify-center">
          <p className="text-center text-sm text-charcoal/60">
            a little something is in the works.
          </p>
        </div>
      </div>
    </main>
  );
}
