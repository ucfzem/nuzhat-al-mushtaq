# 📝 نسخة احتياطية للمحادثة (Backup) — نزهة المشتاق

> **ملف أُنشئ بتاريخ:** 14 أغسطس 2026
> **الغرض:** حفظ مسار العمل والقرارات المتخذة في جلسة بناء المشروع ونشره.
> **ملاحظة أمنية:** لم تُحفظ أي رموز أو مفاتيح (توكنات) في هذا المستودع أو هذا الملف. أي توكن استُخدم في الجلسة يُعاد توفيره عند الحاجة.

---

## 1. المشروع

عرض أمين لكتاب **«نزهة المشتاق في اختراق الآفاق»** للشريف الإدريسي، بحسب الهيكل الأصلي:
- **7 أقاليم**، كل إقليم مقسم إلى **10 أجزاء** (من الغرب إلى الشرق).
- المجلد الأول: الأقاليم 1–3 · المجلد الثاني: الأقاليم 4–7.
- كل جزء يحوي:
  - `originalText` — النص الحرفي.
  - `fullText` — النص الحرفي الكامل، مأخوذ آلياً من صفحات الشاملة (70/70 جزء).
  - `summary` — خلاصة وصفية عامة.
  - `modernView` — عرض حديث مستوحى من المنهج (وليست من الكتاب).
  - `shamelaPartLink` — الرابط الدقيق في المكتبة الشاملة.

**المصدر:** طبعة عالم الكتب، بيروت 1409هـ/1989م، ومكتبة الشاملة: https://shamela.ws/book/11787

## 2. مسار الجلسة (خلاصة المحادثة)

1. طلب المستخدم تجهيز مشروع لموقع كتاب الإدريسي على GitHub Pages باسم `nuzhat-al-mushtaq`.
2. أنشئ هيكل الملفات: `index.html` (الواجهة والتنقل) و `all-regions.js` (البيانات) و `README.md`.
3. أُضيف رابط المكتبة الشاملة كمصدر، مع روابط مباشرة لكل جزء (أرقام الصفحات من فهرس الشاملة الفعلي).
4. قرار المستخدم: **الاكتفاء بالروابط** وليس تضمين النصوص كاملة (Link only).
5. مراجعة: طلب المستخدم نسخة **أنظف وأخف** — بلا خطوط خارجية (خطوط النظام فقط)، بلا بحث/طباعة زائدة، ووظائف التنقل فقط.
6. اعتماد خطة الربط (Mapping Plan): إعادة هيكلة البيانات إلى `allRegionsData` مع حقول `originalText` / `modernView` / `shamelaPartLink` وربط كل جزء بمصدره.
7. التفويض بالنشر: تم الدفع إلى GitHub وتفعيل GitHub Pages.
8. تم النشر على **Vercel** و **Cloudflare Workers**.
9. ضمان الأمانة: لم يُختلق أي نص حرفي غير مؤكد؛ الأجزاء غير المكتملة موسومة «قيد الإضافة».

## 3. هيكل الملفات

```
├─ index.html       ← الواجهة والتنقل (RTL، خطوط النظام، بدون اعتماديات خارجية)
├─ all-regions.js    ← بيانات الأقاليم والأجزاء والروابط
├─ README.md         ← وصف المشروع وتعليمات النشر
└─ github.md         ← هذه النسخة الاحتياطية
```

## 4. الروابط المباشرة (المفعّلة)

| المنصة | الرابط |
|---|---|
| GitHub Pages | https://ucfzem.github.io/nuzhat-al-mushtaq/ |
| Vercel | https://nuzhat-al-mushtaq.vercel.app/ |
| Cloudflare Workers | https://nuzhat-al-mushtaq.azer-tyu199p.workers.dev/ |
| مستودع GitHub | https://github.com/ucfzem/nuzhat-al-mushtaq |
| النص الأصلي (الشاملة) | https://shamela.ws/book/11787 |

## 5. الحسابات المستخدمة

- GitHub: `ucfzem`
- Vercel: `ucfzem` (username: azertyu199p-9183) — فريق افتراضي
- Cloudflare: حساب `Azer.tyu199p@gmail.com's Account`

## 6. الخطوات التالية

- أي تحديث للشفرة: `git add -A && git commit -m "..." && git push origin main`
  ثم يعيد Vercel النشر تلقائياً (في حال ربط المشروع بـ Git) أو عبر:
  `vercel deploy --prod` و `wrangler deploy`.
- **أُنجز:** النصوص الكاملة لجميع الأجزاء (انظر القسم 10)؛ الموقع مكتمل في الأقاليم السبعة.

## 7. تحقق عام

- جميع الروابط الثلاثة تُرجع HTTP 200 للصفحة الرئيسية وملف البيانات.
- عدد الأجزاء: 70 (7 أقاليم × 10 أجزاء) — تم التحقق منه آلياً.
- شريط التنقل الجانبي، الأزرار السابقة/التالية، وشاشة البداية تعمل.

## 8. إصلاح لاحق (بعد النشر الأول)

- **الخلل:** `index.html` كان يشير إلى `allRegionsData` دون ربط ملف `all-regions.js` أولاً، فيتوقف الموقع في المتصفح.
- **الإصلاح:** أُضيف `<script src="./all-regions.js"></script>` قبل السكربت الرئيسي، مع حارس خطأ يعرض رسالة واضحة إذا غاب ملف البيانات.
- **التحقق:** جرّب التحميل الحقيقي للملفين عبر خادم HTTP محلي (jsdom) — 7 أقاليم، 70 زراً، التنقل والروابط تعمل.
- **المتغيرات:** الأسماء مطابقة تماماً (`allRegionsData`، `IDRISI_META`).
- لا يُجلب أي نص خارجي (لا CORS)؛ الرابط يُدرج في نفس المستودع؛ النص الحرفي يُلصق يدوياً لاحقاً.
- أُعيد النشر على المنصات الثلاث بعد الإصلاح.

## 9. تنظيف إضافي (جولة لاحقة)

- **أسماء فريدة:** استُبدلت `toc`/`content` بأسماء فريدة `tocEl`/`contentEl` لإزالة أي تكرار في التعريف.
- **إزالة رمز §:** حُذف من أسماء الأجزاء في شريط التنقل.
- **دعم `fullText`:** إن وُجد حقل `fullText` في الجزء يُعرض كـ «النص الأصلي (من المصدر)»، وإلا يُعرض `summary` كـ «ملخص مؤقت» مع تنبيه «قيد الإضافة».
- **الجوال:** `flex-direction: column-reverse` (كان صحيحاً أصلاً).
- **`IDRISI_META`:** موجود في بداية `all-regions.js` (لا حاجة لإضافته).
- **التحقق الآلي:** عبر خادم HTTP محلي — 7 أقاليم، 70 زراً، لا رمز §، مسارات العرض الأصلية/الحديثة تعمل، وروابط الشاملة تظهر.

## 10. تحميل النصوص الكاملة (آلياً من الشاملة)

- **الطلب:** «Can't you load full text from this?» — إمكانية جلب النصوص كاملة تلقائياً بدل اللصق اليدوي.
- **الإجابة:** نعم. CORS لا يمنع الجلب من الخادم (Server-side)، وتم حلّها بجلب كل صفحة عبر `curl` واستخراج النص من وسم `<div class="nass" data-page-id="...">`.
- **النتيجة:** النص الحرفي الكامل لـ **70/70 جزء** داخل `fullText` لكل جزء (الملف الآن ~158KB، 639 سطراً أُضيفت).
- **التنظيف:** تحويل `<br>` و`</p>` إلى أسطر، حذف روابط النسخ/الأساسات، توسيط العناوين (`الجزء الأوّل` في سطر مستقل).
- **التحقق من سلامة البيانات:** بقية الحقول (`summary` / `modernView` / `originalText` / الروابط) لم تتغير — صفر اختلافات مقارنة بالنسخة السابقة.
- **عرض النص:** `index.html` يعرض `fullText` كفقرات `<p>` بدل سطر واحد؛ عند غيابه يعرض `summary` + تنبيه «قيد الإضافة».
- **تحقق فني (jsdom):** 7 رؤوس أقاليم، 70 زراً، «1-1» يعرض النص الأصلي (5 فقرات) بلا تنبيه معلّق، «7-10» يعرض خاتمة الكتاب «انقضى الكتاب...»، والأزرار السابقة/التالية تعمل.
- **مقارنة مع دليل خارجي:** دليل مقترح يحتوي صيغ أرقام صفحات خاطئة (مثل الإقليم الثاني 108–117)، بينما بياناتنا مطابقة لفهرس الشاملة الفعلي وتم التحقق آلياً (70/70 رابط).
- **الإصدار:** commit `2c7f34a` — "Add full original text of all 70 sections from Shamela".

## 11. النشر النهائي بعد النصوص الكاملة

- GitHub Pages: تحدّث تلقائياً بالدفع (`2c7f34a`) → HTTP 200.
- Vercel: `vercel deploy --prod` بـ token جديد → `https://nuzhat-al-mushtaq.vercel.app` (HTTP 200، ملف البيانات 158,632 بايت).
- Cloudflare Workers: `wrangler deploy` بعد إعادة بناء `worker.js` من `index.html` + `all-regions.js` → `https://nuzhat-al-mushtaq.azer-tyu199p.workers.dev` (HTTP 200، الإصدار `ebea3cfa`).
- جميع المنصات الثلاث تعرض النص الكامل (ملف البيانات مطابق الحجم: 158,632 بايت في كل منصة).

## 12. تغيير الخط (طلبه المستخدم)

- **الطلب:** «https://fonts.google.com/specimen/Cairo?hl=fr-FR change font» — تطبيق خط Cairo.
- **الإجراء:** أُضيف `<link>` لخط Cairo من Google Fonts (مع `preconnect`) في `index.html`، ووُضع `"Cairo"` في مقدمة `font-family` (مع بقاء خطوط النظام كاحتياطي).
- **ملاحظة:** هذا يستثني قاعدة «خطوط النظام فقط» السابقة بناءً على طلب صريح من المستخدم.
- **الإصدار:** commit `c951be7` — "Use Cairo font from Google Fonts".
- **النشر:** أُعيد البناء والنشر على المنصات الثلاث (GitHub Pages، Vercel، Cloudflare Workers — Worker version `ff5681a9`) وكلها HTTP 200 وتعرض الخط.

## 13. إصلاح التنقل والتصميم (إزالة القائمة الأكورديونية)

