"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { kindWords } from "@/lib/review-data";

export default function ReviewArchive() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<number | null>(null);

  function openArchive() {
    dialogRef.current?.showModal();
  }

  function closeArchive() {
    dialogRef.current?.close();
    setSelected(null);
  }

  return (
    <>
      <button
        type="button"
        onClick={openArchive}
        className="
          text-xs lowercase text-brand-blue
          underline underline-offset-4
          transition-opacity hover:opacity-60
          focus-visible:outline-2
          focus-visible:outline-brand-blue
          md:text-sm
        "
      >
        show more reviews ({kindWords.length}) ↗
      </button>

      <dialog
        ref={dialogRef}
        onClose={() => setSelected(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closeArchive();
          }
        }}
        aria-label="Anywears customer review archive"
        className="
          fixed inset-0 m-auto
          h-[92dvh] w-[94vw] max-w-5xl
          border-0 bg-canvas p-0 text-charcoal
          backdrop:bg-charcoal/70
          md:w-[88vw]
        "
      >
        <div className="flex h-full min-h-0 flex-col p-5 md:p-10">
          <div className="flex shrink-0 items-start justify-between gap-4">
            <div>
              <h2 className="text-sm lowercase">kind words.</h2>
              <p className="mt-2 text-xs text-charcoal/50">
                {kindWords.length} notes from near and far.
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                if (selected !== null) {
                  setSelected(null);
                } else {
                  closeArchive();
                }
              }}
              aria-label={
                selected !== null
                  ? "Back to reviews"
                  : "Close review archive"
              }
              className="px-2 py-1 text-xl text-charcoal"
            >
              {selected !== null ? "←" : "×"}
            </button>
          </div>

          {selected === null ? (
            <div className="mt-6 min-h-0 flex-1 overflow-y-auto">
              <div className="grid grid-cols-2 gap-3 pb-6 md:grid-cols-3 md:gap-5">
                {kindWords.map((review, index) => (
                  <button
                    key={review.src}
                    type="button"
                    onClick={() => setSelected(index)}
                    aria-label={`Enlarge review from ${review.username}`}
                    className="group text-left"
                  >
                    <div className="relative aspect-[4/3] bg-white">
                      <Image
                        src={review.src}
                        alt={`Original Depop review by @${review.username}`}
                        fill
                        sizes="(max-width: 767px) 45vw, 28vw"
                        className="object-contain"
                      />
                    </div>

                    <p className="mt-2 text-[10px] text-charcoal/50">
                      @{review.username}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="relative mt-6 min-h-0 flex-1 bg-white">
              <Image
                src={kindWords[selected].src}
                alt={`Original review from @${kindWords[selected].username}`}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
          )}
        </div>
      </dialog>
    </>
  );
}
