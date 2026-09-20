import { siteMedia } from "@/data/media";

export type TestimonialId = "ahmed" | "omar" | "khalid";

export type TestimonialRecord = {
  id: TestimonialId;
  image: string;
};

export const testimonials: TestimonialRecord[] = [
  { id: "ahmed", image: siteMedia.team.member02 },
  { id: "omar", image: siteMedia.team.member04 },
  { id: "khalid", image: siteMedia.team.member03 },
];