- **الطلب:** إزالة القسم الأخضر السفلي (أزرار الأقاليم الأكورديونية بعنوان «فهرس الأقاليم») نهائياً، والاكتفاء بأزرار الشبكة العلوية «اختر إقليماً للبدء» مع جعلها تعمل فعلياً.
- **الإزالة:** حُذف `<nav class="sidebar">` بالكامل مع `#toc` وأزرار `.region-head` / `.part-btn` وقواعد CSS الخاصة بها ودالة `buildToc()` و `openRegion()` و `markActive()` ووسم `.layout`.
- **السبب الجذري للخلل:** أزرار الشبكة كانت تستخدم `onclick="show(...)"` داخل HTML، لكن `show` مُعرّفة ضمن كتلة `else` (نطاق بلوك وليس نطاقاً عاماً) — فكان النقر لا يفعل شيئاً (مرجع غير معرّف).
- **الإصلاح:** أزرار الشبكة صارت تُبنى بـ `renderHome()` ثم يُربط لها معالج النقر عبر إغلاق Closure: `btns[i].onclick = () => show(r.id, r.parts[0].id)` (منطبق لكل إقليم بإقليمه).
- **الإضافة:** زر «🏠 القائمة الرئيسية» أعلى كل جزء للعودة لشبكة الأقاليم.
- **التنقل بعد الإصلاح:** شبكة الأقاليم ← الجزء الأول من الإقليم ← أزرار السابق/التالي بين الأجزاء العشرة ← الرئيسية.
- **التحقق (jsdom):** لا sidebar ولا `.region-head` ولا `.part-btn` ولا `#toc`؛ 7 أزرار شبكة تعمل؛ «1-1» يفتح؛ السابق/التالي يعملان حتى «7-10» (نهاية الكتاب) والرئيسية تعود للشبكة.
- **الإصدار:** commit `d4ceb02` — "Fix navigation: remove sidebar accordion, wire home grid buttons with closures".
- **النشر:** المنصات الثلاث HTTP 200 (Worker version `82daab4a`)، ولا بقايا للقائمة القديمة.

## 14. دعم أجهزة التلفاز (TV Remote) + تحسينات التنقل (الجولة الثانية)

- **الطلب:** (أ) إزالة الأكورديون السفلي نهائياً، مع **الإبقاء على تأثير الأكورديون** في أزرار الشبكة العلوية «اختر إقليماً للبدء»؛ (ب) دعم متعدد المنصات/التلفاز: تنقّل مكاني بأزرار الأسهم (D-pad) مع Enter/OK، حالة تركيز عالية التباين، وتخطيط متجاوب.
- **أزرار الشبكة العلوية = أكورديون:** كل زر إقليم (`.clime-btn`) يفتح/يغلق لوحة أجزائه العشرة (`.clime-parts`) بانزلاق سلس (transition `max-height`)، وفتح إقليم يغلق سابقه تلقائياً (single-open). أجزاء اللوحة تفتح الجزء مباشرة (`show`).
- **التنقل المكاني (Spatial nav):** مستمع `keydown` يعالج `ArrowUp/Down/Left/Right` عبر حساب مراكز العناصر (getBoundingClientRect) مع أولوية اتجاهية، و`Enter`/`OK` ينفّذ `click()` على العنصر المركّز. عند انعدام هدف في الاتجاه يتم التمرير تلقائياً (صفحة القراءة).
- **وعي باللوحات المفتوحة:** عند التنقل عمودياً داخل لوحة أجزاء مفتوحة تُعطى عناصر نفس اللوحة أولوية (score مضروب في 0.2) حتى لا يقفز المؤشر لأزرار أقاليم مجاورة.
- **تركيز عالي التباين:** `button:focus, a:focus` بإطار `#ffd166` وظل متوهج (glow) واضح على شاشات التلفاز.
- **تجاوب متعدد الأحجام:** شاشات كبيرة (≥1400px) تزيد خطوط الأزرار والبطاقات؛ أجهزة لوحية (701–1200px) وموبايل (≤700px) بقواعد خاصة (تباعد، التفاف الأزرار).
- **تركيز تلقائي:** بعد كل عرض يُركز على أول تحكم (أول زر إقليم في الشبكة، أو زر الرئيسية/صفحة الجزء).
- **التحقق (jsdom، 17 اختباراً):** لا بقايا للأكورديون القديم؛ 7 أزرار شبكة؛ Enter يفتح الأكورديون ويركز أول جزء؛ ArrowDown يتحرك داخل الأجزاء؛ Enter على جزء يفتح صفحته؛ ArrowDown → زر التالي → Enter → الجزء التالي؛ زر الرئيسية يعيد الشبكة؛ single-open يعمل؛ إغلاق بالنقر مجدداً.
- **ملاحظة اختبار:** فشلان مبكران في الاختبار كانا خطأً في توقعات الاختبار وليس في الشيفرة (تخطيط jsdom بلا إحداثيات حقيقية → استُبدل بمواقع مفترضة).
- **الإصدار:** commit `3cbc6d3` — "TV support: spatial D-pad nav, accordion grid buttons, focus glow, responsive sizing".
- **النشر:** المنصات الثلاث HTTP 200 (Worker version `f69dbc2c`).

## 15. مراجعة الكود: إصلاحات التوافق مع أجهزة التحكم (الجولة الثالثة)

- **الطلب:** مراجعة مرجعية (review) كشفت 3 نقاط محتملة في منطق التخطيط/الأحداث/أجهزة التحكم.
- **(1) مفتاح Enter/OK:** بعض الأجهزة تصدر `Enter` فقط، والبعض `Select` أو `keyCode 13`. أُضيفت `key === 'Select'` و `e.keyCode === 13` إلى شرط التنشيط إلى جانب `Enter`/`OK`.
- **(2) إدارة التركيز عند فتح/إغلاق الأكورديون:** جُعل فتح/إغلاق التركيز دفاعياً مع حماية `null`، والاستعلام أصبح عبر سمة `data-region` بدل الفهرسة الحساسة للترتيب.
- **(3) سباق حركة التخطيط (layout reflow):** أثناء تحريك `max-height` للأكورديون قد تُعيد `getBoundingClientRect()` إحداثيات متوسطة؛ أُضيف تخطي العناصر ذات الأبعاد شبه الصفرية (`width/height < 4px`) في `spatialMove`.
- **سمة `data-region`:** أُضيفت إلى كل زر إقليم (`data-region="${i}"`) واعتُمدت في `toggleRegion` لتحديد الهدف بدقة وثبات عند استعادة التركيز (مناسب لأجهزة التلفاز وكل المنصات).
- **التحقق:** 20 اختباراً jsdom ناجحاً (شملت `Select` و`keyCode 13` و`Enter` وسيناريوهات الأكورديون والتنقل المكاني).
- **الإصدارات:** commit `623168a` (إصلاحات جهاز التحكم) ثم `4255d74` (سمة `data-region`).
- **النشر:** المنصات الثلاث HTTP 200 (Worker version `2b85f582`).

## 16. الميزات الجديدة: أزرار حجم الخط + الفهرس الشامل والبحث الفوري + استئناف التصفح

- **الطلب:** دمج ميزات الحزمة الأخيرة في البناء الحالي: أزرار `A− / A / A+` لتغيير حجم الخط، «الفهرس الشامل والبحث الفوري»، وحفظ آخر موضع للتصفح.
- **القرار:** رُفض استبدال `script.js` بالكامل (كان سيفقد خط Cairo ويكسر التنقل المكاني ويُعطّل تحرير النص في حقل البحث)؛ بدلاً من ذلك دُمجت الميزات الجديدة في `index.html` القائم.
- **أزرار الخط:** `--content-font-size` على `:root` (افتراضي 1rem)، أزرار في `topnav` لكل الصفحات تزيد/تقلل بـ 0.1 مع حدود 0.8–1.6rem، تُطبَّق على `.card p` و`.modern p` وتقيس `.note` نسبياً، وتُحفظ في `localStorage` بمفتاح `idrisi_font_size`.
- **الفهرس الشامل والبحث الفوري:** صفحة `renderIndexPage()` تعرض 70 مدخلاً (إقليم · جزء)، وتبحث لحظياً (`oninput`) في `region.title + part.name + fullText + modernView` عبر `.includes` على نص محوّل لـ lowercase؛ الغرض من إدراج `fullText` إظهار الأجزاء الناقصة عند صفر نتائج. نتائج فارغة لبحث لا يطابق تُظهر التصفية الكاملة.
- **الحماية من اختطاف الأسهم:** مستمع `keydown` يرجع مبكراً إذا كان التركيز داخل `input`/`textarea` لأسهم/Enter/OK حتى يعمل تحرير النص في حقل البحث بشكل طبيعي.
- **استئناف التصفح:** `show(regId, partId, saveHistory)` يحفظ `idrisi_last_reg`/`idrisi_last_part` عند التنقل؛ عند الإقلاع يُستأنف آخر جزء معروض (بإمرار `false` كي لا يُعاد الكتابة).
- **التركيز:** `focusFirstControl` يفضّل حقل البحث في صفحة الفهرس، ثم زر الرئيسية، ثم أول زر إقليم (للحفاظ على اختبارات الشبكة)، مع الحفاظ على سلوك المسارات.
- **التحقق (jsdom، 24 اختباراً جديداً):** أزرار الخط تعمل بالحدود والحفظ والاستعادة، الفهرس يعرض 70 مدخلاً ويصفّي بحث «النيل» (10 نتائج) وبلا نتائج لبحث غير منطقي، النقر على نتيجة يفتح الجزء ويحفظ الموضع، الاستئناف يفتح 7-10، والأسهم داخل حقل البحث لا تختطف التركيز. مجموع الاختبارات الكلي: 17 + 3 + 24 = 44 ناجحاً.
- **الإصدار:** commit `959712e` — "Add font-size controls, full-text search index, resume support" (نُشر على GitHub Pages).
- **النشر:** GitHub Pages جاهز (HTTP 200). Vercel وCloudflare في انتظار tokens جديدة لاستكمال النشر.

## 17. إزالة صناديق الاستشهاد وروابط المصادر (المكتبة الشاملة)

