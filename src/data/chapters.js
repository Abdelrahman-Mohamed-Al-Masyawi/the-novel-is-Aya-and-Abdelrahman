/**
 * الفصول: كل فصل له id يطابق id القسم في الصفحة.
 * لإضافة فصل جديد: أضف هنا عنصرًا، ثم أضف القسم في Home.jsx بنفس الـ id.
 */
export const chapters = [
  { id: "who", number: "01", title: "من هما؟" },
  { id: "first-meeting", number: "02", title: "أول تعارف" },
  { id: "sharai-vision", number: "03", title: "الرؤية الشرعية" },
  { id: "first-call", number: "04", title: "أول مكالمة" },
  { id: "engagement", number: "05", title: "الخطوبة" },
  { id: "moments", number: "06", title: "لحظات الخطوبة" },
  { id: "family", number: "07", title: "الأهل" },
  { id: "aya-gallery", number: "08", title: "آية" },
  { id: "abdelrahman-gallery", number: "09", title: "عبدالرحمن" },
];

export const navLinks = [
  { label: "البداية", target: "top" },
  { label: "القصة", target: "who" },
  { label: "الخطوبة", target: "engagement" },
  { label: "الصور", target: "moments" },
];
