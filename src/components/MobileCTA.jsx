export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-md md:hidden">
      <div className="flex">
        {/* WhatsApp */}
        <a
           href="https://wa.me/919193693736"
          className="w-1/2 flex items-center justify-center gap-2 bg-green-500 text-white py-4 font-semibold"
        >
          💬 WhatsApp
        </a>

        {/* Call */}
        <a
          href="tel:919193693736"
          className="w-1/2 flex items-center justify-center gap-2 bg-blue-600 text-white py-4 font-semibold"
        >
          📞 Call Now
        </a>
      </div>
    </div>
  );
}
