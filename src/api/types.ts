// src/api/types.ts

export interface Venue {
  id: string;
  name: string;
  description: string;
  media: { url: string; alt: string }[];
  location?: { city?: string };
  price: number;
  maxGuests: number;
}
