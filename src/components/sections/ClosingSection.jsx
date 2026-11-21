import { motion } from "framer-motion";
import { chapters } from "../../data/chapters.js";

const ease = [0.22, 1, 0.36, 1];

/** المشهد الختامي: خلفية سوداء + ثلاثة أسطر تظهر تباعًا + ذهب هادئ. */
export default function ClosingSection({ lines }) {
  const [first, names, last] = lines;
  const show = (delay) => ({
    initial: { opacity: 0, y: 24, filter: "blur(12px)" },
    whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
    viewport: { once: true, margin: "-20%" },
    transition: { duration: 1.8, delay, ease },
  });

  return (
    <section id="closing" className="closing">
      <div className="closing__glow" aria-hidden="true" />
      <motion.p className="closing__first" {...show(0)}>
        {first}
      </motion.p>
      <motion.h2 className="closing__names" {...show(1.6)}>
        {names}
      </motion.h2>
      <motion.p className="closing__last" {...show(3.2)}>
        {last}
      </motion.p>
      <motion.p className="closing__memory" {...show(4.4)}>
        <strong>{String(chapters.length).padStart(2, "0")}</strong> فصول · <strong>01</strong> حكاية
      </motion.p>
    </section>
  );
}
