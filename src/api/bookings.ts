// src/api/bookings.ts

export interface Booking {
  id: string;
  dateFrom: string;
  dateTo: string;
  guests: number;
  venue: {
    id: string;
    name: string;
    media?: { url: string }[];
  };
}

export async function createBooking(
  booking: {
    dateFrom: string;
    dateTo: string;
    guests: number;
    venueId: string;
  },
  token: string
) {
  return fetch(`${import.meta.env.VITE_API_URL}/bookings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(booking),
  }).then((res) => {
    if (!res.ok) {
      throw new Error(`API error ${res.status}: ${res.statusText}`);
    }
    return res.json();
  });
}

export async function getMyBookings(token: string) {
  return fetch(`${import.meta.env.VITE_API_URL}/bookings?_customer=true`, {
    headers: { Authorization: `Bearer ${token}` },
  }).then((res) => {
    if (!res.ok) {
      throw new Error(`API error ${res.status}: ${res.statusText}`);
    }
    return res.json();
  });
}
