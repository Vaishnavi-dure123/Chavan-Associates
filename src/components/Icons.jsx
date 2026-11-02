const paths = {
  scale: "M12 3v18M7 21h10M5 7h14M5 7l-3 7a3 3 0 006 0L5 7zm14 0l-3 7a3 3 0 006 0l-3-7z",
  shield: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z",
  home: "M3 11l9-8 9 8M5 10v10h14V10M10 20v-6h4v6",
  heart: "M12 21s-8-5-8-11a4.5 4.5 0 018-2.5A4.5 4.5 0 0120 10c0 6-8 11-8 11z",
  doc: "M7 3h7l5 5v13H7zM14 3v5h5M10 13h6M10 17h6",
  building: "M4 21V8l8-5 8 5v13M2 21h20M9 21v-6h6v6M9 11h.01M15 11h.01",
  phone: "M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z",
  mail: "M3 6h18v12H3zM3 7l9 7 9-7",
  pin: "M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11zM12 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",
  clock: "M12 21a9 9 0 100-18 9 9 0 000 18zM12 7v5l3 2",
  menu: "M4 7h16M4 12h16M4 17h16",
  close: "M6 6l12 12M18 6L6 18",
  wa: "M20 12a8 8 0 01-11.8 7L4 20l1.1-4A8 8 0 1120 12zM9 9c0 3 3 6 6 6l1-1.5-2-1-1 .5c-1-.5-2-1.5-2.5-2.5l.5-1-1-2L9 9z",
  check: "M5 12l5 5 9-10",
};

export default function Icon({ name, className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}
