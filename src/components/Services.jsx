import FadeIn from "./FadeIn";
import { Gem, PartyPopper, PlaneTakeoff, Route, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Wedding Car Booking",
    icon: <Gem className="w-8 h-8" />,
    desc: "Elegant Ertiga for weddings & family ceremonies. Travel in style and luxury.",
  },
  {
    title: "Reception & Party",
    icon: <PartyPopper className="w-8 h-8" />,
    desc: "Premium rides for events, parties, and evening celebrations with loved ones.",
  },
  {
    title: "Airport Transfers",
    icon: <PlaneTakeoff className="w-8 h-8" />,
    desc: "On-time airport transfers. We monitor your flight to ensure zero wait time.",
  },
  {
    title: "Outstation Travel",
    icon: <Route className="w-8 h-8" />,
    desc: "Safe & smooth long-distance journeys for tourism or professional trips.",
  },
];

export default function Services() {
  const goToBooking = () => {
    document.getElementById("book")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="services" className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading Section */}
        <FadeIn direction="down" distance={20}>
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Our Professional Services
            </h3>
            <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-slate-600 font-medium">
              Premium Ertiga car booking tailored for every specific occasion 
              with professional drivers.
            </p>
          </div>
        </FadeIn>

        {/* Staggered Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <FadeIn key={i} delay={i * 150} direction="up">
              <div
                onClick={goToBooking}
                className="group bg-white rounded-[2rem] p-10 text-center
                           border border-slate-100 shadow-xl shadow-slate-200/50 
                           hover:shadow-2xl hover:shadow-indigo-500/10
                           hover:-translate-y-3 transition-all duration-500
                           cursor-pointer relative overflow-hidden"
              >
                {/* Background Decor */}
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-indigo-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Icon Container - Fixed with Gem icon */}
                <div
                  className="w-20 h-20 mx-auto mb-8 flex items-center justify-center
                             rounded-3xl bg-indigo-50 text-indigo-600
                             group-hover:bg-indigo-600 group-hover:text-white
                             group-hover:rotate-6 transition-all duration-500 shadow-sm"
                >
                  {service.icon}
                </div>

                {/* Content */}
                <h4 className="text-xl font-black text-slate-800 mb-4 group-hover:text-indigo-600 transition-colors">
                  {service.title}
                </h4>

                <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                  {service.desc}
                </p>

                {/* Enhanced CTA */}
                <div className="flex items-center justify-center gap-2 text-indigo-600 font-bold text-sm translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  Book Now <ArrowRight size={16} />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}