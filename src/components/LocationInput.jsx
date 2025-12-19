import { useEffect, useState } from "react";

export default function LocationInput({ label, value, onSelect, placeholder }) {
  const [query, setQuery] = useState(value || "");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🔁 Debounced search
  useEffect(() => {
    if (query.length < 3) {
      setResults([]);
      return;
    }

    const timer = setTimeout(() => {
      fetchResults(query);
    }, 400); // debounce

    return () => clearTimeout(timer);
  }, [query]);

  const fetchResults = async (text) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          text
        )}&addressdetails=1&limit=5`
      );
      const data = await res.json();
      setResults(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      <label className="block text-sm font-medium mb-1">
        {label}
      </label>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
      />

      {/* LOADING */}
      {loading && (
        <div className="absolute right-3 top-11 text-xs text-gray-400">
          Searching…
        </div>
      )}

      {/* RESULTS */}
      {results.length > 0 && (
        <ul className="absolute z-20 w-full bg-white border rounded-lg mt-1 shadow-lg max-h-56 overflow-auto">
          {results.map((place) => (
            <li
              key={place.place_id}
              onClick={() => {
                onSelect(place);
                setQuery(place.display_name);
                setResults([]);
              }}
              className="px-4 py-2 text-sm cursor-pointer hover:bg-blue-50"
            >
              📍 {place.display_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