- **الطلب:** إزالة صناديق/مراجع المصادر (مثل الصندوق المعلَّم الذي يشير إلى المكتبة الشاملة) وتنظيف الروابط المماثلة في الموقع والكود.
- **الشرط المسبق:** قبل الإزالة، تحقق سؤالياً من إمكانية «رفع كل النص المرتبط» — أي التأكد أن كل نص خلف روابط shamela.ws مدمج في الموقع. الجواب: نعم، أمكن.
- **التحقق الكامل (70/70):** سكربت `verify_live.js` أعاد جلب صفحات الشاملة الحية الـ 70 (البنية الحالية `class="nass margin-top-10" data-page-id="…"`) وقارن النص المستخرج بكل `fullText` المدمج في `all-regions.js` → **70/70 تطابق تام** (MATCH). كما تحقق من أن المقاطع القصيرة أصيلة وليست مبتورة (7-1 صفحة 939 = 96 حرفاً: العبارة الشهيرة عن الإقليم السابع بحر مظلم؛ 7-10 صفحة 959 = 314 حرفاً).
- **الحذف من index.html:** (1) سطر المصدر + رابط الشاملة في التذييل؛ (2) صندوقا `.note` في صفحة الجزء (فرعا النص الكامل والملخص المؤقت) مع ثابت `source`؛ (3) سطر `META.source` في الصفحة الرئيسية؛ (4) قاعدة CSS `.note` غير المستخدمة.
- **تعديل العنوان:** «النص الأصلي (من المصدر):» → «النص الأصلي:».
- **README:** حُذف فقرة «ومكتبة الشاملة الإلكترونية» وسطر الرابط `https://shamela.ws/book/11787` من التنويه.
- **الاحتفاظ بالبيانات:** حقول `shamelaPartLink` بقيت في `all-regions.js` كبيانات أرشيفية (سجل المنشأ) لكنها لم تعد تُعرض إطلاقاً في الواجهة.
- **التحقق:** لا بقايا لـ `shamela`/«المكتبة»/«من المصدر»/`META.source` في index.html (grep = صفر نتائج)، وكل اختبارات jsdom الـ 44 ناجحة (17+3+24).
- **الإصدار:** commit `5421d5b` — "Remove Shamela citation boxes and source links (all 70 parts verified against live text first)" (نُشر على GitHub Pages).
- **النشر:** GitHub Pages جاهز. Worker `worker.js` أُعيد بناؤه (117,785 بايت) في انتظار token Cloudflare؛ Vercel في انتظار token.

## 18. استكمال النشر على المنصات الثلاث (الأخيرة)

- **Vercel:** token جديد (`vcp_…`) → `vercel --prod --yes --token` → «Ready in 6s» → `https://nuzhat-al-mushtaq.vercel.app` HTTP 200؛ 0 مرجع شاملة؛ الميزات الجديدة حاضرة؛ ملف البيانات 158,632 بايت.
- **Cloudflare:** token جديد (`cfut_…`) → `wrangler deploy` → **Current Version ID: `d9bcef53-8568-42f5-87dd-19bcf6615f1e`** → `https://nuzhat-al-mushtaq.azer-tyu199p.workers.dev` HTTP 200؛ 0 مرجع شاملة؛ الميزات الجديدة حاضرة؛ ملف البيانات 158,632 بايت.
- **GitHub Pages:** HTTP 200 بدون مراجع شاملة.
- **الحالة النهائية:** المنصات الثلاث نشطة ومتطابقة المحتوى (الواجهة النظيفة + الفهارس + أزرار الخط + الاستئناف)، و44 اختباراً jsdom ناجحاً.
- **ملاحظة:** كل المراجع سابقة (sections 16–18) وُثقت؛ تُحفظ محادثة هذا الجزء في هذا الملف كنسخة احتياطية.

## 19. إزالة كل أثر لمكتبة الشاملة من البيانات + خط أميري للفقرات

- **الطلب:** «It means there's no need of Shamela» — بما أن كل النصوص مدمجة ومحققة، أُزيلت كل إشارات الشاملة من ملف البيانات نفسه.
- **الحذف من all-regions.js:** حقول `shamelaPartLink` (70)، `originalText` (70 — نص مؤقت مكرر أصبح بائداً)، `shamelaLink` و`shamelaUrl`، ثابت `PENDING_TEXT`، وكل ذكر لـ«الشاملة/شاملا» في التعليقات و`IDRISI_META.source` وسلاسل `source` للأقاليم.
- **الحفاظ على النص:** أُعيد التحقق — الملف يتحلل (parses)، 7 أقاليم × 70 جزءاً، كل `fullText` مكتمل، وقاموس `IDRISI_META` سليم. الحجم: 158,632 → 132,643 بايت.
- **خط أميري للفقرات فقط:** أُضيف `family=Amiri:wght@400;700` إلى رابط Google Fonts؛ قواعد `.card p` و`.modern p` صارت `font-family: 'Amiri', 'Traditional Arabic', 'Scheherazade New', 'Lateef', serif;` مع `font-size: calc(var(--content-font-size) * 1.15)` و`line-height: 1.9`. العناوين (h1/h2/h3) وواجهة المستخدم والأزرار تبقى بخط Cairo دون تغيير.
- **التحقق:** 44 اختباراً jsdom ناجحاً؛ grep صفر إشارات شاملة في `index.html` و`all-regions.js` و`README.md`.
- **الإصدارات:** `5fe00ae` — "Remove all Shamela references from data file…" ثم `ea0e7ea` — "Apply Amiri font to body paragraphs only; keep Cairo for titles and UI".
- **النشر (المنصات الثلاث HTTP 200، Amiri حاضرة، صفر مراجع شاملة، البيانات 132,643 بايت):**
  - GitHub Pages: `https://ucfzem.github.io/nuzhat-al-mushtaq/`
  - Vercel: `https://nuzhat-al-mushtaq.vercel.app/`
  - Cloudflare Workers: `https://nuzhat-al-mushtaq.azer-tyu199p.workers.dev/` (Version ID `42eef390-90d9-443d-acd0-b6bbd049f3dc`)

## 20. تحويل الأرقام الهندية (٠-٩) إلى أرقام غربية (0-9)

- **الطلب:** تحويل كل الأرقام العربية-الهندية (٠١٢٣٤٥٦٧٨٩) إلى الأرقام الغربية القياسية (0-9) في كل الجمل وملفات البيانات، دون تغيير الحروف أو العناوين أو بنية الكود.
- **الفحص المسبق:** عدّ الأرقام الهندية في كل ملف — النتيجة: `all-regions.js` و`README.md` و`github.md` بها 0 أرقام هندية (البيانات كانت غربية أصلاً، مثل 493هـ/1100م)، بينما `index.html` بها 36 رقم في 5 أسطر فقط (التذييل، وصف الصفحة الرئيسية، شريط الترقيم، وصف الفهرس).
- **التحويل:** ترجمة حرفية `٠-٩ → 0-9` على `index.html` فقط عبر `s.replace(/[٠-٩]/g, …)` — لا تغيير في الحروف أو العناوين أو بنية الكود (أمثلة: «٧ أقاليم × ١٠ أجزاء» → «7 أقاليم × 10 أجزاء»، «٤٩٣–٥٦٠هـ» → «493–560هـ»).
- **التحقق:** صفر أرقام هندية متبقية في `index.html` محلياً وعلى المنصات الثلاث (فحص بـ Node عبر HTTP)؛ بنية JS سليمة؛ 44 اختباراً jsdom ناجحاً.
- **الإصدار:** commit `c540d2a` — "Convert Arabic-Indic numerals to Western digits in UI text".
- **النشر (المنصات الثلاث HTTP 200، أرقام غربية، صفر أرقام هندية):**
  - GitHub Pages: `https://ucfzem.github.io/nuzhat-al-mushtaq/`
  - Vercel: `https://nuzhat-al-mushtaq.vercel.app/`
  - Cloudflare Workers: `https://nuzhat-al-mushtaq.azer-tyu199p.workers.dev/` (Version ID `132e8bb2-69cf-48df-984f-06b7ff7f357c`)

## 21. اكتشاف مهم: النص المدمج كان ناقصاً — استكمال الكتاب كاملاً (17.9×)

- **الملاحظة (من المستخدم):** الموقع ليس النص الكامل للكتاب؛ أجزاء «قيد الإضافة». سؤال المستخدم: «هل هذا صحيح؟».
- **التحقق — نعم صحيح تماماً:** كان سكربت الجلب القديم يلتقط **الصفحة الأولى فقط** من كل جزء من صفحات الشاملة، بينما كل جزء يمتد على عدة صفحات مطبوعة. مثال: «الجزء الأول» يغطي صفحات الشاملة 23–27 (المطبوعة 17–21)، وكانت لدينا صفحة 23 فقط. التحقق: عنوانا الصفحتين 24 و28 هما «الجزء الأول» و«الجزء الثاني» → الحدود مؤكدة (كل جزء = صفحة البداية في الفهرس حتى بداية الجزء التالي − 1).
- **الاستكمال الكامل:** جلب 937 صفحة (23–959) من الشاملة بالكامل ببنية `class="nass margin-top-10" data-page-id="…"` (المعالج: `fetch_pages.js` ثم `extract_full.js`)، وضُمّت صفحات كل جزء بالتتابع في `fullText`. لا أخطاء حدود (TITLE MISMATCH = صفر).
- **الأرقام:** النص الكلي: 52,229 → **934,767 حرفاً** (17.9×). مثال 1-1: 1,005 → 4,889 حرفاً (يتضمن الآن فقرة «مجابات مياه» من الصفحة 24). أجزاء الإقليم السابع (بحره المظلم) صغيرة أصلاً وأكيدة (7-1 = 96 حرفاً).
- **الدمج والتحقق:** `merge_full.js` استبدل `fullText` للـ 70 جزءاً؛ الملف يتحلل، 70 جزءاً بلا فراغات، اختبارات jsdom الـ 44 ناجحة، والمنصات الثلاث تخدم ملفاً مطابقاً بايتاً ببايت (1,736,432 بايت، md5 `3759c415…`).
- **الإصدار:** commit `dec58d5` — "Add COMPLETE original text: fetch all 937 Shamela pages (17.9x more text, 52k->935k chars); every part now has its full section".
- **النشر (المنصات الثلاث HTTP 200، الملف الكامل 1,736,432 بايت، md5 مطابق):**
  - GitHub Pages: `https://ucfzem.github.io/nuzhat-al-mushtaq/`
  - Vercel: `https://nuzhat-al-mushtaq.vercel.app/`
  - Cloudflare Workers: `https://nuzhat-al-mushtaq.azer-tyu199p.workers.dev/` (Version ID `2fae5d3a-dd88-476b-a600-7650eb73fef2`)

## 19. إزالة كل أثر للمكتبة الشاملة من البيانات (استقلال تام عن الشاملة)

