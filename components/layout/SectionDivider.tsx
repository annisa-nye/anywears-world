export default function SectionDivider() {
    return (
      <div
        aria-hidden="true"
        className="flex h-20 items-center justify-center bg-canvas"
      >
        <div className="flex items-center gap-3">
          <span className="h-px w-12 bg-charcoal/20" />
  
          <span className="text-xl leading-none text-brand-blue">
            ✿
          </span>
  
          <span className="h-px w-12 bg-charcoal/20" />
        </div>
      </div>
    );
  }