import { useEffect, useState } from "react";
import { Phone, MessageCircle, Menu, X, ChevronRight } from "lucide-react";

const links = [
  { id: "services", label: "Services" },
  { id: "car", label: "Our Car" },
  { id: "book", label: "Book Now" },
];

export default function Navbar() {
  const [active, setActive] = useState("services");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Background effect logic
      setScrolled(window.scrollY > 20);

      // Active section tracking logic
      links.forEach((l) => {
        const el = document.getElementById(l.id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 140 && rect.bottom >= 140) {
          setActive(l.id);
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${scrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg border-b border-slate-200 py-1"
          : "bg-white py-3"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">

          {/* 🔹 LOGO SECTION */}
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="relative">
              <img
                src="/logo.png"
                alt="Yuvi Yatra Travels"
                className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <div className="absolute -inset-1 bg-indigo-500/10 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="hidden sm:block">
              <p className="text-xl font-black tracking-tighter text-slate-900">
                YUVI <span className="text-indigo-600">YATRA TRAVELS</span>
              </p>
            </div>
          </div>

          {/* 🔹 DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-2">
            <ul className="flex items-center gap-1 bg-slate-100/50 p-1 rounded-full border border-slate-200/50 mr-4">
              {links.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${active === l.id
                        ? "bg-white text-indigo-600 shadow-sm"
                        : "text-slate-500 hover:text-slate-900"
                      }`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <a
                href="tel:+919193693736"
                className="p-2.5 rounded-full bg-slate-100 text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                title="Call Us"
              >
                <Phone size={18} />
              </a>
              <a
                href="https://wa.me/919193693736"
                className="flex items-center gap-2 bg-emerald-500 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-emerald-600 shadow-lg shadow-emerald-200 transition-all active:scale-95"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>
          </nav>

          {/* 🔹 MOBILE TOGGLE */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden p-2 rounded-xl bg-slate-100 text-slate-900"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* 🔹 MOBILE MENU */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-2xl transition-all duration-300 origin-top ${open ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
          }`}
      >
        <div className="p-6 space-y-4">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className={`flex items-center justify-between p-4 rounded-2xl transition-all ${active === l.id
                  ? "bg-indigo-50 text-indigo-600 font-bold"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                }`}
            >
              {l.label}
              <ChevronRight size={18} className={active === l.id ? "opacity-100" : "opacity-0"} />
            </a>
          ))}

          <div className="grid grid-cols-2 gap-4 pt-4">
            <a
              href="tel:+919193693736"
              className="flex items-center justify-center gap-2 py-4 rounded-2xl bg-slate-900 text-white font-bold text-sm"
            >
              <Phone size={18} /> Call Now
            </a>
            <a
              href="https://wa.me/919193693736"
              className="flex items-center justify-center gap-2 py-4 rounded-2xl bg-emerald-500 text-white font-bold text-sm"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}


