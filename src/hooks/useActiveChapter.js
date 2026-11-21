import { useEffect, useState } from "react";

/**
 * يحدد الفصل الظاهر حاليًا في منتصف الشاشة.
 * يرجع index الفصل أو -1 إذا لم يكن أي فصل ظاهرًا.
 */
export default function useActiveChapter(chapters) {
  const [active, setActive] = useState(-1);

  useEffect(() => {
    const elements = chapters
      .map((c) => document.getElementById(c.id))
      .filter(Boolean);
    if (!elements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = chapters.findIndex((c) => c.id === entry.target.id);
          if (entry.isIntersecting) setActive(index);
          else setActive((prev) => (prev === index ? -1 : prev));
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [chapters]);

  return active;
}
