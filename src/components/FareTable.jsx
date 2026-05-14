import { useState } from "react";
import { Car, Fuel, MapPin, Moon, ShieldCheck, Info, Phone, ChevronRight } from "lucide-react";

export default function TaxiFare() {
  const [activeTab, setActiveTab] = useState("ROUND");

  const dailyPackages = [
    {
      model: "SUV – Ertiga",
      charge: "₹1200",
      nonAcAvg: "10 km/L",
      acAvg: "8 km/L"
    },
    {
      model: "Sedan – Dzire",
      charge: "₹800",
      nonAcAvg: "12 km/L",
      acAvg: "10 km/L"
    }
  ];

  // Reusable Inclusion Tag component
  const InclusionTag = ({ icon: Icon, text }) => (
    <div className="flex items-center gap-1.5 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-full text-[11px] font-medium text-gray-600">
      <Icon size={12} className="text-indigo-500" />
      {text}
    </div>
  );

  return (
    <section className="py-12 bg-slate-50 min-h-screen font-sans">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-10">
          <span className="text-indigo-600 font-bold text-xs tracking-widest uppercase bg-indigo-50 px-3 py-1 rounded-full">
            Pricing Plans
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-3 tracking-tight">
            Taxi Fare Details
          </h2>
          <p className="text-gray-500 mt-2 flex items-center justify-center gap-2">
            <ShieldCheck size={18} className="text-emerald-500" />
            Transparent pricing • No hidden charges
          </p>
        </div>

        {/* TABS - Modern Pill Style */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-200/50 p-1 rounded-2xl backdrop-blur-sm border border-gray-200">
            {[
              { key: "ROUND", label: "Round Trip" },
              { key: "ONE", label: "One Way" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-8 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                  activeTab === tab.key
                    ? "bg-white text-indigo-600 shadow-md ring-1 ring-black/5"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-8">
          
          {/* ================= DAILY PACKAGE CARD ================= */}
          <div className="bg-white rounded-3xl shadow-xl shadow-indigo-100/50 border border-indigo-50 overflow-hidden group hover:border-indigo-200 transition-all">
            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-6 flex justify-between items-center text-white">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-md">
                  <Car size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg leading-tight">Daily Package</h3>
                  <p className="text-indigo-100 text-xs font-medium opacity-90">Fuel-Based Rental</p>
                </div>
              </div>
              <span className="bg-yellow-400 text-yellow-900 text-[10px] font-black px-3 py-1 rounded-lg uppercase tracking-wider shadow-lg">
                Recommended
              </span>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {dailyPackages.map((pkg, i) => (
                  <div key={i} className="border border-gray-100 rounded-2xl p-6 bg-gray-50/50 hover:bg-white hover:shadow-lg transition-all space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">Vehicle</p>
                        <p className="text-lg font-black text-gray-800">{pkg.model}</p>
                      </div>
                      <div className="space-y-1 text-right">
                        <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">Daily Charge</p>
                        <p className="text-2xl font-black text-indigo-600">{pkg.charge}<span className="text-xs text-gray-400 font-medium">/day</span></p>
                      </div>
                    </div>

                    <div className="bg-white border border-indigo-50 p-4 rounded-xl space-y-2 shadow-sm shadow-indigo-100/20">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500 font-semibold">Non-AC Avg:</span>
                        <span className="text-sm font-bold text-indigo-700">{pkg.nonAcAvg}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500 font-semibold">AC Avg:</span>
                        <span className="text-sm font-bold text-indigo-700">{pkg.acAvg}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Inclusions Row */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-2">
                <InclusionTag icon={Fuel} text="Fuel as per actual" />
                <InclusionTag icon={MapPin} text="Toll/Parking extra" />
                <InclusionTag icon={Moon} text="Night charge (9PM+)" />
                <InclusionTag icon={Info} text="Fooding on customer" />
              </div>

              <a href="tel:919193693736" className="mt-8 w-full flex items-center justify-center gap-2 bg-gray-900 text-white py-4 rounded-2xl font-bold hover:bg-black hover:scale-[1.02] transition-all shadow-lg shadow-gray-200">
                <Phone size={18} /> Book This Package
              </a>
            </div>
          </div>

          {/* ================= PER KM PRICING CARD ================= */}
          <div className="bg-white rounded-3xl shadow-xl shadow-emerald-100/50 border border-emerald-50 overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 flex justify-between items-center text-white">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-md">
                  <MapPin size={24} />
                </div>
                <h3 className="font-bold text-lg">Per KM Pricing</h3>
              </div>
              <div className="text-[11px] font-bold bg-white/20 px-3 py-1 rounded-full border border-white/30">
                Min. 250 KM Required
              </div>
            </div>

            <div className="divide-y divide-gray-50">
              {/* Normal Road Row */}
              <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:bg-emerald-50/30 transition-colors">
                <div className="space-y-1">
                  <p className="text-emerald-600 text-[10px] font-black uppercase tracking-widest">Type A</p>
                  <h4 className="font-bold text-gray-800 text-lg">Normal Roads (Ertiga)</h4>
                </div>
                <div className="flex gap-10">
                  <div className="text-center">
                    <p className="text-gray-400 text-[10px] font-bold uppercase mb-1">Non-AC</p>
                    <p className="text-2xl font-black text-gray-900">₹14<span className="text-xs font-medium text-gray-400">/km</span></p>
                  </div>
                  <div className="text-center">
                    <p className="text-emerald-500 text-[10px] font-bold uppercase mb-1">With AC</p>
                    <p className="text-2xl font-black text-emerald-600">₹15<span className="text-xs font-medium text-emerald-400">/km</span></p>
                  </div>
                </div>
                <button className="flex items-center gap-2 text-sm font-bold text-gray-400 group-hover:text-emerald-600 transition-all">
                  Inquire Now <ChevronRight size={16} />
                </button>
              </div>

              {/* Hill Area Row */}
              <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 bg-orange-50/20 group hover:bg-orange-50/50 transition-colors">
                <div className="space-y-1">
                  <p className="text-orange-600 text-[10px] font-black uppercase tracking-widest">Type B</p>
                  <h4 className="font-bold text-gray-800 text-lg">Hill Areas (Ertiga)</h4>
                </div>
                <div className="flex gap-10">
                  <div className="text-center">
                    <p className="text-gray-400 text-[10px] font-bold uppercase mb-1">Non-AC</p>
                    <p className="text-2xl font-black text-gray-900">₹17<span className="text-xs font-medium text-gray-400">/km</span></p>
                  </div>
                  <div className="text-center">
                    <p className="text-orange-500 text-[10px] font-bold uppercase mb-1">With AC</p>
                    <p className="text-2xl font-black text-orange-600">₹18<span className="text-xs font-medium text-orange-400">/km</span></p>
                  </div>
                </div>
                <a href="tel:919193693736" className="bg-orange-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-orange-700 shadow-md shadow-orange-100 transition-all">
                  Call Specialist
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}




