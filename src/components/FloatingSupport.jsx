export default function FloatingSupport() {
  const chatMsg =
    "Hi Anant Yatra 👋 I need help regarding booking.";

  const whatsappMsg =
    "Hi Anant Yatra 🚗 I want to book a car.";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">

      {/* CHAT WITH US */}
      <a
        href={`https://wa.me/919193693736?text=${encodeURIComponent(chatMsg)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-emerald-500 text-white
                   px-5 py-3 rounded-full shadow-lg
                   animate-bounce-slow
                   hover:bg-emerald-600 hover:scale-105 transition"
                   
      >
        💬 Chat with Us
      </a>

      {/* WHATSAPP BOOKING */}
      <a
        href={`https://wa.me/919193693736?text=${encodeURIComponent(whatsappMsg)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-green-600 text-white
                   px-5 py-3 rounded-full shadow-lg
                   animate-bounce-slower
                   hover:bg-green-700 hover:scale-105 transition"
      >
        📲 WhatsApp Booking
      </a>

    </div>
  );
}
