import { useState } from "react";
import Icon from "./Icons.jsx";
import { FIRM, OFFICES } from "../data.js";

const CONSULTATION_FEE = FIRM.consultationFee || 1000;

export const sendToWhatsApp = ({ name, phone, city, message }) => {
  const text = `Namaste, I am ${encodeURIComponent(name)}.%0APhone: ${encodeURIComponent(phone)}%0AOffice: ${encodeURIComponent(city)}%0A${encodeURIComponent(message)}`;
  window.open(`https://wa.me/91${FIRM.phone}?text=${text}`, "_blank");
};

export function ContactForm({ onDone, dark = false }) {
  const [f, setF] = useState({ name: "", phone: "", city: OFFICES[0].city, message: "" });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    sendToWhatsApp(f);
    setF({ name: "", phone: "", city: OFFICES[0].city, message: "" });
    onDone && onDone();
  };
  const field = "mt-1 w-full rounded-md border border-ink/20 bg-white px-3 py-2.5 text-sm text-ink outline-none transition focus:border-brass focus:ring-2 focus:ring-brass/30";
  const label = `text-sm font-medium ${dark ? "text-white" : "text-ink"}`;
  return (
    <form onSubmit={submit} className="space-y-4">
      <div><label className={label}>Your name<input required value={f.name} onChange={set("name")} className={field} placeholder="Full name" /></label></div>
      <div><label className={label}>Mobile number<input required type="tel" pattern="[0-9+ ]{10,14}" value={f.phone} onChange={set("phone")} className={field} placeholder="10 digit mobile number" /></label></div>
      <div><label className={label}>Preferred office
        <select value={f.city} onChange={set("city")} className={field}>{OFFICES.map((o) => <option key={o.city}>{o.city}</option>)}</select>
      </label></div>
      <div><label className={label}>Brief about your matter<textarea required rows="3" value={f.message} onChange={set("message")} className={field} placeholder="Write in Marathi, Hindi or English" /></label></div>
      <p className={`rounded-md border border-brass/40 bg-brass/10 px-3 py-2 text-xs ${dark ? "text-white/80" : "text-ink/80"}`}>
        First consultation fee: <strong>₹{CONSULTATION_FEE.toLocaleString("en-IN")}</strong>
      </p>
      <button className="btn-gold w-full">Send on WhatsApp</button>
    </form>
  );
}

export default function Contact() {
  const rows = [
    { icon: "phone", label: "Call us", value: `+91 ${FIRM.phone}`, href: `tel:+91${FIRM.phone}` },
    { icon: "wa", label: "WhatsApp", value: `+91 ${FIRM.phone}`, href: `https://wa.me/91${FIRM.phone}` },
    { icon: "mail", label: "Email", value: FIRM.email, href: `mailto:${FIRM.email}` },
  ];
  return (
    <section id="contact" className="section bg-ink text-white">
      <div className="container-x grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Contact us</h2>
          <p className="mt-3 max-w-md text-white/75">Tell us about your matter. We will call you back and explain how we can help.</p>

          <div className="mt-6 inline-flex items-center gap-3 rounded-xl border border-brass/60 bg-brass/10 px-5 py-3">
            <span className="text-sm text-white/75">First consultation fee</span>
            <span className="font-serif text-2xl font-semibold text-brass">₹{CONSULTATION_FEE.toLocaleString("en-IN")}</span>
          </div>

          <ul className="mt-8 space-y-4">
            {rows.map((r) => (
              <li key={r.label}>
                <a href={r.href} target={r.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="group flex items-center gap-4 rounded-xl border border-white/15 p-4 transition duration-300 hover:scale-[1.03] hover:border-brass hover:bg-white/5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brass text-white"><Icon name={r.icon} /></span>
                  <span className="min-w-0"><span className="block text-xs text-white/60">{r.label}</span><span className="block break-all font-semibold">{r.value}</span></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl bg-white p-6 text-ink shadow-xl sm:p-8">
          <h3 className="font-serif text-2xl font-semibold">Request a call back</h3>
          <div className="mt-5"><ContactForm /></div>
        </div>
      </div>
    </section>
  );
}