import Icon from "./Icons.jsx";
import { FIRM, WHY } from "../data.js";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <h2 className="h2">About Chavan Patil Associates</h2>
          <p className="mt-5 max-w-prose leading-relaxed text-ink/80">
            {FIRM.advocate} has {FIRM.experience} years of experience practising before the District Court and the High Court, and holds a {FIRM.education} degree. He regularly appears at the Nanded court and the firm serves clients from offices in both Nanded and Pune.
          </p>
          <p className="mt-4 max-w-prose leading-relaxed text-ink/80">
            We explain your legal position in plain language, tell you honestly what to expect, and prepare every case with attention to detail. Our aim is to protect your rights and save your time.
          </p>
          <a href="#contact" className="btn-dark mt-7">Talk to us</a>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {WHY.map((w) => (
            <li key={w.title} className="group rounded-xl border border-ink/10 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-lg">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-brass-light transition group-hover:bg-brass group-hover:text-white">
                <Icon name="check" className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-serif text-lg font-semibold">{w.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink/70">{w.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
