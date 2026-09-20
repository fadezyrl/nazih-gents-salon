"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactElement,
} from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal/ScrollReveal";
import { testimonials } from "@/data/testimonials";
import { useLocale } from "@/context/useLocale";
import "@/components/sections/Testimonial/testimonial.desktop.css";
import "@/components/sections/Testimonial/testimonial.mobile.css";

const AUTO_ADVANCE_MS = 9000;

export const Testimonial = (): ReactElement => {
  const { dictionary } = useLocale();
  const { testimonial: copy } = dictionary;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);

  const total = testimonials.length;

  const goTo = useCallback(
    (index: number): void => {
      const next =
        ((index % total) + total) % total;
      setActiveIndex(next);
    },
    [total],
  );

  const goPrev = useCallback((): void => {
    goTo(activeIndex - 1);
  }, [activeIndex, goTo]);

  const goNext = useCallback((): void => {
    goTo(activeIndex + 1);
  }, [activeIndex, goTo]);

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % total);
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(timer);
  }, [isPaused, total]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent): void => {
      if (!viewportRef.current?.contains(document.activeElement)) {
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goPrev();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        goNext();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goNext, goPrev]);

  const slideStatus = copy.slideStatus
    .replace("{current}", String(activeIndex + 1))
    .replace("{total}", String(total));

  return (
    <section
      className="testimonial"
      aria-label={copy.sectionLabel}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsPaused(false);
        }
      }}
    >
      <ScrollReveal
        className="testimonial__carousel"
        variant="rise"
        stagger
      >
        <div
          className="testimonial__viewport reveal-child"
          ref={viewportRef}
          role="region"
          aria-roledescription="carousel"
          aria-label={copy.sectionLabel}
        >
          {testimonials.map((item, index) => {
            const itemCopy = copy.items[item.id];
            const isActive = index === activeIndex;

            return (
              <article
                key={item.id}
                className={`testimonial__slide${isActive ? " is-active" : ""}`}
                aria-hidden={!isActive}
                id={`testimonial-slide-${index}`}
                tabIndex={isActive ? 0 : -1}
              >
                <div className="testimonial__inner">
                  <div className="testimonial__mark" aria-hidden="true">
                    “
                  </div>
                  <p className="testimonial__quote">{itemCopy.quote}</p>
                  <div className="testimonial__attrib">
                    <div className="testimonial__avatar">
                      <Image
                        src={item.image}
                        alt={itemCopy.photoTag}
                        width={56}
                        height={56}
                        className="testimonial__avatar-img"
                      />
                    </div>
                    <div className="testimonial__attrib-text">
                      <span
                        className="testimonial__attrib-line"
                        aria-hidden="true"
                      />
                      <span className="testimonial__attrib-name">
                        {itemCopy.name}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="testimonial__footer reveal-child">
          <p className="testimonial__status" aria-live="polite">
            {slideStatus}
          </p>
          <div className="testimonial__controls">
            <button
              type="button"
              className="testimonial__nav testimonial__nav--prev"
              onClick={goPrev}
              aria-label={copy.prev}
            >
              <span aria-hidden="true">←</span>
            </button>
            <div
              className="testimonial__dots"
              role="tablist"
              aria-label={copy.sectionLabel}
            >
              {testimonials.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  className={`testimonial__dot${index === activeIndex ? " is-active" : ""}`}
                  aria-selected={index === activeIndex}
                  aria-controls={`testimonial-slide-${index}`}
                  onClick={() => goTo(index)}
                >
                  <span className="sr-only">
                    {copy.items[item.id].name}
                  </span>
                </button>
              ))}
            </div>
            <button
              type="button"
              className="testimonial__nav testimonial__nav--next"
              onClick={goNext}
              aria-label={copy.next}
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
