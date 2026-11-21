import { motion } from "framer-motion";

/**
 * عقدة زمنية: دائرة ذهبية + رقم المرحلة + خط عمودي يرسم نفسه.
 * تُستخدم في أول تعارف والرؤية الشرعية.
 */
export default function TimelineNode({ number, size = "md", withLine = true }) {
  return (
    <div className={`timeline-node timeline-node--${size}`}>
      <motion.div
        className="timeline-node__circle"
        initial={{ scale: 0.4, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <span>{number}</span>
      </motion.div>
      {withLine && (
        <motion.div
          className="timeline-node__line"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.4, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
        />
      )}
    </div>
  );
}
