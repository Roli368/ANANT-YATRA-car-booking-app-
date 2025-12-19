import FadeIn from "./FadeIn";
import AvailabilityBadge from "./AvailabilityBadge";
import ertiga1 from "../assets/ertiga1.jpg";


export default function Car() {
  const goToBooking = () => {
    document.getElementById("book")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <FadeIn>
      <section id="car" className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Our Car
          </h3>
          <p className="text-center text-gray-600 mb-14">
            Well-maintained, comfortable Ertiga for all types of bookings
          </p>

          {/* Card */}
          <div
            className="max-w-4xl mx-auto bg-gray-50 rounded-3xl p-8 md:p-10
                       shadow-md hover:shadow-2xl hover:-translate-y-1
                       transition-all duration-300"
          >
            <div className="grid md:grid-cols-2 gap-10 items-center">

              {/* LEFT: IMAGE */}
              <div className="relative">
                <img
                   src={ertiga1} 
                  alt="Maruti Suzuki Ertiga"
                  className="rounded-2xl shadow-lg w-full object-cover"
                />
                <span className="absolute top-3 left-3 bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
                  7 Seater
                </span>
              </div>

              {/* RIGHT: DETAILS */}
              <div>
                <h4 className="text-2xl font-semibold mb-6">
                  Maruti Suzuki Ertiga
                </h4>
                <AvailabilityBadge status="available" />


                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {[
                    "Spacious & Comfortable",
                    "Fully Air-Conditioned",
                    "Clean & Sanitized Interior",
                    "Professional Driver",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-white px-4 py-2 rounded-lg shadow-sm"
                    >
                      <span className="text-green-600 text-lg">✔</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Decoration Info */}
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
                  <p className="text-red-600 font-semibold">
                    ❌ Decoration Not Provided
                  </p>
                  <p className="text-sm text-red-500 mt-1">
                    Clients can arrange decoration separately if required
                  </p>
                </div>

                {/* CTA */}
                <button
                  onClick={goToBooking}
                  className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg
                             hover:bg-green-600 hover:scale-[1.03] transition"
                >
                  Book This Car
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>
    </FadeIn>
  );
}

