import { useEffect, useState } from "react";
import { Star, Quote, Send, MapPin, User, PenLine, Sparkles } from "lucide-react";

const DEFAULT_REVIEWS = [
  { name: "Amit Sharma", place: "Lucknow", rating: 5, text: "Very comfortable journey. Driver was polite and on time. Highly recommended." },
  { name: "Neha Verma", place: "Sitapur", rating: 5, text: "Booked for airport drop. Clean car and smooth ride. Totally satisfied." },
  { name: "Rahul Singh", place: "Lakhimpur", rating: 4, text: "Good experience. Pricing was transparent and service was reliable." },
];

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [form, setForm] = useState({ name: "", place: "", rating: 5, text: "" });

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("reviews"));
    setReviews(stored?.length ? stored : DEFAULT_REVIEWS);
  }, []);

  useEffect(() => {
    if (!reviews.length) return;
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % reviews.length);
        setFade(true);
      }, 400);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews]);

  const addReview = () => {
    if (!form.name || !form.text) return alert("Please fill name and review");
    const updated = [form, ...reviews];
    setReviews(updated);
    localStorage.setItem("reviews", JSON.stringify(updated));
    setForm({ name: "", place: "", rating: 5, text: "" });
    setIndex(0);
  };

  if (!reviews.length) return null;
  const r = reviews[index];

  return (
    <section className="py-12 bg-slate-50/50" id="reviews">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Compact Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 rounded-full text-indigo-600 text-[10px] font-bold uppercase tracking-wider mb-2">
            <Sparkles size={12} /> <span>Reviews</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-slate-900">
            Guest <span className="text-indigo-600">Feedback</span>
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Side: Compact Slider */}
          <div className="relative">
            <div className={`transition-all duration-500 ${fade ? 'opacity-100' : 'opacity-0 translate-y-1'}`}>
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 relative">
                <Quote className="text-indigo-500/5 absolute top-4 right-4" size={40} />
                
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill={i < r.rating ? "#FACC15" : "none"} className={i < r.rating ? "text-yellow-400" : "text-slate-200"} />
                  ))}
                </div>

                <p className="text-sm md:text-base text-slate-700 font-medium italic mb-6 leading-snug">
                  “{r.text}”
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-50">
                  <div className="h-10 w-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center text-sm font-bold shadow-sm">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 leading-none">{r.name}</p>
                    <p className="text-[11px] text-slate-400 flex items-center gap-1 mt-1 font-medium">
                      <MapPin size={10} /> {r.place}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Compact Pagination */}
            <div className="flex gap-1.5 mt-4 justify-center lg:justify-start lg:ml-4">
              {reviews.map((_, i) => (
                <div key={i} className={`h-1 rounded-full transition-all duration-500 ${i === index ? 'w-6 bg-indigo-600' : 'w-1.5 bg-slate-200'}`} />
              ))}
            </div>
          </div>

          {/* Right Side: Compact Form */}
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <h4 className="text-sm font-bold text-slate-900 mb-5 flex items-center gap-2">
              <PenLine size={16} className="text-indigo-600" /> Share Experience
            </h4>

            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                  <input
                    placeholder="Name"
                    className="w-full bg-slate-50 border-none focus:ring-1 focus:ring-indigo-500/30 p-2.5 pl-9 rounded-xl text-xs font-semibold text-slate-700 transition-all"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                  <input
                    placeholder="City"
                    className="w-full bg-slate-50 border-none focus:ring-1 focus:ring-indigo-500/30 p-2.5 pl-9 rounded-xl text-xs font-semibold text-slate-700 transition-all"
                    value={form.place}
                    onChange={(e) => setForm({ ...form, place: e.target.value })}
                  />
                </div>
              </div>

              <div className="relative">
                <Star className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                <select
                  className="w-full bg-slate-50 border-none focus:ring-1 focus:ring-indigo-500/30 p-2.5 pl-9 rounded-xl text-xs font-bold text-slate-700 appearance-none cursor-pointer"
                  value={form.rating}
                  onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })}
                >
                  <option value={5}>5 Stars - Excellent</option>
                  <option value={4}>4 Stars - Great</option>
                  <option value={3}>3 Stars - Good</option>
                </select>
              </div>

              <textarea
                placeholder="Message..."
                className="w-full bg-slate-50 border-none focus:ring-1 focus:ring-indigo-500/30 p-3 rounded-xl text-xs font-medium text-slate-700 transition-all resize-none"
                rows={2}
                value={form.text}
                onChange={(e) => setForm({ ...form, text: e.target.value })}
              />

              <button
                onClick={addReview}
                className="w-full bg-slate-900 hover:bg-indigo-600 text-white py-3 rounded-xl font-bold text-xs transition-all active:scale-95 flex items-center justify-center gap-2 group"
              >
                Post Review <Send size={14} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}