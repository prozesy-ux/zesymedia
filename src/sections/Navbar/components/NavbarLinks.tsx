import type { MouseEvent } from "react";
import { ServicesDropdown } from "./ServicesDropdown";
import { MoreDropdown } from "./MoreDropdown";

export type NavbarLinksProps = {
  href?: string;
  iconSrc: string;
  label: string;
  variant?: string;
  textVariant?: string;
  isActive?: boolean;
  isDropdown?: boolean;
};

const handleSpaNavigation = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
  if (!href.startsWith("/") || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
    return;
  }

  event.preventDefault();
  window.history.pushState({}, "", href);
  window.dispatchEvent(new Event("locationchange"));
};

export const NavbarLinks = (props: NavbarLinksProps) => {
  if (props.isDropdown) {
    return (
      <div
        className={`group relative items-center box-border caret-transparent justify-center text-left mx-auto ${props.variant ?? "contents"}`}
      >
        <div
          role="button"
          className={`rd-navbar_link relative box-border caret-transparent text-nowrap align-top mx-auto ${props.isActive ? "text-neutral-800 contents pl-5 pr-10 py-5" : "text-zinc-50 text-[12.8px] items-center gap-x-2 flex flex-col justify-center tracking-[0.256px] leading-[19.2px] min-h-[auto] min-w-[auto] gap-y-2 w-full my-0 p-[5px] transition-colors duration-200 hover:text-violet-400 hover:border-violet-400 md:text-base md:tracking-[0.32px] md:leading-6 md:-my-2"}`}
        >
          {props.href ? (
            <a
              href={props.href}
              onClick={(event) => handleSpaNavigation(event, props.href)}
              className="rd-navbar_link relative text-zinc-50 text-[12.8px] items-center box-border caret-transparent gap-x-2 flex flex-col justify-center tracking-[0.256px] leading-[19.2px] max-w-full min-h-0 min-w-0 gap-y-2 text-nowrap w-full my-0 p-[5px] transition-colors duration-200 hover:text-violet-400 hover:border-violet-400 md:text-base md:tracking-[0.32px] md:leading-6 md:min-h-[auto] md:min-w-[auto] md:-my-2"
            >
              <img
                src={props.iconSrc}
                alt="Icon"
                className="rd-navbar_link_icon text-2xl box-border caret-transparent block shrink-0 h-6 tracking-[0.256px] leading-9 text-nowrap align-baseline w-6 md:hidden md:tracking-[0.32px]"
              />
              <div
                className={
                  props.isActive
                    ? "rd-navbar_link_text text-[12.8px] box-border caret-transparent tracking-[0.256px] leading-[19.2px] min-h-0 min-w-0 text-nowrap md:text-base md:tracking-[0.32px] md:leading-6 md:min-h-[auto] md:min-w-[auto]"
                    : "rd-navbar_link_text text-[12.8px] box-border caret-transparent tracking-[0.256px] leading-[19.2px] min-h-[auto] min-w-[auto] text-nowrap md:text-base md:tracking-[0.32px] md:leading-6"
                }
              >
                {props.label}
              </div>
            </a>
          ) : (
            <>
              <img
                src={props.iconSrc}
                alt="Icon"
                className="rd-navbar_link_icon text-2xl box-border caret-transparent block shrink-0 h-6 tracking-[0.256px] leading-9 text-nowrap align-baseline w-6 md:hidden md:tracking-[0.32px]"
              />
              <div
                className={
                  props.isActive
                    ? "rd-navbar_link_text text-[12.8px] box-border caret-transparent tracking-[0.256px] leading-[19.2px] min-h-0 min-w-0 text-nowrap md:text-base md:tracking-[0.32px] md:leading-6 md:min-h-[auto] md:min-w-[auto]"
                    : "rd-navbar_link_text text-[12.8px] box-border caret-transparent tracking-[0.256px] leading-[19.2px] min-h-[auto] min-w-[auto] text-nowrap md:text-base md:tracking-[0.32px] md:leading-6"
                }
              >
                {props.label}
              </div>
            </>
          )}
        </div>
        
        {/* Render the appropriate dropdown */}
        {props.label === "Services" && <ServicesDropdown />}
        {props.label === "More" && <MoreDropdown />}
      </div>
    );
  }

  return (
    <a
      href={props.href}
      onClick={(event) => handleSpaNavigation(event, props.href)}
      className={`rd-navbar_link relative text-zinc-50 text-[12.8px] items-center box-border caret-transparent gap-x-2 flex flex-col justify-center tracking-[0.256px] leading-[19.2px] max-w-full min-h-[auto] min-w-[auto] gap-y-2 w-full p-[5px] transition-colors duration-200 hover:text-violet-400 hover:border-violet-400 md:text-base md:tracking-[0.32px] md:leading-6 ${props.variant ?? ""}`}
    >
      <img
        src={props.iconSrc}
        alt="Icon"
        className="rd-navbar_link_icon text-2xl box-border caret-transparent block shrink-0 h-6 tracking-[0.256px] leading-9 align-baseline w-6 md:hidden md:tracking-[0.32px]"
      />
      <span
        className={`rd-navbar_link_text text-[12.8px] box-border caret-transparent block tracking-[0.256px] leading-[19.2px] min-h-[auto] min-w-[auto] md:text-base md:tracking-[0.32px] md:leading-6 ${props.textVariant ?? ""}`}
      >
        {props.label}
      </span>
    </a>
  );
};
