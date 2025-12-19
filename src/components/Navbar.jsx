import { useEffect, useState } from "react";

const links = [
  { id: "services", label: "Services" },
  { id: "car", label: "Our Car" },
  { id: "book", label: "Book Now" },
];

export default function Navbar() {
  const [active, setActive] = useState("services");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
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
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md border-b">

      {/* 🔹 TOP BAR */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-1 flex justify-between items-center">

          {/* LOGO */}
          <div className="flex items-center h-15 gap-3">
            <img
              src="/logo.png"
              alt="Anant Yatra"
              className="h-16 w-auto object-contain"
            />
            <div className="hidden sm:block leading-tight">
              <p className="text-lg font-extrabold tracking-wide text-blue-700">
                ANANT YATRA
              </p>
              <p className="text-[11px] uppercase tracking-widest text-gray-500">
                Safar Jo Kabhi Khatam Na Ho
              </p>
            </div>
          </div>

          {/* CONTACT */}
          <div className="hidden sm:flex items-center gap-6 text-13px">
            <a
              href="tel:+919193693736"
              className="text-gray-700 hover:text-blue-700 transition font-medium"
            >
              📞 +91 91936 93736
            </a>

            <a
              href="https://wa.me/919193693736"
              className="bg-green-500 text-white px-5 py-2 rounded-full text-15px font-semibold
                         hover:bg-green-600 shadow transition"
            >
              WhatsApp
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setOpen(!open)}
            className="sm:hidden text-3xl text-gray-700"
          >
            ☰
          </button>
        </div>
      </div>

      {/* 🔹 MENU BAR */}
      <div className="bg-gray-50 hidden sm:block">
        <div className="max-w-7xl mx-auto px-6">
          <ul className="flex gap-10 text-sm font-semibold">
            {links.map((l) => (
              <li key={l.id} className="relative py-3">
                <a
                  href={`#${l.id}`}
                  className={`transition ${
                    active === l.id
                      ? "text-blue-700"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {l.label}
                </a>

                {active === l.id && (
                  <span className="absolute left-0 -bottom-0.5 w-full h-0.75 bg-blue-600 rounded-full"></span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 🔹 MOBILE MENU */}
      {open && (
        <div className="sm:hidden bg-white border-t shadow-lg">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className={`block px-6 py-4 border-b transition ${
                active === l.id
                  ? "bg-blue-50 text-blue-700 font-semibold"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {l.label}
            </a>
          ))}

          <div className="p-4 flex gap-3">
            <a
              href="tel:+919193693736"
              className="flex-1 text-center border rounded-lg py-2 font-medium"
            >
              Call
            </a>
            <a
              href="https://wa.me/919193693736"
              className="flex-1 text-center bg-green-500 text-white rounded-lg py-2 font-semibold"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}




