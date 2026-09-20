"use client";

import type { ReactElement } from "react";
import { MediaVideo } from "@/components/ui/MediaVideo/MediaVideo";
import { ScrollReveal } from "@/components/ui/ScrollReveal/ScrollReveal";
import { siteMedia } from "@/data/media";
import { useLocale } from "@/context/useLocale";
import "@/components/sections/Hero/hero.desktop.css";
import "@/components/sections/Hero/hero.mobile.css";

export const Hero = (): ReactElement => {
  const { dictionary } = useLocale();
  const { hero } = dictionary;

  return (
    <section className="hero" aria-label={hero.titleLine1}>
      <ScrollReveal
        className="hero__content"
        variant="fade-up"
        immediate
        stagger
      >
        <div className="hero__since reveal-child">{hero.since}</div>
        <h1 className="hero__title reveal-child">
          {hero.titleLine1}
          <br />
          {hero.titleLine2}
        </h1>
        <p className="hero__tagline reveal-child">
          {hero.taglineLine1}
          <br />
          {hero.taglineLine2}
        </p>
        <div className="hero__ctas reveal-child">
          <a href="#contact" className="btn-solid">
            {hero.bookCta}
          </a>
          <a href="#grooming" className="link-underline">
            {hero.exploreCta}
          </a>
        </div>
      </ScrollReveal>
      <ScrollReveal
        className="hero__photo"
        variant="scale"
        immediate
        delay={220}
      >
        <MediaVideo
          src={siteMedia.hero.video}
          poster={siteMedia.hero.poster}
          ariaLabel={hero.photoTag}
        />
      </ScrollReveal>
      <ScrollReveal
        className="hero__scroll"
        variant="fade"
        immediate
        delay={520}
      >
        <span>{hero.scroll}</span>
        <span className="hero__scroll-line" aria-hidden="true" />
      </ScrollReveal>
    </section>
  );
};
