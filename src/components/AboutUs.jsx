export default function AboutUs() {
  return (
    <section id="about" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            About Anant Yatra
          </h3>

          <p className="text-gray-600 leading-relaxed mb-6">
            <strong>Anant Yatra</strong> is a trusted car booking service focused on
            providing comfortable, safe, and reliable journeys for families,
            weddings, airport transfers, and long-distance travel.
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            With a well-maintained Ertiga and an experienced driver, our mission
            is simple — make every journey smooth, stress-free, and memorable.
            We believe travel should be easy, transparent, and on time.
          </p>

          {/* HIGHLIGHTS */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <span className="text-blue-600 text-xl">✔</span>
              <span className="text-sm text-gray-700">
                Clean & Comfortable Car
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-blue-600 text-xl">✔</span>
              <span className="text-sm text-gray-700">
                Professional Driver
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-blue-600 text-xl">✔</span>
              <span className="text-sm text-gray-700">
                Transparent Pricing
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-blue-600 text-xl">✔</span>
              <span className="text-sm text-gray-700">
                24×7 Booking Support
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h4 className="text-xl font-semibold mb-6 text-gray-800">
            Why Choose Us?
          </h4>

          <ul className="space-y-4 text-gray-600 text-sm">
            <li className="flex gap-3">
              <span className="text-green-500">🚗</span>
              Comfortable Ertiga suitable for family & events
            </li>
            <li className="flex gap-3">
              <span className="text-green-500">⏰</span>
              On-time pickup & drop guaranteed
            </li>
            <li className="flex gap-3">
              <span className="text-green-500">💬</span>
              Direct WhatsApp booking, no middlemen
            </li>
            <li className="flex gap-3">
              <span className="text-green-500">🧾</span>
              No hidden charges, clear fare calculation
            </li>
          </ul>

          {/* CTA */}
          <div className="mt-8">
            <a
              href="#book"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full
                         hover:bg-blue-700 transition font-medium"
            >
              Book Your Ride
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
