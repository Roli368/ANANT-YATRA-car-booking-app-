

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Car from "./components/Car";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

import MobileCTA from "./components/MobileCTA";
import Reviews from "./components/Reviews";

import FloatingSupport from "./components/FloatingSupport";
import AboutUs from "./components/AboutUs";
import DriverProfile from "./components/DriverProfile";
import FareTable from "./components/FareTable";



export default function App() {
  return (
    <div className="font-sans text-gray-800 scroll-smooth">

      {/* FIXED NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="pt-36">

        {/* HERO */}
        <section id="hero">
          <Hero />
        </section>

        {/* ABOUT US */}
        <section id="about">
          <AboutUs />
        </section>

        {/* SERVICES */}
        <section id="services">
          <Services />
        </section>

        {/* FARE TABLE */}
        <section id="fares">
          <FareTable />
        </section>

        {/* OUR CAR */}
        <section id="car">
          <Car />
        </section>

        {/* BOOKING */}
        <section id="book">
          <Booking />
        </section>

      </main>

      {/* REVIEWS + DRIVER */}
<section id="reviews" className="py-2 bg-gray-50">
  <div className="max-w-7xl mx-auto px-2">

    <div className="grid md:grid-cols-2 gap-10 items-start">

      {/* LEFT → DRIVER (STATIC TRUST) */}
      <DriverProfile />

      {/* RIGHT → REVIEWS */}
      <Reviews />

    </div>

  </div>
</section>





      {/* FOOTER */}
      <Footer />

      {/* MOBILE CTA BAR */}
      <MobileCTA />

      {/* FLOATING WHATSAPP */}
      

     <FloatingSupport />

    </div>
  );
}

