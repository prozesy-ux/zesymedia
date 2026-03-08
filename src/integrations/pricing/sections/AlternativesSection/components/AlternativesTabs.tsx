export type AlternativesTabsProps = {
  variant: string;
  badge: string;
  headingLine1?: React.ReactNode;
  headingLine2?: React.ReactNode;
  showComparisonTable?: boolean;
  comparisonData?: {
    features: Array<{
      label: string;
    }>;
    columns: Array<{
      title: string;
      values: Array<{
        hasCheck: boolean;
        iconUrl?: string;
        iconAlt?: string;
      }>;
    }>;
    logoUrl?: string;
    logoAlt?: string;
    decorativeImageUrl?: string;
  };
  mobileComparisonData?: Array<{
    title: string;
    features: Array<{
      label: string;
      hasCheck: boolean;
      checkIconUrl?: string;
      crossIconUrl?: string;
    }>;
  }>;
  showOurCompany?: boolean;
  ourCompanyData?: {
    logoUrl: string;
    logoAlt: string;
    features: Array<{
      label: string;
      hasCheck: boolean;
      checkIconUrl?: string;
      crossIconUrl?: string;
    }>;
  };
  showCTA?: boolean;
  ctaHref?: string;
  ctaText?: string;
  ctaArrowUrl?: string;
  ctaStarUrl?: string;
  cursorImageUrl?: string;
};

