import Image from "next/image";

export default function SectionDivider() {
  return (
    <div
      aria-hidden="true"
      className="flex h-20 items-center justify-center bg-canvas"
    >
      <div className="flex items-center gap-4">
        <span className="h-px w-12 bg-charcoal/20" />

        <Image
          src="/images/branding/flower.png"
          alt=""
          width={24}
          height={24}
          className="h-6 w-6 object-contain"
        />

        <span className="h-px w-12 bg-charcoal/20" />
      </div>
    </div>
  );
}
