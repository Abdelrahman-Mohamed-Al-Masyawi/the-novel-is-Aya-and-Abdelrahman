import scrollToId from "../../utils/scrollToId.js";

/**
 * خط ذهبي جانبي يتقدّم مع التمرير، وعليه نقاط للفصول التسعة.
 * الفصل النشط تتوهّج نقطته، ويمكن الضغط على أي نقطة للانتقال.
 */
export default function GoldProgressLine({ progress, chapters, activeIndex }) {
  return (
    <aside className="gold-line" aria-label="تقدّم القصة">
      <div className="gold-line__track">
        <div
          className="gold-line__fill"
          style={{ transform: `scaleY(${progress})` }}
        />
      </div>
      <ul className="gold-line__ticks">
        {chapters.map((chapter, i) => (
          <li key={chapter.id}>
            <button
              type="button"
              className={`gold-line__tick ${i === activeIndex ? "is-active" : ""} ${
                i < activeIndex ? "is-passed" : ""
              }`}
              onClick={() => scrollToId(chapter.id)}
              aria-label={`الفصل ${chapter.number}: ${chapter.title}`}
              title={chapter.title}
            />
          </li>
        ))}
      </ul>
    </aside>
  );
}