- **الطلب:** «It means there's no need of Shamela» — إزالة كل مرجع للشاملة من الموقع والبيانات نهائياً.
- **التحقق المسبق:** الواجهة تعرض فقط `fullText`/`summary`/`modernView`/`id`/`name`؛ لذا كانت `shamelaPartLink` (70) و`originalText` (70، نص موضعي مكرر) و`PENDING_TEXT` و`region.shamelaLink` و`IDRISI_META.shamelaUrl` و`META.source` حقولاً ميتة غير معروضة.
- **الإزالة:** سكربت `strip_shamela.js`: حذف حقول `shamelaPartLink` و`originalText` من كل جزء، و`shamelaLink` من كل إقليم، و`shamelaUrl` من `IDRISI_META`، وثابت `PENDING_TEXT`؛ وأُعيدت صياغة تعليقات الرأس و`IDRISI_META.source` و`region.source` بدون ذكر الشاملة.
- **النتيجة:** `grep -ci shamela|الشاملة` في `all-regions.js` = 0، والملف يتحقق نحويّاً: 7 أقاليم، 70 جزءاً، كلها بـ `fullText` كامل (صفر ناقص). الحجم: 158,632 ← 132,643 بايت.
- **التحقق:** اختبارات jsdom الـ 44 كلها ناجحة بعد التنظيف، والمنصات الثلاث تقدم ملف البيانات الجديد (132,643 بايت، صفر مراجع شاملة) وصفحات UI نظيفة (صفر مراجع).
- **الإصدار:** commit `5fe00ae` — "Remove all Shamela references from data file (shamelaPartLink, originalText, PENDING_TEXT, source strings); texts remain fully embedded and verified".
- **النشر:** GitHub Pages تلقائياً. Vercel نُشر (اكتمل رغم انقطاع CLI بالـ timeout) → HTTP 200. Cloudflare Worker **Current Version ID: `fc217503-7bd5-4725-bdcf-09d938e0e8ac`** → HTTP 200.

## 22. إضافة رابط «Nuzhat al-Mushtaq» إلى صفحة الأعمال (works)

- **الطلب:** إضافة بطاقة Nuzhat al-Mushtaq إلى القسم المفتوح (غير المقفول) في صفحة `ucfzem.github.io/works`، بفتح الرابط في تبويب جديد (`target="_blank"` و`rel="noopener noreferrer"`)، مع مطابقة بنية/أنماط البطاقات المفتوحة الحالية.
- **التحقق الأمني (من المستخدم):** لا مخاطر — `rel="noopener noreferrer"` يمنع reverse tabnabbing، والموقعان كلاهما للمستخدم.
- **الملف:** `works/index.html` في مستودع `ucfzem/ucfzem.github.io` (تم الاستنساخ الضحل إلى `/tmp/opencode/ucfzem-site`، وتطابق الملف المحلي مع النسخة الحية).
- **البنية:** القسم المفتوح (`#publicProjects`) يُبنى ديناميكياً من مصفوفة `publicProjects` عبر `renderPublic()` (وليس HTML ثابت) — لذلك أُضيف مدخل جديد للمصفوفة + سمة `newTab: true`، وحدّثت `renderPublic()` لإخراج `target="_blank" rel="noopener noreferrer"` فقط عند `newTab` (بقيت بقية البطاقات دون تغيير).
- **التغييرات:** (1) مدخل `{ num: 12, emoji: "🌍", name: "Nuzhat al-Mushtaq", tag: "Geography", icon: null, url: "https://nuzhat-al-mushtaq.vercel.app/", newTab: true }`؛ (2) تحديث `renderPublic()` الشرطي؛ (3) العنوان الفرعي «11 projets publics» ← «12 projets publics»؛ (4) إضافة `position 15` في JSON-LD.
- **التحقق (jsdom):** 12 بطاقة عامة، بطاقة Nuzhat تحمل `href=…/nuzhat-al-mushtaq.vercel.app/` و`target="_blank"` و`rel="noopener noreferrer"` و`class="card"` و`num 12` و`emoji 🌍` و`tag Geography`، والبطاقات الأخرى بلا `target`/`rel`.
- **الإصدار:** commit `b14f2c8` في `ucfzem/ucfzem.github.io` — "Add Nuzhat al-Mushtaq to public projects (opens in new tab)".
- **النشر/التحقق المباشر:** `https://ucfzem.github.io/works/` HTTP 200 بعد الانتشار، ويحتوي المدخل في المصفوفة وJSON-LD و«12 projets publics».

## 23. الوضع الليلي/النهاري + تصحيح رسالة الاكتمال

- **الطلب:** «One more fix please bro. Dark light mode» — إضافة زر تبديل بين الوضعين الليلي والنهاري.
- **الألوان المرمزة:** نُقلت كل الألوان الصلبة إلى متغيرات CSS (`--card`, `--modern-card`, `--accent-text`, `--muted`, `--header-text`, `--focus`) — لم يبق أي hex خارج التعريفات.
- **التصميم:** لوحة ليلية دافئة على `[data-theme="dark"]` (لا تتغير أي بنية/أسماء أجزاء/أحرف)، زر تبديل 🌙/☀️ في الترويسة، الحفظ في `localStorage('idrisi_theme')`، والافتراضي يتبع نظام المستخدم `prefers-color-scheme` (مظلم افتراضياً).
- **منع الوميض:** سكربت إقلاع في `<head>` (`<script id="themeBoot">`) يضبط `data-theme` على `<html>` قبل الرسم؛ بُني بمعرّف حتى لا يكسر أدوات الاختبار التي تلتقط أول `<script>` مجرد.
- **فحص الرسالة الخارجية حول اكتمال النص:** ادّعى مراجع خارجي أن النص ناقص بسبب (أ) الاعتماد على `all-regions.js` الخارجي، (ب) سطر الفوتر «الأجزاء التي لم يُكتمل نصها الحرفي موسومة قيد الإضافة»، (ج) السقوط الاحتياطي «ملخص مؤقت».
  - (أ) الفصل بين البيانات والواجهة تصميم مقصود — لا عيب.
  - (ب) تم التحقق برمجياً: 70/70 جزءاً فيه `fullText` (الناقص = صفر، الإجمالي 934,767 حرفاً؛ 7-1 قصير أصلاً في الأصل = 96 حرفاً) — فقرة الفوتر القديمة كانت كاذبة الآن، فاستُبدلت بنص يؤكد وجود «النص الحرفي الكامل في جميع الأجزاء السبعين».
  - (ج) سقوط «ملخص مؤقت» كود دفاعي لا يُستدعى أبداً الآن — أُبقي كحماية.
- **الاختبار:** كل أطقم jsdom الثلاثة ناجحة بعد إضافة الوضع الليلي (19 + 3 + 24).
- **الإصدار:** commit `23fd30b` — "Add dark/light mode toggle and correct footer completeness note".
- **النشر:** GitHub Pages HTTP 200 فيه `themeToggle`×4 و`data-theme`×4؛ Vercel نُشر عبر `nohup` (CLI علّق بسبب تدهور بيئة الحاوية — النشر كان عبر عملية مفصولة وقراءة مخرجاتها من ملف، Ready in 7s) → HTTP 200 وفيه `themeToggle`×4 و`data-theme`×4.
- **البيئة:** تدهورت بيئة الحاوية أثناء الجلسة (أمر `ps` يفشل بـ «Unable to get system boot time»، وعمليات node لا تُختتم وتعلّق أداة الصدفة رغم إنتاج المخرجات) — العمل بالملفات الملتقطة من عمليات `nohup` والاستقصاء اللاحق. Cloudflare في انتظار إعادة لصق الـ API token (لم يُحفظ على القرص).

## 24. استكمال نشر Cloudflare + القيود البيئية

- **إعادة بناء الـ Worker:** أُعيد بناء `worker.js` (1,765,795 بايت) من `index.html` و`all-regions.js` الحاليين عبر `build-worker.js` — يتضمن الوضع الليلي والبيانات الكاملة.
- **النشر:** token جديد `cfut_…` أُعيد لصقه من المستخدم → `wrangler deploy` عبر `nohup`؛ عميل wrangler علّق بعد سطر «Total Upload» (مشكلة بيئة العقدة/الشبكة) لكن الرفع وصل الخادم.
- **التحقق المباشر:** `https://nuzhat-al-mushtaq.azer-tyu199p.workers.dev/` HTTP 200 وفيه `themeToggle`×4 و`data-theme`×4.
- **مطابقة البيانات:** ملف البيانات على المنصات الثلاث متطابق بايتاً ببايت (md5 `3759c4151f2eb88307caccb934333ab2`) مع الملف المحلي — اكتمال النص ثابت على كل منصّة.
- **ملاحظات الأمان:** tokens تبقى واحدة-تلو-الأخرى ولا تُحفظ أو تُلتزم أبداً؛ token `vcp_…` الذي لُصق خلال هذه الجلسة غير مطلوب (Vercel كان منشوراً بالفعل) فلم يُستخدم.

## 25. زر نسخ النص في كل صفحة جزء

- **الطلب:** «Can we add a small copy button on every page book» — زر نسخ صغير في كل صفحة جزء.
- **التنفيذ:** زر `📋 نسخ النص` في `topnav` صفحة الجزء (قبل زر الفهرس) يستدعي `copyPartText(part)`؛ ينسخ `part.fullText` النصي (لا HTML) عبر `navigator.clipboard.writeText` مع سقوط احتياطي `textarea + document.execCommand('copy')`؛ يعرض «✓ تم النسخ» مع class `copied` (أخضر) لـ 1.6 ثانية ثم يعود، و«⚠️ تعذر النسخ» عند الفشل.
- **التركيز/التلفاز:** `focusFirstControl` يفضّل `homeBtn` قبل أي شيء فلم يتغير سلوك التركيز؛ الزر ضمن `#content` فيشملها الملاحة المكانية كعنصر عادي.
- **الاختبار:** 8 اختبارات جديدة ناجحة (الزر موجود في صفحة الجزء فقط، يُستدعى clipboard بنص 4,889 حرفاً مطابقاً لـ 1-1، نص خام بلا وسوم، حالة «copied»، لا زر في الصفحة الرئيسية) + أطقم jsdom الثلاثة كلها ناجحة (19 + 3 + 24).
- **الإصدار:** commit — "Add copy button to every part page (copies full original text)".
- **النشر:** GitHub Pages وVercel فوراً (copyBtn×3 في كل منهما، HTTP 200). Cloudflare: أول محاولتي deploy لصقا عند «Total Upload» ولم تصلا؛ الثالثة انتشرت فعلياً — التحقق المباشر `copyBtn`×3 وHTTP 200. البيانات مطابقة على المنصات الثلاث (md5 `3759c415…`).
---

## 26. لعبة «SavoirsEnJouant» على childsgame + بطاقة في الأعمال

