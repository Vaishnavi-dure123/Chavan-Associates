import { useEffect } from "react";
import Icon from "./Icons.jsx";

export default function Modal({ open, onClose, title, children }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex animate-fade items-end justify-center bg-black/60 p-0 sm:items-center sm:p-4" onClick={onClose} role="dialog" aria-modal="true" aria-label={title}>
      <div className="max-h-[92vh] w-full max-w-lg animate-pop overflow-y-auto rounded-t-2xl bg-white p-6 shadow-2xl sm:rounded-2xl sm:p-8" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif text-2xl font-semibold text-ink">{title}</h3>
          <button onClick={onClose} aria-label="Close" className="rounded-md p-1 text-ink transition hover:rotate-90 hover:bg-ink/5"><Icon name="close" className="h-6 w-6" /></button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}
