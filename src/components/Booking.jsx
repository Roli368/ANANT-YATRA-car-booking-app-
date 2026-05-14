import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Polyline, useMap } from "react-leaflet";
import L from "leaflet";
import {
  User, Phone, Calendar, ChevronRight, Fuel as FuelIcon,
  Navigation, Zap, ZapOff, Repeat, ArrowRight, ShieldCheck, MessageSquare, Receipt
} from "lucide-react";
import LocationInput from "./LocationInput";

/* ================= CONFIG ================= */
const CAR_CONFIG = {
  ERTIGA: {
    DRIVER_CHARGE_PER_DAY: 1200,
    MILEAGE: { NON_AC: 10, AC: 8 },
  },
  DZIRE: {
    DRIVER_CHARGE_PER_DAY: 800,
    MILEAGE: { NON_AC: 12, AC: 10 },
  }
};
const KM_PER_DAY = 400;
const DEFAULT_FUEL_PRICE = 95;
const ADMIN_KEY = "ertiga123";
const INDIA_CENTER = [22.9734, 78.6569];

const getFuelPrice = () => Number(localStorage.getItem("fuelPrice")) || DEFAULT_FUEL_PRICE;

const icon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function FitBounds({ markers }) {
  const map = useMap();
  useEffect(() => {
    if (markers?.length === 2 && markers[0] && markers[1]) {
      map.fitBounds(markers, { padding: [40, 40] });
    }
  }, [markers, map]);
  return null;
}

