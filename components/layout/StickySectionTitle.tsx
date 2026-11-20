type StickySectionTitleProps = {
    id: string;
    title: string;
    as?: "h2" | "h3";
    className?: string;
  };
  
  export default function StickySectionTitle({
    id,
    title,
    as: Tag = "h2",
    className = "",
  }: StickySectionTitleProps) {
    return (
      <Tag
        id={id}
        data-sticky-section-title
        className={`
          pointer-events-none
          sticky top-0 z-40
          flex h-14 shrink-0 items-center
          text-sm font-normal lowercase
          tracking-normal text-charcoal
          data-[journey-hidden=true]:invisible
          ${className}
        `}
      >
        {title}
      </Tag>
    );
  }
  