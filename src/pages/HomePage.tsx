// src/pages/HomePage.tsx
import { useEffect, useState, useRef } from 'react';
import { getVenues } from '@/api/venues';
import type { Venue } from '@/api/venues';
import { Link, useNavigate } from 'react-router-dom';

export default function HomePage() {
  const [venues, setVenues] = useState<Venue[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const popularRef = useRef<HTMLDivElement | null>(null);

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

  const filteredVenues = venues.filter(
    (venue) =>
      venue.name.toLowerCase().includes(search.toLowerCase()) ||
      venue.location?.city?.toLowerCase().includes(search.toLowerCase())
  );

  function handleBrowseVenues() {
    popularRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  function handleGetStarted() {
    navigate('/auth/sign-up');
  }

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

        {/* Search */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by city or venue name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-3 rounded-md w-full sm:w-96 border border-neutral-200"
          />
          <button className="bg-white text-brand-600 font-semibold px-6 py-3 rounded-md hover:bg-neutral-100 transition">
            Search
          </button>
        </div>

        {/* Hero Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={handleBrowseVenues}
            className="bg-white text-brand-600 font-semibold px-6 py-3 rounded-md hover:bg-neutral-100 transition w-full sm:w-auto shadow"
          >
            Browse Venues
          </button>
          <button
            onClick={handleGetStarted}
            className="border border-white text-white font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-brand-600 transition w-full sm:w-auto"
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Popular Venues */}
      <section ref={popularRef} className="px-6 py-12 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Popular Venues</h2>

        {loading && <p>Loading venues...</p>}
        {error && <p className="text-red-600">{error}</p>}

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredVenues.map((venue) => (
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
          ))}
        </div>
      </section>
    </>
  );
}
