import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/** زر ذهبي ينجذب ناعمًا نحو المؤشر. */
export default function MagneticButton({ children, onClick, className = "" }) {
  const ref = useRef(null);
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.25);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.35);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      type="button"
      className={`magnetic-btn ${className}`}
      style={{ x, y }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onClick={onClick}
      whileTap={{ scale: 0.96 }}
    >
      <span>{children}</span>
    </motion.button>
  );
}
