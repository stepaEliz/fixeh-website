import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Expand, X } from "lucide-react";
import { woodSlatPhotos } from "../data/woodSlat";

export default function ProjectGallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const photo = selected === null ? null : woodSlatPhotos[selected];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (selected === null || !dialog) return;
    if (!dialog.open) dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [selected]);

  function move(direction: number) {
    setSelected((current) => current === null ? null : (current + direction + woodSlatPhotos.length) % woodSlatPhotos.length);
  }

  function close() {
    dialogRef.current?.close();
    setSelected(null);
  }

  return (
    <>
      <div className="slat-gallery">
        {woodSlatPhotos.map((item, index) => (
          <figure key={item.src} className={`slat-gallery-card slat-gallery-card-${index + 1}`}>
            <button type="button" onClick={() => setSelected(index)} className="slat-gallery-open" aria-label={`View full photo: ${item.title}`} aria-haspopup="dialog">
              <img src={item.src} alt={item.alt} width={item.width} height={item.height} loading="lazy" decoding="async" />
              <span className="slat-gallery-expand" aria-hidden="true"><Expand size={18} /></span>
            </button>
            <figcaption className="px-1 pt-4 pb-2">
              <h3 className="font-semibold text-brandDark">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-gray-600">{item.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>
      <dialog ref={dialogRef} className="slat-lightbox" aria-labelledby="slat-photo-title"
        onClose={() => setSelected(null)}
        onClick={(event) => { if (event.target === event.currentTarget) close(); }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
          if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
        }}>
        {photo && (
          <div className="slat-lightbox-content">
            <div className="flex items-center justify-between gap-4 pb-3">
              <p id="slat-photo-title" className="font-medium text-white">{photo.title}</p>
              <button type="button" autoFocus onClick={close} className="slat-lightbox-control shrink-0" aria-label="Close photo"><X size={24} /></button>
            </div>
            <img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} />
            <div className="flex items-center justify-between gap-3 pt-3">
              <button type="button" onClick={() => move(-1)} className="slat-lightbox-control" aria-label="Previous photo"><ArrowLeft size={22} /></button>
              <p className="text-center text-sm text-white/85" aria-live="polite">{(selected ?? 0) + 1} / {woodSlatPhotos.length}</p>
              <button type="button" onClick={() => move(1)} className="slat-lightbox-control" aria-label="Next photo"><ArrowRight size={22} /></button>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
