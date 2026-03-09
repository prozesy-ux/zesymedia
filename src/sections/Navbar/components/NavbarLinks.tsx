import type { MouseEvent } from "react";
import { useState, useRef } from "react";

export type NavbarLinksProps = {
  href?: string;
  iconSrc: string;
  label: string;
  variant?: string;
  textVariant?: string;
  isActive?: boolean;
  isDropdown?: boolean;
  onHoverChange?: (isHovering: boolean) => void;
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
  const [isHovering, setIsHovering] = useState(false);
  const backdropTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    setIsHovering(true);
    props.onHoverChange?.(true);
    
    // Show backdrop for dropdown links
    if (props.isDropdown) {
      // Clear any pending hide timer
      if (backdropTimerRef.current) {
        clearTimeout(backdropTimerRef.current);
        backdropTimerRef.current = null;
      }
      
      const backdrop = document.getElementById('navBackdrop');
      if (backdrop) {
        backdrop.classList.remove('opacity-0', 'invisible');
        backdrop.classList.add('opacity-100', 'visible');
      }
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    props.onHoverChange?.(false);
    
    // Hide backdrop for dropdown links with delay
    if (props.isDropdown) {
      // Add delay before hiding backdrop to allow smooth transition to dropdown
      backdropTimerRef.current = setTimeout(() => {
        const backdrop = document.getElementById('navBackdrop');
        if (backdrop) {
          backdrop.classList.add('opacity-0', 'invisible');
          backdrop.classList.remove('opacity-100', 'visible');
        }
      }, 150);
    }
  };

  if (props.isDropdown) {
    // For Services link with href, make it clickable on mobile, hoverable on desktop
    if (props.href) {
      return (
        <div
          className={`relative flex items-center box-border justify-center text-left mx-auto pointer-events-auto ${props.variant ?? "w-full"}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <a
            href={props.href}
            onClick={(event) => handleSpaNavigation(event, props.href)}
            className="rd-navbar_link relative text-zinc-50 text-[12.8px] items-center box-border gap-x-2 flex flex-col justify-center tracking-[0.256px] leading-[19.2px] w-full my-0 p-[5px] transition-colors duration-200 hover:text-violet-400 md:text-base md:tracking-[0.32px] md:leading-6 md:flex-row md:gap-y-0 z-10"
          >
            <img
              src={props.iconSrc}
              alt="Icon"
              className="rd-navbar_link_icon text-2xl box-border block shrink-0 h-6 tracking-[0.256px] leading-9 text-nowrap align-baseline w-6 md:hidden md:tracking-[0.32px]"
            />
            <span className="rd-navbar_link_text text-[12.8px] box-border tracking-[0.256px] leading-[19.2px] text-nowrap md:text-base md:tracking-[0.32px] md:leading-6">
              {props.label}
            </span>
          </a>
        </div>
      );
    }
    
    // For dropdown without href (shouldn't happen now)
    return (
      <div
        className={`relative flex items-center box-border justify-center text-left mx-auto pointer-events-auto ${props.variant ?? "w-full"}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          role="button"
          className="rd-navbar_link relative text-zinc-50 text-[12.8px] items-center box-border gap-x-2 flex flex-col justify-center tracking-[0.256px] leading-[19.2px] w-full my-0 p-[5px] transition-colors duration-200 hover:text-violet-400 md:text-base md:tracking-[0.32px] md:leading-6 cursor-pointer z-10"
        >
          <img
            src={props.iconSrc}
            alt="Icon"
            className="rd-navbar_link_icon text-2xl box-border block shrink-0 h-6 tracking-[0.256px] leading-9 text-nowrap align-baseline w-6 md:hidden md:tracking-[0.32px]"
          />
          <span className="rd-navbar_link_text text-[12.8px] box-border tracking-[0.256px] leading-[19.2px] text-nowrap md:text-base md:tracking-[0.32px] md:leading-6">
            {props.label}
          </span>
        </div>
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
