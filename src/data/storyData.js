/**
 * كل النصوص والتواريخ في هذا الملف.
 * عدّل القيم هنا فقط — لا حاجة لفتح أي Component.
 */
export const storyData = {
  coupleTitle: 'حكاية آية وعبدالرحمن',

  intro: {
    kicker: 'A STORY IN CHAPTERS',
    tagline: 'حكاية لم تبدأ بالصدفة...',
    button: 'ابدأ الحكاية',
  },

  aya: {
    name: 'آية',
    nameEn: 'Aya',
    tagline: 'قبل أن تبدأ الحكاية...',
    bio: 'شخصية جميلة تحب الهدوء والعزلة عن الشغب فطبعها يجعلها تعشق الاشياء الهادئة الجميلة كالاطفال الصغيرة',
    personality: 'هادئة، حنونة، خجولة,روح طفولية.',
    loves: ['الشاورما', ' البشاميل', 'الكركية', 'المانجا', 'تحب اللون الاسود والغوامق'],
    traits: ['صادقة', 'طموحة', 'دافئة'],
    special: 'تعشق الهروب من المكالمات😂😂',
  },

  abdelrahman: {
    name: 'عبدالرحمن',
    nameEn: 'Abdelrahman',
    tagline: 'قبل أن تبدأ الحكاية...',
    bio: 'شخصية طمحولة تسعي الي تحقيق النجاح العلمي ويحب التطلع الي ما هو جديد',
    personality: 'رزين، كريم، وصاحب قلب كبير.',
    loves: ['القراءة', 'الشاي', ' البرمجة والتكنولوجيا'],
    traits: ['وفيّ', 'مسؤول', 'مرح'],
    special: 'تفصيلة صغيرة تميّزه عن الجميع.',
  },

  firstMeeting: {
    heading: 'وهنا بدأت الحكاية...',
    title: 'أول تعارف بين آية وعبدالرحمن',
    date: '2/10/2026',
    place: 'في بيت ايه',
    description: 'في هذا اليوم التقى اسمان لأول مرة، ولم يكن أحد يعلم أن ما بدأ بحديث عابر سيصبح حكاية كاملة.',
    // مجلد اختياري: ضع صور هذه المرحلة داخل src/assets/gallery/first-meeting
    galleryFolder: 'first-meeting',
  },

  sharaiVision: {
    heading: 'الرؤية الشرعية',
    date: '2/10/2026',
    description: 'لقاء هادئ بحضور الأهل، كان فيه الاحترام والطمأنينة، وكان فيه أول قرار بأن تمضي الحكاية.',
  },

  firstCall: {
    heading: 'أول صوت...',
    title: 'أول مكالمة بينا',
    date: '2026/10/10',
    time: '9:56 ص',
    description: 'صوت واحد كان كافيًا ليصبح الغريب مألوفًا.',
  },

  engagement: {
    heading: 'ومن هنا... أصبحت الحكاية واحدة.',
    names: 'آية & عبدالرحمن',
    // الصيغة المعروضة للتاريخ
    dateLabel: 'الجمعة — 16 أكتوبر 2026',
    // الصيغة البرمجية للعدّاد (ISO) — تأكد أنها تطابق التاريخ أعلاه
    dateISO: '2026-10-16T18:00:00',
    pastLabel: 'مرّت على الخطوبة',
    futureLabel: 'يفصلنا عن الخطوبة',
  },

  galleries: {
    together: { title: 'لحظاتنا...', folder: 'engagement/together' },
    aya: { title: 'آية...', folder: 'engagement/aya' },
    abdelrahman: { title: 'عبدالرحمن...', folder: 'engagement/abdelrahman' },
    family: {
      title: 'وبين الأهل... اكتملت الفرحة.',
      folder: 'engagement/family',
    },
    ayaPersonal: { title: 'آية كما هي...', folder: 'aya' },
    abdelrahmanPersonal: { title: 'عبدالرحمن كما هو...', folder: 'abdelrahman' },
  },

  closing: {
    lines: ['كانت البداية...', 'آية & عبدالرحمن', 'وما زالت الحكاية تُكتب...'],
  },
};
