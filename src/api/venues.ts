import { api } from './client';

// Define Venue type
export interface Venue {
  id: string;
  name: string;
  description: string;
  media: { url: string; alt?: string }[];
  location?: { city?: string };
  price: number;
  maxGuests: number;
}

// Get all venues
export async function getVenues(): Promise<Venue[]> {
  const res = await api<Venue[]>('/holidaze/venues');
  return res; // ✅ now returns Venue[]
}

// Get single venue by ID
export async function getVenue(id: string): Promise<Venue> {
  const res = await api<Venue>(`/holidaze/venues/${id}`);
  return res;
}
