import { siteMedia } from "@/data/media";

export type TeamMemberId = "member01" | "member02" | "member03" | "member04";

export type TeamMemberRecord = {
  id: TeamMemberId;
  image: string;
};

export const teamMembers: TeamMemberRecord[] = [
  { id: "member01", image: siteMedia.team.member01 },
  { id: "member02", image: siteMedia.team.member02 },
  { id: "member03", image: siteMedia.team.member03 },
  { id: "member04", image: siteMedia.team.member04 },
];
