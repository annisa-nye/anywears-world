import Image from "next/image";

export default function ArchiveIntro() {
  return (
    <figure className="mx-auto w-full max-w-4xl">
      <Image
        src="/images/archive/intro/bags-collection.jpeg"
        alt="A collection of colourful vintage leather handbags arranged together"
        width={1088}
        height={1450}
        sizes="(max-width: 768px) 100vw, 896px"
        className="block h-auto w-full"
      />

      <figcaption className="mt-4 text-[10px] uppercase tracking-[0.12em] text-charcoal/50">
        things found, worn and passed along.
      </figcaption>
    </figure>
  );
}
