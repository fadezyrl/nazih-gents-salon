"use client";

import type { ReactElement } from "react";
import { MediaVideo } from "@/components/ui/MediaVideo/MediaVideo";
import { Photo } from "@/components/ui/Photo/Photo";
import { useLocale } from "@/context/useLocale";
import { services } from "@/data/services";
import "@/components/sections/Grooming/grooming.desktop.css";
import "@/components/sections/Grooming/grooming.mobile.css";

export const Grooming = (): ReactElement => {
  const { dictionary } = useLocale();
  const { grooming } = dictionary;

  return (
    <section className="grooming" id="grooming" aria-labelledby="grooming-title">
      <div className="grooming__head">
        <h2 className="grooming__title" id="grooming-title">
          {grooming.titleLine1}
          <br />
          {grooming.titleLine2}
        </h2>
        <p className="grooming__note">{grooming.note}</p>
      </div>

      {services.map((service) => {
        const copy = grooming.services[service.id];
        return (
          <div className="service-row" key={service.id}>
            <div className="service-row__inner">
              <span className="service-row__num">{service.number}</span>
              <span className="service-row__name">{copy.name}</span>
              <span className="service-row__desc">
                {copy.desc.split("\n").map((line, index) => (
                  <span key={line}>
                    {index > 0 ? <br /> : null}
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
          </div>
        );
      })}
    </section>
  );
};
