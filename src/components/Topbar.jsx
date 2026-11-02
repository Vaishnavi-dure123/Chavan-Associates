import Icon from "./Icons.jsx";
import { FIRM } from "../data.js";

export default function Topbar() {
  return (
    <div className="bg-ink text-white/90">
      <div className="container-x flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-2 text-xs sm:text-sm">
        <a href={`tel:+91${FIRM.phone}`} className="flex items-center gap-2 transition hover:text-brass-light">
          <Icon name="phone" className="h-4 w-4" /> +91 {FIRM.phone}
        </a>
        <a href={`mailto:${FIRM.email}`} className="flex items-center gap-2 break-all transition hover:text-brass-light">
          <Icon name="mail" className="h-4 w-4 shrink-0" /> {FIRM.email}
        </a>
        <p className="hidden items-center gap-2 lg:flex">
          <Icon name="pin" className="h-4 w-4" /> Nanded &amp; Pune
        </p>
      </div>
    </div>
  );
}
