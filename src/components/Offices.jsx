import Icon from "./Icons.jsx";
import { OFFICES } from "../data.js";

export default function Offices() {
  return (
    <section id="offices" className="section">
      <div className="container-x">
        <h2 className="h2">Our offices</h2>
        <p className="mt-3 max-w-xl text-ink/70">Visit us in Nanded or Pune. Please call before visiting so we can keep time for you.</p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {OFFICES.map((o) => (
            <article key={o.city} className="group overflow-hidden rounded-xl border border-ink/10 bg-white transition duration-300 hover:shadow-xl">
              <div className="zoom-wrap h-56 sm:h-64">
                <iframe
                  title={`${o.label} map`}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(o.mapQuery)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                  className="zoom h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-semibold">{o.label}</h3>
                <p className="mt-4 flex gap-3 text-sm leading-relaxed text-ink/80">
                  <Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-brass" />
                  <span>{o.address.map((l) => <span key={l} className="block">{l}</span>)}</span>
                </p>
                <p className="mt-3 flex gap-3 text-sm text-ink/80"><Icon name="clock" className="h-5 w-5 shrink-0 text-brass" /> {o.hours}</p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(o.mapQuery)}`}
                  target="_blank" rel="noreferrer" className="btn-dark mt-5"
                >
                  Get directions
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
