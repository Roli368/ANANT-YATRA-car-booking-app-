import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Services from "../components/Services";

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans text-slate-900 bg-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-12 bg-slate-50/50">
        <Services />
      </main>
      <Footer />
    </div>
  );
}
