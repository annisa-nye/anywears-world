import Link from "next/link";

const shops = [
  {
    name: "depop",
    username: "@anywearshop",
    href: "https://www.depop.com/anywearshop/",
  },
  {
    name: "vinted",
    username: "@anywearshop",    // Replace with your verified Vinted profile URL.
    href: "https://www.vinted.com.au/member/3165405155",
  },
];

export default function ShopLinks() {
  return (
    <div className="mx-auto w-full max-w-md">
      {/* Editorial heading */}
      <div className="flex items-center gap-4">
        <span className="h-px flex-1 bg-charcoal/20" />

        <span className="shrink-0 text-[10px] font-normal uppercase tracking-[0.18em] text-brand-blue">
          available on.
        </span>

        <span className="h-px flex-1 bg-charcoal/20" />
      </div>

      {/* External shop links */}
      <div className="mt-5 grid grid-cols-2 gap-4 text-center">
        {shops.map((shop) => (
          shop.href ? (
            <Link
              key={shop.name}
              href={shop.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-12 flex-col items-center justify-center gap-1 focus-visible:outline-2 focus-visible:outline-brand-blue"
            >
              <span className="text-sm lowercase text-brand-blue underline underline-offset-4 transition-opacity group-hover:opacity-60">
                {shop.name} ↗
              </span>

              <span className="text-[10px] text-charcoal/45">
                {shop.username}
              </span>
            </Link>
          ) : (
            <div
              key={shop.name}
              className="flex min-h-12 flex-col items-center justify-center gap-1"
            >
              <span className="text-sm lowercase text-charcoal/45">
                {shop.name}
              </span>
              <span className="text-[10px] text-charcoal/45">
                link coming soon
              </span>
            </div>
          )
        ))}
      </div>
    </div>
  );
}
