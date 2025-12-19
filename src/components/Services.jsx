import FadeIn from "./FadeIn";

const services = [
  {
    title: "Wedding Car Booking",
    icon: "💍",
    desc: "Elegant Ertiga for weddings & family travel",
  },
  {
    title: "Reception & Party",
    icon: "🎉",
    desc: "Comfortable rides for events & parties",
  },
  {
    title: "Airport Pickup & Drop",
    icon: "✈️",
    desc: "On-time airport transfers with comfort",
  },
  {
    title: "Local & Outstation Travel",
    icon: "🛣️",
    desc: "Safe & smooth long-distance journeys",
  },
];

export default function Services() {
  const goToBooking = () => {
    document.getElementById("book")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <FadeIn>
      <section id="services" className="py-5 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Heading */}
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Our Services
          </h3>
          <p className="text-center text-gray-600 mb-14">
            Premium Ertiga car booking for every occasion
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                onClick={goToBooking}
                className="group bg-white rounded-2xl p-8 text-center
                           shadow-md hover:shadow-2xl hover:ring-2 hover:ring-blue-500/30
                           hover:-translate-y-2 transition-all duration-300
                           cursor-pointer"
              >
                {/* Icon */}
                <div
                  className="w-16 h-16 mx-auto mb-6 flex items-center justify-center
                             rounded-full bg-blue-100 text-3xl
                             group-hover:bg-blue-600 group-hover:text-white
                             transition"
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h4 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition">
                  {service.title}
                </h4>

                {/* Description */}
                <p className="text-gray-600 text-sm">
                  {service.desc}
                </p>

                {/* Hover CTA */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition">
                  <span className="inline-block text-blue-600 font-medium">
                    Book this service →
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </FadeIn>
  );
}
