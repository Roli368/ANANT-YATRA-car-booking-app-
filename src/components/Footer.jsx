export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* BRAND */}
        <div>
          <img src="/logo.png" alt="Anant Yatra" className="h-14 mb-4" />
          <p className="text-xl font-bold text-white">
            Anant Yatra
          </p>
          <p className="text-sm text-gray-400 mt-1 mb-4">
            Safar Jo Kabhi Khatam Na Ho
          </p>

          <div className="flex gap-3">
            <a
               href="https://wa.me/919193693736"
              className="bg-green-500 px-4 py-2 rounded-lg text-white hover:bg-green-600 transition"
            >
              WhatsApp
            </a>
            <a
              href="tel:919193693736"
              className="bg-[#D48A1E] px-4 py-2 rounded-lg text-white hover:opacity-90 transition"
            >
              Call Now
            </a>
          </div>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Our Services
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              "Wedding Car Booking",
              "Reception & Party",
              "Airport Pickup & Drop",
              "Local & Outstation Travel",
            ].map((item, i) => (
              <li
                key={i}
                className="hover:text-white hover:translate-x-1 transition cursor-pointer"
              >
                → {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT / TRUST */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Contact & Trust
          </h4>

          <ul className="space-y-2 text-sm mb-6">
            <li>📞 919193693736</li>
            <li>📍 Available in your city</li>
            <li>⏰ 24×7 Booking Support</li>
          </ul>

          <div className="bg-gray-700/50 p-4 rounded-xl text-sm text-gray-200">
            ✔ Clean & well-maintained car  
            <br />
            ✔ Professional driver  
            <br />
            ✔ Transparent pricing
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Anant Yatra • All Rights Reserved
      </div>
    </footer>
  );
}

