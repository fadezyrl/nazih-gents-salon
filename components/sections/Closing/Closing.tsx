"use client";

import { useState, type ReactElement } from "react";
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
  const activeContact = closing.contacts[activeLocation.id];
  const mapSrc = buildMapEmbedUrl(
    activeLocation.lat,
    activeLocation.lng,
    activeLocation.zoom,
  );

  return (
    <section className="closing" id="contact" aria-labelledby="closing-title">
      <h2 className="closing__title" id="closing-title">
        {closing.titleLine1}
        <br />
        {closing.titleLine2}
        <br />
        {closing.titleLine3}
      </h2>
      <div className="closing__cta-row">
        <a href="#" className="btn-dark">
          {closing.bookCta}
        </a>
      </div>

      <div className="locations-panel" id="locations">
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
          <div className="locations-panel__info">
            <span className="locations-panel__index">
              {locationsCopy.items[activeLocation.id].index}
            </span>
            <div className="locations-panel__city">{activeContact.city}</div>

            <dl className="locations-panel__details">
              <dt>{closing.contactLabels.addr}</dt>
              <dd>{activeContact.address}</dd>
              <dt>{closing.contactLabels.tel}</dt>
              <dd>{activeContact.phone}</dd>
              <dt>{closing.contactLabels.mail}</dt>
              <dd>{activeContact.email}</dd>
              <dt>{closing.contactLabels.hrs}</dt>
              <dd>{activeContact.hours}</dd>
            </dl>

            <a
              href={activeLocation.directionsHref}
              className="locations-panel__directions"
              target="_blank"
              rel="noopener noreferrer"
            >
              {locationsCopy.directions}
            </a>
          </div>

          <div
            className="locations-map"
            aria-label={`${locationsCopy.mapLabel} — ${activeContact.city}`}
          >
            <div className="locations-map__frame">
              <iframe
                key={activeLocation.id}
                title={`${locationsCopy.mapLabel} — ${activeContact.city}`}
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
      </div>
    </section>
  );
};
