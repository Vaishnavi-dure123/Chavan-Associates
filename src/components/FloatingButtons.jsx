import Icon from "./Icons.jsx";
import { FIRM } from "../data.js";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-4 right-4 z-30 flex flex-col gap-3">
      <a href={`https://wa.me/91${FIRM.phone}`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25a244] text-white shadow-lg transition duration-200 hover:scale-110">
        <Icon name="wa" className="h-6 w-6" />
      </a>
      <a href={`tel:+91${FIRM.phone}`} aria-label="Call now" className="flex h-12 w-12 items-center justify-center rounded-full bg-brass text-white shadow-lg transition duration-200 hover:scale-110">
        <Icon name="phone" className="h-6 w-6" />
      </a>
    </div>
  );
}
