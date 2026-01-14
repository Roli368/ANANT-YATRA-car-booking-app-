import { Instagram, Star, Award, ShieldCheck, Map, Clock, UserCheck } from "lucide-react";

export default function DriverProfile() {
  const trustBadges = [
    { icon: <UserCheck size={14} />, text: "Verified Driver" },
    { icon: <Map size={14} />, text: "Local Route Expert" },
    { icon: <ShieldCheck size={14} />, text: "Safety First" },
    { icon: <Clock size={14} />, text: "Always On-Time" },
  ];

  return (
    <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-300">
      
      <div className="flex justify-between items-start mb-6">
        <h4 className="text-sm font-black text-indigo-600 uppercase tracking-widest flex items-center gap-2">
          <Award size={18} /> Driver Profile
        </h4>
        <span className="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-3 py-1 rounded-full border border-emerald-100">
          Highly Rated
        </span>
      </div>

      <div className="flex items-center gap-6">
        {/* Avatar with Gradient Border */}
        <div className="relative group">
          <div className="h-20 w-20 rounded-full bg-gradient-to-tr from-indigo-600 to-blue-400 p-1">
            <div className="h-full w-full rounded-full bg-white flex items-center justify-center text-2xl font-black text-indigo-600">
              YS
            </div>
          </div>
          <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full shadow-md">
            <ShieldCheck size={16} className="text-blue-500 fill-blue-50" />
          </div>
        </div>

        {/* Details */}
        <div className="flex-1">
          <p className="text-xl font-black text-slate-800 tracking-tight">
            Yogendra Singh
          </p>

          <p className="text-sm font-medium text-slate-500 mt-1">
            Professional Driver • 5+ Years Exp.
          </p>

          {/* Precise Rating Display */}
          <div className="flex items-center gap-2 mt-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md">
              4.5 / 5.0
            </span>
          </div>
        </div>
      </div>

      {/* Modern Instagram Link */}
      <div className="mt-8">
        <a
          href="https://www.instagram.com/anantyatratravels?igsh=N2preXN0YW4xb3c4"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-100 py-3 rounded-2xl text-pink-600 hover:from-pink-100 hover:to-rose-100 transition-all font-bold text-sm"
        >
          <Instagram size={18} />
          View Profile on Instagram
        </a>
      </div>

      {/* Refined Trust Badges Grid */}
      <div className="mt-6 grid grid-cols-2 gap-3">
        {trustBadges.map((badge, idx) => (
          <div 
            key={idx} 
            className="flex items-center gap-2 text-slate-600 bg-slate-50/50 px-3 py-2 rounded-xl border border-slate-100/50 text-[11px] font-semibold"
          >
            <span className="text-indigo-500">{badge.icon}</span>
            {badge.text}
          </div>
        ))}
      </div>

      {/* Bottom Note */}
      <p className="mt-6 text-[10px] text-center text-slate-400 font-medium">
        All drivers undergo mandatory background verification
      </p>
    </div>
  );
}