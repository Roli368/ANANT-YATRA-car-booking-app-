import { MessageCircle, Send, Phone } from "lucide-react";

export default function FloatingSupport() {
  const chatMsg = "Hi Yuvi Yatraa 👋 I need help regarding booking.";
  const whatsappMsg = "Hi Yuvi Yatraa 🚗 I want to book a car.";

  const Button = ({ href, icon: Icon, label, colorClass, animation }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-end gap-3 group transition-all duration-300 hover:scale-105 active:scale-95`}
    >
      {/* Hover Label */}
      <span className="bg-white text-slate-900 text-xs font-bold px-4 py-2 rounded-xl shadow-xl border border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {label}
      </span>
      
      {/* Icon Circle */}
      <div className={`p-4 rounded-[1.25rem] shadow-2xl text-white ${colorClass} ${animation} flex items-center justify-center`}>
        <Icon size={24} className="group-hover:rotate-12 transition-transform" />
      </div>
    </a>
  );

  return (
    <div className="fixed bottom-8 right-8 z-[9999] flex flex-col items-end gap-4">
      
      {/* WHATSAPP BOOKING */}
      <Button 
        href={`https://wa.me/919193693736?text=${encodeURIComponent(whatsappMsg)}`}
        icon={Send}
        label="Instant Booking"
        colorClass="bg-emerald-500 hover:bg-emerald-600"
        animation="animate-bounce"
      />

      {/* CHAT SUPPORT */}
      <Button 
        href={`https://wa.me/919193693736?text=${encodeURIComponent(chatMsg)}`}
        icon={MessageCircle}
        label="Support Chat"
        colorClass="bg-indigo-600 hover:bg-indigo-700"
        animation=""
      />

      {/* CALL SUPPORT (Optional addition) */}
      <Button 
        href="tel:919193693736"
        icon={Phone}
        label="Call Us"
        colorClass="bg-slate-900 hover:bg-black"
        animation=""
      />
    </div>
  );
}