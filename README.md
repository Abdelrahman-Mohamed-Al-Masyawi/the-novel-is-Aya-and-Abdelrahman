# حكاية آية وعبدالرحمن

تجربة تفاعلية سينمائية (Black × Gold) تحكي القصة من التعارف حتى الخطوبة.
مبنية بـ **React + Vite + JavaScript + JSX + CSS** فقط، بدون Backend أو قاعدة بيانات.

المكتبات: `framer-motion` للحركة، `swiper` للسليدرات، `lucide-react` للأيقونات.

---

## 1. تشغيل المشروع

```bash
npm install
npm run dev
```

ثم افتح الرابط الذي يظهر في الطرفية (غالبًا `http://localhost:5173`).

للبناء النهائي: `npm run build` (الناتج في مجلد `dist`).

---

## 2. مكان إضافة الصور

كل الصور داخل `src/assets/gallery/`. **لا تكتب مسار أي صورة في الكود**؛
ضعها في المجلد المناسب وستظهر تلقائيًا (أعد تحميل الصفحة، أو أعد تشغيل `npm run dev` إن لزم).

```
src/assets/gallery/
├── engagement/
│   ├── together/       ← لحظاتنا (آية وعبدالرحمن معًا)
│   ├── aya/            ← آية في الخطوبة
│   ├── abdelrahman/    ← عبدالرحمن في الخطوبة
│   └── family/         ← الخطوبة مع الأهل
├── aya/                ← آية كما هي (صور شخصية)
├── abdelrahman/        ← عبدالرحمن كما هو (صور شخصية)
└── first-meeting/      ← (اختياري) صور أول تعارف
```

- الصيغ المدعومة: `jpg` `jpeg` `png` `webp` `avif` `gif`.
- الترتيب حسب اسم الملف ترتيبًا طبيعيًا (`image2` قبل `image10`)، فسمِّ الملفات `01.jpg` `02.jpg` … لتتحكم بالترتيب.
- **الصور التجريبية الموجودة الآن مجرد Placeholder** — احذفها وضع صورك.

## 3. كيف أضيف صور آية؟

- الصور الشخصية: `src/assets/gallery/aya/` (قسم «آية كما هي...»).
- صور الخطوبة: `src/assets/gallery/engagement/aya/` (قسم «آية...»).
- أول صورة في `gallery/aya/` تُستخدم أيضًا كصورتها في قسم «قبل أن تبدأ الحكاية...».

## 4. كيف أضيف صور عبدالرحمن؟

نفس الفكرة: `gallery/abdelrahman/` للصور الشخصية، و`gallery/engagement/abdelrahman/` لصور الخطوبة.

## 5. كيف أضيف صور الخطوبة؟

ضعها في `src/assets/gallery/engagement/together/`.

## 6. كيف أضيف صور الأهل؟

ضعها في `src/assets/gallery/engagement/family/`.

---

## 7. كيف أعدل التواريخ؟

افتح `src/data/storyData.js` وعدّل:

| الحقل | المعنى |
|---|---|
| `firstMeeting.date` | تاريخ أول تعارف |
| `sharaiVision.date` | تاريخ الرؤية الشرعية |
| `firstCall.date` و `firstCall.time` | تاريخ ووقت أول مكالمة |
| `engagement.dateLabel` | النص المعروض لتاريخ الخطوبة |
| `engagement.dateISO` | صيغة التاريخ للعدّاد، مثل `2026-10-16T18:00:00` |

> عند تغيير تاريخ الخطوبة غيّر `dateLabel` و`dateISO` معًا.

## 8. كيف أعدل النصوص؟

كل النصوص في الملف نفسه `src/data/storyData.js` (النبذات، العناوين، الأوصاف، المشهد الختامي).
لا حاجة لفتح أي Component.

## 9. كيف أغيّر أسماء الأشخاص؟

- الاسم والاسم الإنجليزي: `aya.name` / `aya.nameEn` و`abdelrahman.name` / `abdelrahman.nameEn`.
- النصوص الثابتة التي تحتوي الأسماء (مثل `engagement.names` و`closing.lines` و`coupleTitle`) عدّلها يدويًا في نفس الملف.
- عنوان التبويب في المتصفح: `index.html` (وسم `<title>`).

## 10. كيف أضيف Section جديدة؟

1. **الصور فقط (معرض جديد):**
   - أنشئ مجلدًا داخل `src/assets/gallery/` مثل `trip/`.
   - أضف في `storyData.js` داخل `galleries` عنصرًا: `trip: { title: "رحلتنا...", folder: "trip" }`.
   - في `src/pages/Home/Home.jsx` أضف:
     ```jsx
     <GallerySection id="trip" number="10" galleries={[galleries.trip]} />
     ```
   - أو استعمل المكوّن مباشرة في أي مكان: `<AutoGallery folder="trip" />`.
2. **فصل جديد في الخط الزمني:** أضف عنصرًا في `src/data/chapters.js` بنفس الـ `id` الذي تعطيه للقسم.
3. **قسم نصي جديد:** أنشئ Component في `src/components/sections/` واستدعه في `Home.jsx` بجانب بقية الأقسام.

---

## هيكلة المشروع

```
src/
├── assets/gallery/     الصور (تُكتشف تلقائيًا)
├── components/
│   ├── common/         FadeUp, TextReveal, ImageReveal, MagneticButton, SectionHeading
│   ├── gallery/        AutoGallery, Lightbox, GallerySection
│   ├── timeline/       TimelineNode
│   ├── sections/       أقسام القصة
│   └── ui/             Navbar, ChapterIndicator, GoldProgressLine
├── data/               storyData.js (النصوص) و chapters.js (الفصول)
├── hooks/              useGalleryImages, useScrollProgress, useActiveChapter, useCountdown
├── pages/Home/         تجميع الصفحة
├── styles/             variables.css, globals.css, sections.css, gallery.css
└── utils/              galleryLoader.js (قلب نظام الاكتشاف التلقائي), scrollToId.js
```

## كيف يعمل الاكتشاف التلقائي؟

`src/utils/galleryLoader.js` يستخدم `import.meta.glob` من Vite لقراءة كل الصور داخل
`src/assets/gallery/**` ثم يبني فهرسًا بحسب المجلد. المكوّن `AutoGallery` يستدعي
`getGalleryImages(folder)` فقط — فلا توجد قائمة صور مكتوبة يدويًا في أي مكان.

## الـ Lightbox

اضغط أي صورة: تكبير/تصغير (أزرار، `+` `-`، أو الضغط على الصورة)، السابق/التالي (أزرار،
الأسهم، أو السحب على الهاتف)، `Esc` للإغلاق، وعدّاد للصور.
