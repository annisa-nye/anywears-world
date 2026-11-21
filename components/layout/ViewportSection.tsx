import type { ReactNode } from "react";

type ViewportSectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  labelledBy?: string;
};

export default function ViewportSection({
  id,
  children,
  className = "",
  labelledBy,
}: ViewportSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`
        relative
        flex h-svh
        min-h-0 flex-col
        scroll-mt-0
        overflow-visible
        bg-canvas text-charcoal
        ${className}
      `}
    >
      <div
        className="
          mx-auto flex h-full min-h-0
          w-full max-w-6xl flex-col
          px-6 py-6
          md:px-12 md:py-10
        "
      >
        {children}
      </div>
    </section>
  );
}
