"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactElement,
} from "react";
import { Photo } from "@/components/ui/Photo/Photo";
import { ScrollReveal } from "@/components/ui/ScrollReveal/ScrollReveal";
import { teamMembers } from "@/data/team";
import { useLocale } from "@/context/useLocale";
import "@/components/sections/Team/team.desktop.css";
import "@/components/sections/Team/team.mobile.css";

const MOBILE_QUERY = "(max-width: 640px)";

const formatIndex = (value: number): string =>
  String(value).padStart(2, "0");

export const Team = (): ReactElement => {
  const { dictionary } = useLocale();
  const { team } = dictionary;
  const trackRef = useRef<HTMLUListElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const total = teamMembers.length;

  useEffect(() => {
    const media = window.matchMedia(MOBILE_QUERY);
    const syncMobile = (): void => {
      setIsMobile(media.matches);
      if (!media.matches) {
        setActiveIndex(0);
        setScrollProgress(0);
      }
    };

    syncMobile();
    media.addEventListener("change", syncMobile);
    return () => media.removeEventListener("change", syncMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      return;
    }

    const track = trackRef.current;
    if (!track) {
      return;
    }

    const updateFromScroll = (): void => {
      const maxScroll = track.scrollWidth - track.clientWidth;
      const rawProgress =
        maxScroll > 0 ? Math.abs(track.scrollLeft) / maxScroll : 0;
      setScrollProgress(Math.min(1, Math.max(0, rawProgress)));

      const cards = Array.from(
        track.querySelectorAll<HTMLElement>(".team-card"),
      );
      if (cards.length === 0) {
        return;
      }

      const trackRect = track.getBoundingClientRect();
      const focusX = trackRect.left + trackRect.width * 0.28;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      cards.forEach((card, index) => {
        const distance = Math.abs(card.getBoundingClientRect().left - focusX);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    updateFromScroll();
    track.addEventListener("scroll", updateFromScroll, { passive: true });
    window.addEventListener("resize", updateFromScroll);

    return () => {
      track.removeEventListener("scroll", updateFromScroll);
      window.removeEventListener("resize", updateFromScroll);
    };
  }, [isMobile]);

  const scrollToIndex = (index: number): void => {
    const track = trackRef.current;
    if (!track || !isMobile) {
      return;
    }

    const card = track.querySelectorAll<HTMLElement>(".team-card")[index];
    if (!card) {
      return;
    }

    card.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  };

  const slideStatus = team.slideStatus
    .replace("{current}", formatIndex(activeIndex + 1))
    .replace("{total}", formatIndex(total));

  return (
    <section className="team" id="team" aria-labelledby="team-title">
      <ScrollReveal className="team__head" variant="fade-up" stagger>
        <div className="team__head-copy reveal-child">
          <div className="team__eyebrow">{team.eyebrow}</div>
          <h2 className="team__title" id="team-title">
            {team.titleLine1}
            <br />
            {team.titleLine2}
          </h2>
        </div>
        <p className="team__note reveal-child">{team.note}</p>
      </ScrollReveal>

      <ScrollReveal className="team__slider" variant="fade-up">
        <ul
          ref={trackRef}
          className="team__grid"
          aria-label={team.sliderLabel}
          tabIndex={isMobile ? 0 : undefined}
        >
          {teamMembers.map((member, index) => {
            const copy = team.members[member.id];
            const isActive = !isMobile || index === activeIndex;

            return (
              <li
                className={`team-card${isActive ? " is-active" : ""}`}
                key={member.id}
                aria-current={isMobile && isActive ? "true" : undefined}
              >
                <div className="team-card__photo">
                  <Photo tag={copy.photoTag} src={member.image} />
                </div>
                <div className="team-card__meta">
                  <span className="team-card__index" aria-hidden="true">
                    {formatIndex(index + 1)}
                  </span>
                  <h3 className="team-card__name">{copy.name}</h3>
                  <p className="team-card__role">{copy.role}</p>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="team__slider-chrome">
          <div className="team__slider-rail" aria-hidden="true">
            <span
              className="team__slider-progress"
              style={{
                transform: `scaleX(${Math.max(scrollProgress, 0.12)})`,
              }}
            />
          </div>

          <div className="team__slider-footer">
            <p className="team__slider-status" aria-live="polite">
              <span className="team__slider-status-current">
                {formatIndex(activeIndex + 1)}
              </span>
              <span className="team__slider-status-sep" aria-hidden="true">
                —
              </span>
              <span className="team__slider-status-total">
                {formatIndex(total)}
              </span>
              <span className="sr-only">{slideStatus}</span>
            </p>

            <div className="team__slider-nav">
              <button
                type="button"
                className="team__slider-btn"
                onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
                disabled={activeIndex === 0}
                aria-label={team.prev}
              >
                <span aria-hidden="true">←</span>
              </button>
              <button
                type="button"
                className="team__slider-btn"
                onClick={() =>
                  scrollToIndex(Math.min(total - 1, activeIndex + 1))
                }
                disabled={activeIndex === total - 1}
                aria-label={team.next}
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
