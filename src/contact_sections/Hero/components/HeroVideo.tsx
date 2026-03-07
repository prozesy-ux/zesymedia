import { useEffect, useRef } from "react";

export const HeroVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div className="absolute box-border caret-transparent h-full w-full overflow-hidden inset-0">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute box-border caret-transparent h-full object-cover w-full z-[-1] inset-0"
      >
        <source
          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/674238984b5b15db637f4a63_-60bc-4584-9ad6-9caa931f8372-transcode.mp4"
          type="video/mp4"
        />
        <source
          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/674238984b5b15db637f4a63_-60bc-4584-9ad6-9caa931f8372-transcode.webm"
          type="video/webm"
        />
      </video>
    </div>
  );
};