export const AlternativesTabs = (props: AlternativesTabsProps) => {
  return (
    <div className={props.variant}>
      <div className="box-border caret-transparent flex items-center gap-x-4 flex-col justify-start gap-y-4 text-center">
        <div className="box-border caret-transparent flex min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
          <div className="box-border caret-transparent text-green-500 min-h-0 min-w-0 border border-green-800 px-3 py-1 rounded-3xl border-solid md:min-h-[auto] md:min-w-[auto]">
            <div className="text-sm box-border caret-transparent leading-[21px] md:text-base md:leading-6">
              {props.badge}
            </div>
          </div>
        </div>
        <div className="text-zinc-50 box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
          <h2 className="text-[28px] font-bold box-border caret-transparent leading-[33.6px] font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
            {props.headingLine1}
            {props.headingLine2 && (
              <>
                <br className="text-[28px] box-border caret-transparent leading-[33.6px] md:text-5xl md:leading-[57.6px]" />
                {props.headingLine2}
              </>
            )}
          </h2>
        </div>
      </div>
      {props.showComparisonTable && props.comparisonData && (
        <div className="box-border caret-transparent hidden mt-10 md:flex md:mt-14">
          <div className="relative box-border caret-transparent basis-[0%] grow max-w-full min-h-0 min-w-0 md:max-w-none md:min-h-[auto] md:min-w-[auto]">
            <div className="border-b-zinc-800 border-t-zinc-800 box-border caret-transparent w-full rounded-[32px] border-l border-r">
              <div className="items-center box-border caret-transparent flex flex-wrap justify-start w-full md:flex-nowrap">
                <div className="bg-[linear-gradient(140deg,rgba(95,0,224,0.25),rgba(95,0,224,0.1)_55%,rgba(95,0,224,0.1)_101%)] border-b-neutral-600 border-l-neutral-600 border-r-zinc-800 border-t-neutral-600 box-border caret-transparent flex justify-between max-w-full min-h-0 min-w-0 w-full rounded-l-[32px] border-b border-l border-t md:min-h-[auto] md:min-w-[auto]">
                  <div className="box-border caret-transparent shrink max-w-none min-h-0 min-w-0 w-full md:shrink-0 md:max-w-full md:min-h-[auto] md:min-w-[auto] md:w-3/5">
                    <div className="relative box-border caret-transparent flex basis-[0%] flex-col grow justify-start overflow-hidden rounded-xl md:rounded-3xl">
                      <div className="relative text-lg items-start box-border caret-transparent basis-auto flex-col grow-0 justify-start leading-[25.2px] min-h-0 min-w-0 text-center p-5 md:text-[22px] md:basis-[0%] md:grow md:leading-[30.8px] md:min-h-[auto] md:min-w-[auto] md:p-0">
                        <div className="text-zinc-50 text-lg items-center border-b-neutral-600 border-l-zinc-50 border-r-zinc-50 border-t-zinc-50 box-border caret-transparent flex justify-start leading-[25.2px] min-h-[72px] text-left pl-5 pr-4 border-b md:text-[22px] md:leading-[30.8px] md:min-h-[81.4px] md:pl-12">
                          <div className="text-lg box-border caret-transparent gap-x-[15px] flex justify-start leading-[25.2px] min-h-0 min-w-0 gap-y-[15px] pt-2.5 md:text-[22px] md:leading-[30.8px] md:min-h-[auto] md:min-w-[auto]">
                            <img
                              src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67f82239f6777b04cb2f85d5_Vector.svg"
                              alt=""
                              className="text-lg box-border caret-transparent leading-[25.2px] max-w-full min-h-0 min-w-0 md:text-[22px] md:leading-[30.8px] md:min-h-[auto] md:min-w-[auto]"
                            />
                            <div className="text-xl font-bold box-border caret-transparent leading-6 min-h-0 min-w-0 font-redhatdisplay_variablefont_wght md:text-2xl md:leading-[28.8px] md:min-h-[auto] md:min-w-[auto]">
                              Features
                            </div>
                          </div>
                        </div>
                        {props.comparisonData.features.map((feature, index) => (
                          <div
                            key={index}
                            className={
                              index ===
                              props.comparisonData!.features.length - 1
                                ? "text-zinc-50 text-lg items-center box-border caret-transparent flex justify-start leading-[25.2px] min-h-[72px] text-left pl-5 pr-4 md:text-[22px] md:leading-[30.8px] md:min-h-[81.4px] md:pl-12"
                                : "text-zinc-50 text-lg items-center border-b-neutral-600 border-l-zinc-50 border-r-zinc-50 border-t-zinc-50 box-border caret-transparent flex justify-start leading-[25.2px] min-h-[72px] text-left pl-5 pr-4 border-b md:text-[22px] md:leading-[30.8px] md:min-h-[81.4px] md:pl-12"
                            }
                          >
                            <div className="text-xl box-border caret-transparent tracking-[0.48px] leading-[30px] min-h-0 min-w-0 md:text-2xl md:leading-9 md:min-h-[auto] md:min-w-[auto]">
                              {feature.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {props.comparisonData.columns.map((column, colIndex) => (
                    <div
                      key={colIndex}
                      className="box-border caret-transparent shrink max-w-none min-h-0 min-w-0 w-2/5 md:shrink-0 md:max-w-full md:min-h-[auto] md:min-w-[auto]"
                    >
                      <div className="relative box-border caret-transparent flex basis-[0%] flex-col grow justify-start overflow-hidden rounded-xl md:rounded-3xl">
                        <div className="relative text-lg items-start box-border caret-transparent basis-auto flex-col grow-0 justify-start leading-[25.2px] min-h-0 min-w-0 text-center p-5 md:text-[22px] md:basis-[0%] md:grow md:leading-[30.8px] md:min-h-[auto] md:min-w-[auto] md:p-0">
                          <div className="text-zinc-50 text-lg items-center border-b-neutral-600 border-l-zinc-50 border-r-zinc-50 border-t-zinc-50 box-border caret-transparent flex justify-center leading-[25.2px] min-h-[72px] text-left pl-5 pr-4 border-b md:text-[22px] md:leading-[30.8px] md:min-h-[81.4px] md:pl-4">
                            <div className="text-xl font-bold box-border caret-transparent leading-6 min-h-0 min-w-0 font-redhatdisplay_variablefont_wght md:text-2xl md:leading-[28.8px] md:min-h-[auto] md:min-w-[auto]">
                              {column.title}
                            </div>
                          </div>
                          {column.values.map((value, valIndex) => (
                            <div
                              key={valIndex}
                              className={
                                valIndex === column.values.length - 1
                                  ? "text-zinc-50 text-lg items-center box-border caret-transparent flex justify-center leading-[25.2px] min-h-[72px] text-left pl-5 pr-4 md:text-[22px] md:leading-[30.8px] md:min-h-[81.4px] md:pl-4"
                                  : "text-zinc-50 text-lg items-center border-b-neutral-600 border-l-zinc-50 border-r-zinc-50 border-t-zinc-50 box-border caret-transparent flex justify-center leading-[25.2px] min-h-[72px] text-left pl-5 pr-4 border-b md:text-[22px] md:leading-[30.8px] md:min-h-[81.4px] md:pl-4"
                              }
                            >
                              {value.hasCheck ? (
                                <div className="text-lg box-border caret-transparent flex leading-[25.2px] min-h-0 min-w-0 w-6 md:text-[22px] md:leading-[30.8px] md:min-h-[auto] md:min-w-[auto] md:w-10">
                                  <img
                                    src={value.iconUrl}
                                    alt={value.iconAlt || "Icon"}
                                    className="text-lg box-border caret-transparent leading-[25.2px] align-baseline w-full md:text-[22px] md:leading-[30.8px]"
                                  />
                                </div>
                              ) : (
                                <img
                                  src={value.iconUrl}
                                  alt={value.iconAlt || "Icon"}
                                  className="text-red-500 text-lg box-border caret-transparent leading-[25.2px] align-baseline w-6 md:text-[22px] md:leading-[30.8px] md:w-10"
                                />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="relative bg-[linear-gradient(198deg,rgb(255,255,255),rgb(106,178,247)_33%,rgb(90,25,228)_80%,rgb(33,33,105))] box-border caret-transparent shrink max-w-none min-h-0 min-w-0 w-[30%] p-px rounded-[32px] md:shrink-0 md:max-w-full md:min-h-[auto] md:min-w-[auto]">
                  <div className="bg-neutral-950 bg-[linear-gradient(315deg,rgb(87,27,210),rgba(87,27,210,0.5)_0%,rgb(10,10,10))] box-border caret-transparent py-10 rounded-[32px]">
                    <div className="relative text-lg items-start box-border caret-transparent basis-auto flex-col grow-0 justify-start leading-[25.2px] text-center p-5 md:text-[22px] md:basis-[0%] md:grow md:leading-[30.8px] md:p-0">
                      <div className="text-zinc-50 text-lg items-center border-b-neutral-600 border-l-zinc-50 border-r-zinc-50 border-t-zinc-50 box-border caret-transparent flex justify-center leading-[25.2px] min-h-[72px] text-left pl-5 pr-4 border-b md:text-[22px] md:leading-[30.8px] md:min-h-[81.4px] md:pl-4">
                        <img
                          src={props.comparisonData.logoUrl}
                          alt={props.comparisonData.logoAlt || ""}
                          className="relative text-lg box-border caret-transparent leading-[25.2px] mt-[-15px] max-w-60 min-h-0 min-w-0 w-4/5 z-[2] md:text-[22px] md:leading-[30.8px] md:min-h-[auto] md:min-w-[auto] md:w-auto"
                        />
                      </div>
                      {props.comparisonData.features.map((_, index) => (
                        <div
                          key={index}
                          className={
                            index === props.comparisonData!.features.length - 1
                              ? "text-zinc-50 text-lg items-center box-border caret-transparent flex justify-center leading-[25.2px] min-h-[72px] text-left pl-5 pr-4 md:text-[22px] md:leading-[30.8px] md:min-h-[81.4px] md:pl-4"
                              : "text-zinc-50 text-lg items-center border-b-neutral-600 border-l-zinc-50 border-r-zinc-50 border-t-zinc-50 box-border caret-transparent flex justify-center leading-[25.2px] min-h-[72px] text-left pl-5 pr-4 border-b md:text-[22px] md:leading-[30.8px] md:min-h-[81.4px] md:pl-4"
                          }
                        >
                          <div className="text-green-500 text-lg box-border caret-transparent flex leading-[25.2px] min-h-0 min-w-0 w-6 md:text-[22px] md:leading-[30.8px] md:min-h-[auto] md:min-w-[auto] md:w-10">
                            <img
                              src="https://c.animaapp.com/mmfqa5b2QIeLaz/assets/icon-18.svg"
                              alt="Icon"
                              className="text-lg box-border caret-transparent leading-[25.2px] align-baseline w-full md:text-[22px] md:leading-[30.8px]"
                            />
                          </div>
                        </div>
                      ))}
                      {props.comparisonData.decorativeImageUrl && (
                        <img
                          src={props.comparisonData.decorativeImageUrl}
                          alt=""
                          className="absolute text-lg box-border caret-transparent leading-[25.2px] max-w-full top-[-35%] -right-1/4 md:text-[22px] md:leading-[30.8px]"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {props.mobileComparisonData && (
        <>
          <div className="text-zinc-50 box-border caret-transparent min-h-[auto] min-w-[auto] md:text-zinc-800 md:min-h-0 md:min-w-0"></div>
          {props.mobileComparisonData.map((comparison, index) => (
            <div
              key={index}
              className="text-zinc-50 box-border caret-transparent min-h-[auto] min-w-[auto] md:text-zinc-800 md:min-h-0 md:min-w-0"
            >
              <div className="text-zinc-50 bg-[linear-gradient(17deg,rgba(95,0,224,0.12),rgba(95,0,224,0.05)_56%,rgba(95,0,224,0.02))] box-border caret-transparent border border-neutral-600 rounded-[32px] border-solid md:text-zinc-800 md:bg-none md:border-zinc-800 md:rounded-none md:border-0 md:border-none">
                <div className="text-zinc-50 items-center border-b-neutral-600 border-l-zinc-50 border-r-zinc-50 border-t-zinc-50 box-border caret-transparent flex justify-center min-h-[73.92px] p-6 border-b md:text-zinc-800 md:[align-items:normal] md:border-b-zinc-800 md:border-l-zinc-800 md:border-r-zinc-800 md:border-t-zinc-800 md:block md:justify-normal md:min-h-0 md:p-0 md:border-b-0">
                  <div className="text-zinc-50 text-xl font-bold box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] font-redhatdisplay_variablefont_wght md:text-zinc-800 md:text-2xl md:leading-[28.8px] md:min-h-0 md:min-w-0">
                    {comparison.title}
                  </div>
                </div>
                {comparison.features.map((feature, fIndex) => (
                  <div
                    key={fIndex}
                    className={
                      fIndex === comparison.features.length - 1
                        ? "text-zinc-50 items-center box-border caret-transparent flex justify-between min-h-[73.92px] p-5 md:text-zinc-800 md:[align-items:normal] md:block md:justify-normal md:min-h-0 md:p-0"
                        : "text-zinc-50 items-center border-b-neutral-600 border-l-zinc-50 border-r-zinc-50 border-t-zinc-50 box-border caret-transparent flex justify-between min-h-[73.92px] p-5 border-b md:text-zinc-800 md:[align-items:normal] md:border-b-zinc-800 md:border-l-zinc-800 md:border-r-zinc-800 md:border-t-zinc-800 md:block md:justify-normal md:min-h-0 md:p-0 md:border-b-0"
                    }
                  >
                    <div className="text-zinc-50 text-xl box-border caret-transparent tracking-[0.48px] leading-[30px] min-h-[auto] min-w-[auto] md:text-zinc-800 md:text-2xl md:leading-9 md:min-h-0 md:min-w-0">
                      {feature.label}
                    </div>
                    {feature.hasCheck ? (
                      <div className="text-zinc-50 box-border caret-transparent flex min-h-[auto] min-w-[auto] w-6 md:min-h-0 md:min-w-0 md:w-10">
                        <img
                          src={feature.checkIconUrl}
                          alt="Icon"
                          className="box-border caret-transparent align-baseline w-full"
                        />
                      </div>
                    ) : (
                      <img
                        src={feature.crossIconUrl}
                        alt="Icon"
                        className="text-red-500 box-border caret-transparent block align-baseline w-6 md:inline md:w-10"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </>
      )}
      {props.showOurCompany && props.ourCompanyData && (
        <div className="text-zinc-50 bg-[linear-gradient(rgb(89,45,181)_25%,rgb(125,64,255))] box-border caret-transparent min-h-[auto] min-w-[auto] rounded-[32px] md:text-zinc-800 md:bg-none md:min-h-0 md:min-w-0 md:rounded-none">
          <div className="text-zinc-50 bg-[linear-gradient(17deg,rgba(95,0,224,0.12),rgba(95,0,224,0.05)_56%,rgba(95,0,224,0.02))] box-border caret-transparent border border-violet-600 rounded-[32px] border-solid md:text-zinc-800 md:bg-none md:border-zinc-800 md:rounded-none md:border-0 md:border-none">
            <div className="text-zinc-50 items-center border-b-violet-600 border-l-zinc-50 border-r-zinc-50 border-t-zinc-50 box-border caret-transparent flex justify-center min-h-[73.92px] p-6 border-b md:text-zinc-800 md:[align-items:normal] md:border-b-zinc-800 md:border-l-zinc-800 md:border-r-zinc-800 md:border-t-zinc-800 md:block md:justify-normal md:min-h-0 md:p-0 md:border-b-0">
              <img
                src={props.ourCompanyData.logoUrl}
                alt={props.ourCompanyData.logoAlt}
                className="relative text-zinc-50 box-border caret-transparent block max-w-[260px] min-h-[auto] min-w-[auto] w-4/5 z-[2] md:text-zinc-800 md:inline-block md:min-h-0 md:min-w-0 md:w-auto"
              />
            </div>
            {props.ourCompanyData.features.map((feature, index) => (
              <div
                key={index}
                className="text-zinc-50 items-center border-b-violet-600 border-l-zinc-50 border-r-zinc-50 border-t-zinc-50 box-border caret-transparent flex justify-between min-h-[73.92px] p-5 border-b md:text-zinc-800 md:[align-items:normal] md:border-b-zinc-800 md:border-l-zinc-800 md:border-r-zinc-800 md:border-t-zinc-800 md:block md:justify-normal md:min-h-0 md:p-0 md:border-b-0"
              >
                <div className="text-zinc-50 text-xl box-border caret-transparent tracking-[0.48px] leading-[30px] min-h-[auto] min-w-[auto] md:text-zinc-800 md:text-2xl md:leading-9 md:min-h-0 md:min-w-0">
                  {feature.label}
                </div>
                {feature.hasCheck ? (
                  <div className="text-zinc-50 box-border caret-transparent flex min-h-[auto] min-w-[auto] w-6 md:min-h-0 md:min-w-0 md:w-10">
                    <img
                      src={feature.checkIconUrl}
                      alt="Icon"
                      className="box-border caret-transparent align-baseline w-full"
                    />
                  </div>
                ) : (
                  <div className="text-zinc-50 box-border caret-transparent max-h-6 max-w-6 min-h-[auto] min-w-[auto] md:text-zinc-800 md:max-h-none md:max-w-none md:min-h-0 md:min-w-0">
                    <img
                      src={feature.crossIconUrl}
                      alt="Icon"
                      className="text-zinc-50 box-border caret-transparent inline align-baseline w-full md:text-zinc-800"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
          {props.showCTA && (
            <div className="text-zinc-50 items-center box-border caret-transparent flex justify-between min-h-[73.92px] p-5 rounded-b-[32px] md:text-zinc-800 md:[align-items:normal] md:block md:justify-normal md:min-h-0 md:p-0 md:rounded-b-none">
              <div className="text-zinc-50 box-border caret-transparent block min-h-[auto] min-w-[auto] w-full z-30 mt-0 mb-4 md:text-zinc-800 md:inline-block md:min-h-0 md:min-w-0 md:mt-[55px] md:mb-0">
                <a
                  href={props.ctaHref}
                  className="relative text-violet-600 items-center bg-violet-500 bg-[linear-gradient(rgb(89,45,181)_25%,rgb(125,64,255))] shadow-[rgba(255,255,255,0.72)_0px_1.6px_3px_0px_inset] box-border caret-transparent flex flex-col h-14 justify-center text-left w-full z-[5] overflow-hidden rounded-lg md:bg-transparent"
                >
                  <div className="absolute items-center bg-neutral-400 box-border caret-transparent flex h-full justify-center rotate-[-0.2769999037879151deg] w-full inset-[0%] md:transform-none">
                    <div className="absolute bg-[linear-gradient(90deg,rgba(255,255,255,0.79)_61%,rgb(255,255,255)_75%)] box-border caret-transparent blur-[6px] h-20 -translate-y-10 w-full left-2/4 right-[0%] top-2/4 bottom-[0%] md:transform-none"></div>
                  </div>
                  <div className="absolute bg-violet-500 bg-none box-border caret-transparent rounded-lg inset-[0%] md:bg-transparent md:bg-[linear-gradient(rgb(89,45,181)_25%,rgb(125,64,255))]"></div>
                  <div className="relative text-gray-200 box-border caret-transparent min-h-[auto] min-w-[auto] w-full md:min-h-0 md:min-w-0 md:w-auto">
                    <div className="relative items-center box-border caret-transparent gap-x-2 flex h-full justify-center gap-y-2 w-full z-[1]">
                      <div className="text-zinc-50 text-base font-bold box-border caret-transparent tracking-[0.32px] leading-[19.2px] min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
                        {props.ctaText}
                      </div>
                      <img
                        src={props.ctaArrowUrl}
                        alt=""
                        className="box-border caret-transparent h-7 max-w-7 min-h-[auto] min-w-[auto] object-contain w-full md:h-6 md:max-w-6 md:min-h-0 md:min-w-0"
                      />
                    </div>
                  </div>
                  <img
                    src={props.ctaStarUrl}
                    alt=""
                    className="absolute box-border caret-transparent max-w-full right-[0%] top-[0%]"
                  />
                </a>
              </div>
            </div>
          )}
        </div>
      )}
      {props.cursorImageUrl && (
        <img
          src={props.cursorImageUrl}
          alt=""
          className="absolute text-zinc-50 box-border caret-transparent block max-w-full z-[99] left-[0%] bottom-[1%] md:static md:text-zinc-800 md:inline-block md:z-auto md:left-auto md:bottom-auto"
        />
      )}
    </div>
  );
};
