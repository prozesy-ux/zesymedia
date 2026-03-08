export const HeroVideo = () => {
  return (
    <video
      loop=""
      autoplay="true"
      muted=""
      preload="auto"
      playsinline="true"
      className="absolute box-border caret-transparent h-full object-cover object-[50%_0%] pointer-events-none align-baseline w-full z-[-1] inset-[0%]"
    >
      <source
        src="https://github.com/designmonks/webvideos/raw/main/Abstract_objects_(dark_theme).mp4"
        type="video/mp4"
        className="relative text-black text-base box-border caret-transparent block h-full leading-[normal] pointer-events-auto w-full font-times_new_roman"
      />
    </video>
  );
};
