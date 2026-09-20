"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/context/useLocale";
import { locations } from "@/data/locations";
import "@/components/sections/Locations/locations.desktop.css";
import "@/components/sections/Locations/locations.mobile.css";

export const Locations = (): ReactElement => {
  const { dictionary } = useLocale();
  const { locations: copy } = dictionary;

  return (
    <section
      className="locations"
      id="locations"
      aria-labelledby="locations-title"
    >
      <div className="locations__head">
        <h2 className="locations__title" id="locations-title">
          {copy.title}
        </h2>
      </div>
      <div className="locations__list">
        {locations.map((location) => {
          const item = copy.items[location.id];
          return (
            <div className="location-item" key={location.id}>
              <div>
                <span className="location-item__index">{item.index}</span>
                <div className="location-item__city">{item.city}</div>
              </div>
              <div>
                <div className="location-item__label">{copy.addressLabel}</div>
                <p className="location-item__text">{item.address}</p>
              </div>
              <div>
                <div className="location-item__label">{copy.hoursLabel}</div>
                <p className="location-item__text">{item.hours}</p>
              </div>
              <a href={location.directionsHref} className="location-item__link">
                {copy.directions}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};
