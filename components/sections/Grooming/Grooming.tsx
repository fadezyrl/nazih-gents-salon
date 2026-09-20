"use client";

import type { ReactElement } from "react";
import { MediaVideo } from "@/components/ui/MediaVideo/MediaVideo";
import { Photo } from "@/components/ui/Photo/Photo";
import { ScrollReveal } from "@/components/ui/ScrollReveal/ScrollReveal";
import { useLocale } from "@/context/useLocale";
import { services } from "@/data/services";
import "@/components/sections/Grooming/grooming.desktop.css";
import "@/components/sections/Grooming/grooming.mobile.css";

export const Grooming = (): ReactElement => {
  const { dictionary } = useLocale();
  const { grooming } = dictionary;

  return (
    <section className="grooming" id="grooming" aria-labelledby="grooming-title">
      <ScrollReveal className="grooming__head" variant="fade-up" stagger>
        <h2 className="grooming__title reveal-child" id="grooming-title">
          {grooming.titleLine1}
          <br />
          {grooming.titleLine2}
        </h2>
        <p className="grooming__note reveal-child">{grooming.note}</p>
      </ScrollReveal>

      {services.map((service, index) => {
        const copy = grooming.services[service.id];
        return (
          <ScrollReveal
            as="div"
            className="service-row"
            key={service.id}
            variant="fade-up"
            delay={index * 60}
          >
            <div className="service-row__inner">
              <span className="service-row__num">{service.number}</span>
              <span className="service-row__name">{copy.name}</span>
              <span className="service-row__desc">
                {copy.desc.split("\n").map((line, lineIndex) => (
                  <span key={line}>
                    {lineIndex > 0 ? <br /> : null}
                    {line}
                  </span>
                ))}
              </span>
              <div className="service-row__preview">
                {service.media.type === "video" ? (
                  <MediaVideo
                    src={service.media.src}
                    poster={service.media.poster}
                    ariaLabel={copy.photoTag}
                  />
                ) : (
                  <Photo tag={copy.photoTag} src={service.media.src} />
                )}
              </div>
            </div>
          </ScrollReveal>
        );
      })}
    </section>
  );
};
