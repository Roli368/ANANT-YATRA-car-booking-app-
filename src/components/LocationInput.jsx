import { useEffect, useState } from "react";
import { MapPin, Search, Loader2, X, CheckCircle2 } from "lucide-react";

export default function LocationInput({ label, value, onSelect, placeholder }) {
  const [query, setQuery] = useState(value || "");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  // 🔁 Debounced search logic remains functionally identical to preserve stability
  useEffect(() => {
    if (query.length < 3) {
      setResults([]);
      return;
    }

    const timer = setTimeout(() => {
      fetchResults(query);
    }, 400);

    return () => clearTimeout(timer);
  }, [query]);

  const fetchResults = async (text) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(text)}&addressdetails=1&limit=5`
      );
      const data = await res.json();
      setResults(data);
    } catch (err) {
      console.error("Location search failed:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setQuery("");
    setResults([]);
    setIsSelected(false);
    onSelect(null); // Clear parent state to prevent invalid calculations
  };

  return (
    <div className="relative group w-full">
      {/* Refined Typography for Labels */}
      <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">
        {label.includes("Pickup") ? <MapPin size={12} className="text-indigo-600" /> : <Search size={12} />}
        {label}
      </label>

      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsSelected(false);
          }}
          placeholder={placeholder}
          className={`w-full border-none p-4 pl-12 rounded-2xl font-semibold transition-all shadow-sm ${
            isSelected 
              ? "bg-emerald-50 text-emerald-900 ring-2 ring-emerald-500/20" 
              : "bg-slate-50 text-slate-700 focus:ring-2 focus:ring-indigo-500/20"
          }`}
        />

        {/* Dynamic Status Icons */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
          {isSelected ? <CheckCircle2 size={18} className="text-emerald-500" /> : <Search size={18} />}
        </div>

        {/* Action Button: Clear/Loading */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
          {loading && <Loader2 size={18} className="text-indigo-500 animate-spin" />}
          {query.length > 0 && !loading && (
            <button 
              onClick={handleClear} 
              className="p-1 hover:bg-slate-200 rounded-full text-slate-400 transition-colors"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      {/* RESULTS DROPDOWN - High Z-Index Layering */}
      {results.length > 0 && !isSelected && (
        <ul className="absolute z-[9999] w-full bg-white border border-slate-100 rounded-2xl mt-2 shadow-2xl shadow-indigo-100/50 max-h-64 overflow-auto animate-slideDown overflow-x-hidden">
          {results.map((place) => (
            <li
              key={place.place_id}
              onClick={() => {
                // Ensure coordinate object is sent to parent
                onSelect(place);
                setQuery(place.display_name);
                setResults([]);
                setIsSelected(true);
              }}
              className="group/item px-4 py-3 text-sm cursor-pointer hover:bg-indigo-50 flex items-start gap-3 transition-colors border-b border-slate-50 last:border-none"
            >
              <div className="mt-1 p-1.5 rounded-lg bg-slate-50 group-hover/item:bg-white transition-colors">
                <MapPin size={14} className="text-slate-400 group-hover/item:text-indigo-600" />
              </div>
              <span className="text-slate-600 group-hover/item:text-slate-900 font-medium leading-tight pt-1">
                {place.display_name}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}