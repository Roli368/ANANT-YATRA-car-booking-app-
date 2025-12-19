
import { useEffect, useState } from "react";

const reviews = [
  {
    name: "Amit Sharma",
    place: "Lucknow",
    rating: 5,
    text: "Very comfortable journey. Driver was polite and on time. Highly recommended.",
  },
  {
    name: "Neha Verma",
    place: "Sitapur",
    rating: 5,
    text: "Booked for airport drop. Clean car and smooth ride. Totally satisfied.",
  },
  {
    name: "Rahul Singh",
    place: "Lakhimpur",
    rating: 4,
    text: "Good experience. Pricing was transparent and service was reliable.",
  },
];

export default function Reviews() {
  const [index, setIndex] = useState(0);

  // 🔁 AUTO SLIDER
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const r = reviews[index];

  return (
    <section className="py-2 bg-gray-50" id="reviews">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* HEADING */}
        <h3 className="text-3xl md:text-4xl font-bold mb-3">
          Customer Reviews
        </h3>
        <p className="text-gray-600 mb-6">
          Trusted by happy customers across the region
        </p>

        {/* GOOGLE STYLE BADGE */}
        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow mb-10">
          <span className="text-yellow-400 text-lg">★★★★★</span>
          <span className="text-sm text-gray-700 font-medium">
            4.9 rating on Google
          </span>
        </div>

        {/* REVIEW CARD */}
        <div
          key={index}
          className="bg-white rounded-2xl p-8 shadow-lg
                     transition-all duration-500"
        >
          {/* STARS (ANIMATED) */}
          <div className="flex justify-center mb-4 group">
            {Array.from({ length: r.rating }).map((_, i) => (
              <span
                key={i}
                className="text-yellow-400 text-2xl
                           group-hover:scale-125 transition-transform"
              >
                ★
              </span>
            ))}
            {Array.from({ length: 5 - r.rating }).map((_, i) => (
              <span key={i} className="text-gray-300 text-2xl">★</span>
            ))}
          </div>

          {/* TEXT */}
          <p className="text-gray-700 mb-6 italic leading-relaxed">
            “{r.text}”
          </p>

          {/* USER */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-11 w-11 rounded-full bg-blue-600 text-white
                            flex items-center justify-center font-bold">
              {r.name.charAt(0)}
            </div>
            <div className="text-left">
              <p className="font-semibold">{r.name}</p>
              <p className="text-xs text-gray-500">{r.place}</p>
            </div>
          </div>
        </div>

        {/* SLIDER DOTS */}
        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full transition ${
                i === index ? "bg-blue-600 w-4" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>

        {/* WHATSAPP CTA */}
        <div className="mt-10">
          <a
            href="https://wa.me/919193693736?text=Hi%20Anant%20Yatra%2C%20I%20want%20to%20leave%20a%20review"
            className="inline-flex items-center gap-2 bg-green-500 text-white
                       px-6 py-3 rounded-full font-medium
                       hover:bg-green-600 hover:scale-105 transition"
          >
            💬 Leave a Review on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
