export default function AvailabilityBadge({ status = "available" }) {
  const isAvailable = status === "available";

  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold
      ${isAvailable
        ? "bg-green-100 text-green-700"
        : "bg-red-100 text-red-700"}`}
    >
      <span
        className={`w-2 h-2 rounded-full animate-pulse
        ${isAvailable ? "bg-green-600" : "bg-red-600"}`}
      ></span>

      {isAvailable ? "Available Today" : "Limited Slots"}
    </div>
  );
}