export default function Booking() {
  const isAdmin = new URLSearchParams(window.location.search).get("admin") === ADMIN_KEY;
  const [fuelPrice, setFuelPrice] = useState(DEFAULT_FUEL_PRICE);
  const [loading, setLoading] = useState(false);
  const [locating, setLocating] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    tripType: "ROUND_TRIP",
    carType: "NON_AC",
    carModel: "ERTIGA"
  });

  const [fromPlace, setFromPlace] = useState(null);
  const [toPlace, setToPlace] = useState(null);
  const [calc, setCalc] = useState(null);
  const [route, setRoute] = useState(null);
  const [markers, setMarkers] = useState(null);

  useEffect(() => { setFuelPrice(getFuelPrice()); }, []);
  useEffect(() => { detectLocation(); }, []);

  const detectLocation = () => {
    if (!navigator.geolocation) return;
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const { latitude, longitude } = pos.coords;
          const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
          const data = await res.json();
          setFromPlace({ lat: latitude, lon: longitude, display_name: data.display_name });
        } catch (err) {
          console.error("GPS Reverse failed", err);
        } finally { setLocating(false); }
      },
      () => setLocating(false),
      { enableHighAccuracy: true }
    );
  };

  const calculateFare = async () => {
    // CRITICAL: Checks for actual coordinate objects to prevent "Please select location" fault
    if (!fromPlace?.lat || !toPlace?.lat) {
      alert("Please select both locations from the search results list to get coordinates.");
      return;
    }
    try {
      setLoading(true);
      const res = await fetch(`https://router.project-osrm.org/route/v1/driving/${fromPlace.lon},${fromPlace.lat};${toPlace.lon},${toPlace.lat}?overview=full&geometries=geojson`);
      const data = await res.json();

      let km = data.routes[0].distance / 1000;
      if (form.tripType === "ROUND_TRIP") km *= 2;

      const config = CAR_CONFIG[form.carModel];
      const fuelCost = (km / config.MILEAGE[form.carType]) * fuelPrice;
      const days = Math.ceil(km / KM_PER_DAY);
      const driverCost = days * config.DRIVER_CHARGE_PER_DAY;

      setCalc({
        distance: km.toFixed(1),
        fuel: Math.round(fuelCost),
        driver: driverCost,
        total: Math.round(fuelCost + driverCost)
      });

      setRoute(data.routes[0].geometry.coordinates.map(([lon, lat]) => [lat, lon]));
      setMarkers([[fromPlace.lat, fromPlace.lon], [toPlace.lat, toPlace.lon]]);
      setAgreed(false);
    } catch { alert("Route calculation failed."); } finally { setLoading(false); }
  };

  const submit = () => {
    if (!calc || !agreed) return;
    const msg = `🚗 YUVI YATRAA Booking\n👤 ${form.name}\n📞 ${form.phone}\n📅 ${form.date}\n📍 ${fromPlace.display_name} → ${toPlace.display_name}\n🚘 ${form.carType} (${form.tripType})\n📏 ${calc.distance} km\n💰 Total: ₹${calc.total}`;
    window.open(`https://wa.me/919193693736?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section className="py-6 bg-slate-50/50" id="book">
      <div className="max-w-6xl mx-auto px-4">

        {/* COMPACT HEADER */}
        <div className="mb-6 flex items-center justify-between border-b pb-3 border-slate-200">
          <div>
            <h2 className="text-xl font-black text-slate-900 leading-none">Instant Booking</h2>
          </div>
          {isAdmin && (
            <div className="flex items-center gap-2 bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-100">
              <FuelIcon size={14} className="text-amber-600" />
              <input type="number" value={fuelPrice} onChange={(e) => { setFuelPrice(e.target.value); localStorage.setItem("fuelPrice", e.target.value); }} className="w-12 bg-transparent text-xs font-bold outline-none" />
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-5 gap-6 items-start">
          {/* 🔹 INPUT FORM Area */}
          <div className="lg:col-span-2 space-y-5 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative z-20">
            <div className="grid grid-cols-2 gap-2">
              <div className="flex gap-2 bg-slate-50 p-4.5 rounded-xl border border-slate-100">
                <User size={14} className="text-slate-400 mt-1" />
                <input placeholder="Name" className="bg-transparent border-none focus:ring-0 w-full font-bold text-xs text-slate-700 outline-none" onChange={(e) => setForm({ ...form, name: e.target.value })} />
              </div>
              <div className="flex gap-2 bg-slate-50 p-4.5 rounded-xl border border-slate-100">
                <Phone size={14} className="text-slate-400 mt-1" />
                <input placeholder="Phone" className="bg-transparent border-none focus:ring-0 w-full font-bold text-xs text-slate-700 outline-none" onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              </div>
            </div>

            <div className="flex gap-2 bg-slate-50 p-4.5 rounded-xl border border-slate-100">
              <Calendar size={14} className="text-slate-400 mt-1" />
              <input type="date" className="bg-transparent border-none focus:ring-0 w-full font-bold text-xs text-slate-700 outline-none" onChange={(e) => setForm({ ...form, date: e.target.value })} />
            </div>

            {/* SELECTION TABS */}
            <div className="grid grid-cols-2 gap-2">
              <div className="flex bg-slate-100 p-2 rounded-xl">
                <button onClick={() => setForm({...form, carModel: "ERTIGA"})} className={`flex-1 py-1.5 rounded-lg text-[10px] font-black ${form.carModel === "ERTIGA" ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-400'}`}>ERTIGA</button>
                <button onClick={() => setForm({...form, carModel: "DZIRE"})} className={`flex-1 py-1.5 rounded-lg text-[10px] font-black ${form.carModel === "DZIRE" ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-400'}`}>DZIRE</button>
              </div>
              <div className="flex bg-slate-100 p-2 rounded-xl">
                <button onClick={() => setForm({ ...form, carType: "NON_AC" })} className={`flex-1 py-1.5 rounded-lg text-[10px] font-black ${form.carType === "NON_AC" ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-400'}`}>NON-AC</button>
                <button onClick={() => setForm({ ...form, carType: "AC" })} className={`flex-1 py-1.5 rounded-lg text-[10px] font-black ${form.carType === "AC" ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-400'}`}>AC</button>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl border border-slate-100 relative overflow-visible">
              <LocationInput label="Pickup" onSelect={(p) => setFromPlace(p)} value={fromPlace?.display_name || ""} placeholder={locating ? "GPS..." : "Pickup Location"} />
              <button onClick={detectLocation} className="absolute right-3 top-7 text-indigo-600 bg-white p-1.5 rounded-lg shadow-sm z-10">
                <Navigation size={12} className={locating ? "animate-spin" : ""} />
              </button>
              <div className="h-[1px] bg-slate-200 mx-4"></div>
              <LocationInput label="Drop" onSelect={(p) => setToPlace(p)} value={toPlace?.display_name || ""} placeholder="Drop Destination" />
            </div>

            <button onClick={calculateFare} disabled={loading} className="w-full bg-indigo-600 text-white py-3 rounded-xl font-black text-xs shadow-lg shadow-indigo-100 flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all active:scale-95">
              {loading ? "Calculating..." : "Calculate Fare"} <ChevronRight size={14} />
            </button>
          </div>

          {/* 🔹 MAP & SUMMARY Area */}
          <div className="lg:col-span-3 space-y-5">
            <div className="h-64 rounded-2xl overflow-hidden shadow-lg border border-slate-200 relative z-0">
              <MapContainer center={INDIA_CENTER} zoom={5} className="h-full w-full">
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {markers && (
                  <>
                    <Marker position={markers[0]} icon={icon} />
                    <Marker position={markers[1]} icon={icon} />
                    <FitBounds markers={markers} />
                  </>
                )}
                {route && <Polyline positions={route} color="#4f46e5" weight={3} opacity={0.7} />}
              </MapContainer>
            </div>

            {calc && (
              <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xl border border-white/5">
                <div className="flex justify-between items-center mb-3 pb-2 border-b border-white/10">
                  <span className="text-[10px] font-black text-indigo-300 flex items-center gap-2 uppercase"><Receipt size={14} /> Summary</span>
                  <span className="text-[10px] font-bold text-indigo-100 bg-white/5 px-2 py-0.5 rounded-md tracking-tighter">{calc.distance} km trip</span>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-3">
                  <div className="p-2 bg-white/5 rounded-xl border border-white/5 text-center">
                    <p className="text-[8px] text-indigo-300 font-black uppercase">Fuel</p>
                    <p className="text-xs font-black">₹{calc.fuel}</p>
                  </div>
                  <div className="p-2 bg-white/5 rounded-xl border border-white/5 text-center">
                    <p className="text-[8px] text-indigo-300 font-black uppercase">Driver</p>
                    <p className="text-xs font-black">₹{calc.driver}</p>
                  </div>
                  <div className="p-2 bg-indigo-600 rounded-xl text-center">
                    <p className="text-[8px] text-indigo-100 font-black uppercase">Total</p>
                    <p className="text-sm font-black text-yellow-400">₹{calc.total}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex gap-3 text-[9px] font-black text-slate-400 uppercase tracking-widest px-1">
                    <span className="flex items-center gap-1"><ShieldCheck size={10} className="text-emerald-500" /> Toll Extra</span>
                    <span className="flex items-center gap-1"><ShieldCheck size={10} className="text-emerald-500" /> Parking Extra</span>
                    <span className="flex items-center gap-1"><ShieldCheck size={10} className="text-emerald-500" /> Night Charges apply</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="agree" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="h-3 w-3 rounded bg-white/10 text-indigo-500" />
                    <label htmlFor="agree" className="text-[9px] text-indigo-200 font-bold uppercase tracking-tighter cursor-pointer">Agree to extra charges</label>
                  </div>

                  <button onClick={submit} disabled={!agreed} className={`w-full py-4 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${agreed ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' : 'bg-slate-800 text-slate-500 cursor-not-allowed'}`}>
                    <MessageSquare size={14} className="inline mr-1" /> Confirm via WhatsApp
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}