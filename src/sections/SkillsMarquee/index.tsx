export const SkillsMarquee = () => {
  const skills = [
    "Framer",
    "Branding",
    "Dashboard",
    "Logos",
    "Webflow",
    "Slide Decks",
    "Mobile Apps",
    "Figma",
    "Social Media",
  ];

  const SkillGroup = () => (
    <div className="items-center box-border caret-transparent gap-x-2 flex shrink-0 gap-y-2 md:gap-x-6 md:gap-y-6">
      {skills.map((skill, index) => (
        <div key={index} className="contents">
          <div className="box-border caret-transparent shrink-0 p-2">
            <div className="text-neutral-950 text-lg box-border caret-transparent tracking-[0.36px] leading-[27px] md:text-2xl md:tracking-[0.48px] md:leading-9">
              {skill}
            </div>
          </div>
          <div className="bg-neutral-950 box-border caret-transparent shrink-0 h-2 w-2 rounded-[100%]"></div>
        </div>
      ))}
    </div>
  );

  const images = [
    "https://c.animaapp.com/mkiynesyxwO7zZ/assets/695df32fc735e0d6f8dd8825_6887351745dc217b10a7ee3b_Triply_iPad.png",
    "https://c.animaapp.com/mkiynesyxwO7zZ/assets/695e534b0cf0e0a6638bc8a2_Plate_iPhone.avif",
    "https://c.animaapp.com/mkiynesyxwO7zZ/assets/695df32f5eccd94db95f7f25_688732d76a3b290a1fe970b0_TravelGo_iPad.png",
    "https://c.animaapp.com/mkiynesyxwO7zZ/assets/695e5375eba138b6b35bf0dd_MobileWallet2_iPhone.avif",
    "https://c.animaapp.com/mkiynesyxwO7zZ/assets/695df32eaa7f7ef370cd0eee_688732c3537d42e0f0d2a559_NextSpace_iPad.png",
    "https://c.animaapp.com/mkiynesyxwO7zZ/assets/695e538c2d180a56d8378251_VPN_iPhone.avif",
    "https://c.animaapp.com/mkiynesyxwO7zZ/assets/695df32df7bde338734c613e_688735b5ad2c5c0d13c3ac39_Nekchat_iPad.png",
    "https://c.animaapp.com/mkiynesyxwO7zZ/assets/695e53a412004b5e767aa0af_MobileWallet_iPhone.avif",
    "https://c.animaapp.com/mkiynesyxwO7zZ/assets/695df32df9b9ef636745adee_688732e9c4a168e60b8ef39f_MonksWizard2_iPad.png",
    "https://c.animaapp.com/mkiynesyxwO7zZ/assets/695e53b66390bca6b8400e2d_TravelBooking_iPhone.avif",
    "https://c.animaapp.com/mkiynesyxwO7zZ/assets/695df32c5cc099bbe637cc18_688733cb740a71f629ac44a5_MonksWizard_iPad.png",
    "https://c.animaapp.com/mkiynesyxwO7zZ/assets/695e53eee34f69fc21a0d728_Artstation_iPhone.avif",
    "https://c.animaapp.com/mkiynesyxwO7zZ/assets/695df32cf46f597d97b71f91_6887299a0ae551d0a4fc4fb3_MonkStitch_iPad.png",
    "https://c.animaapp.com/mkiynesyxwO7zZ/assets/695e5410f2cd5f6e09452a63_Cosmetics_iPhone.avif",
    "https://c.animaapp.com/mkiynesyxwO7zZ/assets/695df32b2dbb746fe24aac8b_68872cec05b1f2db805370d2_MonksMart_iPad.png",
    "https://c.animaapp.com/mkiynesyxwO7zZ/assets/695e5430c027699fc4062ad2_SmartAppliance_iPhone.avif",
    "https://c.animaapp.com/mkiynesyxwO7zZ/assets/695df32b262d38e1d211d7e3_68873420b18ab1756ce10e5a_MonksMeet_iPad.png",
    "https://c.animaapp.com/mkiynesyxwO7zZ/assets/695e54481a75cebf5286572c_SmartHome_iPhone.avif",
    "https://c.animaapp.com/mkiynesyxwO7zZ/assets/695df32a262d38e1d211d7bb_688729affdc70da3d74399f9_MonksHR2_iPad.png",
    "https://c.animaapp.com/mkiynesyxwO7zZ/assets/695e5493b6bd8ca678dc391a_FileManager_iPhone.avif",
    "https://c.animaapp.com/mkiynesyxwO7zZ/assets/695df326149a387cc25c7fc2_688729c8a76e2babd631ea33_InnovexAI_iPad.png",
    "https://c.animaapp.com/mkiynesyxwO7zZ/assets/695e54c2aefe36c575625fac_Ebike_iPhone.avif",
  ];

  const ImageGroup = () => (
    <>
      {images.map((src, index) => (
        <div
          key={index}
          role="group"
          aria-label={`${index + 1} of ${images.length}`}
          className="relative box-border caret-transparent gap-x-2.5 flex shrink-0 h-[140px] list-none gap-y-2.5 md:gap-x-8 md:h-[400px] md:gap-y-8"
        >
          <img
            alt=""
            src={src}
            className="box-border caret-transparent h-full max-w-full align-bottom"
          />
        </div>
      ))}
    </>
  );

  return (
    <section className="bg-purple-100 box-border caret-transparent overflow-hidden">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent px-5 py-[60px] md:px-[94px] md:py-[100px]">
          <div className="box-border caret-transparent gap-x-8 flex flex-col gap-y-8 md:gap-x-14 md:gap-y-14">
            
            {/* Top Text Marquee */}
            <div className="relative box-border caret-transparent overflow-hidden">
              <div className="box-border caret-transparent gap-x-6 flex gap-y-6 animate-marquee w-max">
                <SkillGroup />
                <SkillGroup />
              </div>
            </div>

            {/* Image Marquee */}
            <div className="items-center box-border caret-transparent flex flex-col justify-start overflow-hidden">
              <div className="items-center box-border caret-transparent flex flex-wrap justify-start w-full">
                <div
                  role="region"
                  className="relative box-border caret-transparent w-full overflow-hidden"
                >
                  <div className="relative box-border caret-transparent z-0">
                    <div
                      role="presentation"
                      className="box-border caret-transparent gap-x-2.5 flex h-full gap-y-2.5 animate-marquee w-max md:gap-x-8 md:gap-y-8"
                    >
                      <ImageGroup />
                      <ImageGroup />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Text Marquee */}
            <div className="relative box-border caret-transparent overflow-hidden">
              <div className="box-border caret-transparent gap-x-6 flex gap-y-6 animate-marquee w-max">
                <SkillGroup />
                <SkillGroup />
              </div>
            </div>

            <div className="box-border caret-transparent hidden before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
