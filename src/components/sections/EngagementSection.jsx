import { motion } from "framer-motion";
import FadeUp from "../common/FadeUp.jsx";
import TextReveal from "../common/TextReveal.jsx";
import useCountdown from "../../hooks/useCountdown.js";

const pad = (n) => String(n).padStart(2, "0");

/** عدّاد هادئ: أرقام ذهبية رفيعة بدل العدّاد التقليدي. */
function QuietCounter({ dateISO, pastLabel, futureLabel }) {
  const { isPast, days, hours, minutes } = useCountdown(dateISO);
  const units = [
    { value: days, label: "يوم" },
    { value: pad(hours), label: "ساعة" },
    { value: pad(minutes), label: "دقيقة" },
  ];

  return (
    <div className="quiet-counter">
      <p>{isPast ? pastLabel : futureLabel}</p>
      <div className="quiet-counter__units">
        {units.map((unit) => (
          <div key={unit.label}>
            <strong>{unit.value}</strong>
            <span>{unit.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** الانتقال القوي إلى الخطوبة: الحكاية أصبحت واحدة. */
export default function EngagementSection({ number, data }) {
  return (
    <section id="engagement" className="engagement">
      <div className="engagement__curtain" aria-hidden="true" />
      <motion.div
        className="engagement__rule"
        aria-hidden="true"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: [0.76, 0, 0.24, 1] }}
      />

      <FadeUp as="p" className="engagement__kicker">
        CHAPTER {number}
      </FadeUp>
      <TextReveal text={data.heading} as="h2" className="engagement__heading" stagger={0.14} />
      <FadeUp as="p" delay={0.5} className="engagement__names">
        {data.names}
      </FadeUp>
      <FadeUp as="time" delay={0.7} dateTime={data.dateISO} className="engagement__date">
        {data.dateLabel}
      </FadeUp>
      <FadeUp delay={0.9}>
        <QuietCounter
          dateISO={data.dateISO}
          pastLabel={data.pastLabel}
          futureLabel={data.futureLabel}
        />
      </FadeUp>
    </section>
  );
}
