"use client";

import type { ReactElement } from "react";
import { Photo } from "@/components/ui/Photo/Photo";
import { ScrollReveal } from "@/components/ui/ScrollReveal/ScrollReveal";
import { siteMedia } from "@/data/media";
import { useLocale } from "@/context/useLocale";
import "@/components/sections/Heritage/heritage.desktop.css";
import "@/components/sections/Heritage/heritage.mobile.css";

export const Heritage = (): ReactElement => {
  const { dictionary } = useLocale();
  const { heritage } = dictionary;

  return (
    <section className="heritage" aria-labelledby="heritage-lead">
      <ScrollReveal className="heritage__numeral" variant="fade" aria-hidden="true">
        {heritage.numeral}
      </ScrollReveal>
      <div className="heritage__body">
        <ScrollReveal variant="rise" delay={80}>
          <div className="heritage__eyebrow">{heritage.eyebrow}</div>
          <p className="heritage__lead" id="heritage-lead">
            {heritage.lead}
          </p>
        </ScrollReveal>
        <ScrollReveal className="heritage__col-right" variant="fade-up" delay={180}>
          <p className="heritage__copy">{heritage.copy}</p>
        </ScrollReveal>
      </div>
      <ScrollReveal className="heritage__strip" variant="fade-up" stagger delay={100}>
        <div className="reveal-child">
          <Photo
            tag={heritage.photoTags.archival}
            src={siteMedia.heritage.archival}
          />
        </div>
        <div className="reveal-child">
          <Photo
            tag={heritage.photoTags.tools}
            src={siteMedia.heritage.tools}
            variant="light"
          />
        </div>
        <div className="reveal-child">
          <Photo
            tag={heritage.photoTags.portrait}
            src={siteMedia.heritage.portrait}
          />
        </div>
      </ScrollReveal>
    </section>
  );
};
