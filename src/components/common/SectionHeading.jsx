import FadeUp from "./FadeUp.jsx";
import TextReveal from "./TextReveal.jsx";

/** عنوان فصل موحّد: رقم الفصل + عنوان كبير + سطر فرعي اختياري. */
export default function SectionHeading({ number, title, subtitle, align = "center" }) {
  return (
    <header className={`section-heading section-heading--${align}`}>
      {number && (
        <FadeUp className="section-heading__number">
          <span>CHAPTER</span> {number}
        </FadeUp>
      )}
      <TextReveal text={title} as="h2" className="section-heading__title" />
      {subtitle && (
        <FadeUp delay={0.3} className="section-heading__subtitle">
          {subtitle}
        </FadeUp>
      )}
    </header>
  );
}
