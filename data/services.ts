import { siteMedia } from "@/data/media";

export type ServiceId = "haircuts" | "beard" | "facial" | "moroccanBath";

export type ServiceMedia =
  | { type: "image"; src: string }
  | { type: "video"; src: string; poster: string };

export type ServiceRecord = {
  id: ServiceId;
  number: string;
  media: ServiceMedia;
};

export const services: ServiceRecord[] = [
  {
    id: "haircuts",
    number: "01",
    media: { type: "image", src: siteMedia.grooming.haircuts },
  },
  {
    id: "beard",
    number: "02",
    media: { type: "image", src: siteMedia.grooming.beard },
  },
  {
    id: "facial",
    number: "03",
    media: { type: "image", src: siteMedia.grooming.facial },
  },
  {
    id: "moroccanBath",
    number: "04",
    media: {
      type: "video",
      src: siteMedia.grooming.moroccanBath.video,
      poster: siteMedia.grooming.moroccanBath.poster,
    },
  },
];
