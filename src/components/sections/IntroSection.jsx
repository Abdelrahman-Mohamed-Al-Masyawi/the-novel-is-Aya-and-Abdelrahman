import { motion } from "framer-motion";
import MagneticButton from "../common/MagneticButton.jsx";
import scrollToId from "../../utils/scrollToId.js";

const ease = [0.22, 1, 0.36, 1];

/** الدخول السينمائي: الاسمان ← العنوان ← زر ابدأ الحكاية. */
export default function IntroSection({ data, aya, abdelrahman, onStart }) {
  const start = () => {
    onStart?.();
    scrollToId("who");
  };

  return (
    <section id="top" className="intro">
      <div className="intro__glow" aria-hidden="true" />

      <motion.p
        className="intro__kicker"
        initial={{ opacity: 0, letterSpacing: "0.8em" }}
        animate={{ opacity: 1, letterSpacing: "0.4em" }}
        transition={{ duration: 2, ease }}
      >
        {data.kicker}
      </motion.p>

      <h1 className="intro__names" aria-label={`${aya.name} × ${abdelrahman.name}`}>
        <motion.span
          initial={{ opacity: 0, scale: 1.25, filter: "blur(18px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.8, delay: 0.3, ease }}
        >
          {aya.name}
        </motion.span>
        <motion.i
          className="intro__cross"
          initial={{ opacity: 0, rotate: -90, scale: 0 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 1.3, ease }}
        >
          ×
        </motion.i>
        <motion.span
          initial={{ opacity: 0, scale: 1.25, filter: "blur(18px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.8, delay: 0.6, ease }}
        >
          {abdelrahman.name}
        </motion.span>
      </h1>

      <motion.p
        className="intro__tagline"
        initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.6, delay: 2, ease }}
      >
        {data.tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 2.9, ease }}
      >
        <MagneticButton onClick={start}>{data.button}</MagneticButton>
      </motion.div>

      <motion.div
        className="intro__scroll"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.6, duration: 1 }}
      />
    </section>
  );
}
