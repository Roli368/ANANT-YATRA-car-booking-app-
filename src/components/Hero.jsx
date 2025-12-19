import { useState, useEffect } from "react";
import AvailabilityBadge from "./AvailabilityBadge";

// ✅ IMPORT IMAGES (important)
import img1 from "../assets/ertiga1.jpg";
import img2 from "../assets/ertiga2.jpg";
import img3 from "../assets/ertiga3.jpg";
import img4 from "../assets/ertiga4.jpg";
import img5 from "../assets/ertiga5.jpg";
import img6 from "../assets/ertiga6.jpg";


const images = [img1, img2, img3, img4, img5, img6];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-14">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>
          <AvailabilityBadge status="available" />

          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Ertiga Car Booking for <br /> Weddings & Events 🚗
          </h2>

          <p className="text-lg text-blue-100 mb-6">
            Comfortable • Reliable • On-Time Service
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="https://wa.me/919193693736"
              className="bg-green-500 px-6 py-3 rounded-lg text-lg shadow hover:bg-green-600"
            >
              WhatsApp Booking
            </a>

            <a
              href="tel:919193693736"
              className="bg-white text-blue-700 px-6 py-3 rounded-lg text-lg shadow"
            >
              Call Now
            </a>
          </div>
        </div>

        {/* RIGHT – IMAGE */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-[260px] sm:h-[300px] md:h-[360px]">
            <img
              src={images[index]}
              alt="Ertiga Car"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />

            {/* Controls */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 text-black w-9 h-9 rounded-full"
            >
              ◀
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 text-black w-9 h-9 rounded-full"
            >
              ▶
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}






