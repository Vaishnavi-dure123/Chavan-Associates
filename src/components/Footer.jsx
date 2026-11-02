import Icon from "./Icons.jsx";
import Logo from "./Logo.jsx";
import { FIRM, OFFICES } from "../data.js";

export default function Footer() {
  return (
    <footer className="bg-[#0a1f1a] text-white/75">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-4 text-sm leading-relaxed">Advocates practising in the District Court and High Court. Offices in Nanded and Pune.</p>
        </div>
        <div>
          <h4 className="font-serif text-lg font-semibold text-white">Quick links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[["Home", "#home"], ["About", "#about"], ["Practice Areas", "#practice"], ["Offices", "#offices"], ["Contact", "#contact"]].map(([l, h]) => (
              <li key={h}><a href={h} className="transition hover:text-brass-light">{l}</a></li>
            ))}
          </ul>
        </div>
        {OFFICES.map((o) => (
          <div key={o.city}>
            <h4 className="font-serif text-lg font-semibold text-white">{o.label}</h4>
            <p className="mt-4 flex gap-2 text-sm leading-relaxed"><Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-brass-light" /><span>{o.address.slice(1).join(", ")}</span></p>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-5 text-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1 sm:flex-row sm:gap-6">
            <a href={`tel:+91${FIRM.phone}`} className="flex items-center gap-2 hover:text-brass-light"><Icon name="phone" className="h-4 w-4" /> +91 {FIRM.phone}</a>
            <a href={`mailto:${FIRM.email}`} className="flex items-center gap-2 break-all hover:text-brass-light"><Icon name="mail" className="h-4 w-4 shrink-0" /> {FIRM.email}</a>
          </div>
          <p>&copy; {new Date().getFullYear()} Chavan Patil Associates</p>
        </div>
        <p className="container-x pb-6 text-xs leading-relaxed text-white/50">
          Disclaimer: This website is for information only and is not advertising or solicitation. Nothing here is legal advice, and no advocate-client relationship is formed by using this site.
        </p>
      </div>
    </footer>
  );
}
