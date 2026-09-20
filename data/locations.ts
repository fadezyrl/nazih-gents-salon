export type LocationId = "dubai" | "sharjah" | "rak";

export type LocationRecord = {
  id: LocationId;
  lat: number;
  lng: number;
  zoom: number;
  directionsHref: string;
};

export const locations: LocationRecord[] = [
  {
    id: "dubai",
    lat: 25.2198,
    lng: 55.4095,
    zoom: 16,
    directionsHref:
      "https://www.google.com/maps/search/?api=1&query=Shop+08-B+Etihad+Mall+Mirdif+Dubai",
  },
  {
    id: "sharjah",
    lat: 25.3276,
    lng: 55.3862,
    zoom: 16,
    directionsHref:
      "https://www.google.com/maps/search/?api=1&query=Bin+Rashid+Tower+Buhaira+Corniche+Al+Majaz+Sharjah",
  },
  {
    id: "rak",
    lat: 25.7892,
    lng: 55.9428,
    zoom: 16,
    directionsHref:
      "https://www.google.com/maps/search/?api=1&query=10+31C+St+Al+Riffa+Ras+Al+Khaimah",
  },
];

export const buildMapEmbedUrl = (
  lat: number,
  lng: number,
  zoom: number,
): string =>
  `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&hl=en&output=embed`;
