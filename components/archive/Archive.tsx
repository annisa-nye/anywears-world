import ArchiveIntro from "./ArchiveIntro";

export default function Archive() {
  return (
    <section
      id="archive"
      aria-labelledby="archive-heading"
      className="bg-canvas px-6 py-28 text-charcoal md:px-12 md:py-40"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <h1
          id="archive-heading"
          className="text-sm font-normal lowercase tracking-normal"
        >
          archive.
        </h1>

        {/* Archive introduction */}
        <div className="mt-20 md:mt-28">
          <ArchiveIntro />
        </div>

        {/* Curated archive index will be added here later */}
      </div>
    </section>
  );
}
