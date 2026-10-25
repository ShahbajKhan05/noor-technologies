
"use client";

const stories = [
  {
    before: "We are",
    after: "developers",
    number: "01",
    video: "/AN1.mp4",
    color: "#0BB9A9",
  },
  {
    before: "We are",
    after: "creators",
    number: "02",
    video: "/AN2.mp4",
    color: "#FF765D",
  },
  {
    before: "We build",
    after: "digital worlds",
    number: "03",
    video: "/AN3.mp4",
    color: "#0BB9A9",
  },
  {
    before: "We create",
    after: "impact.",
    number: "04",
    video: "/noor.mp4",
    color: "#FF765D",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="overflow-hidden bg-[#FDFBFA] text-[#171113]"
    >
      <div className="mx-auto flex min-h-[75vh] max-w-[1800px] flex-col justify-center px-5 py-10 sm:px-8 sm:py-12 md:px-10 md:py-14 lg:px-[5vw]">
        <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#777777] sm:text-xs md:mb-6">
          About Noor Technologies
        </p>

        <h2 className="max-w-[1600px] font-poppins text-[clamp(2.5rem,6.5vw,7.8rem)] font-semibold leading-[0.99] tracking-[-0.055em]">
          {stories.map((story, index) => (
            <span key={story.number}>
              <span>{story.before}</span>{" "}

              <span className="relative mx-[0.025em] inline-block h-[0.48em] w-[1.3em] overflow-hidden rounded-[0.06em] align-middle sm:w-[1.45em] md:w-[1.6em]">
                <video
                  src={story.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={`Noor Technologies ${story.after}`}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <span className="absolute bottom-0 right-0.5 text-[0.13em] font-medium text-white">
                  {story.number}
                </span>
              </span>{" "}

              <span style={{ color: story.color }}>{story.after}</span>

              {index < stories.length - 1 && (
                <>
                  {" "}
                  <br className="hidden sm:block" />
                </>
              )}

              {index < stories.length - 1 ? " " : null}
            </span>
          ))}
        </h2>

        <div className="mt-6 flex flex-col gap-4 border-t border-[#E5E5E5] pt-4 sm:mt-8 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-2xl text-sm leading-6 text-[#555555] sm:text-base sm:leading-7">
            We design modern websites, develop powerful software, and create
            digital experiences that turn ambitious ideas into meaningful
            impact.
          </p>

          <a
            href="#contact"
            className="group inline-flex w-fit shrink-0 items-center gap-2 text-sm font-semibold text-[#079F98] transition-colors hover:text-[#FF765D]"
          >
            LET&apos;S BUILD SOMETHING
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
