
import { Phone, MessageCircle, MapPin, Clock, CheckCircle2, Facebook, Instagram, Mail, Magnet, User } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 mt-24 relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-yellow-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRAND SECTION */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Yuvi Yatra Travels" className="h-12 w-auto brightness-110" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-2xl font-bold text-white tracking-tight">Yuvi Yatra Travels</h3>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-400">
              Your trusted partner for premium car rentals in Shahjahanpur. We prioritize comfort, safety, and punctual service for every journey.
            </p>

            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/1AU1S9r7wr/" aria-label="Visit our Facebook page" className="p-2 bg-slate-900 rounded-full hover:text-white hover:bg-indigo-600 transition-all"><Facebook size={18} /></a>
              <a href="https://www.instagram.com/yuviyatratravels?igsh=N2preXN0YW4xb3c4" aria-label="Visit our Instagram page" className="p-2 bg-slate-900 rounded-full hover:text-white hover:bg-pink-600 transition-all"><Instagram size={18} /></a>
              <a href="mailto:yuviyatratravels@gmail.com" aria-label="Email us" className="p-2 bg-slate-900 rounded-full hover:text-white hover:bg-slate-700 transition-all"><Mail size={18} /></a>
            </div>
          </div>

          {/* QUICK LINKS/SERVICES */}
          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-yellow-500"></span>
              Our Services
            </h4>
            <ul className="space-y-4 text-sm">
              {[
                "Wedding Car Booking",
                "Reception & Party",
                "Airport Pickup & Drop",
                "Local & Outstation Travel",
              ].map((item, i) => (
                <li key={i} className="group flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                  <span className="text-yellow-500 group-hover:translate-x-1 transition-transform">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-yellow-500"></span>
              Get in Touch
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-yellow-500 shrink-0" />
                <span>Shahjahanpur Roadways Bus Stand, Uttar Pradesh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-yellow-500 shrink-0" />
                <a href="tel:919193693736" className="hover:text-white transition">+91 9193693736</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-yellow-500 shrink-0" />
                <span>24/7 Booking Available</span>
              </li>

              <li className="flex items-center gap-3">
                <User size={18} className="text-yellow-500 shrink-0" />
                <span>Drivers are also available</span>
              </li>


            </ul>
          </div>

          {/* ACTION & TRUST */}
          <div className="space-y-6">
            <div className="bg-slate-900/50 p-5 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-white uppercase">
                <CheckCircle2 size={16} className="text-emerald-500" /> Why Trust Us?
              </div>
              <ul className="text-[11px] space-y-2 text-slate-400">
                <li>• Clean & Sanitized Vehicles</li>
                <li>• Verified Professional Drivers</li>
                <li>• No Hidden Fuel or Night Charges</li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <a href="https://wa.me/919193693736" className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-emerald-900/20">
                <MessageCircle size={20} /> WhatsApp Us
              </a>
              <a href="tel:919193693736" className="flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-amber-900/20">
                <Phone size={18} /> Instant Call
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500">
          <p>© {currentYear} Yuvi Yatra Travels. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
            <a href="#" className="hover:text-slate-300">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}