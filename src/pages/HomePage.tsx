// src/pages/HomePage.tsx
import { useEffect, useState } from 'react';
import { getVenues } from '@/api/venues';
import type { Venue } from '@/api/venues';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [venues, setVenues] = useState<Venue[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await getVenues();
        setVenues(res.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-600 to-brand-700 text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Find your perfect venue
        </h1>
        <p className="text-white/80 max-w-2xl mx-auto mb-8">
          Browse venues, compare options, and book your next stay in just a few
          clicks.
        </p>
      </section>

      {/* Popular Venues */}
      <section className="px-6 py-12 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Popular Venues</h2>

        {loading && <p>Loading venues...</p>}
        {error && <p className="text-red-600">{error}</p>}

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {venues.map((venue) => {
            console.log('Venue object:', venue); // 👈 Debug log

            if (!venue.id) {
              return (
                <div
                  key={Math.random()}
                  className="bg-gray-200 text-gray-500 rounded-lg p-4"
                >
                  <p>No details available</p>
                </div>
              );
            }

            return (
              <Link
                to={`/venue/${venue.id}`}
                key={venue.id}
                className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
              >
                {venue.media?.[0]?.url && (
                  <img
                    src={venue.media[0].url}
                    alt={venue.media[0].alt || venue.name}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{venue.name}</h3>
                  <p className="text-sm text-neutral-600">
                    {venue.location?.city || 'Unknown'} · ${venue.price}/night
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
