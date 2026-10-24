"use client";

import Image from "next/image";

const stories = [
  {
    before: "Houses",
    after: "that sit",
    number: "1",
    image: "/Noor Technologies Signature.png",
    imageAlt: "Contemporary house surrounded by greenery",
    shape: "wide",
  },
  {
    before: "lightly on",
    after: "the land, and",
    number: "2",
    image: "/Noor Technologies Signature.png",
    imageAlt: "Green landscape viewed from above",
    shape: "square",
  },
  {
    before: "the",
    after: "people who live",
    number: "3",
    image: "/Noor Technologies Signature.png",
    imageAlt: "Portrait representing people and creativity",
    shape: "portrait",
  },
  {
    before: "slowly",
    after: "inside them.",
    number: "4",
    image: "/Noor Technologies Signature.png",
    imageAlt: "Modern architectural building in warm light",
    shape: "wide",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="overflow-hidden bg-[#FDFBFA] text-[#171113]"
    >
      <div className="mx-auto flex min-h-[75vh] max-w-[1800px] flex-col justify-center px-5 py-20 sm:px-8 sm:py-24 md:min-h-[85vh] md:px-10 md:py-28 lg:px-[5vw] lg:py-32">
        <p className="mb-8 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#777777] sm:mb-10 sm:text-xs md:mb-12">
          About Noor Technologies
        </p>

        <h1 className="max-w-[1600px] font-serif text-[clamp(2.55rem,7.15vw,8.4rem)] font-normal leading-[1.04] tracking-[-0.055em]">
          {stories.map((story, index) => (
            <span key={story.number} className="contents">
              <span className="whitespace-normal">{story.before}</span>{" "}

              <span className="relative mx-[0.025em] inline-block align-[0.02em]">
                <span
                  className={`relative inline-block h-[0.65em] overflow-visible align-middle ${
                    story.shape === "wide"
                      ? "w-[1.55em] rounded-full"
                      : story.shape === "square"
                        ? "w-[0.68em] rounded-[0.22em]"
                        : "w-[0.48em] rounded-t-full rounded-b-[0.12em]"
                  }`}
                >
                  <Image
                    src={story.image}
                    alt={story.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100px, (max-width: 1024px) 180px, 280px"
                    className="object-cover"
                  />
                </span>

                <sup className="absolute -right-[0.8em] -top-[0.5em] font-sans text-[0.11em] tracking-normal text-[#777777]">
                  {story.number}
                </sup>
              </span>{" "}

              <span className="whitespace-normal">{story.after}</span>

              {index < stories.length - 1 ? (
                <>
                  {" "}
                  <br className="hidden sm:block" />
                </>
              ) : null}
              {index < stories.length - 1 ? " " : null}
            </span>
          ))}
        </h1>

        <div className="mt-12 flex flex-col gap-5 border-t border-[#E5E5E5] pt-6 sm:mt-16 sm:flex-row sm:items-end sm:justify-between md:mt-20">
          <p className="max-w-xl text-sm leading-7 text-[#555555] sm:text-base">
            We build thoughtful digital experiences, modern websites, and
            practical software — designed around people, shaped by purpose,
            and made to move businesses forward.
          </p>

          <a
            href="#contact"
            className="group inline-flex w-fit shrink-0 items-center gap-3 text-sm font-medium text-[#067F7C] transition-colors hover:text-[#FF765D]"
          >
            Let&apos;s build something meaningful
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-300 group-hover:translate-x-1"
            >
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}