import { useState } from "react";

export default function TaxiFare() {
  const [activeTab, setActiveTab] = useState("ROUND");

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <h2 className="text-3xl font-bold text-gray-900">
          Taxi Fare Details
        </h2>
        <p className="text-gray-500 mt-1">
          Transparent pricing • No hidden charges
        </p>

        {/* TABS */}
        <div className="flex gap-8 mt-8 border-b text-sm font-medium">
          {[
            { key: "ROUND", label: "Round Trip" },
            { key: "ONE", label: "One Way" },
            { key: "LOCAL", label: "Local Package" },
            { key: "AIRPORT", label: "Airport Transfer" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative pb-3 transition ${
                activeTab === tab.key
                  ? "text-black font-semibold"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {tab.label}
              {activeTab === tab.key && (
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-500 rounded-full transition-all duration-300"></span>
              )}
            </button>
          ))}
        </div>

        {/* ================= DAILY PACKAGE ================= */}
        <div className="mt-10 border rounded-xl overflow-hidden shadow-sm">
          <div className="bg-linear-to-r from-indigo-600 to-blue-600 text-white px-6 py-3 flex justify-between items-center">
            <span className="font-semibold flex items-center gap-2">
              🚗 Daily Package (Fuel Based)
            </span>
            <span className="text-xs bg-white/20 px-3 py-1 rounded-full">
              Most Booked
            </span>
          </div>

          <div className="grid grid-cols-5 gap-4 px-6 py-5 text-sm items-center">
            <div>
              <p className="text-gray-500 text-xs">Vehicle</p>
              <p className="font-medium">SUV – Ertiga</p>
            </div>

            <div>
              <p className="text-gray-500 text-xs">Driver Charge</p>
              <p className="font-semibold text-indigo-600">₹1000 / day</p>
            </div>

            <div>
              <p className="text-gray-500 text-xs">Non-AC Avg</p>
              <p>10 km / litre</p>
            </div>

            <div>
              <p className="text-gray-500 text-xs">AC Avg</p>
              <p>8 km / litre</p>
            </div>

            <a
              href="tel:919193693736"
              className="bg-black text-white text-center py-2 rounded-full hover:bg-gray-900 transition"
            >
              Call Now
            </a>
          </div>

          <div className="px-6 pb-5 text-xs text-gray-600 flex flex-wrap gap-4">
            <span>⛽ Fuel as per actual</span>
            <span>🛣 Toll extra</span>
            <span>🅿 Parking extra</span>
            <span>🍽 Fooding customer side</span>
          </div>
        </div>

        {/* ================= PER KM PRICING ================= */}
        <div className="mt-10 border rounded-xl overflow-hidden shadow-sm">
          <div className="bg-linear-to-r from-green-600 to-emerald-600 text-white px-6 py-3 flex justify-between items-center">
            <span className="font-semibold flex items-center gap-2">
              🛣 Per KM Pricing
            </span>
            <a
              href="tel:919193693736"
              className="bg-white text-green-700 px-5 py-1.5 rounded-full text-sm font-semibold"
            >
              Call Now
            </a>
          </div>

          {/* NORMAL ROADS */}
          <div className="grid grid-cols-5 gap-4 px-6 py-5 text-sm items-center border-b">
            <div>
              <p className="text-gray-500 text-xs">Vehicle</p>
              <p className="font-medium">Ertiga (Normal Roads)</p>
            </div>

            <div className="font-semibold text-green-700">₹14 / km</div>
            <div className="font-semibold text-green-700">₹15 / km</div>
            <div>Minimum 250 km</div>

            <a
              href="tel:919193693736"
              className="bg-black text-white text-center py-2 rounded-full hover:bg-gray-900 transition"
            >
              Call Now
            </a>
          </div>

          {/* HILL AREA */}
          <div className="grid grid-cols-5 gap-4 px-6 py-5 text-sm items-center">
            <div>
              <p className="text-gray-500 text-xs">Vehicle</p>
              <p className="font-medium">Ertiga (Hill Area)</p>
            </div>

            <div className="font-semibold text-orange-600">₹17 / km</div>
            <div className="font-semibold text-orange-600">₹18 / km</div>
            <div>Minimum 250 km</div>

            <a
              href="tel:919193693736"
              className="bg-black text-white text-center py-2 rounded-full hover:bg-gray-900 transition"
            >
              Call Now
            </a>
          </div>

          <div className="px-6 pb-5 text-xs text-gray-600 flex flex-wrap gap-4">
            <span>🛣 Toll charges extra</span>
            <span>🅿 Parking charges extra</span>
            <span>🌙 Night charges after 10:00 PM</span>
          </div>
        </div>

      </div>
    </section>
  );
}







