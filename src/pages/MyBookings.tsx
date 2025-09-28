// src/pages/MyBookings.tsx
import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/useAuth';

type Booking = {
  id: string;
  dateFrom: string;
  dateTo: string;
  guests: number;
  venue: {
    id: string;
    name: string;
    media?: { url: string; alt?: string }[];
  };
};

export default function MyBookings() {
  const { token, name } = useAuth();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        if (!token || !name) return;
        const res = await fetch(
          `${
            import.meta.env.VITE_API_URL
          }/profiles/${name}/bookings?_venue=true`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!res.ok) throw new Error('Failed to fetch bookings');

        const data = await res.json();
        setBookings(data.data || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [token, name]);

  function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }

  if (loading) return <div className="p-8">Loading your bookings...</div>;
  if (error)
    return (
      <div className="p-8 text-red-500">Error loading bookings: {error}</div>
    );

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">📅 My Bookings</h1>

      {bookings.length === 0 ? (
        <p className="text-gray-600">You have no bookings yet.</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 space-y-2"
            >
              {booking.venue?.media?.[0]?.url && (
                <img
                  src={booking.venue.media[0].url}
                  alt={booking.venue.media[0].alt || booking.venue.name}
                  className="w-full h-40 object-cover rounded"
                />
              )}
              <h2 className="font-semibold text-lg">
                {booking.venue?.name || 'Unnamed Venue'}
              </h2>
              <p className="text-sm text-gray-600">
                {formatDate(booking.dateFrom)} → {formatDate(booking.dateTo)}
              </p>
              <p className="text-sm">Guests: {booking.guests}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
