import FlippingCard from "./business-card/FlippingCard";

export default function ComingSoon() {
  return (
    <main className="flex min-h-dvh flex-col bg-canvas px-6 py-8 text-charcoal sm:px-10">
      <header className="flex items-center justify-between text-xs">
        <span>anywears.world</span>
        <span>an independent archive</span>
      </header>

      <div className="flex flex-1 items-center justify-center py-20">
        <FlippingCard />
      </div>

      <footer className="flex items-center justify-between gap-4 text-xs text-charcoal/60">
        <span>for anyone, anywhere.</span>
        <span>more to come.</span>
      </footer>
    </main>
  );
}
