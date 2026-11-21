import { motion } from "framer-motion";
import FadeUp from "../common/FadeUp.jsx";
import SectionHeading from "../common/SectionHeading.jsx";

const BARS = 28;

/** موجات صوتية بسيطة: ارتفاعات ثابتة مشتقة من الفهرس، والحركة بـ CSS. */
function SoundWave() {
  return (
    <div className="soundwave" aria-hidden="true">
      {Array.from({ length: BARS }, (_, i) => (
        <span
          key={i}
          style={{
            "--h": `${22 + ((i * 37) % 70)}%`,
            animationDelay: `${(i % 9) * 0.12}s`,
          }}
        />
      ))}
    </div>
  );
}

/** أول مكالمة: واجهة اتصال فاخرة (ليست تطبيق هاتف) مع موجات صوتية. */
export default function FirstCallSection({ number, data }) {
  return (
    <section id="first-call" className="section first-call">
      <SectionHeading number={number} title={data.heading} />

      <motion.div
        className="call-card"
        initial={{ opacity: 0, scale: 0.94, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="call-card__stage">{number}</span>
        <h3 className="call-card__title">{data.title}</h3>
        <SoundWave />
        <dl className="call-card__details">
          <div>
            <dt>التاريخ</dt>
            <dd>{data.date}</dd>
          </div>
          <div>
            <dt>الوقت</dt>
            <dd>{data.time}</dd>
          </div>
        </dl>
        <FadeUp as="p" delay={0.3} className="call-card__text">
          {data.description}
        </FadeUp>
      </motion.div>
    </section>
  );
}
