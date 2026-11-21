import { motion } from "framer-motion";
import FadeUp from "../common/FadeUp.jsx";

/** الرؤية الشرعية: هادئة ومحترمة — دائرة ذهبية ترسم نفسها وخط زمني. */
export default function SharaiVisionSection({ number, data }) {
  return (
    <section id="sharai-vision" className="section sharai">
      <div className="sharai__ring" aria-hidden="true">
        <svg viewBox="0 0 200 200">
          <motion.circle
            cx="100"
            cy="100"
            r="92"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2.4, ease: [0.76, 0, 0.24, 1] }}
          />
        </svg>
        <FadeUp delay={0.8} className="sharai__number">
          {number}
        </FadeUp>
      </div>

      <FadeUp as="p" delay={0.2} className="sharai__kicker">
        CHAPTER {number}
      </FadeUp>
      <FadeUp as="h2" delay={0.3} className="sharai__title">
        {data.heading}
      </FadeUp>
      <FadeUp as="time" delay={0.45} className="sharai__date">
        {data.date}
      </FadeUp>
      <FadeUp as="p" delay={0.6} className="sharai__text">
        {data.description}
      </FadeUp>
    </section>
  );
}
