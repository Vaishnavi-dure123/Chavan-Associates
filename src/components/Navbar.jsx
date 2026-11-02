import { useEffect, useState } from "react";
import Icon from "./Icons.jsx";
import Logo from "./Logo.jsx";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#practice", label: "Practice Areas" },
  { href: "#offices", label: "Offices" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ onConsult }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/95 backdrop-blur">
      <div className="container-x flex items-center justify-between py-3">
        <a href="#home" aria-label="Chavan Patil Associates home"><Logo /></a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-ink/80 transition hover:text-brass">
              {l.label}
            </a>
          ))}
          <button onClick={onConsult} className="btn-dark">Book consultation</button>
        </nav>

        <button
          className="rounded-md p-2 text-ink transition hover:bg-ink/5 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} className="h-7 w-7" />
        </button>
      </div>

      {open && (
        <div
          className="absolute left-0 right-0 top-full h-screen animate-fade bg-ink/60 lg:hidden"
          onClick={() => setOpen(false)}
        >
          <nav
            className="animate-pop border-b border-ink/10 bg-paper px-4 pb-6 pt-2 shadow-xl"
            onClick={(e) => e.stopPropagation()}
            aria-label="Mobile"
          >
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-ink/10 py-4 text-base font-medium text-ink transition hover:pl-2 hover:text-brass"
              >
                {l.label}
              </a>
            ))}
            <button onClick={() => { setOpen(false); onConsult(); }} className="btn-dark mt-5 w-full">
              Book consultation
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}