import { AnimatePresence, motion } from "framer-motion";

/** يظهر أسفل الشاشة: CHAPTER 03 / الرؤية الشرعية — ويتغير مع كل فصل. */
export default function ChapterIndicator({ chapter }) {
  return (
    <div className="chapter-indicator" aria-live="polite">
      <AnimatePresence mode="wait">
        {chapter && (
          <motion.div
            key={chapter.id}
            className="chapter-indicator__inner"
            initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -14, filter: "blur(6px)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="chapter-indicator__label">CHAPTER {chapter.number}</span>
            <span className="chapter-indicator__title">{chapter.title}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
