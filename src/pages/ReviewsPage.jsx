import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";
import DriverProfile from "../components/DriverProfile";
import FadeIn from "../components/FadeIn";

export default function ReviewsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans text-slate-900 bg-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-12 bg-slate-900 text-white">
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
      </main>
      <Footer />
    </div>
  );
}