- **الطلب:** إضافة لعبة تعليمية ثنائية اللغة (فرنسي/عربي) للأطفال على `ucfzem.github.io/childsgame`، وبطاقة مشروع جديدة لها في صفحة المحفظة الرئيسية ضمن حاوية المشاريع العامة المفتوحة فقط (لا تمس المشاريع المحمية 🔐).
- **اللعبة:** `childsgame/index.html` — «SavoirsEnJouant»؛ 4 تبويبات (مفردات/أرقام/جمل/قصص)، 15 قصة ثنائية اللغة، وضع ليلي/نهاري (localStorage `theme`)، ملاحة بلوحة المفاتيح/الريموت، أصوات (AudioContext يُنشأ كسولاً عند أول تفاعل)، اهتزاز، حفظ النقاط `savoirsEnJouant_score`. أُصلح: قصص حقيقية 15 بدل المولّدة، فلترة العناصر المرئية فقط في الملاحة، أنماط focus-visible، try/catch لـ localStorage.
- **الاختبار:** jsdom 15/15 ناجحة بعد ضبط مأزقين بيئيين فقط: jsdom يعرّف `offsetParent` على `HTMLElement.prototype` فيحجب محاكاة `Element.prototype` (الحل: المحاكاة على HTMLElement)، ومقارنة النقاط استخدمت `==` لأن jsdom يُرجع القيمة الرقمية دون تحويل (10 === "10").
- **البطاقة:** في `works/index.html` حاوية `#publicProjects` بُدئت من المشاريع العامة فقط: `{ num: 13, emoji:"🎮", name:"SavoirsEnJouant", tag:"Kids Learning", url:"https://ucfzem.github.io/childsgame/", newTab:true }` — يولّد `target="_blank" rel="noopener noreferrer"`، + إدخال JSON-LD position 16 + «13 projets publics». تحقق jsdom: 13 بطاقات، الرابط والسمتان صحيحتان.
- **النشر:** commit `d5bd5c7` — "Add SavoirsEnJouant kids game to public projects (new tab)". GitHub Pages انتشرت بعد ~30 ثانية: `https://ucfzem.github.io/childsgame/` HTTP 200، و`https://ucfzem.github.io/works/` يعرض البطاقة و«13 projets publics».
- **الروابط:** اللعبة https://ucfzem.github.io/childsgame/ — الأعمال https://ucfzem.github.io/works/ — مصدر اللعبة https://github.com/ucfzem/ucfzem.github.io/blob/main/childsgame/index.html
---

## 27. ترقية childsgame إلى «SavoirsEnJouant Pro»

- **الطلب:** نسخة «Pro» محسّنة — شاشة ترحيب، إعدادات (أصوات/اهتزاز/اتجاه)، تبديل ثيم، تصنيفات مفردات، نطق، أشرطة تقدّم، وسام نقاط، وتصحيح خطأ محتمل من إنشاء `new AudioContext()` في بداية السكربت (قد يعطّل JS على بعض المتصفحات/`file://`).
- **التنفيذ:** استُبدل الملف بالكامل بالنسخة الجديدة مع إصلاحات: `getAudioCtx()` كسول + try/catch (لا يُنشأ قبل أول تفاعل)؛ `playSound` تتوقف آمنة عند غياب السياق؛ `id="vocab-cats"` أُضيف لفلتر التصنيف (كان JS يشير له دون وجوده → كان ينكسر على النقر)؛ قاعدة `.settings-overlay.hidden{display:none}` (المودال كان يظهر عند التحميل)؛ CSS لـ `.star-pop` (النجمة كانت غير مرئية)؛ ملاحة لوحة مفاتيح للعناصر المرئية فقط؛ غلافات `storeGet/storeSet/storeRemove` لكل localStorage (تنجو من الأصول المعتمة/الوضع الخاص)؛ تصحيح `toggleTheme` (كان يخزّن 'light' خطأ).
- **الاختبار:** jsdom 21/21 ناجحة (تبويبات، نقاط، 4 أشرطة تقدّم، فلتر تصنيف، تبديل اتجاه، 15 قصة، إجابة خاطئة، جمل، نجمة، إعدادات فتح/غلق، ملاحة). فشل «direction toggle» الأول كان قيداً بيئياً فقط (jsdom `outside-only` لا يشغّل onclick المضمّن) — تعديل الاختبار لاستدعاء الدالة مباشرة.
- **الإصدار:** commit `b2694ca` — "Upgrade childsgame to SavoirsEnJouant Pro (settings, theme, categories, speech, progress)".
- **النشر:** GitHub Pages مباشرة: `https://ucfzem.github.io/childsgame/` HTTP 200 ويعرض «SavoirsEnJouant Pro» (welcome-overlay/settings/direction-toggle/vocab-cats/star-pop ×17). الملاحظة: القصص 6–15 مولّدة تلقائياً (5 أصلية + 10 مولّدة) كما ورد في النسخة المقدَّمة.
---

## 28. Retro Quran Reader + linktree sur la landing

- **الطلب:** تطبيق «Retro Quran Reader» (مشغّل كاسيت رجعي ببكرتين دوّارتين أثناء التشغيل، ألوان هادئة) في مستودع مستقل باسم `quran-reader`، يلتقط القرّاء والسور مباشرة من API العامة `mp3quran.net/api/v3` (ملف واحد index.html)، ثم إضافة «Linktree» في الصفحة الرئيسية.
- **التنفيذ:** أُنشئ المستودع `ucfzem/quran-reader` (API GitHub، HTTP 201) ودفع index.html وتم تفعيل GitHub Pages (PUT pages، HTTP 201). التحقق: CORS مفتوح `access-control-allow-origin: *` على الـAPI (301 → www.mp3quran.net يتبعه fetch تلقائياً)، 242 قارئاً، ملفات الصوت `audio/mpeg` (مثال surah 001). اللعبة على الهواء مباشرة HTTP 200.
- **السلامة (صفر أضرار):** `quran-majeed-v3` و`/works` لم يُمسّا إطلاقاً — مستودعات منفصلة/موجودة على الهواء (200). أُضيف linktree في landing `ucfzem.github.io/index.html` بشكل **إضافي** فقط: بقي كتلة `.links` (My Works + UzChat) كما هي؛ أُضيف CSS لـ `.linktree-container`/`.link-card`/`.badge`/`.active` بألوان landing الذهبية + 3 بطاقات (📻 Retro Quran Reader `active`+NEW، 📖 Quran Majeed v3، 💼 All Works) بكل روابط `target="_blank" rel="noopener noreferrer"`.
- **المراجعة قبل النشر:** شرح المستخدم طلب التحقق قبل الإضافة، حصل على ملخص التغييرات (local فقط)، ثم أعطى الضوء الأخضر بعد تأكيد «works doit rester tel».
- **الإصدار:** landing commit `01063cc` — "Add linktree navigation (Retro Quran Reader, Quran Majeed v3, Works)". quran-reader commit `[main]` أولي.
- **النشر:** landing HTTP 200 مع كل البطاقات الثلاث؛ `https://ucfzem.github.io/quran-reader/` 200؛ `https://ucfzem.github.io/quran-majeed-v3/` و`https://ucfzem.github.io/works/` دون أي تغيير.
- **الروابط:** اللعبة https://ucfzem.github.io/quran-reader/ — المصدر https://github.com/ucfzem/quran-reader — landing https://ucfzem.github.io/
---

## 29. ترقية quran-reader: 10 ثيمات + ثنائية اللغة + تحكم تلفاز ذكي

- **الطلب:** نسخة «Corrections» — 10 ثيمات ألوان (Vintage Pink، Mint، Amber، Cream، Cyber، Ocean، Gold، Lavender، Sunset، Emerald)، تبديل فرنسي/عربي (i18n مع `dir=rtl`)، التنقل بأزرار الريموت (`MediaPlayPause`/`MediaTrackNext/Previous`/الأسهم)، تركيز `.tv-focusable`، إصلاح تباين النصوص في الثيمات الداكنة، وتبديل ثيم بالنقر.
- **التصحيحات المضافة:** (1) في النسخة المقدمة، الدوائر الثيمية `div` تعتمد `onclick` وزر Enter بالريموت لا يضغط على الـdiv — أُضيفت حالة `Enter` في معالج keydown: إن كان النشط `div.theme-dot` يُنفّذ `click()` (يتيح اختيار الثيم على التلفاز). (2) رسالة «Erreur réseau» كانت ثابتة فرنسية — أصبحت عبر `i18n[currentLang].netError` («خطأ في الاتصال» بالعربية).
- **التحقق:** API يعمل بـ`language=ar` (241 قارئاً) و`eng` (242). اختبارات jsdom 10/10 (10 نقاط ثيم، الثيم الافتراضي، setTheme، Enter على النقطة يطلق click، تبديل اللغة→عنوان عربي و`dir=rtl`، العودة للفرنسية، خيارات القارئ، عناصر tv-focusable). فشل واحد كان قيد بيئي jsdom (inline onclick لا يعمل في outside-only) — تم التحقق من الوصلة Enter→click مباشرة.
- **الإصدار:** commit `bf01b70` — "Upgrade: 10 themes, FR/AR i18n, Smart TV nav, Enter on theme dots".
- **النشر:** GitHub Pages مباشرة: `https://ucfzem.github.io/quran-reader/` HTTP 200 ويعرض الثيمات والعناصر الجديدة. landing/works/quran-majeed-v3 دون تغيير.
- **الرابط:** https://ucfzem.github.io/quran-reader/ — المصدر https://github.com/ucfzem/quran-reader
---

## 30. quran-reader: الثيمات الثنائية (بنّي داكن+ذهبي افتراضي / فاتح بيج) + إصدارات moshaf + أسماء السور

