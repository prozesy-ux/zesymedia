import { Breadcrumb } from "@/aboutdd_sections/Hero/components/Breadcrumb";
import { ImageGallery } from "@/aboutdd_sections/Hero/components/ImageGallery";

export const Hero = () => {
  return (
    <section className="relative bg-[linear-gradient(rgba(10,10,10,0.9),rgba(10,10,10,0.9))] box-border caret-transparent w-full overflow-hidden rounded-b-2xl md:rounded-b-[32px]">
      <div className="relative text-white box-border caret-transparent h-full object-cover w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute bg-[url('https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9%2F674238984b5b15db637f4a63_-60bc-4584-9ad6-9caa931f8372-poster-00001.jpg')] bg-cover box-border caret-transparent h-full object-cover w-full z-[-100] bg-center m-auto -inset-full"
        >
          <source
            src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/674238984b5b15db637f4a63_-60bc-4584-9ad6-9caa931f8372-transcode.mp4"
            className="text-black text-base box-border caret-transparent leading-[normal] font-times_new_roman"
          />
          <source
            src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/674238984b5b15db637f4a63_-60bc-4584-9ad6-9caa931f8372-transcode.webm"
            className="text-black text-base box-border caret-transparent leading-[normal] font-times_new_roman"
          />
        </video>
        <div className="relative items-center box-border caret-transparent flex-col h-full justify-center text-left w-full z-[2] px-[15px] md:px-0">
          <div className="relative items-center box-border caret-transparent flex flex-col text-center z-[1] px-3 md:px-0">
            <div className="box-border caret-transparent mt-7 mb-5 md:mb-14">
              <a
                href="https://prozesy.com/"
                className="text-violet-600 box-border caret-transparent inline-block max-w-full"
              >
                <img
                  src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/679a08604def1d26213e6133_designmonks (1).svg"
                  alt=""
                  className="box-border caret-transparent inline-block max-w-full"
                />
              </a>
            </div>
            <Breadcrumb />
            <div className="box-border caret-transparent max-w-[800px] w-full mt-4 mx-auto">
              <h1 className="text-zinc-50 text-[32px] font-bold box-border caret-transparent leading-[38.4px] capitalize font-redhatdisplay_variablefont_wght md:text-[56px] md:leading-[67.2px]">
                Behind the Scene: Team{" "}
                  <span className="text-white text-[32px] italic box-border caret-transparent leading-[38.4px] font-playfairdisplay_variablefont_wght md:text-[56px] md:leading-[67.2px]">
                  Prozesy Media
                </span>
              </h1>
            </div>
          </div>
          <ImageGallery />
        </div>
      </div>
      <div className="absolute box-border caret-transparent h-[100px] max-w-20 w-full z-[4] right-[0%] top-[0%] md:h-auto md:max-w-none md:w-auto">
        <img
          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67424426f5b29ed4026778df_Cube.avif"
          alt=""
          className="box-border caret-transparent inline-block h-full max-w-full w-full"
        />
      </div>
      <div className="absolute box-border caret-transparent h-[200px] max-w-[260px] right-[-10%] top-[-2%] w-full z-[2] md:h-auto md:max-w-none md:right-[-6%] md:top-[-3%] md:w-auto">
        <img
          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6798a3cca97b5f56d4a2f0ca_Ellipse 36.svg"
          alt=""
          className="box-border caret-transparent inline-block h-full max-w-full w-full"
        />
      </div>
      <div className="absolute box-border caret-transparent bottom-[0%] inset-x-[0%]">
        <img
          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/676dccf58b986e6bae2c54a4_Shade.avif"
          alt=""
          className="box-border caret-transparent inline-block max-w-full"
        />
      </div>
    </section>
  );
};
