import { ReactNode } from "react";

const HERO_VIDEO_POSTER =
  "https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9%2F674238984b5b15db637f4a63_-60bc-4584-9ad6-9caa931f8372-poster-00001.jpg";

type HeroVideoProps = {
  children: ReactNode;
};

export const HeroVideo = ({ children }: HeroVideoProps) => {
  return (
    <div
      className="section-about-bg-video"
      style={{
        backgroundImage: `url('${HERO_VIDEO_POSTER}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {children}
    </div>
  );
};
