export default function DriverProfile() {
  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-lg">
      
      <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
        👨‍✈️ Your Driver
      </h4>

      <div className="flex items-center gap-4">
        
        {/* Avatar */}
        <div className="h-14 w-14 rounded-full bg-blue-600 text-white
                        flex items-center justify-center text-xl font-bold">
          YS
        </div>

        {/* Details */}
        <div className="flex-1">
          <p className="text-lg font-semibold text-gray-800">
            Yogendra Singh
          </p>

          <p className="text-sm text-gray-600">
            🚘 Professional Driver • 5+ Years Experience
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-1">
            <span className="text-yellow-400">★ ★ ★ ★ ★</span>
            <span className="text-sm text-gray-600 ml-2">
              4.5 Rating
            </span>
          </div>
        </div>
      </div>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/singh_yuvann?igsh=MXYwNG9pczF3bmJsdA=="
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-2 text-sm
                   text-pink-600 hover:text-pink-700 font-medium"
      >
        📸 View Driver on Instagram
      </a>

      {/* Trust Badges */}
      <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-gray-700">
        <div>✔ Verified Driver</div>
        <div>✔ Local Route Expert</div>
        <div>✔ Polite & Professional</div>
        <div>✔ On-time Service</div>
      </div>
    </div>
  );
}
