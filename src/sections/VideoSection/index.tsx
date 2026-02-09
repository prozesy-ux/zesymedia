import { useRef } from "react";
    import { motion, useScroll, useTransform } from "framer-motion";

    export const VideoSection = () => {
      const containerRef = useRef<HTMLDivElement>(null);
      const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
      });

      const scale = useTransform(scrollYProgress, [0.1, 0.5], [0.8, 1]);
      const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0.8, 1]);
      const borderRadius = useTransform(scrollYProgress, [0.4, 0.6], ["32px", "0px"]);

      return (
        <div
          ref={containerRef}
          className="relative items-center bg-fixed bg-[url('https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/680d7d95ce9dda385ee1093b_Background%20Dots.png')] box-border caret-transparent gap-x-8 flex flex-col h-auto justify-start gap-y-8 w-full bg-bottom mb-0 pb-[60px] md:gap-x-14 md:h-[300vh] md:gap-y-14 md:-mb-8 md:pb-0"
        >
          <div className="box-border caret-transparent">
            <div className="box-border caret-transparent pt-[60px] px-5 md:pt-[100px] md:px-[94px]">
              <div className="box-border caret-transparent max-w-[1252px] w-full z-[1] mx-auto">
                <div className="items-center box-border caret-transparent gap-x-4 flex flex-col justify-start gap-y-4 text-center">
                  <div className="box-border caret-transparent flex">
                    <div className="text-green-700 box-border caret-transparent border border-emerald-400 px-3 py-1 rounded-3xl border-solid">
                      <div className="text-sm box-border caret-transparent leading-[21px] md:text-base md:leading-6">
                        What Sets Us Apart
                      </div>
                    </div>
                  </div>
                  <h2 className="text-neutral-950 text-[28px] font-bold box-border caret-transparent leading-[33.6px] font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                    Why Us? Because Your{" "}
                    <em className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                      Growth Is Our Mission
                    </em>
                  </h2>
                  <p className="text-neutral-600 text-base box-border caret-transparent tracking-[0.36px] leading-6 max-w-2xl mx-auto md:text-lg md:leading-[27px]">
                    See the difference thoughtful design makes. Our works highlight
                    the dedication we bring to every client partnership.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="sticky top-0 h-screen flex items-center justify-center w-full overflow-hidden">
            <motion.div
              style={{ scale, opacity, borderRadius }}
              className="relative items-center box-border caret-transparent flex justify-center object-cover z-[5] overflow-hidden mx-auto w-[90%] h-[60vh] md:w-full md:h-full"
            >
              <video
                loop
                autoPlay
                muted
                playsInline
                preload="auto"
                className="relative items-center box-border caret-transparent flex h-full justify-center object-cover w-full z-[5] overflow-hidden mx-auto"
              >
                <source
                  src="https://raw.githubusercontent.com/designmonks/DM-Showreel/main/DM Showreel 2026.mp4"
                  type="video/mp4"
                  className="relative text-black text-base box-border caret-transparent block h-full leading-[normal] w-full font-times_new_roman"
                />
              </video>
              <div className="absolute items-center box-border caret-transparent flex justify-center pointer-events-none z-[5] inset-[0%]">
                <div className="relative items-center box-border caret-transparent flex h-[75px] justify-center w-[75px] md:h-[124px] md:w-[124px]">
                  <img
                    src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/67ae30449566892a169fa179_Video_Play]_(2).svg"
                    alt=""
                    className="absolute box-border caret-transparent max-w-full rotate-[-168.7572063737029deg] inset-[0%] md:transform-none"
                  />
                </div>
              </div>
              <div className="box-border caret-transparent hidden before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght"></div>
            </motion.div>
          </div>
        </div>
      );
    };
