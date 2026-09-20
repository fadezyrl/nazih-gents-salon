"use client";

import type { ReactElement } from "react";
import { MediaVideo } from "@/components/ui/MediaVideo/MediaVideo";
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
      <MediaVideo
        src={siteMedia.experience.video}
        poster={siteMedia.experience.poster}
        className="experience__photo"
        ariaLabel={experience.photoTag}
      />
      <div className="experience__words">
        <div className="experience__word">{experience.word1}</div>
        <div className="experience__word">{experience.word2}</div>
        <div className="experience__word">{experience.word3}</div>
        <div className="experience__foot">
          <p className="experience__copy" id="experience-copy">
            {experience.copy}
          </p>
        </div>
      </div>
    </section>
  );
};
