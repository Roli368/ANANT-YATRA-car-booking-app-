import FadeIn from "./FadeIn";
import AvailabilityBadge from "./AvailabilityBadge";
import ertiga1 from "../assets/ertiga1.jpg";
import dzire from "../assets/dzire.png";
import { CheckCircle, Info, Users, Wind, ShieldCheck, User } from "lucide-react";

export default function Car() {
  const goToBooking = () => {
    document.getElementById("book")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const features = [
    { text: "Spacious & Comfortable", icon: <Users size={18} /> },
    { text: "Fully Air-Conditioned", icon: <Wind size={18} /> },
    { text: "Clean & Sanitized", icon: <ShieldCheck size={18} /> },
    { text: "Professional Driver", icon: <User size={18} /> },
  ];

  return (
    <FadeIn>
      <section id="car" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Heading */}
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Our Premium Fleet
            </h3>
            <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-slate-600">
              Travel in style and comfort with our top-tier fleet, 
              perfectly maintained for your safety and satisfaction.
            </p>
          </div>

          {/* Cars List */}
          <div className="space-y-12">
            {[
              {
                name: "Maruti Suzuki Ertiga",
                seats: "7 Seater",
                image: ertiga1,
                tag: "Top Rated",
                price: "₹1200",
              },
              {
                name: "Swift Dzire",
                seats: "4 Seater",
                image: dzire,
                tag: "Economy",
                price: "₹800",
              }
            ].map((car, index) => (
              <div key={index} className="max-w-5xl mx-auto bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/60 border border-slate-100 transition-transform duration-500 hover:scale-[1.01]">
                <div className="grid lg:grid-cols-12 gap-0">
                  
                  {/* LEFT: IMAGE */}
                  <div className="lg:col-span-5 relative h-80 lg:h-auto overflow-hidden">
                    <img
                      src={car.image} 
                      alt={car.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute top-6 left-6 flex flex-col gap-2">
                      <span className="bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold px-4 py-1.5 rounded-full shadow-sm flex items-center gap-2">
                        <Users size={14} className="text-indigo-600" /> {car.seats}
                      </span>
                      <span className="bg-indigo-600 text-white text-[10px] uppercase tracking-widest font-black px-4 py-1.5 rounded-full shadow-lg">
                        {car.tag}
                      </span>
                    </div>
                  </div>

                  {/* RIGHT: DETAILS */}
                  <div className="lg:col-span-7 p-8 md:p-12 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-3xl font-black text-slate-900 mb-2">
                          {car.name}
                        </h4>
                        <div className="flex items-center gap-3">
                          <AvailabilityBadge status="available" />
                          <span className="text-sm font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                            Driver: {car.price} / day
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 bg-slate-50 border border-slate-100 px-4 py-3 rounded-2xl"
                        >
                          <span className="text-indigo-600">{feature.icon}</span>
                          <span className="text-sm font-semibold text-slate-700">{feature.text}</span>
                        </div>
                      ))}
                    </div>

                    {/* Note Card */}
                    <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-8 flex gap-4 items-start">
                      <Info className="text-blue-500 shrink-0 mt-0.5" size={20} />
                      <div>
                        <p className="text-blue-700 font-bold text-sm">
                          Note
                        </p>
                        <p className="text-xs text-blue-600/80 leading-relaxed mt-1">
                          Floral or themed decoration is not provided by us. 
                          However, clients are welcome to arrange third-party 
                          decorators at their own expense.
                        </p>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={goToBooking}
                      className="group relative w-full lg:w-max bg-indigo-600 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-indigo-200 hover:bg-indigo-700 hover:shadow-indigo-300 transition-all active:scale-95 flex items-center justify-center gap-3"
                    >
                      Book This Journey
                      <CheckCircle size={20} className="group-hover:rotate-12 transition-transform" />
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </FadeIn>
  );
}
