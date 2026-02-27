export const VideoGrid = () => {
  return (
    <div className="box-border caret-transparent gap-x-[22px] grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-[22px] mt-8 md:gap-x-4 md:grid-cols-[1fr_1fr_1fr_1fr] md:gap-y-4">
      <div className="box-border caret-transparent h-[386px] overflow-hidden rounded-2xl md:h-auto">
        <video
          loop
          autoPlay
          muted
          playsInline
          preload="auto"
          className="aspect-[2_/_3] box-border caret-transparent inline-block h-full object-cover w-full"
        >
          <source
            src="https://github.com/designmonks/uxta/raw/main/Shorts 1.mp4"
            type="video/mp4"
            className="relative text-black text-base box-border caret-transparent block h-full leading-[normal] w-full font-times_new_roman"
          />
        </video>
      </div>
      <div className="box-border caret-transparent h-[386px] overflow-hidden rounded-2xl md:h-auto">
        <video
          loop
          autoPlay
          muted
          playsInline
          preload="auto"
          className="aspect-[2_/_3] box-border caret-transparent inline-block h-full object-cover w-full"
        >
          <source
            src="https://github.com/designmonks/uxta/raw/main/Shorts 2.mp4"
            type="video/mp4"
            className="relative text-black text-base box-border caret-transparent block h-full leading-[normal] w-full font-times_new_roman"
          />
        </video>
      </div>
      <div className="box-border caret-transparent h-[386px] overflow-hidden rounded-2xl md:h-auto">
        <video
          loop
          autoPlay
          muted
          playsInline
          preload="auto"
          className="aspect-[2_/_3] box-border caret-transparent inline-block h-full object-cover w-full"
        >
          <source
            src="https://github.com/designmonks/uxta/raw/main/Shorts 3.mp4"
            type="video/mp4"
            className="relative text-black text-base box-border caret-transparent block h-full leading-[normal] w-full font-times_new_roman"
          />
        </video>
      </div>
      <div className="box-border caret-transparent h-[386px] overflow-hidden rounded-2xl md:h-auto">
        <video
          loop
          autoPlay
          muted
          playsInline
          preload="auto"
          className="aspect-[2_/_3] box-border caret-transparent inline-block h-full object-cover w-full"
        >
          <source
            src="https://github.com/designmonks/uxta/raw/main/Shorts 4.mp4"
            type="video/mp4"
            className="relative text-black text-base box-border caret-transparent block h-full leading-[normal] w-full font-times_new_roman"
          />
        </video>
      </div>
    </div>
  );
};
