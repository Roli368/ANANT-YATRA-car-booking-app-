import { MessageCircle, Phone, ArrowRight } from "lucide-react";

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] md:hidden px-4 pb-6 pt-2 bg-gradient-to-t from-white via-white to-transparent">
      <div className="flex gap-3 h-16">
        {/* WhatsApp - Priority Action */}
        <a
          href="https://wa.me/919193693736"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[1.2] flex items-center justify-center gap-3 bg-emerald-500 text-white rounded-2xl font-bold shadow-lg shadow-emerald-200 active:scale-95 transition-all group"
        >
          <div className="bg-white/20 p-1.5 rounded-lg">
            <MessageCircle size={20} className="group-hover:rotate-12 transition-transform" />
          </div>
          <span className="tracking-tight">Book via WhatsApp</span>
        </a>

        {/* Call - Direct Action */}
        <a
          href="tel:919193693736"
          className="flex-1 flex items-center justify-center gap-2 bg-slate-900 text-white rounded-2xl font-bold shadow-lg shadow-slate-200 active:scale-95 transition-all"
        >
          <Phone size={18} />
          <span>Call Now</span>
        </a>
      </div>
      
      {/* Subtle handle for visual cue */}
      <div className="flex justify-center mt-3">
        <div className="w-12 h-1 bg-slate-200 rounded-full"></div>
      </div>
    </div>
  );
}