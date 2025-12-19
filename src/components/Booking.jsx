
import { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import LocationInput from "./LocationInput";

/* ================= BUSINESS CONFIG ================= */
const DRIVER_CHARGE_PER_DAY = 1000;
const KM_PER_DAY = 300;

const MILEAGE = {
  NON_AC: 10,
  AC: 8,
};

const DEFAULT_FUEL_PRICE = 100;
const ADMIN_KEY = "ertiga123";

const INDIA_CENTER = [22.9734, 78.6569];

const getFuelPrice = () =>
  Number(localStorage.getItem("fuelPrice")) || DEFAULT_FUEL_PRICE;

/* ================= MAP ICON ================= */
const icon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

/* ================= FIT MAP ================= */
function FitBounds({ markers }) {
  const map = useMap();
  if (markers?.length === 2) {
    map.fitBounds(markers, { padding: [60, 60] });
  }
  return null;
}

export default function Booking() {
  const isAdmin =
    new URLSearchParams(window.location.search).get("admin") === ADMIN_KEY;

  const [fuelPrice, setFuelPrice] = useState(getFuelPrice());
  const [loading, setLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    tripType: "ONE_WAY",
    carType: "NON_AC",
  });

  const [fromPlace, setFromPlace] = useState(null);
  const [toPlace, setToPlace] = useState(null);

  const [calc, setCalc] = useState(null);
  const [route, setRoute] = useState(null);
  const [markers, setMarkers] = useState(null);

  /* ================= ROUTE ================= */
  const getRoute = async (from, to) => {
    const res = await fetch(
      `https://router.project-osrm.org/route/v1/driving/${from.lon},${from.lat};${to.lon},${to.lat}?overview=full&geometries=geojson`
    );
    const data = await res.json();

    return {
      km: data.routes[0].distance / 1000,
      path: data.routes[0].geometry.coordinates.map(
        ([lon, lat]) => [lat, lon]
      ),
      points: [
        [from.lat, from.lon],
        [to.lat, to.lon],
      ],
    };
  };

  /* ================= CALCULATE ================= */
  const calculateFare = async () => {
    if (!fromPlace || !toPlace) {
      alert("Please select both pickup and drop locations");
      return;
    }

    try {
      setLoading(true);

      const res = await getRoute(fromPlace, toPlace);
      let km = res.km;

      if (form.tripType === "ROUND_TRIP") km *= 2;

      const fuelCost = (km / MILEAGE[form.carType]) * fuelPrice;
      const days = Math.ceil(km / KM_PER_DAY);
      const driverCost = days * DRIVER_CHARGE_PER_DAY;

      setCalc({
        distance: km.toFixed(1),
        fuel: Math.round(fuelCost),
        driver: driverCost,
        total: Math.round(fuelCost + driverCost),
      });

      setRoute(res.path);
      setMarkers(res.points);
      setAgreed(false);
    } catch {
      alert("Unable to calculate route");
    } finally {
      setLoading(false);
    }
  };

  /* ================= SUBMIT ================= */
  const submit = () => {
    if (!calc || !agreed) return;

    const msg = `
🚗 ANANT YATRA – Ertiga Booking
👤 ${form.name}
📞 ${form.phone}
📅 ${form.date}
📍 ${fromPlace.display_name} → ${toPlace.display_name}
🚘 ${form.carType}
🔁 ${form.tripType}
📏 ${calc.distance} km
💰 Total Fare: ₹${calc.total}

⚠️ Important Notes:
• Toll charges extra
• Parking charges extra
• Night charges applicable after 10:00 PM
`;

    window.open(
      `https://wa.me/919193693736?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <section className="py-15 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          🚗 Book Your Ertiga
        </h2>

        {/* ADMIN */}
        {isAdmin && (
          <div className="mb-6 p-4 bg-yellow-50 border rounded-xl w-fit">
            <p className="font-semibold">🔐 Admin – Fuel Price</p>
            <input
              type="number"
              value={fuelPrice}
              onChange={(e) => {
                setFuelPrice(e.target.value);
                localStorage.setItem("fuelPrice", e.target.value);
              }}
              className="border p-2 rounded mt-2 w-28"
            />
            <p className="text-xs text-gray-600 mt-1">
              Non-AC: 10 km/l • AC: 8 km/l
            </p>
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-10">

          {/* FORM */}
          <div className="bg-white rounded-3xl shadow-xl p-8 space-y-4">
            <input
              placeholder="Your Name"
              className="w-full border p-3 rounded-xl"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              placeholder="Phone Number"
              className="w-full border p-3 rounded-xl"
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />

            <input
              type="date"
              className="w-full border p-3 rounded-xl"
              onChange={(e) => setForm({ ...form, date: e.target.value })}
            />

            <LocationInput
              label="📍 Pickup Location"
              placeholder="Type city or area"
              onSelect={(p) =>
                setFromPlace({
                  lat: p.lat,
                  lon: p.lon,
                  display_name: p.display_name,
                })
              }
            />

            <LocationInput
              label="🏁 Drop Location"
              placeholder="Type destination"
              onSelect={(p) =>
                setToPlace({
                  lat: p.lat,
                  lon: p.lon,
                  display_name: p.display_name,
                })
              }
            />

            <div className="flex gap-3">
              <select
                className="w-1/2 border p-3 rounded-xl"
                onChange={(e) =>
                  setForm({ ...form, tripType: e.target.value })
                }
              >
                <option value="ONE_WAY">One Way</option>
                <option value="ROUND_TRIP">Round Trip</option>
              </select>

              <select
                className="w-1/2 border p-3 rounded-xl"
                onChange={(e) =>
                  setForm({ ...form, carType: e.target.value })
                }
              >
                <option value="NON_AC">Non-AC</option>
                <option value="AC">AC</option>
              </select>
            </div>

            <button
              onClick={calculateFare}
              disabled={loading}
              className="w-full bg-indigo-600 text-white py-3 rounded-xl text-lg
                         hover:bg-indigo-700 transition disabled:opacity-50"
            >
              {loading ? "Calculating…" : "Calculate Fare"}
            </button>
          </div>

          

          {/* MAP + RESULT */}
          <div className="space-y-6">

            
            <MapContainer
              center={INDIA_CENTER}
              zoom={5}
              className="h-72 rounded-3xl shadow-lg"
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {markers && (
                <>
                  <Marker position={markers[0]} icon={icon} />
                  <Marker position={markers[1]} icon={icon} />
                  <FitBounds markers={markers} />
                </>
              )}
              {route && <Polyline positions={route} />}
            </MapContainer>

            {calc && (
              <div className="bg-blue-50 border border-blue-200 rounded-3xl p-6">
                <p>📏 Distance: {calc.distance} km</p>
                <p>⛽ Fuel: ₹{calc.fuel}</p>
                <p>👨‍✈️ Driver: ₹{calc.driver}</p>
                <p className="text-xl font-bold mt-2">
                  💰 Total: ₹{calc.total}
                </p>

                {/* TERMS */}
                <div className="mt-4 bg-white border rounded-2xl p-4 text-sm">
                  <p className="font-semibold mb-2">ℹ️ Important Notes</p>
                  <ul className="space-y-1">
                    <li>✔ Toll charges extra</li>
                    <li>✔ Parking charges extra</li>
                    <li>✔ Night charges after 10:00 PM</li>
                  </ul>
                </div>

                {/* AGREEMENT */}
                <div className="flex items-start gap-2 text-sm mt-4">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-1"
                  />
                  <p>
                    I agree that toll, parking and night charges
                    (after 10:00 PM) are extra as per actual.
                  </p>
                </div>

                <button
                  onClick={submit}
                  disabled={!agreed}
                  className={`mt-4 w-full py-3 rounded-xl text-white transition
                    ${
                      agreed
                        ? "bg-green-500 hover:bg-green-600"
                        : "bg-gray-300 cursor-not-allowed"
                    }`}
                >
                  Send on WhatsApp
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}








