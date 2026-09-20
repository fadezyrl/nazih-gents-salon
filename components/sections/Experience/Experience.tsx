"use client";

import type { ReactElement } from "react";
import { MediaVideo } from "@/components/ui/MediaVideo/MediaVideo";
import { ScrollReveal } from "@/components/ui/ScrollReveal/ScrollReveal";
import { siteMedia } from "@/data/media";
import { useLocale } from "@/context/useLocale";
import "@/components/sections/Experience/experience.desktop.css";
import "@/components/sections/Experience/experience.mobile.css";

export const Experience = (): ReactElement => {
  const { dictionary } = useLocale();
  const { experience } = dictionary;

  return (
    <section
      className="experience"
      id="experience"
      aria-labelledby="experience-copy"
    >
      <ScrollReveal className="experience__photo" variant="scale">
        <MediaVideo
          src={siteMedia.experience.video}
          poster={siteMedia.experience.poster}
          ariaLabel={experience.photoTag}
        />
      </ScrollReveal>
      <ScrollReveal className="experience__words" variant="fade-up" stagger>
        <div className="experience__word reveal-child">{experience.word1}</div>
        <div className="experience__word reveal-child">{experience.word2}</div>
        <div className="experience__word reveal-child">{experience.word3}</div>
        <div className="experience__foot reveal-child">
          <p className="experience__copy" id="experience-copy">
            {experience.copy}
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
};
