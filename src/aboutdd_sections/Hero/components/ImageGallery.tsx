import { useEffect, useRef } from "react";

export const ImageGallery = () => {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      if (row1Ref.current) {
        row1Ref.current.style.transform = `translateX(${-173.915 - scrollY * 0.3}px)`;
      }
      
      if (row2Ref.current) {
        row2Ref.current.style.transform = `translateX(${-226.085 + scrollY * 0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="box-border caret-transparent gap-x-4 gap-y-4 mt-14">
      <div 
        ref={row1Ref}
        className="box-border caret-transparent gap-x-2.5 flex gap-y-2.5 translate-x-[-173.915px] w-full transition-transform duration-100 ease-out md:gap-x-4 md:gap-y-4 md:w-auto"
      >
        <div className="box-border caret-transparent shrink-0 h-[200px] w-[200px] overflow-hidden rounded-2xl md:h-[422px] md:w-auto">
          <img
            src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6816dbec97d1a7046e191a44_a0dd450072c5388a239c2d54d1345710_about_photo 03.avif"
            alt=""
            className="box-border caret-transparent block h-full max-w-full object-cover w-full md:inline-block md:object-fill"
          />
        </div>
        <div className="box-border caret-transparent shrink-0 h-[200px] w-[200px] overflow-hidden rounded-2xl md:h-[422px] md:w-auto">
          <img
            src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6816dbec00128582f247afee_f6b872681a7b875b4a7bb6f4384ea770_about_photo 02.avif"
            alt="UI/UX Design Agency Team"
            className="box-border caret-transparent block h-full max-w-full object-cover w-full md:inline-block md:object-fill"
          />
        </div>
        <div className="box-border caret-transparent shrink-0 h-[200px] w-[200px] overflow-hidden rounded-2xl md:h-[422px] md:w-auto">
          <img
            src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6816dbedce49b69b94e57e2f_1b3de29a30cad159dc0830689e6c7b4e_about_photo 01.avif"
            alt=""
            className="box-border caret-transparent block h-full max-w-full object-cover w-full md:inline-block md:object-fill"
          />
        </div>
        <div className="box-border caret-transparent shrink-0 h-[200px] w-[200px] overflow-hidden rounded-2xl md:h-[422px] md:w-auto">
          <img
            src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6816dbec32c13773943021d7_953a7b7b42f7d82709754a942ce61b4a_about_photo 04.avif"
            alt=""
            className="box-border caret-transparent block h-full max-w-full object-cover w-full md:inline-block md:object-fill"
          />
        </div>
        <div className="box-border caret-transparent shrink-0 h-[200px] w-[200px] overflow-hidden rounded-2xl md:h-[422px] md:w-auto">
          <img
            src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67bc32869fc4e91319b466a1_Photo (11).avif"
            alt=""
            className="box-border caret-transparent block h-full max-w-full object-cover w-full md:inline-block md:object-fill"
          />
        </div>
        <div className="box-border caret-transparent shrink-0 h-[200px] w-[200px] overflow-hidden rounded-2xl md:h-[422px] md:w-auto">
          <img
            src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6816dbec1ad1b7fb65d44f0b_4ef58873499aa628f1c136ff1c206318_about_photo 06.avif"
            alt=""
            className="box-border caret-transparent block h-full max-w-full object-cover w-full md:inline-block md:object-fill"
          />
        </div>
        <div className="box-border caret-transparent shrink-0 h-[200px] w-[200px] overflow-hidden rounded-2xl md:h-[422px] md:w-auto">
          <img
            src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6816dbed173ad8578db1ea95_39ffef3ce122e6a9d85e8a8ed091c3b3_about_photo 07.avif"
            alt=""
            className="box-border caret-transparent block h-full max-w-full object-cover w-full md:inline-block md:object-fill"
          />
        </div>
        <div className="box-border caret-transparent shrink-0 h-[200px] w-[200px] overflow-hidden rounded-2xl md:h-[422px] md:w-auto">
          <img
            src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6816dbecce49b69b94e57dce_about_photo 08.avif"
            alt=""
            className="box-border caret-transparent block h-full max-w-full object-cover w-full md:inline-block md:object-fill"
          />
        </div>
        <div className="box-border caret-transparent shrink-0 h-[200px] w-[200px] overflow-hidden rounded-2xl md:h-[422px] md:w-auto">
          <img
            src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6816dbed20e197dfdca80aef_f28d725fc65d52f1b10ebeaf1527c8e7_about_photo 09.avif"
            alt=""
            className="box-border caret-transparent block h-full max-w-full object-cover w-full md:inline-block md:object-fill"
          />
        </div>
        <div className="box-border caret-transparent shrink-0 h-[200px] w-[200px] overflow-hidden rounded-2xl md:h-[422px] md:w-auto">
          <img
            src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6816dbec97d1a7046e1919dc_846d11ebafca09a1d7a948974c89cf01_about_photo 10.avif"
            alt=""
            className="box-border caret-transparent block h-full max-w-full object-cover w-full md:inline-block md:object-fill"
          />
        </div>
      </div>
      <div 
        ref={row2Ref}
        className="box-border caret-transparent gap-x-2.5 flex gap-y-2.5 translate-x-[-226.085px] w-full mt-2.5 transition-transform duration-100 ease-out md:gap-x-4 md:gap-y-4 md:w-auto md:mt-4"
      >
        <div className="box-border caret-transparent shrink-0 h-[200px] w-[200px] overflow-hidden rounded-t-2xl md:h-[422px] md:w-auto">
          <img
            src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6816dbeb38f6bb5a307ff9dd_031f5bbefac9c1193074ddf147747b46_about_photo 16.avif"
            alt=""
            className="box-border caret-transparent block h-full max-w-full object-cover w-full md:inline-block md:object-fill"
          />
        </div>
        <div className="box-border caret-transparent shrink-0 h-[200px] w-[200px] overflow-hidden rounded-t-2xl md:h-[422px] md:w-auto">
          <img
            src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6816dbede7f5478285bfa2a9_457b296542ce4fdcd685a6c87cfaeb95_about_photo 12.avif"
            alt=""
            className="box-border caret-transparent block h-full max-w-full object-cover w-full md:inline-block md:object-fill"
          />
        </div>
        <div className="box-border caret-transparent shrink-0 h-[200px] w-[200px] overflow-hidden rounded-t-2xl md:h-[422px] md:w-auto">
          <img
            src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67bc339ef0aeab61e1eea56d_image 772.avif"
            alt=""
            className="box-border caret-transparent block h-full max-w-full object-cover w-full md:inline-block md:object-fill"
          />
        </div>
        <div className="box-border caret-transparent shrink-0 h-[200px] w-[200px] overflow-hidden rounded-t-2xl md:h-[422px] md:w-auto">
          <img
            src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6816e36f2a7e06d8415fdfce_e161ff7792d08e8ea0c189819bed80f9_about_photo 14.avif"
            alt=""
            className="box-border caret-transparent block h-full max-w-full object-cover w-full md:inline-block md:object-fill"
          />
        </div>
        <div className="box-border caret-transparent shrink-0 h-[200px] w-[200px] overflow-hidden rounded-t-2xl md:h-[422px] md:w-auto">
          <img
            src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6816dbed38f6bb5a307ffa7f_about_photo 15.avif"
            alt=""
            className="box-border caret-transparent block h-full max-w-full object-cover w-full md:inline-block md:object-fill"
          />
        </div>
        <div className="box-border caret-transparent shrink-0 h-[200px] w-[200px] overflow-hidden rounded-t-2xl md:h-[422px] md:w-auto">
          <img
            src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6816dbecd11930a2cadddfce_77aa6fb7c1227c33e30dcb86fea33d08_about_photo 11.avif"
            alt=""
            className="box-border caret-transparent block h-full max-w-full object-cover w-full md:inline-block md:object-fill"
          />
        </div>
        <div className="box-border caret-transparent shrink-0 h-[200px] w-[200px] overflow-hidden rounded-t-2xl md:h-[422px] md:w-auto">
          <img
            src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6816dbeece49b69b94e57e79_about_photo 17.avif"
            alt=""
            className="box-border caret-transparent block h-full max-w-full object-cover w-full md:inline-block md:object-fill"
          />
        </div>
        <div className="box-border caret-transparent shrink-0 h-[200px] w-[200px] overflow-hidden rounded-t-2xl md:h-[422px] md:w-auto">
          <img
            src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6816dbec21679bcf165d9aff_7984d17d8688dc2b30deb0707e928d76_about_photo 18.avif"
            alt=""
            className="box-border caret-transparent block h-full max-w-full object-cover w-full md:inline-block md:object-fill"
          />
        </div>
        <div className="box-border caret-transparent shrink-0 h-[200px] w-[200px] overflow-hidden rounded-t-2xl md:h-[422px] md:w-auto">
          <img
            src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6816dbec21679bcf165d9b07_about_photo 19.avif"
            alt=""
            className="box-border caret-transparent block h-full max-w-full object-cover w-full md:inline-block md:object-fill"
          />
        </div>
        <div className="box-border caret-transparent shrink-0 h-[200px] w-[200px] overflow-hidden rounded-t-2xl md:h-[422px] md:w-auto">
          <img
            src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6816dbebce49b69b94e57d9f_about_photo 20.avif"
            alt=""
            className="box-border caret-transparent block h-full max-w-full object-cover w-full md:inline-block md:object-fill"
          />
        </div>
      </div>
    </div>
  );
};
