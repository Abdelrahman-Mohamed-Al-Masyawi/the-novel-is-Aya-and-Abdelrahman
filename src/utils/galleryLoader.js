/**
 * نظام اكتشاف الصور تلقائيًا.
 *
 * Vite يقرأ كل الصور داخل src/assets/gallery وقت التشغيل/البناء.
 * أي صورة تضعها في مجلد تظهر تلقائيًا دون كتابة مسارها.
 */
const modules = import.meta.glob(
  "../assets/gallery/**/*.{jpg,jpeg,png,webp,avif,gif,JPG,JPEG,PNG,WEBP,AVIF,GIF}",
  { eager: true, query: "?url", import: "default" }
);

const ROOT = "../assets/gallery/";

// ترتيب طبيعي: image2 قبل image10
const naturalSort = (a, b) =>
  a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: "base" });

const normalizeFolder = (folder) =>
  folder.replace(/^\/+|\/+$/g, "").replace(/\\/g, "/");

/** خريطة: اسم المجلد -> قائمة الصور */
const buildIndex = () => {
  const index = {};
  Object.entries(modules).forEach(([path, src]) => {
    const relative = path.slice(ROOT.length); // engagement/aya/img1.jpg
    const parts = relative.split("/");
    const name = parts.pop();
    const folder = parts.join("/");
    (index[folder] ||= []).push({ name, src });
  });
  Object.values(index).forEach((list) => list.sort(naturalSort));
  return index;
};

const galleryIndex = buildIndex();

/** يرجع مصفوفة من {id, src, alt} للمجلد المطلوب (قد تكون فارغة). */
export function getGalleryImages(folder) {
  const key = normalizeFolder(folder);
  const list = galleryIndex[key] || [];
  return list.map(({ name, src }) => ({
    id: `${key}/${name}`,
    src,
    alt: name.replace(/\.[^.]+$/, ""),
  }));
}
