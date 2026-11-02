import { useState, useEffect } from "react";
import Icon from "./Icons.jsx";
import { FIRM } from "../data.js";


const PHOTO = "/Advocate.jpg";

export default function Hero({ onConsult }) {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

 
  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  const openModal = () => {
    setOpen(true);
    requestAnimationFrame(() => requestAnimationFrame(() => setShow(true)));
  };

  const closeModal = () => {
    setShow(false);
    setTimeout(() => setOpen(false), 300);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && closeModal();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <section id="home" className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "repeating-linear-gradient(135deg,#fff 0 1px,transparent 1px 22px)" }} aria-hidden="true" />
      <div className="container-x relative grid gap-10 py-16 sm:py-24 lg:grid-cols-5 lg:items-center">
        <div className={`transition-all duration-700 ease-out lg:col-span-3 ${mounted ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}`}>
          <p className="text-sm font-medium text-brass-light">District Court &middot; High Court &middot; Nanded &amp; Pune</p>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl">
            Legal advice. Careful representation in court.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            Chavan Patil Associates helps individuals and families with civil, criminal, property and family matters. Talk to an advocate directly, in Nanded or Pune.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={`tel:+91${FIRM.phone}`} className="btn-gold"><Icon name="phone" className="h-4 w-4" /> Call {FIRM.phone}</a>
            <button onClick={onConsult} className="btn-line">Book a consultation</button>
          </div>
        </div>

        <div className={`group rounded-xl border border-white/15 bg-white/5 p-6 transition-all duration-700 ease-out delay-150 hover:scale-[1.03] hover:bg-white/10 lg:col-span-2 ${mounted ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}>
          <button
            type="button"
            onClick={openModal}
            aria-label={`View photo of ${FIRM.advocate}`}
            className="group/photo relative block aspect-[4/5] w-full cursor-zoom-in overflow-hidden rounded-xl border-2 border-white/20 bg-black/20 p-0 transition duration-300 hover:border-brass hover:shadow-2xl"
          >
            <img
              src={PHOTO}
              alt={FIRM.advocate}
              className={`h-full w-full object-cover object-top transition-transform duration-[10000ms] ease-out group-hover/photo:scale-110 ${mounted ? "scale-110" : "scale-100"}`}
            />
            <span className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 translate-y-2 rounded-full bg-black/65 px-3 py-1 text-xs text-white opacity-0 transition duration-300 group-hover/photo:translate-y-0 group-hover/photo:opacity-100">
              Click to enlarge
            </span>
          </button>

          <p className="mt-5 font-serif text-2xl font-semibold">{FIRM.advocate}</p>
          <p className="mt-1 text-sm text-brass-light">Founding advocate</p>
          <dl className="mt-6 grid grid-cols-2 gap-5 border-t border-white/15 pt-6 text-sm">
            <div><dt className="text-white/60">Experience</dt><dd className="mt-1 text-lg font-semibold">{FIRM.experience} years</dd></div>
            <div><dt className="text-white/60">Education</dt><dd className="mt-1 text-lg font-semibold">{FIRM.education}</dd></div>
            <div><dt className="text-white/60">Courts</dt><dd className="mt-1 font-semibold">District Court, High Court</dd></div>
            <div><dt className="text-white/60">Offices</dt><dd className="mt-1 font-semibold">Nanded, Pune</dd></div>
          </dl>
        </div>
      </div>

      {open && (
        <div
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          className={`fixed inset-0 z-[100] flex cursor-zoom-out items-center justify-center bg-black/85 p-4 backdrop-blur-md transition-opacity duration-300 ${show ? "opacity-100" : "opacity-0"}`}
        >
          <button
            type="button"
            onClick={closeModal}
            aria-label="Close"
            className="absolute right-5 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-3xl leading-none text-white transition duration-300 hover:rotate-90 hover:scale-110 hover:bg-brass"
          >
            &times;
          </button>
          <figure
            onClick={(e) => e.stopPropagation()}
            className={`m-0 max-w-[min(92vw,520px)] cursor-default transition-all duration-500 ease-[cubic-bezier(0.22,1.2,0.36,1)] ${show ? "translate-y-0 scale-100 opacity-100" : "translate-y-8 scale-50 opacity-0"}`}
          >
            <img
              src={PHOTO}
              alt={FIRM.advocate}
              className="block max-h-[80vh] w-full rounded-xl border-2 border-brass object-contain shadow-2xl"
            />
            <figcaption className="mt-4 flex flex-col items-center gap-0.5 text-center text-white">
              <span className="font-serif text-xl font-semibold">{FIRM.advocate}</span>
              <span className="text-sm text-white/70">Founding advocate</span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}