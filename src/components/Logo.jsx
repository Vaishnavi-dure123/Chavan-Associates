export default function Logo({ light = false }) {
  return (
    <div className="flex items-center gap-3">
      <img
        src="/logo.png"
        alt="Chavan Patil Associates logo"
        className={`h-11 w-11 shrink-0 rounded-xl object-contain ${light ? "ring-1 ring-brass/70" : ""}`}
      />
      <div className="leading-tight">
        <p className={`font-serif text-lg font-bold sm:text-xl ${light ? "text-white" : "text-ink"}`}>Chavan Patil</p>
        <p className={`text-xs font-medium tracking-wide ${light ? "text-brass-light" : "text-brass"}`}>Associates, Advocates</p>
      </div>
    </div>
  );
}