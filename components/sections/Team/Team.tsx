"use client";

import type { ReactElement } from "react";
import { Photo } from "@/components/ui/Photo/Photo";
import { ScrollReveal } from "@/components/ui/ScrollReveal/ScrollReveal";
import { teamMembers } from "@/data/team";
import { useLocale } from "@/context/useLocale";
import "@/components/sections/Team/team.desktop.css";
import "@/components/sections/Team/team.mobile.css";

export const Team = (): ReactElement => {
  const { dictionary } = useLocale();
  const { team } = dictionary;

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

      <ScrollReveal as="ul" className="team__grid" variant="fade-up" stagger>
        {teamMembers.map((member) => {
          const copy = team.members[member.id];
          return (
            <li className="team-card reveal-child" key={member.id}>
              <div className="team-card__photo">
                <Photo tag={copy.photoTag} src={member.image} />
              </div>
              <div className="team-card__meta">
                <h3 className="team-card__name">{copy.name}</h3>
                <p className="team-card__role">{copy.role}</p>
              </div>
            </li>
          );
        })}
      </ScrollReveal>
    </section>
  );
};
