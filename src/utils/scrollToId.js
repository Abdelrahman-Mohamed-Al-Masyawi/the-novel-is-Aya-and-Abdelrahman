/** تمرير ناعم إلى قسم بالـ id. "top" = أعلى الصفحة. */
export default function scrollToId(id) {
  if (id === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}
