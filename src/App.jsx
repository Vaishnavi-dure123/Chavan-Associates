import { useCallback, useEffect, useState } from "react";
import Topbar from "./components/Topbar.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Practice from "./components/Practice.jsx";
import Offices from "./components/Offices.jsx";
import Contact, { ContactForm } from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Modal from "./components/Modal.jsx";
import FloatingButtons from "./components/FloatingButtons.jsx";
import { FIRM } from "./data.js";

export default function App() {
  const [area, setArea] = useState(null);
  const [consult, setConsult] = useState(false);
  const closeConsult = useCallback(() => setConsult(false), []);
  const closeArea = useCallback(() => setArea(null), []);


  useEffect(() => {
    let seen = false;
    try { seen = sessionStorage.getItem("cpa-popup") === "1"; } catch (e) {}
    if (seen) return;
    const t = setTimeout(() => {
      setConsult(true);
      try { sessionStorage.setItem("cpa-popup", "1"); } catch (e) {}
    }, 8000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Topbar />
      <Navbar onConsult={() => setConsult(true)} />
      <main>
        <Hero onConsult={() => setConsult(true)} />
        <About />
        <Practice onOpen={setArea} />
        <Offices />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />

      <Modal open={!!area} onClose={closeArea} title={area?.title}>
        <p className="leading-relaxed text-ink/80">{area?.long}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a href={`tel:+91${FIRM.phone}`} className="btn-dark">Call {FIRM.phone}</a>
          <a href="#contact" onClick={closeArea} className="btn-gold">Send details</a>
        </div>
      </Modal>

      <Modal open={consult} onClose={closeConsult} title="Book a consultation">
        <p className="mb-5 text-sm text-ink/70">Share your details and we will get back to you.</p>
        <ContactForm onDone={closeConsult} />
      </Modal>
    </>
  );
}
