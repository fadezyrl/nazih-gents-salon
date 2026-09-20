"use client";

import type { ReactElement } from "react";
import { Photo } from "@/components/ui/Photo/Photo";
import { teamMembers } from "@/data/team";
import { useLocale } from "@/context/useLocale";
import "@/components/sections/Team/team.desktop.css";
import "@/components/sections/Team/team.mobile.css";

export const Team = (): ReactElement => {
  const { dictionary } = useLocale();
  const { team } = dictionary;

  return (
    <section className="team" id="team" aria-labelledby="team-title">
      <div className="team__head">
        <div className="team__head-copy">
          <div className="team__eyebrow">{team.eyebrow}</div>
          <h2 className="team__title" id="team-title">
            {team.titleLine1}
            <br />
            {team.titleLine2}
          </h2>
        </div>
        <p className="team__note">{team.note}</p>
      </div>

      <ul className="team__grid">
        {teamMembers.map((member) => {
          const copy = team.members[member.id];
          return (
            <li className="team-card" key={member.id}>
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
      </ul>
    </section>
  );
};
