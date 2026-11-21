import { motion } from "framer-motion";

/**
 * يكشف النص كلمة كلمة من داخل قناع (مناسب للعناوين الكبيرة).
 * الكلمات تُقسَّم بالمسافات فلا يتكسر الشكل العربي المتصل.
 */
export default function TextReveal({
  text,
  as = "h2",
  className = "",
  delay = 0,
  stagger = 0.09,
  once = true,
}) {
  const Tag = motion[as] || motion.h2;
  const words = text.split(" ");

  return (
    <Tag
      className={`text-reveal ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span className="text-reveal__mask" key={`${word}-${i}`} aria-hidden="true">
          <motion.span
            className="text-reveal__word"
            variants={{
              hidden: { y: "110%", opacity: 0 },
              visible: {
                y: "0%",
                opacity: 1,
                transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
}