- **الطلب:** «في النهاية أزل كل الثيمات والألوان واجعل البني الداكن والذهبي الافتراضي. والوضع الفاتح بيج/بني/ذهبي/أصفر» + نسخة moshaf: ربط كل قارئ+رواية بفئة فريدة (لا تكرار في الأسماء يشير لنفس الصوت)، وأسماء السور العربية من مصفوفة داخلية `SURAH_NAMES_AR[114]` (لا جلب API).
- **التنفيذ:** أُزيلت لوحة الـ10 ثيمات بالكامل (0 نقطة ثيم). أصبح وضعان فقط: **داكن** (bg `#1a120b`، بطاقات `#2b1f14`/`#3a2a1a`، ذهبي `#d4af37`، نص `#f0e2c0`) كافتراضي، و**فاتح** (`body.light-mode`: بيج `#f3ead5`/`#e9dcbe`/`#decfa8`، بني ذهبي أصفر `#b8860b`) عبر زر `#themeToggle` (🌙/☀️). `SURAH_NAMES_AR` مصفوفة 114 اسماً عربياً؛ تُبنى خيارات السورة `Sourate <id> - <arabicName>` (فرنسية) / `<id>. سورة <arabicName>` (عربية). `loadReciters()` يبسّط `reciter.moshaf[]` إلى `parsedRecitersList` (الاسم `الراوي (اسم الموشف)` عند تعدد المواشف — مثال ماهر المعيقلي: حفص عن عاصم - مرتل / المصحف المجود / المصحف المعلم) ثم ترتيب أبجدي. حُرّكت إضافة الـplaceholder قبل fetch (تُعرض فوراً حتى لو بطأ API)؛ أُزيلت حالة `Enter` لأن أزرار/قوائم التعامل الأصلي كافٍ.
- **التحقق:** صياغة سليمة + jsdom 17/17 (لا نقاط ثيم، داكن افتراضي، التبديل الفاتح/الداكن والأيقونة، 114 اسماً (الفاتحة/الناس)، تبديل اللغة→عنوان عربي و`dir=rtl`، خيارات القارئ، بناء خيارات السورة، التسمية العربية `1. سورة الفاتحة`، عناصر tv-focusable). ملاحظة بيئة: jsdom لا يثبّت `let/const` عبر evals متعددة لذا صارت `SURAH_NAMES_AR` و`parsedRecitersList` `var` (مفيدة أيضاً للتصحيح على التلفاز).
- **الإصدار:** commit `8e739fa` — "Dark brown/gold default + light mode; moshaf editions flattened; inline Arabic surah names".
- **النشر:** GitHub Pages 200 (تحقق: 0 theme-dot، وجود `themeToggle` و`light-mode` و`SURAH_NAMES_AR` في HTML المخدوم). landing/works/quran-majeed-v3 دون تغيير.
- **الروابط:** https://ucfzem.github.io/quran-reader/ — المصدر https://github.com/ucfzem/quran-reader
---

## 31. quran-reader: إصدار جديد من المستخدم + وضع داكن/فاتح + معالجة أخطاء الصوت

- **السياق:** أعاد المستخدم لصق نسخة أقدم (10 ثيمات، theme-pink) تتضمن إصلاحات مoshaf + مصفوفة `SURAH_NAMES_AR` + معالجة أخطاء الصوت الجديدة (`audioPlayer.play().catch(...)` و`addEventListener('error')` تعرض «غير متوفر حالياً»/«Fichier non disponible»). سُئل المستخدم عن المسار وأجاب: «Réappliquer brun-or + mode clair» ثم «Will go back to dark light mode after those fixes».
- **التنفيذ:** اعتمد كود المستخدم اللاصق كأساس وحُفظ، ثم أُعيد تطبيق: إزالة الـ10 ثيمات (0 نقطة)، وضع **داكن بني+ذهبي** (`#1a120b`/`#2b1f14`/`#3a2a1a`/`#d4af37`) افتراضياً، زر `#themeToggle` (🌙/☀️) للوضع **الفاتح بيج/بني/ذهبي/أصفر** (`body.light-mode`). أُبقيت معالجات خطأ الصوت الجديدة من لصق المستخدم. بالإضافة: placeholder القارئ قبل fetch، رسالة شبكة مترجمة (`خطأ في الاتصال`/`Erreur réseau`)، `parsedRecitersList`/`SURAH_NAMES_AR` كـ`var` (اختبار jsdom).
- **التحقق:** jsdom 17/17 (لا نقاط ثيم، داكن افتراضي، تبديل فاتح/داكن + الأيقونة، 114 اسماً، تبديل اللغة→`dir=rtl`، خيارات القارئ، تسميات السور FR/AR، عناصر tv-focusable). النشر 200 وتحقق: `theme-dots: 0`، وجود `themeToggle`/`light-mode`/«Fichier non disponible».
- **الإصدار:** commit `65aea3a` — "Audio error handling + dark brown/gold default with light mode (from user fixes)".
- **الروابط:** https://ucfzem.github.io/quran-reader/ — المصدر https://github.com/ucfzem/quran-reader
---

## 32. quran-reader: إصلاح 4 أخطاء منطقية/حواف (تقرير المستخدم)

- **الطلب:** المستخدم رصد 4 أخطاء: (1) عند انتهاء السورة لا ينتقل تلقائياً للتالية؛ (2) تبديل اللغة يعيد تصفير القوائم (يُفقد القارئ/السورة قيد التشغيل)؛ (3) التنقل التلفزيوني يخطف أسهم ↑/↓ حتى فوق `<select>` فيمنع تصفّح الخيارات؛ (4) `prevBtn` بشرط `selectedIndex > 1` لا يسمح بالعودة للسورة الأولى (فهرس 1).
- **الإصلاحات:** (1) `audioPlayer` `ended` → `updatePlayState(false)` ثم تقدم للفهرس التالي مع التفاف للسورة الأولى عند الأخيرة. (2) عند تبديل اللغة يُحفظ `currentServer` (رابط URL — ثابت بين اللغتين بينما الفهرس يختلف لأنه ترتيب أبجدي مختلف) + `surahSelect.value`، وبعد `loadReciters()` يُستعاد القارئ بالبحث `findIndex(item.server === savedServer)` ويُعاد بناء السور دون إعادة تشغيل الصوت (استخراج `populateSurahOptions(surahIds, selectedId)`). (3) في keydown: إن كان النشط `<select>` أو range → `return` (يعمل التنقل الأصلي للخيارات بالأسهم). (4) `prevBtn`/`nextBtn`: التفاف (الأولى→الأخيرة / الأخيرة→الأولى) مع قفل عند عدم وجود خيارات؛ الوصول للسورة الأولى (فهرس 1) أصبح ممكناً.
- **التحقق:** jsdom **35/35** (فشلان أوليان كانا توقعاً خاطئاً في الاختبار نفسه وصُحّحا): ثيمات، 114 اسماً، تسطيح الإصدارات (3 إصدارات+placeholder)، تسميات السور، next/prev مع الالتفاف، auto-advance عند `ended` (مع `play()` مقلّد)، الحفاظ على التحديد عند تبديل اللغة (مرتين ذهاباً وإياباً)، عدم خطف أسهم `<select>` + بقاء التركيز، انتقال التركيز من الأزرار، عناصر tv-focusable. الاختبار يقلّد `window.fetch` قبل تنفيذ السكربت (فجلسة jsdom بلا fetch).
- **الإصدار:** commit `b7e5747` — "Fix 4 UX bugs: auto-advance on ended, preserve selection on lang switch, D-pad on native selects, prev/next wraparound".
- **النشر:** GitHub Pages 200 وتحقق وجود `populateSurahOptions`/`savedServer`/حارس `<select>`/الالتفاف. landing/works/quran-majeed-v3 دون تغيير.
- **الروابط:** https://ucfzem.github.io/quran-reader/ — المصدر https://github.com/ucfzem/quran-reader
---

## 33. quran-reader: إعادة تصميم «Retro Walkman» المعدنية (SNOWSKY) + إعادة تطبيق الإصلاحات الأربعة

- **الطلب:** لصق المستخدم نسخة جديدة كلياً — هيكل Walkman معدني عمودي (زوايا دائرية، ألواح داخلية، أزرار جانبية معدنية عبر `::before/::after`)، نافذة كاسيت مفصلة (حافة داكنة، نافذة شريط واضحة، بكرتان بأسنان، ملصق كاسيت «Side A»)، شريط إيكولايزر متحرك فوق شريط التقدم (5 أعمدة `#equalizer` تتحرك عند التشغيل عبر `equalizer.active`)، وأزرار معدنية دائرية ثلاثية الأبعاد PREV/PLAY/NEXT بتدرجات معدنية و`knob-shadow` وتسميات أسفلها. ثيمان: معدني داكن (افتراضي) وفضي فاتح (`light-mode`)، أكسنت ذهبي `#d4af37`، العنوان «SNOWSKY». الأيقونة ☀️ افتراضياً → 🌙 في الوضع الفاتح.
- **الإصلاحات المعاد تطبيقها (كانت مفقودة في اللصق):** (1) `ended` auto-advance مع التفاف (النسخة اللاصقة كانت تتوقف عند آخر سورة). (2) تبديل اللغة يحفظ `currentServer` (مطابقة عبر URL) + `surahSelect.value` ويعيد البناء بعد `loadReciters()` دون إيقاف الصوت (النسخة اللاصقة كانت تصفّر القوائم). (3) إعادة إضافة معالج `keydown` للتنقل التلفزيوني (كان غائباً كلياً) مع حارس `<select>`/range حتى تعمل أسهم الخيارات أصلاً. (4) `prevBtn`/`nextBtn` بمنطق الالتفاف (الأولى↔الأخيرة) بدل شرط `> 1` المعطوب. و`SURAH_NAMES_AR` صارت `var` (اختبار jsdom).
- **التحقق:** jsdom **38/38** (إضافات: وجود `#equalizer` مع 5 أعمدة، دلالات أيقونة ☀️/🌙). النشر 200 وتحقق: `walkman-container`، `equalizer`، `SNOWSKY`، `savedServer`، حارس `<select>`، الالتفاف — كلها في HTML المخدوم.
- **الإصدار:** commit `794232d` — "Retro Walkman metallic shell (SNOWSKY) with equalizer; re-applied 4 UX fixes".
- **الروابط:** https://ucfzem.github.io/quran-reader/ — المصدر https://github.com/ucfzem/quran-reader
---

### §34 — Hi-Fi Retro Walkman « bon fix » + Sync d'affichage + Media Session + localStorage (2026-08-15)

- **Version:** نسخة المستخدم النهائية « Hi-Fi Retro Quran Walkman » « bon fix » — تم نشرها حرفياً كأساس، مع تحسينات مطلوبة مدمجة. العنوان «HI-FI WALKMAN».
- **التصميم:** معدن داكن افتراضي (`--body-grad #232830→#14171c`، ذهبي gold-1/2/3)، `light-mode` فضي. كاسيت بأربعة براغي `.screw`، خط عربي SVG «القرآن الكريم» (goldGrad)، لمعان نافذة الشريط عبر `::after`، `.spool-wrapper` مع `rollLeft`/`rollRight` يتغيران الحجم عبر `timeupdate` (اليسار 40→32px، اليمين 32→40px)، 12 عمود إيكولايزر `#eqContainer` مع Web Audio (AudioContext، fftSize=64، createMediaElementSource، getByteFrequencyData) وبديل عشوائي إجرائي، أزرار PREV/PLAY/NEXT معدنية، `audioPlayer` بـ `crossOrigin="anonymous"`.
- **CORRECTIFs الأربعة من المستخدم (تفوق على حلول سابقة):**
  1. `ended`: تقدّم إذا `selectedIndex < options.length-1` وإلا `updatePlayState(false)` — **بدون التفاف** (يتوقف عند آخر سورة).
  2. تبديل اللغة: حفظ الحالة **داخل `loadReciters()`** عبر `prevReciterIdx`/`prevSurahVal` (بالفهرس، وليس URL الخادم) ثم استعادة + `populateSurahs()`.
  3. التنقل التلفزيوني: حارس `isSelect` للأسهم ↑/↓ فقط — الأسهم ↔ تختطف التركيز حتى على القوائم.
  4. `prevBtn`: شرط `selectedIndex > 1` — ملاحظة: التعليق يقول «(index > 0)» لكن الكود `> 1`، فالسورة 1 (الفهرس 1) لا يمكن الوصول إليها بسببه؛ **أُبقي كما هو** لأن المستخدم أعلنها النسخة النهائية.
