import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Car from "../components/Car";
import Booking from "../components/Booking";
import Footer from "../components/Footer";
import MobileCTA from "../components/MobileCTA";
import Reviews from "../components/Reviews";
import FloatingSupport from "../components/FloatingSupport";
import AboutUs from "../components/AboutUs";
import DriverProfile from "../components/DriverProfile";
import FareTable from "../components/FareTable";
import FadeIn from "../components/FadeIn";

export default function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash]);

  return (
    <div className="font-sans text-slate-900 bg-white scroll-smooth selection:bg-indigo-100 selection:text-indigo-700">
      
      {/* 1. FIXED NAVIGATION (Highest Z-Index) */}
      <Navbar />

      <main className="relative">
        
        {/* 2. HERO - Immediate Impact */}
        <section id="hero">
          <Hero />
        </section>

        {/* 3. CONTENT SECTIONS - Standardized Spacing */}
        <div className="flex flex-col">
          
          <section id="about" className="py-6">
            <FadeIn direction="up">
              <AboutUs />
            </FadeIn>
          </section>

          <section id="services" className="py-6 bg-slate-50/50 border-y border-slate-100">
            <Services />
          </section>

          <section id="fares" className="py-6">
            <FadeIn direction="up">
              <FareTable />
            </FadeIn>
          </section>

          <section id="car" className="py-6 bg-slate-50/50 border-y border-slate-100">
             <Car />
          </section>

          {/* 4. BOOKING ENGINE - Fixed Bottom Spacing */}
          {/* pb-40 ensures the floating support buttons don't block the confirm button */}
          <section id="book" className="py-6 pb-40 relative z-10">
             <Booking />
          </section>

          {/* 5. TRUST & SOCIAL PROOF */}
          <section id="reviews" className="py-6 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-6">
              <FadeIn direction="up">
                <div className="text-center mb-16">
                  <h3 className="text-3xl md:text-5xl font-black mb-4">Trusted by Thousands</h3>
                  <div className="w-20 h-1.5 bg-indigo-500 mx-auto rounded-full"></div>
                </div>
                
                <div className="grid lg:grid-cols-5 gap-8 items-start">
                  <div className="lg:col-span-2">
                    <DriverProfile />
                  </div>
                  <div className="lg:col-span-3">
                    <Reviews />
                  </div>
                </div>
              </FadeIn>
            </div>
          </section>
        </div>
      </main>

      {/* 6. FOOTER */}
      <Footer />

      {/* 7. ACTION OVERLAYS */}
      {/* Ensure these are outside the <main> to avoid z-index parent conflicts */}
      <MobileCTA />
      <FloatingSupport />

    </div>
  );
}
