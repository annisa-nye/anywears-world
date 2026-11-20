import Image from "next/image";
import { featuredReviews } from "@/lib/review-data";

export default function FeaturedReviews() {
  return (
    <div className="grid min-h-0 flex-1 grid-cols-2 gap-4 md:gap-12">
      {featuredReviews.map((item, index) => (
        <figure
          key={item.id}
          className={`
            flex min-h-0 flex-col gap-2
            md:gap-4
            ${index === 1 ? "md:pt-8" : ""}
          `}
        >
          <div className="relative min-h-0 flex-1">
            <Image
              src={item.image}
              alt={item.item}
              fill
              sizes="(max-width: 767px) 45vw, 42vw"
              className="object-contain object-bottom"
            />
          </div>

          <figcaption className="shrink-0 space-y-2 md:space-y-3">
            <p className="text-[10px] uppercase tracking-[0.1em] text-charcoal/60 md:text-xs">
              {item.item}
            </p>

            <blockquote className="text-xs leading-relaxed text-charcoal md:text-base">
              &ldquo;{item.review}&rdquo;
            </blockquote>

            <p className="text-[10px] text-brand-blue md:text-xs">
              @{item.username}
            </p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
