import Icon from "./Icons.jsx";
import { PRACTICE } from "../data.js";

export default function Practice({ onOpen }) {
  return (
    <section id="practice" className="section bg-white">
      <div className="container-x">
        <h2 className="h2 max-w-xl">Areas we practise</h2>
        <p className="mt-3 max-w-xl text-ink/70">Select any area to read more or contact us directly.</p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRACTICE.map((p) => (
            <button
              key={p.title}
              onClick={() => onOpen(p)}
              className="group rounded-xl border border-ink/10 bg-paper p-6 text-left transition duration-300 hover:scale-[1.04] hover:border-brass hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brass"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-ink text-brass-light transition duration-300 group-hover:rotate-6 group-hover:bg-brass group-hover:text-white">
                <Icon name={p.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-serif text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{p.short}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-brass">Read more</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
