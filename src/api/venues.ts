import { api } from './client';

// Define Venue type
export interface Venue {
  id: string;
  name: string;
  description: string;
  media: { url: string; alt: string }[];
  location?: { city?: string };
  price: number;
  maxGuests: number;
}

// Get all venues
export async function getVenues() {
  return api<{ data: Venue[] }>('/holidaze/venues');
}

// Get single venue by ID
export async function getVenue(id: string) {
  return api<{ data: Venue }>(`/holidaze/venues/${id}`);
}
