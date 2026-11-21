type SectionDividerProps = {
  page: string;
};

export default function SectionDivider({
  page,
}: SectionDividerProps) {
  return (
    <div
      aria-hidden="true"
      className="flex h-20 items-center justify-center bg-canvas"
    >
      <div className="flex w-full max-w-[180px] items-center gap-4">
        <span className="h-px flex-1 bg-charcoal/25" />

        <span
          className="
            shrink-0 text-[10px] font-normal
            uppercase tracking-[0.18em] text-brand-blue
          "
        >
          P. {page}
        </span>

        <span className="h-px flex-1 bg-charcoal/25" />
      </div>
    </div>
  );
}
