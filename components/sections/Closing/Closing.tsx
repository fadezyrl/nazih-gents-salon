"use client";

import { useState, type ReactElement } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal/ScrollReveal";
import { useLocale } from "@/context/useLocale";
import {
  buildMapEmbedUrl,
  locations,
  type LocationId,
} from "@/data/locations";
import "@/components/sections/Closing/closing.desktop.css";
import "@/components/sections/Closing/closing.mobile.css";

export const Closing = (): ReactElement => {
  const { dictionary } = useLocale();
  const { closing, locations: locationsCopy } = dictionary;
  const [activeId, setActiveId] = useState<LocationId>("dubai");

  const activeLocation =
    locations.find((location) => location.id === activeId) ?? locations[0];
  const activeCity = closing.contacts[activeLocation.id].city;
  const mapSrc = buildMapEmbedUrl(
    activeLocation.lat,
    activeLocation.lng,
    activeLocation.zoom,
  );

  return (
    <section className="closing" id="contact" aria-labelledby="closing-title">
      <ScrollReveal variant="rise" delay={40}>
        <h2 className="closing__title" id="closing-title">
          {closing.titleLine1}
          <br />
          {closing.titleLine2}
          <br />
          {closing.titleLine3}
        </h2>
      </ScrollReveal>
      <ScrollReveal className="closing__cta-row" variant="fade-up" delay={160}>
        <a href="#" className="btn-dark">
          {closing.bookCta}
        </a>
      </ScrollReveal>

      <ScrollReveal
        className="locations-panel"
        id="locations"
        variant="fade-up"
        delay={100}
      >
        <div className="locations-panel__head">
          <h3 className="locations-panel__title">{locationsCopy.title}</h3>
          <div
            className="locations-tabs"
            role="tablist"
            aria-label={locationsCopy.tabsLabel}
          >
            {locations.map((location) => {
              const isActive = location.id === activeId;
              return (
                <button
                  key={location.id}
                  type="button"
                  role="tab"
                  id={`location-tab-${location.id}`}
                  className={`locations-tabs__tab${isActive ? " is-active" : ""}`}
                  aria-selected={isActive}
                  aria-controls={`location-panel-${location.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveId(location.id)}
                >
                  {closing.contacts[location.id].city}
                </button>
              );
            })}
          </div>
        </div>

        <div
          className="locations-panel__body"
          role="tabpanel"
          id={`location-panel-${activeLocation.id}`}
          aria-labelledby={`location-tab-${activeLocation.id}`}
        >
          <div
            className="locations-map"
            aria-label={`${locationsCopy.mapLabel} — ${activeCity}`}
          >
            <div className="locations-map__frame">
              <iframe
                key={activeLocation.id}
                title={`${locationsCopy.mapLabel} — ${activeCity}`}
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="locations-map__veil" aria-hidden="true" />
            <div className="locations-map__pin" aria-hidden="true">
              <span className="locations-map__pin-dot" />
              <span className="locations-map__pin-ring" />
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
