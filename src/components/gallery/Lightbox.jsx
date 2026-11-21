import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from "lucide-react";

const MAX_ZOOM = 3;
const SWIPE_THRESHOLD = 90;

/**
 * Lightbox بملء الشاشة:
 * Zoom + السابق/التالي + إغلاق + عدّاد + لوحة المفاتيح + Swipe.
 */
export default function Lightbox({ images, index, onClose, onChange }) {
  const [zoom, setZoom] = useState(1);
  const [direction, setDirection] = useState(1);
  const isOpen = index !== null && images.length > 0;
  const total = images.length;

  const go = useCallback(
    (step) => {
      setDirection(step);
      setZoom(1);
      onChange((index + step + total) % total);
    },
    [index, total, onChange]
  );

  const zoomBy = useCallback(
    (delta) => setZoom((z) => Math.min(MAX_ZOOM, Math.max(1, +(z + delta).toFixed(2)))),
    []
  );

  // لوحة المفاتيح + منع تمرير الصفحة خلف الـ Lightbox
  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => {
      // الاتجاه RTL: السهم الأيسر = التالي
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") go(1);
      else if (e.key === "ArrowRight") go(-1);
      else if (e.key === "+" || e.key === "=") zoomBy(0.5);
      else if (e.key === "-") zoomBy(-0.5);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [isOpen, go, onClose, zoomBy]);

  const handleDragEnd = (_, info) => {
    if (zoom > 1) return;
    if (info.offset.x < -SWIPE_THRESHOLD) go(-1);
    else if (info.offset.x > SWIPE_THRESHOLD) go(1);
  };

  const current = isOpen ? images[index] : null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="عارض الصور"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <div className="lightbox__backdrop" onClick={onClose} />

          <div className="lightbox__top">
            <span className="lightbox__counter">
              {String(index + 1).padStart(2, "0")} <i>/</i>{" "}
              {String(total).padStart(2, "0")}
            </span>
            <div className="lightbox__tools">
              <button type="button" onClick={() => zoomBy(-0.5)} aria-label="تصغير">
                <ZoomOut size={20} />
              </button>
              <button type="button" onClick={() => zoomBy(0.5)} aria-label="تكبير">
                <ZoomIn size={20} />
              </button>
              <button type="button" onClick={onClose} aria-label="إغلاق">
                <X size={22} />
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current.id}
              className="lightbox__stage"
              custom={direction}
              initial={{ opacity: 0, x: direction * -60, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: direction * 60, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              drag={zoom > 1 ? false : "x"}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.35}
              onDragEnd={handleDragEnd}
            >
              <img
                src={current.src}
                alt={current.alt}
                draggable={false}
                className="lightbox__img"
                style={{
                  transform: `scale(${zoom})`,
                  cursor: zoom > 1 ? "zoom-out" : "zoom-in",
                }}
                onClick={() => setZoom((z) => (z > 1 ? 1 : 2))}
              />
            </motion.div>
          </AnimatePresence>

          {total > 1 && (
            <>
              <button
                type="button"
                className="lightbox__nav lightbox__nav--prev"
                onClick={() => go(-1)}
                aria-label="السابق"
              >
                <ChevronRight size={28} />
              </button>
              <button
                type="button"
                className="lightbox__nav lightbox__nav--next"
                onClick={() => go(1)}
                aria-label="التالي"
              >
                <ChevronLeft size={28} />
              </button>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
