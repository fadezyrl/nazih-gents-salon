const asset = (path: string): string => `/assets/${path}`;

export const siteMedia = {
  hero: {
    video: asset("videos/hero-background.mp4"),
    poster: asset("new-images/shod-building.jpeg"),
  },
  experience: {
    video: asset("videos/video-02.mp4"),
    poster: asset("images/space-03.jpg"),
  },
  heritage: {
    archival: asset("new-images/interioir.jpeg"),
    tools: asset("images/craft/470286162_17868517701256305_963057592906924899_n.jpg"),
    portrait: asset("artists/team-01.jpeg"),
  },
  grooming: {
    haircuts: asset("images/470421698_17868791586256305_5700655779792114071_n.jpg"),
    beard: asset("images/476490439_17875739802256305_5382049928459756006_n.jpg"),
    facial: asset("images/488316381_17882381796256305_7693056712276859620_n.jpg"),
    moroccanBath: {
      video: asset("videos/cloths.mp4"),
      poster: asset("images/500101694_1843388119848740_2928094562129408245_n.jpg"),
    },
  },
  brands: {
    philipMartin: asset("brands/philip-martin.jpeg"),
  },
  logo: {
    footer: asset("logo/footer-logo.png"),
    success: asset("logo/success-logo.png"),
  },
  team: {
    member01: asset("artists/team-01.jpeg"),
    member02: asset("artists/team-02.webp"),
    member03: asset("artists/team-03.webp"),
    member04: asset("artists/team-04.webp"),
  },
} as const;
