import { useEffect, useRef } from "react";

const HERO_VIDEO_POSTER =
  "https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9%2F674238984b5b15db637f4a63_-60bc-4584-9ad6-9caa931f8372-poster-00001.jpg";

const HERO_VIDEO_MP4 =
  "https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/674238984b5b15db637f4a63_-60bc-4584-9ad6-9caa931f8372-transcode.mp4";

const HERO_VIDEO_WEBM =
  "https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/674238984b5b15db637f4a63_-60bc-4584-9ad6-9caa931f8372-transcode.webm";

export const HeroVideo = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (!videoElement) return;

    videoElement.muted = true;
    videoElement.playsInline = true;

    const startPlayback = () => {
      const playPromise = videoElement.play();

      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {
          // Keep poster visible if autoplay is blocked by browser policy.
        });
      }
    };

    if (videoElement.readyState >= 2) {
      startPlayback();
      return;
    }

    videoElement.addEventListener("canplay", startPlayback, { once: true });

    return () => {
      videoElement.removeEventListener("canplay", startPlayback);
    };
  }, []);

  return (
    <div
      className="project-bg-video w-background-video relative isolate text-white box-border caret-transparent h-full object-cover w-full overflow-hidden"
      style={{
        backgroundImage: `url(${HERO_VIDEO_POSTER})`,
        backgroundPosition: "50%",
        backgroundSize: "cover",
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={HERO_VIDEO_POSTER}
        className="absolute box-border caret-transparent h-full object-cover align-baseline w-full z-[-1] m-auto -inset-full"
        style={{
          backgroundImage: `url(${HERO_VIDEO_POSTER})`,
          backgroundPosition: "50%",
          backgroundSize: "cover",
        }}
      >
        <source src={HERO_VIDEO_MP4} type="video/mp4" />
        <source src={HERO_VIDEO_WEBM} type="video/webm" />
      </video>
      <div className="box-border caret-transparent max-w-[1252px] w-full z-[1] mx-auto">
        <div className="relative items-center box-border caret-transparent flex-col h-full justify-center text-left w-full z-[2] pb-24 px-5 md:pb-80 md:px-[94px]">
          <div className="items-center box-border caret-transparent gap-x-4 flex flex-col justify-start gap-y-4 text-center">
            <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] z-[99] pt-[27px] pb-[7px] md:py-7">
              <a
                href="https://prozesy.com/"
                className="text-violet-600 box-border caret-transparent block max-w-full min-h-[auto] min-w-[auto]"
              >
                <img
                  src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/679a08604def1d26213e6133_designmonks (1).svg"
                  alt=""
                  className="box-border caret-transparent inline-block max-w-full"
                />
              </a>
            </div>
            <div className="relative items-center bg-white/10 box-border caret-transparent gap-x-[5px] flex min-h-[auto] min-w-[auto] gap-y-[5px] z-[88] px-3 py-1 rounded-[18px] md:static md:z-auto">
              <a
                href="https://prozesy.com/"
                className="text-neutral-400 text-xs box-border caret-transparent block tracking-[0.24px] leading-[18px] max-w-full min-h-[auto] min-w-[auto] capitalize"
              >
                <div className="box-border caret-transparent normal-case">
                  Home
                </div>
              </a>
              <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
                <img
                  src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67423a8542288605dea89299_CaretRight.webp"
                  alt=""
                  className="box-border caret-transparent inline-block max-w-full"
                />
              </div>
              <a
                href="/industry"
                className="text-neutral-400 text-xs box-border caret-transparent block tracking-[0.24px] leading-[18px] max-w-full min-h-[auto] min-w-[auto] capitalize"
              >
                <div className="box-border caret-transparent normal-case">
                  Industries
                </div>
              </a>
              <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
                <img
                  src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67423a8542288605dea89299_CaretRight.webp"
                  alt=""
                  className="box-border caret-transparent inline-block max-w-full"
                />
              </div>
              <a
                href="/industry/ecrm-portals"
                className="text-xs box-border caret-transparent block tracking-[0.24px] leading-[18px] max-w-full min-h-[auto] min-w-[auto] capitalize"
              >
                <div className="box-border caret-transparent normal-case">
                  eCRM Portals
                </div>
              </a>
            </div>
            <div className="text-zinc-50 box-border caret-transparent min-h-[auto] min-w-[auto]">
              <div className="box-border caret-transparent before:accent-auto before:caret-transparent before:text-zinc-50 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght after:accent-auto after:caret-transparent after:clear-both after:text-zinc-50 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght">
                <h1 className="text-[32px] font-bold box-border caret-transparent leading-[38.4px] font-redhatdisplay_variablefont_wght md:text-[56px] md:leading-[67.2px]">
                  Innovative eCRM Portal Design
                </h1>
                <h1 className="text-[32px] font-bold box-border caret-transparent leading-[38.4px] font-redhatdisplay_variablefont_wght md:text-[56px] md:leading-[67.2px]">
                  <em className="text-[32px] italic box-border caret-transparent leading-[38.4px] capitalize font-playfairdisplay_variablefont_wght md:text-[56px] md:leading-[67.2px]">
                    for Customer Retention
                  </em>
                </h1>
                <p className="text-base box-border caret-transparent tracking-[0.36px] leading-6">
                  ‍
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