- **الإضافة (مطلوب): مصدر الحقيقة الموحّد للعرض** — `syncSurahDisplay()`/`syncReciterDisplay()`: العنوان يعكس دائماً الخيار المحدد في القوائم (placeholder عند الفراغ)، استُدعي في معالجات `change` لكلا القائمتين، عند مسح القارئ (إعادة تعيين قائمة السور)، وبعد استعادة اللغة. إصلاح لرسالة المستخدم حول تناقض «-- اختر السورة --» مع القائمة المحددة.
- **الإضافة (مطلوب): Media Session API** — `updateMediaSession()`: بيانات اليرادات (title=السورة، artist=القارئ، album)، `setActionHandler` لـ play/pause/previoustrack/nexttrack/seekto — **يعيد استخدام `prevBtn.click()`/`nextBtn.click()`** (DRY، يحترم حدود التنقل). يُستدعى في `change` السورة + `play`؛ و`setPositionState` في `timeupdate` (شريط الخدش على قفل الشاشة). Artwork عبر via.placeholder.com (96/512).
- **الإضافة (مطلوب): Persistance localStorage** — `savePlayerState()` (القارئ/السورة/الزمن) على `change`/`pause`/نهاية القائمة، `restorePlayerState()` بعد `loadReciters()` الأولي (`loadReciters().then(restorePlayerState)`)، مع حارس وجود خيار السورة.
- **ملاحظة كود:** `SURAH_NAMES_AR` عادت `const` في نسخة المستخدم → اختبار jsdom يستخرجها من مصدر HTML عبر regex بدل `window`.
- **التحقق:** jsdom **49/49** (مواضيع جديدة: مزامنة العرض بعد nextBtn، mock Media Session (metadata title + handlers nexttrack/previoustrack يعيدان استخدام منطق الأزرار)، حفظ localStorage، + 38 سابقة). حلقات البكر: `reel.spinning` موجودة أصلاً (لا حاجة لـ `.cassette-wheel`). ملاحظة: إعادة التشغيل السابقة للاختبار كانت تفشل بسبب غياب `requestAnimationFrame` في jsdom → أُضيف polyfill في الجاهزية.
- **الإصدار:** commit `42cbb36` — "Deploy Hi-Fi Walkman: user bon-fix (sync header, media session, localStorage) + display sync single source of truth".
- **التحقق من النشر:** HTTP 200، علامات في HTML المخدوم: `HI-FI WALKMAN`، `eqContainer`، `updateMediaSession`، `walkman_quran_state`، `syncSurahDisplay`.
- **الروابط:** https://ucfzem.github.io/quran-reader/ — المصدر https://github.com/ucfzem/quran-reader
---

### §35 — Page « My Works » : ajout de Quran Reader en #2 (2026-08-15)

- **Modification:** insert de « Quran Reader » (catégorie **Audio**, émoji 🎧, sans icône image, URL https://ucfzem.github.io/quran-reader/) en position **2** dans la liste des projets publics de https://ucfzem.github.io/works/.
- **Décalage:** Tanger d'Antan passe de #2 → #3, et tous les projets suivants sont incrémentés de 1 (Blog 3→4, Lingotech 4→5, MicroInvoice 5→6, Droppy 6→7, Rafeeq 7→8, WebHealth 8→9, ElixirTech 9→10, EmailCollector 10→11, API JobFinder 11→12, Nuzhat al-Mushtaq 12→13, SavoirsEnJouant 13→14).
- **Compteur:** badge en-tête « 13 projets publics » → « **14 projets publics** ».
- **Cohérence:** JSON-LD (ItemList) mis à jour avec le nouvel item en position 2 et décalage des positions 2→17 ; meta description enrichie avec « Quran Reader ».
- **Styles conservés:** cartes glassmorphism (`.card`, fond `rgba(201,168,76,0.07)`, bordure dorée), thème sombre `[data-theme="dark"]` + bascule clair, disposition et responsive intacts.
- **Vérification jsdom:** rendu = 14 cartes dans l'ordre attendu (1 Quran Majeed v3 → 2 Quran Reader 🎧 Audio → 3 Tanger d'Antan → ... → 14 SavoirsEnJouant), sous-titre 14.
- **Déploiement:** HTTP 200, marqueurs dans le HTML servi : « 14 projets publics », « Quran Reader » (x3), « quran-reader/ » (x2), « 🎧 ».
- **Commit:** `2236267` sur ucfzem/ucfzem.github.io (main).
- **Liens:** https://ucfzem.github.io/works/ — source https://github.com/ucfzem/ucfzem.github.io/blob/main/works/index.html
---

### §36 — Polissage mobile Walkman : pickers natifs sombres, auto-blur, playbackState, ellipsis (2026-08-15)

