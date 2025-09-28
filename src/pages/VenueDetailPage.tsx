// src/pages/VenueDetailPage.tsx
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getVenue } from '@/api/venues';
import { createBooking } from '@/api/bookings';
import { useAuth } from '@/lib/useAuth';

export default function VenueDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token, isAuthed } = useAuth();

  const [venue, setVenue] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Booking form state
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [guests, setGuests] = useState(1);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        if (!id) return;
        const res = await getVenue(id);
        setVenue(res.data);
      } catch (e: any) {
        setError(e.message || 'Failed to load venue');
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  async function handleBooking(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);

    if (!isAuthed || !token) {
      navigate('/auth/sign-in', { state: { from: `/venue/${id}` } });
      return;
    }

    try {
      // 🔍 Debugging: log the venueId being sent
      console.log('Booking with venueId:', id);

      await createBooking(
        { dateFrom, dateTo, guests, venueId: String(id) },
        token
      );

      setMessage('🎉 Booking successful!');
      navigate('/me/bookings');
    } catch (err: any) {
      setMessage('Booking failed: ' + err.message);
    }
  }

  if (loading) return <div className="p-8">Loading venue...</div>;
  if (error) return <div className="p-8 text-red-500">Error: {error}</div>;
  if (!venue) return <div className="p-8">Venue not found.</div>;

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">{venue.name}</h1>

      {venue.media?.[0]?.url && (
        <img
          src={venue.media[0].url}
          alt={venue.media[0].alt || venue.name}
          className="rounded-lg w-full max-w-3xl"
        />
      )}

      <p>{venue.description}</p>

      <p>
        {venue.location?.city || 'Unknown location'} · ${venue.price}/night ·
        max {venue.maxGuests} guests
      </p>

      {/* Booking Form */}
      <form
        onSubmit={handleBooking}
        className="bg-gray-50 p-4 rounded-lg shadow max-w-md space-y-4"
      >
        <div>
          <label className="block text-sm font-medium">From</label>
          <input
            type="date"
            value={dateFrom}
            onChange={(e) => setDateFrom(e.target.value)}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">To</label>
          <input
            type="date"
            value={dateTo}
            onChange={(e) => setDateTo(e.target.value)}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Guests</label>
          <input
            type="number"
            min="1"
            max={venue.maxGuests}
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="w-full border rounded p-2"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Confirm Booking
        </button>
      </form>

      {message && <p className="text-center mt-4">{message}</p>}
    </div>
  );
}
