
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-canvas px-6 py-28 text-charcoal md:px-12 md:py-40"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <h2
          id="about-heading"
          className="text-sm font-normal lowercase tracking-normal"
        >
          about
        </h2>

        {/* Photograph */}
        <figure className="ml-auto mt-20 w-[85%] md:mt-28 md:w-[68%]">
          <Image
            src="/images/about/cherry-blossom-tree.jpg"
            alt="Cherry blossom branches against a pale blue sky"
            width={1496}
            height={1024}
            sizes="(max-width: 768px) 85vw, 68vw"
            className="block h-auto w-full"
          />
        </figure>

        {/* Introduction */}
        <div className="mt-20 max-w-md space-y-6 md:mt-28">
          <p className="text-base font-normal leading-relaxed md:text-lg">
            an independent archive of things found, worn and passed along.
          </p>

          <p className="text-base font-normal leading-relaxed md:text-lg">
            a little corner of the internet for everything{" "}
            <span className="font-enter text-[1.6em] lowercase leading-none">
            anywears
            </span>{" "}
            has been, and everywhere it&apos;s going.
          </p>
        </div>
      </div>
    </section>
  );
}