- **CSS — pickers natifs sombres:** `.select-box { color-scheme: dark; appearance: none; -webkit-appearance: none; }` (le `color-scheme` force les menus OS Android/iOS en sombre), `option` sombre explicite `#1f2937`/`#f3f4f6` ; override **`body.light-mode .select-box { color-scheme: light; }`** + option blanc/noir pour ne pas casser le thème clair.
- **CSS — ellipsis:** `.track-subtitle` (displayReciter) reçoit `white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 100%; display: block;` (`.track-title` l'avait déjà) — les longs titres arabes ne débordent plus sur mobile.
- **JS — auto-fermeture picker:** `e.target.blur()` ajouté dans les handlers `change` de `surahSelect` (avant le retour anticipé, donc aussi sur le placeholder) et de `reciterSelect` (branches vide + sélection) — ferme la roue OS immédiatement.
- **JS — playbackState Media Session:** `navigator.mediaSession.playbackState = 'playing'/'paused'` dans les listeners play/pause.
- **JS — is-playing:** classe `is-playing` sur `.walkman-container` au play, retirée au pause (référence `walkmanContainer = document.querySelector('.walkman-container')`).
- **Rappel des IDs réels (audit anti-casse):** `audioPlayer`, `displaySurah`, `displayReciter`, `surahSelect`, `reciterSelect`, `prevBtn`, `nextBtn`, `.walkman-container` — tous déjà alignés dans le code existant.
- **Vérification:** jsdom **58/58** (nouvelles assertions : blur après change, playbackState playing/paused, wake lock re-request). 
- **Déploiement:** HTTP 200, marqueurs servis : `color-scheme: dark` (1), `color-scheme: light` (1), `e.target.blur()` (x3), `playbackState` (x2), `is-playing` (x2), `track-subtitle` (x2), `settingsShortcut` (1), `wakeLock` (x7).
- **Commits:** `a18e9c0` (Wake Lock + lien settings Chrome) puis `5a313b7` (polissage mobile).
- **Liens:** https://ucfzem.github.io/quran-reader/ — source https://github.com/ucfzem/quran-reader
---

### §37 — Walkman v4 : dropdowns personnalisés (Sourate/Récitateur) + bouton copie (2026-08-15)

- **Base:** nouveau fichier complet fourni par l'utilisateur (« toutes corrections intégrées »), déployé tel quel.
- **Structure:** les `<select>` natifs (`reciterSelect`, `surahSelect`) restent la source de vérité mais sont masqués (`style="display:none"`) ; remplacés par des dropdowns personnalisés : déclencheurs `#reciterTrigger`/`#surahTrigger` (+ `#reciterTriggerText`/`#surahTriggerText`), modales `#reciterModal`/`#surahModal` (`.dropdown-modal.hidden`), boutons fermer `#closeReciterModal`/`#closeSurahModal`, listes `#reciterOptionsList`/`#surahOptionsList` d'éléments `<li class="dropdown-item">`.
- **JS:** `buildCustomSurahList()`/`buildCustomReciterList()` reconstruisent les `<li>` depuis `select.options` ; clic sur un `<li>` → `selectedIndex` + texte du déclencheur + fermeture + `dispatchEvent(new Event('change'))` (toute la logique existante — sync, Media Session, localStorage, navigation — continue de fonctionner). `updateSurahTriggerText()`/`updateReciterTriggerText()` synchronisent les textes, y compris placeholders `-- Sélectionner Sourate --` / `-- Sélectionner Récitateur --`.
- **Bouton copie** `#copySurahBtn` : copie `displaySurah.textContent` (garde si placeholder `--`) ; **correctif assistant :** `navigator.clipboard && navigator.clipboard.writeText` sinon repli `textarea` + `document.execCommand('copy')` (contexte non-sécurisé).
- **Correctif assistant (bug du collage):** le placeholder français collé contenait du texte arabe (« -- Sélectionner القارئ -- ») → corrigé en « -- Sélectionner Récitateur -- ».
- **Vérification:** jsdom **83/83** (nouvelles assertions : listes `<li>` reciter/surah, déclencheurs, sync des textes après nav, copie, Media Keys `MediaTrackNext`/`MediaTrackPrevious`).
- **Piège test harnais:** `reciterSelect.value = '1'` ↔ DOM index 2 (placeholder décale les valeurs) → valeur `'1'` = « Mishary Alafasy (Hafs - Murattal) ».

### §38 — Walkman v4 : correctifs TV/WebView (modale sombre, z-index, cassette SVG, D-Pad) (2026-08-15)

- **CSS — modale au-dessus du pointeur TV:** `.dropdown-modal { z-index: 99999 !important; }`.
- **CSS — panneau sombre marron (Mode Sombre):** `.dropdown-content { background: #1c1a18; border: 1px solid #3d342b; }`, `.dropdown-header { background: #26221e; border-bottom-color: #3d342b; }`, `.dropdown-item { color: #e0d8cf; border-bottom: 1px solid #2a2520; }` ; focus/hover/sélection or `#d4af37` + texte `#111111` + `outline: none` (`.dropdown-item:hover, :focus, .selected`).
- **Cassette — calligraphie vectorielle:** le `<text>` arabe dans le SVG (inversé/découpé selon le shaping RTL de la WebView) est remplacé par un tracé vectoriel pur `<path>` (dégradé or conservé, `.quran-svg-title`) — rendu identique sur tout écran sans dépendance aux polices système.
- **JS — navigation D-Pad dans les modales:** `openSurahModal()`/`openReciterModal()` posent `tabindex="0"` sur chaque `.dropdown-item` et focalisent l'élément `.selected` (sinon le 1er) + `scrollIntoView({block:'center'})` ; handlers `keydown` sur `surahOptionsList`/`reciterOptionsList` : `ArrowDown`/`ArrowUp` (focus circulaire), `Enter` (valide → `.click()`), `Escape`/`Back` (ferme + retour du focus au déclencheur), avec `e.stopPropagation()` ; garde dans le handler TV global : `if (document.activeElement.classList.contains('dropdown-item')) return;`.
- **Correctif de branche de déploiement:** le push initial a créé une branche `master` alors que Pages build `main` → repoussé sur `main` + suppression de `master`.
- **Vérification:** jsdom **83/83** (nouvelles assertions : focus sur `.dropdown-item` à l'ouverture, flèches haut/bas dans la liste, Enter valide+ferme, Escape ferme+refocus déclencheur).
- **Déploiement:** HTTP 200, marqueurs servis : `dropdown-trigger` (5), `surahTrigger`/`reciterTrigger` (9), `z-index: 99999` (1), `quran-svg-title` (1), `openSurahModal`/`openReciterModal` (2), `1c1a18` (1), `d4af37` (4), `copySurahBtn` (2).
- **Commits:** `1318615` (Deploy v4) + `1089711` (retrait artefact de sauvegarde local).
- **Liens:** https://ucfzem.github.io/quran-reader/ — source https://github.com/ucfzem/quran-reader

## 39\. Déploiement du build final fusionné — Hi-Fi Retro Quran Walkman (les 4 raffinements)

-   **Contexte:** reprise après perte de session ; le fichier `index.html` fourni par l'utilisateur comme build « production-ready » final a été comparé au v4 déployé (https://ucfzem.github.io/quran-reader/) — il manquait encore les 4 raffinements convenus.
-   **Les 4 raffinements intégrés:**
    1.  **Rotation des bobines:** anti-horaire (`rotate(-360deg)` via `@keyframes spin-reverse`, 2s) + promotion GPU (`will-change: transform`, `transform-origin: center`).
    2.  **Moteur visualiseur EQ:** `fftSize = 128` (64 bins) avec clustering par barre (`binsPerBar`), plus animation CSS de repli (`fake-eq`) et respiration au repos (`bar-pulse`), drapeau `isWebAudioSupported` (try/catch CORS).
    3.  **Navigation TV D-Pad:** `focusAndCenter()` (focus + `scrollIntoView` centré) + throttling 60ms (`isScrollThrottled`) pour les répétitions de touche sur Android TV.
    4.  **Défilement & focus:** `overscroll-behavior: contain` (x2), anneaux de focus `!important` haute-contraste.
-   **Correctif unique réappliqué:** `try/catch` autour de `scrollIntoView` dans `focusAndCenter` (compatibilité WebView anciennes).
-   **Vérification jsdom:** **34/34** (marqueurs statiques + flux complet : choix récitateur → sourates → navigation flèches + throttle → Enter/Escape → classe `fallback` sans AudioContext → copie).
-   **Déploiement 3 plateformes (commit `f74ff31`):**
    -   GitHub Pages: https://ucfzem.github.io/quran-reader/ (HTTP 200, marqueurs vérifiés)
    -   Vercel: projet `quran-reader` (compte `ucfzem-s-projects`) → https://quran-reader-swart.vercel.app (HTTP 200) — repo GitHub connecté (push = auto-deploy)
    -   Cloudflare Workers: Worker `quran-reader` → https://quran-reader.azer-tyu199p.workers.dev (HTTP 200, Version ID `eae03dbb-bee3-41fa-bffb-40a682068add`)
-   **Note sécurité:** tokens GitHub/Vercel/Cloudflare fournis ponctuellement par l'utilisateur, jamais stockés sur disque ni commités.

## 40\. Correctif défilement TV — listes sourates/récitateurs (quran-reader)

-   **Bug signalé:** « Still can't scroll too far in coran index and reciters. Remote tuch the buttom and stops » — les listes déroulantes se figeaient près du haut.
-   **Cause:** `scrollIntoView({ behavior: 'smooth', block: 'center' })` appelé en rafale sous répétition de touche de la télécommande → les animations smooth s'interrompent mutuellement et le défilement n'avance plus.
-   **Correctif (commit `7c4263c`):** `focusAndCenter` pilote désormais `list.scrollTop` directement (calcul via `getBoundingClientRect`, `scrollBehavior: 'auto'` temporaire) — défilement déterministe sur tous les WebView ; et les flèches se **serrent en fin de liste** (`Math.min`/`Math.max`) au lieu de boucler vers le haut.
-   **Vérification jsdom:** **37/37** (clamp haut/bas, marqueur `scrollTop` présent).
-   **Déploiement:** GitHub Pages + Vercel (auto via push) + Cloudflare Worker reconstruit → les 3 plateformes servent le correctif (marqueur `list.scrollTop = Math.max` = 1 chacune, HTTP 200).

## 41\. Correctif ordre des mots arabes — childsgame (SavoirsEnJouant)

-   **Bug:** en mode phrase, les chips cliqués (ex. « الطفل », « يلعب », « في ») s'affichaient dans l'ordre visuel inversé car le conteneur était en LTR alors que l'arabe se lit de droite à gauche.
-   **Correctif:** `direction: rtl;` ajouté à `.target-zone` dans `childsgame/index.html` (repo `ucfzem/ucfzem.github.io`). Purement visuel : `checkSentence()` compare `JSON.stringify(userBuiltWords)` à `JSON.stringify(data.arWords)` — l'ordre du tableau est inchangé.
-   **Vérification:** logique de validation relue (array push inchangé), déploiement Pages HTTP 200, marqueur `direction: rtl` = 2 dans le HTML servi.
-   **Commit:** `e38d9ee` dans `ucfzem/ucfzem.github.io` (via API Contents, branche `main`).
-   **Lien:** https://ucfzem.github.io/childsgame/

## 42\. TV Hardening final — quran-reader (focus rings, roues, défilement)

-   **Contexte:** le défilement par télécommande des listes sourates/récitateurs ne descendait toujours pas assez loin sur TV malgré le correctif §40 ; diagnostic partagé (utilisateur + assistant) : renforcer focus/overflow plutôt que réorganiser la mise en page.
-   **Patch appliqué (commit `8f6110a`), jsdom **42/42**:**
    1.  **Anneaux de focus TV durcis:** `*:focus-visible, .tv-focusable:focus, .dropdown-item:focus { outline: 3px solid #ffe66d !important; outline-offset: 2px !important; border-radius: 8px; }` (remplace l'ancienne règle 2px `var(--focus-ring)`).
    2.  **Roues anti-effondrement:** `.spool-wrapper` et `.reel` reçoivent `flex-shrink: 0 !important` (+ largeurs/hauteurs `!important`) pour empêcher les moteurs WebKit/Tizen de réduire les bobines à 0×0 ; `transform-box: fill-box !important` sur `.reel` et `.reel svg, .reel-spoke` pour un pivot correct de la rotation.
    3.  **Défilement listes:** `.dropdown-list` + `-webkit-overflow-scrolling: touch` (momentum) et `outline: none` ; `surahOptionsList.tabIndex = 0` et `reciterOptionsList.tabIndex = 0` ajoutés en fin de `buildCustomSurahList()`/`buildCustomReciterList()` pour que la télécommande focalise le conteneur défilable directement.
-   **Vérification:** marqueurs servis sur les 3 plateformes (`flex-shrink: 0 !important` ×2, `outline: 3px solid #ffe66d` ×1, `tabIndex = 0` ×2).
-   **Déploiement (commit `8f6110a`):**
    -   GitHub Pages: https://ucfzem.github.io/quran-reader/
    -   Vercel (auto via push): https://quran-reader-swart.vercel.app
    -   Cloudflare Workers (reconstruit): https://quran-reader.azer-tyu199p.workers.dev — Version ID `54f76655-c3a2-4401-a327-508445628798`
-   **Statut:** en attente de validation réelle de l'utilisateur sur le téléviseur (défilement complet jusqu'à An-Nas).

## 43\. Navigation TV — clés matérielles légacy + taille modale (commit `0a8fc20`)

-   **Contexte:** photos de l'utilisateur montraient (a) la modale rendue en minuscule boîte en bas à droite sur la TV (moteur WebKit ancien ignorait `inset: 0`), (b) la télécommande qui ne réagissait pas aux flèches/envois (`e.key` était `'Unidentified'` sur les télécommandes légacy).
-   **Patch appliqué, jsdom **53/53**:**
    1.  **Modale pleine taille:** `.dropdown-modal` remplace `inset: 0` par `top: 0; left: 0; right: 0; bottom: 0; width: 100%; height: 100%;` (compatible WebKit TV légacy).
    2.  **Helper `normalizeDirection(e)`** ajouté à côté de `focusAndCenter` : traduit les `keyCode` matériels en clés logiques — 40=ArrowDown, 38=ArrowUp, 37=ArrowLeft, 39=ArrowRight, 13=Enter, 27=Escape, 10009=Back (Tizen), 461=Back (webOS), 179=MediaPlayPause, 176=MediaTrackNext, 177=MediaTrackPrevious ; renvoie `e.key` sauf si `'Unidentified'`/vide.
    3.  **Câblage:** `normalizeDirection(e)` branché dans les trois handlers — `surahOptionsList` (flèches/Enter/Escape/Back), `reciterOptionsList` (idem), et le handler global `window` (switch flèches + clés média 179/176/177).
-   **Vérification:** jsdom 53/53 (dont tests `keyCode` 40/38/13/27/10009/461/179/176/177 + absence de `inset: 0` + présence des 4 côtés explicites) ; marqueurs servis sur les 3 plateformes (`normalizeDirection` ×6, `inset: 0` ×0).
-   **Déploiement (commit `0a8fc20`):**
    -   GitHub Pages: https://ucfzem.github.io/quran-reader/
    -   Vercel (auto via push): https://quran-reader-swart.vercel.app
    -   Cloudflare Workers (reconstruit): https://quran-reader.azer-tyu199p.workers.dev — Version ID `6791aa5e-92d5-4134-98c4-25bd5e13dfbe`
-   **Statut:** en attente de validation réelle de l'utilisateur sur le téléviseur (si une touche envoie un `keyCode` hors de la liste, la récupérer par débogage distant pour l'ajouter).

