import { FeatureCard } from "@/sections/AIDesignSection/components/FeatureCard";
import { ConnectionLine } from "@/sections/AIDesignSection/components/ConnectionLine";

export const AIDesignSection = () => {
  return (
    <div className="relative box-border caret-transparent overflow-clip rounded-[20px] md:rounded-[32px]">
      <div className="box-border caret-transparent">
        <div className="bg-neutral-950 box-border caret-transparent">
          <div className="box-border caret-transparent px-5 py-[60px] md:px-[94px] md:py-[100px]">
            <div className="box-border caret-transparent max-w-[1252px] w-full z-[1] mx-auto">
              <div className="items-center box-border caret-transparent gap-x-8 flex flex-col justify-start gap-y-8 md:gap-x-14 md:gap-y-14">
                <div className="items-center box-border caret-transparent gap-x-4 flex flex-col justify-start gap-y-4 text-center">
                  <div className="box-border caret-transparent flex">
                    <div className="text-green-500 box-border caret-transparent border border-green-800 px-3 py-1 rounded-3xl border-solid">
                      <div className="text-sm box-border caret-transparent leading-[21px] md:text-base md:leading-6">
                        AI-Powered Design
                      </div>
                    </div>
                  </div>
                  <h2 className="text-zinc-50 text-[28px] font-bold box-border caret-transparent leading-[33.6px] font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                    Smarter Design,{" "}
                    <em className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                      Supercharged by AI
                    </em>
                  </h2>
                  <p className="text-neutral-300 text-base box-border caret-transparent tracking-[0.36px] leading-6 max-w-2xl mx-auto md:text-lg md:leading-[27px]">
                    From wireframes to launch, we blend AI tools with strategy
                    to deliver faster, sharper, and data-led design results.
                  </p>
                </div>
                <div className="box-border caret-transparent gap-x-5 flex flex-col gap-y-5 md:gap-x-[normal] md:block md:flex-row md:gap-y-[normal]">
                  <div className="box-border caret-transparent gap-x-5 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] min-h-[auto] min-w-[auto] gap-y-5 md:gap-x-8 md:grid-cols-[1fr_1fr_1fr] md:min-h-0 md:min-w-0 md:gap-y-8">
                    <FeatureCard
                      iconVariant="left-2/4 top-full"
                      iconSrc="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-11.svg"
                      iconAlt="Icon"
                      iconClassName="h-[152px] w-[370px]"
                      decorIconSrc="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-12.svg"
                      decorIconAlt="Icon"
                      title="UX Copy"
                      titleEmphasis="That Clicks"
                      description="We use AI to create effective copies like CTAs and microcopy that speaks."
                      featureImageSrc="https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/dddd/1770572251261-0.png"
                      featureImageAlt=""
                      connectionLine={
                        <ConnectionLine
                          variant="top-left"
                          className="h-[152px] w-[370px]"
                          delay={0}
                        />
                      }
                    />
                    <FeatureCard
                      iconVariant="transform-none right-2/4 top-full md:translate-x-[13px]"
                      iconSrc="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-13.svg"
                      iconAlt="Icon"
                      iconClassName="h-[102px] w-1"
                      decorIconSrc="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-12.svg"
                      decorIconAlt="Icon"
                      title="Visuals,"
                      titleEmphasis="Instantly on Point"
                      description="We generate custom visuals using AI for faster concept directions, brand-ready"
                      featureImageSrc="https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/datalayer%20iamge/1770495386418-5.png"
                      featureImageAlt=""
                      connectionLine={
                        <ConnectionLine
                          variant="top-center"
                          className="h-[102px] w-[2px]"
                          delay={0.5}
                        />
                      }
                    />
                    <FeatureCard
                      iconVariant="absolute box-border caret-transparent hidden transform-none z-[-1] right-2/4 top-full md:block md:translate-x-[13px]"
                      iconSrc="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-14.svg"
                      iconAlt="Icon"
                      iconClassName="h-[152px] w-[370px]"
                      decorIconSrc="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-12.svg"
                      decorIconAlt="Icon"
                      title="Data-Led"
                      titleEmphasis="Design Decisions"
                      description="We predict user behavior before launch with AI-powered heatmaps that help us"
                      featureImageSrc="https://c.animaapp.com/mkiynesyxwO7zZ/assets/68c0fd7c6c69d5e8b586e825_Frame_2147226653_(2)_(1).avif"
                      featureImageAlt=""
                      connectionLine={
                        <ConnectionLine
                          variant="top-right"
                          className="h-[152px] w-[370px]"
                          delay={1}
                        />
                      }
                    />
                  </div>
                  <div className="relative items-center box-border caret-transparent hidden h-[303px] justify-center z-[5] md:flex">
                    <div className="relative box-border caret-transparent h-[140px] min-h-0 min-w-0 w-[140px] z-[1] md:min-h-[auto] md:min-w-[auto]">
                      <img
                        src="https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/ff/1770491818758-0.png"
                        alt=""
                        className="box-border caret-transparent inline-block h-full max-w-full object-contain w-full animate-[pulse_2s_ease-in-out_infinite]"
                      />
                      <div className="absolute box-border caret-transparent z-[-1] inset-[0%]">
                        <div className="absolute bg-[conic-gradient(from_180deg,rgb(166,170,255)_63.346deg,rgb(137,75,246)_139.611deg,rgb(152,74,246)_180deg,rgb(216,122,255)_238.743deg,rgb(255,240,255)_305.811deg,rgb(140,102,255)_360deg)] box-border caret-transparent mix-blend-plus-lighter rounded-[114px] inset-[0%] animate-[spin_3s_linear_infinite] blur-[37px] opacity-100"></div>
                        <div className="absolute bg-[conic-gradient(from_180deg,rgb(166,170,255)_63.346deg,rgb(137,75,246)_139.611deg,rgb(152,74,246)_180deg,rgb(216,122,255)_238.743deg,rgb(255,240,255)_305.811deg,rgb(140,102,255)_360deg)] box-border caret-transparent mix-blend-plus-lighter rounded-[114px] inset-[0%] animate-[spin_4.2s_linear_infinite_reverse] blur-[119px] opacity-100"></div>
                      </div>
                    </div>
                  </div>
                  <div className="box-border caret-transparent gap-x-5 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] min-h-[auto] min-w-[auto] gap-y-5 md:gap-x-8 md:grid-cols-[1fr_1fr_1fr] md:min-h-0 md:min-w-0 md:gap-y-8">
                    <FeatureCard
                      iconVariant="absolute box-border caret-transparent hidden transform-none z-[-1] left-2/4 bottom-full md:block md:translate-y-[26px]"
                      iconSrc="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-15.svg"
                      iconAlt="Icon"
                      iconClassName="h-[153px] w-[370px]"
                      decorIconSrc="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-12.svg"
                      decorIconAlt="Icon"
                      title="Smarter &"
                      titleEmphasis="Faster Wireframes"
                      description="We rapidly turn ideas into functional wireframes using AI tools, with less"
                      featureImageSrc="https://c.animaapp.com/mkiynesyxwO7zZ/assets/68c0feeeeec420934eb6dc33_f5af64da87fb7c474458934d16bc50fe_Frame_2147226581_(1).avif"
                      featureImageAlt=""
                      connectionLine={
                        <ConnectionLine
                          variant="bottom-left"
                          className="h-[153px] w-[370px]"
                          delay={1.5}
                        />
                      }
                    />
                    <FeatureCard
                      iconVariant="absolute box-border caret-transparent hidden transform-none z-[-1] left-2/4 bottom-full md:block md:translate-y-1.5"
                      iconSrc="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-16.svg"
                      iconAlt="Icon"
                      iconClassName="h-[98px] w-[3px]"
                      decorIconSrc="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-12.svg"
                      decorIconAlt="Icon"
                      title="Launch Quicker,"
                      titleEmphasis="Spend Less"
                      description="AI reduces revisions and guesswork and makes your website ready to launch"
                      featureImageSrc="https://c.animaapp.com/mkiynesyxwO7zZ/assets/68c0fe116b9d3d649da7d5ef_Frame_427321588_(13)_(1).avif"
                      featureImageAlt=""
                      connectionLine={
                        <ConnectionLine
                          variant="bottom-center"
                          className="h-[98px] w-[3px]"
                          delay={2}
                        />
                      }
                    />
                    <FeatureCard
                      iconVariant="absolute box-border caret-transparent hidden transform-none z-[-1] right-2/4 bottom-full md:block md:translate-x-[15px] md:translate-y-[26px]"
                      iconSrc="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-17.svg"
                      iconAlt="Icon"
                      iconClassName="h-[153px] w-[370px]"
                      decorIconSrc="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-12.svg"
                      decorIconAlt="Icon"
                      title="No Blank"
                      titleEmphasis="Canvas Struggles"
                      description="AI generates editable mockups from prompts so we can skip the slow start"
                      featureImageSrc="https://c.animaapp.com/mkiynesyxwO7zZ/assets/68c0fdca701e60e4fb26c2fa_Frame_427321588_(11)_(1).avif"
                      featureImageAlt=""
                      connectionLine={
                        <ConnectionLine
                          variant="bottom-right"
                          className="h-[153px] w-[370px]"
                          delay={2.5}
                        />
                      }
                    />
                  </div>
                </div>
                <div className="box-border caret-transparent hidden before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
