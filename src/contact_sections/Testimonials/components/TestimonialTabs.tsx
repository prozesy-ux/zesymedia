type TestimonialTabsProps = {
      activeTab: number;
      onTabChange: (index: number) => void;
    };

    export const TestimonialTabs = ({ activeTab, onTabChange }: TestimonialTabsProps) => {
      const tabs = [
        "UI UX Design",
        "Branding",
        "Web Design",
        "Mobile App Design",
        "SaaS Design"
      ];

      return (
        <div
          role="tablist"
          className="relative box-border caret-transparent gap-x-4 flex gap-y-4 overflow-auto md:overflow-visible"
        >
          {tabs.map((tab, index) => (
            <button
              key={index}
              role="tab"
              onClick={() => onTabChange(index)}
              className={`relative text-neutral-950 box-border caret-transparent block max-w-full text-left align-top p-3 rounded-lg transition-colors ${
                activeTab === index ? "bg-zinc-200 font-semibold" : "bg-transparent hover:bg-zinc-100"
              }`}
            >
              <div className="box-border caret-transparent">{tab}</div>
            </button>
          ))}
        </div>
      );
    };
