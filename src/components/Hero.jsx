import { useState, useEffect } from "react";
import AvailabilityBadge from "./AvailabilityBadge";
import { MessageCircle, Phone, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

// ✅ IMPORT IMAGES
import img1 from "../assets/ertiga1.jpg";
import img2 from "../assets/ertiga2.jpg";
import img3 from "../assets/ertiga3.jpg";
import img4 from "../assets/ertiga4.jpg";
import img5 from "../assets/ertiga5.jpg";
import img6 from "../assets/ertiga6.jpg";

const images = [img1, img2, img3, img4, img5, img6];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length);
      setFade(true);
    }, 200);
  };

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + images.length) % images.length);
      setFade(true);
    }, 200);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-slate-900 pt-32 pb-20 lg:pt-48 lg:pb-32">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-600 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 mb-6">
              <AvailabilityBadge status="available" />
              <span className="flex items-center gap-1.5 text-xs font-bold text-indigo-300 uppercase tracking-widest bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                <Sparkles size={12} /> Premium Service
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tight">
              Premium Ertiga <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                For Every Journey
              </span>
            </h2>

            <p className="text-xl text-slate-300 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Experience comfort and reliability. Specialized in weddings,
              local trips, and outstation travels with expert drivers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://wa.me/919193693736"
                className="group flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-xl shadow-emerald-500/20 transition-all active:scale-95"
              >
                <MessageCircle size={20} className="group-hover:rotate-12 transition-transform" />
                WhatsApp Booking
              </a>

              <a
                href="tel:919193693736"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-2xl text-lg font-bold transition-all active:scale-95"
              >
                <Phone size={20} />
                Direct Call
              </a>
            </div>
          </div>

          {/* RIGHT – CAROUSEL */}
          <div className="relative group">
            {/* Visual Frame Decor */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/30 to-blue-500/30 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative aspect-[4/3] w-full max-w-xl mx-auto overflow-hidden rounded-[2rem] border-4 border-white/10 shadow-2xl">
              <img
                src={images[index]}
                alt="Ertiga Fleet"
                className={`w-full h-full object-cover transition-all duration-500 ${fade ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
              />

              {/* Navigation Controls */}
              <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={handlePrev}
                  className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-indigo-600 transition-all"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={handleNext}
                  className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-indigo-600 transition-all"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Image Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all ${i === index ? 'w-8 bg-white' : 'w-2 bg-white/40'}`}
                  ></div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}





