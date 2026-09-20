"use client";

import { useEffect, useRef, useState, type ReactElement } from "react";
import { useLocale } from "@/context/useLocale";
import "@/components/layout/Nav/nav.desktop.css";
import "@/components/layout/Nav/nav.mobile.css";

const NAV_LINKS = [
  { href: "#grooming", key: "grooming" as const },
  { href: "#experience", key: "experience" as const },
  { href: "#locations", key: "locations" as const },
  { href: "#contact", key: "contact" as const },
];

const SCROLL_SOLID_THRESHOLD = 60;
const SCROLL_DIRECTION_THRESHOLD = 8;

export const Nav = (): ReactElement => {
  const { dictionary, locale, isRtl } = useLocale();
  const [isSolid, setIsSolid] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const onScroll = (): void => {
      const currentY = window.scrollY;
      setIsSolid(currentY > SCROLL_SOLID_THRESHOLD);

      if (isMenuOpen || currentY <= SCROLL_SOLID_THRESHOLD) {
        setIsVisible(true);
        lastScrollYRef.current = currentY;
        return;
      }

      const delta = currentY - lastScrollYRef.current;

      if (Math.abs(delta) >= SCROLL_DIRECTION_THRESHOLD) {
        setIsVisible(delta < 0);
        lastScrollYRef.current = currentY;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMenuOpen]);

  useEffect(() => {
    document.documentElement.lang = locale === "UR" ? "ur" : "en";
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
  }, [locale, isRtl]);

  const closeMenu = (): void => setIsMenuOpen(false);

  return (
    <>
      <nav
        className={`nav${isSolid ? " solid" : ""}${isVisible ? "" : " nav--hidden"}`}
        id="nav"
        aria-label="Primary"
        aria-hidden={!isVisible && !isMenuOpen}
      >
        <div className="nav__logo">{dictionary.nav.logo}</div>
        <ul className="nav__links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{dictionary.nav.links[link.key]}</a>
            </li>
          ))}
        </ul>
        <div className="nav__actions">
          <a href="#contact" className="nav__cta">
            {dictionary.nav.cta}
          </a>
          <button
            type="button"
            className="nav__mobile-btn"
            aria-label={dictionary.nav.openMenu}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div
        className={`mobile-menu${isMenuOpen ? " open" : ""}`}
        id="mobileMenu"
        aria-hidden={!isMenuOpen}
      >
        <button
          type="button"
          className="mobile-menu__close"
          onClick={closeMenu}
        >
          {dictionary.nav.closeMenu}
        </button>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {dictionary.nav.links[link.key]}
          </a>
        ))}
      </div>
    </>
  );
};
