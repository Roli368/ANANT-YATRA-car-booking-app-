import { CheckCircle2, Car, Clock, MessageSquare, Receipt, ShieldCheck } from "lucide-react";

export default function AboutUs() {
  const highlights = [
    "Clean & Comfortable Car",
    "Professional Driver",
    "Transparent Pricing",
    "24/7 Booking Support",
  ];

  const features = [
    { icon: <Car className="text-indigo-600" size={20} />, text: "Comfortable Ertiga suitable for family & events" },
    { icon: <Clock className="text-indigo-600" size={20} />, text: "On-time pickup & drop guaranteed" },
    { icon: <MessageSquare className="text-indigo-600" size={20} />, text: "Direct WhatsApp booking, no middlemen" },
    { icon: <Receipt className="text-indigo-600" size={20} />, text: "No hidden charges, clear fare calculation" },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <div>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                About <span className="text-indigo-600">Yuvi Yatraa</span>
              </h3>
              <div className="w-20 h-1.5 bg-indigo-600 rounded-full mb-8"></div>
            </div>

            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                <span className="font-bold text-slate-900">Yuvi Yatraa</span> is a trusted car booking service 
                dedicated to providing seamless, safe, and reliable journeys across India. 
                Whether it's a family wedding, an urgent airport transfer, or a long-distance 
                vacation, we ensure you travel in total comfort.
              </p>

              <p>
                With our flagship, well-maintained Ertiga and a team of seasoned professional drivers, 
                our mission is to transform every trip into a stress-free memory. We believe 
                transportation should be <span className="text-indigo-600 font-semibold">easy, transparent, and always on time.</span>
              </p>
            </div>

            {/* HIGHLIGHTS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white p-3 rounded-2xl border border-slate-100 shadow-sm">
                  <CheckCircle2 className="text-emerald-500" size={20} />
                  <span className="text-sm font-bold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="relative group">
            {/* Background Accent */}
            <div className="absolute -inset-4 bg-indigo-500/10 rounded-[3rem] blur-2xl group-hover:bg-indigo-500/20 transition-colors"></div>
            
            <div className="relative bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/60 p-10 border border-slate-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-indigo-50 rounded-2xl">
                  <ShieldCheck className="text-indigo-600" size={28} />
                </div>
                <h4 className="text-2xl font-black text-slate-900">
                  Why Choose Us?
                </h4>
              </div>

              <ul className="space-y-6">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex gap-4 items-start group/item">
                    <div className="mt-1 p-2 bg-slate-50 rounded-xl group-hover/item:bg-indigo-50 transition-colors">
                      {feature.icon}
                    </div>
                    <p className="text-slate-600 font-medium leading-snug pt-1">
                      {feature.text}
                    </p>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-10">
                <a
                  href="#book"
                  className="group flex items-center justify-center gap-2 w-full bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-indigo-200 hover:bg-indigo-700 transition-all active:scale-95"
                >
                  Book Your Journey Now
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}