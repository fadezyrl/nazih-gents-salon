"use client";

import type { ReactElement } from "react";
import { MediaVideo } from "@/components/ui/MediaVideo/MediaVideo";
import { siteMedia } from "@/data/media";
import { useLocale } from "@/context/useLocale";
import "@/components/sections/Hero/hero.desktop.css";
import "@/components/sections/Hero/hero.mobile.css";

export const Hero = (): ReactElement => {
  const { dictionary } = useLocale();
  const { hero } = dictionary;

  return (
    <section className="hero" aria-label={hero.titleLine1}>
      <div className="hero__content">
        <div className="hero__since">{hero.since}</div>
        <h1 className="hero__title">
          {hero.titleLine1}
          <br />
          {hero.titleLine2}
        </h1>
        <p className="hero__tagline">
          {hero.taglineLine1}
          <br />
          {hero.taglineLine2}
        </p>
        <div className="hero__ctas">
          <a href="#contact" className="btn-solid">
            {hero.bookCta}
          </a>
          <a href="#grooming" className="link-underline">
            {hero.exploreCta}
          </a>
        </div>
      </div>
      <MediaVideo
        src={siteMedia.hero.video}
        poster={siteMedia.hero.poster}
        className="hero__photo"
        ariaLabel={hero.photoTag}
      />
      <div className="hero__scroll">
        <span>{hero.scroll}</span>
        <span className="hero__scroll-line" aria-hidden="true" />
      </div>
    </section>
  );
};
