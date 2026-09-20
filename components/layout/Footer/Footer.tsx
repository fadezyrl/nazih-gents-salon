"use client";

import type { ReactElement } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal/ScrollReveal";
import { useLocale } from "@/context/useLocale";
import "@/components/layout/Footer/footer.desktop.css";
import "@/components/layout/Footer/footer.mobile.css";

const FOOTER_NAV = [
  { href: "#grooming", key: "grooming" as const },
  { href: "#experience", key: "experience" as const },
  { href: "#locations", key: "locations" as const },
  { href: "#contact", key: "contact" as const },
];

export const Footer = (): ReactElement => {
  const { dictionary } = useLocale();
  const { footer, locations, nav } = dictionary;

  return (
    <footer>
      <ScrollReveal className="footer__top" variant="fade-up" stagger>
        <div className="reveal-child">
          <div className="footer__brand-name">{footer.brand}</div>
          <div className="footer__since">{footer.since}</div>
        </div>
        <div className="footer__cols reveal-child">
          <div className="footer__col">
            <div className="footer__col-title">{footer.navTitle}</div>
            {FOOTER_NAV.map((link) => (
              <a key={link.href} href={link.href}>
                {nav.links[link.key]}
              </a>
            ))}
          </div>
          <div className="footer__col">
            <div className="footer__col-title">{footer.locationsTitle}</div>
            <span>{locations.items.dubai.city}</span>
            <span>{locations.items.sharjah.city}</span>
            <span>{locations.items.rak.city}</span>
          </div>
          <div className="footer__col">
            <div className="footer__col-title">{footer.connectTitle}</div>
            <a href="#">{footer.instagram}</a>
            <a href="#contact">{footer.contact}</a>
          </div>
        </div>
      </ScrollReveal>
      <div className="rule rule--light" />
      <ScrollReveal className="footer__bottom" variant="fade" delay={120}>
        <span>{footer.copyright}</span>
        <span>{footer.tagline}</span>
      </ScrollReveal>
    </footer>
  );
};
