/* IVA TIME — bilingual live world clocks · Jalali/Gregorian calendar · NTP network time sync
   Pure vanilla JS — no build step, no API keys. */

/* ================= Jalali (Persian solar) calendar math =================
   Port of jalaali-js v2 (MIT, github.com/jalaali/jalaali-js).
   Borkowski (1996) algorithm — exact for Jalaali years -61..3177 and matches
   the ECMAScript Intl 'fa-IR-u-ca-persian' calendar for 1800..2256 CE. */
const JBREAKS = [
  -61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060, 2097, 2192,
  2262, 2324, 2394, 2456, 3178,
];
const jdiv = (a, b) => ~~(a / b);
const jmod = (a, b) => a - ~~(a / b) * b;
function jalCalCore(jy) {
  const gy = jy + 621;
  let leapJ = -14,
    jp = JBREAKS[0],
    jm = 0,
    jump = 0;
  for (let i = 1; i < JBREAKS.length; i += 1) {
    jm = JBREAKS[i];
    jump = jm - jp;
    if (jy < jm) break;
    leapJ = leapJ + jdiv(jump, 33) * 8 + jdiv(jmod(jump, 33), 4);
    jp = jm;
  }
  const n = jy - jp;
  leapJ = leapJ + jdiv(n, 33) * 8 + jdiv(jmod(n, 33) + 3, 4);
  if (jmod(jump, 33) === 4 && jump - n === 4) leapJ += 1;
  const leapG = jdiv(gy, 4) - jdiv((jdiv(gy, 100) + 1) * 3, 4) - 150;
  const march = 20 + leapJ - leapG;
  return { gy, march, jump, n };
}
function leapFromCycle(jump, n) {
  let adjusted = n;
  if (jump - n < 6) adjusted = n - jump + jdiv(jump + 4, 33) * 33;
  let leap = jmod(jmod(adjusted + 1, 33) - 1, 4);
  if (leap === -1) leap = 4;
  return leap;
}
function jalCal(jy) {
  const c = jalCalCore(jy);
  return { leap: leapFromCycle(c.jump, c.n), gy: c.gy, march: c.march };
}
/* Gregorian date -> Julian Day Number */
function g2d(gy, gm, gd) {
  let d =
    jdiv((gy + jdiv(gm - 8, 6) + 100100) * 1461, 4) +
    jdiv(153 * jmod(gm + 9, 12) + 2, 5) +
    gd -
    34840408;
  d = d - jdiv(jdiv(gy + 100100 + jdiv(gm - 8, 6), 100) * 3, 4) + 752;
  return d;
}
/* Julian Day Number -> Gregorian date [gy,gm,gd] */
function d2g(jdn) {
  let j = 4 * jdn + 139361631;
  j = j + jdiv(jdiv(4 * jdn + 183187720, 146097) * 3, 4) * 4 - 3908;
  const i = jdiv(jmod(j, 1461), 4) * 5 + 308;
  const gd = jdiv(jmod(i, 153), 5) + 1;
  const gm = jmod(jdiv(i, 153), 12) + 1;
  const gy = jdiv(j, 1461) - 100100 + jdiv(8 - gm, 6);
  return [gy, gm, gd];
}
/* Jalali date -> Julian Day Number */
function j2d(jy, jm, jd) {
  const r = jalCalCore(jy);
  return (
    g2d(r.gy, 3, r.march) + (jm - 1) * 31 - jdiv(jm, 7) * (jm - 7) + jd - 1
  );
}
function jalLeap(jy) {
  const c = jalCalCore(jy);
  return leapFromCycle(c.jump, c.n);
}
/* Length of a Jalaali month: 1-6 => 31, 7-11 => 30, 12 => 29/30 (leap) */
function jalMonthLen(jy, jm) {
  return jm <= 6 ? 31 : jm <= 11 ? 30 : jalLeap(jy) === 0 ? 30 : 29;
}
/* Julian Day Number -> Jalali date [jy,jm,jd] */
function d2j(jdn) {
  const gy = d2g(jdn)[0];
  let jy = Math.min(gy - 621, 3177);
  const r = jalCal(jy);
  const jdn1f = g2d(r.gy, 3, r.march);
  let k = jdn - jdn1f;
  if (k >= 0) {
    if (k <= 185) return [jy, 1 + jdiv(k, 31), jmod(k, 31) + 1];
    k -= 186;
  } else {
    jy -= 1;
    k += 179;
    if (r.leap === 1) k += 1;
  }
  return [jy, 7 + jdiv(k, 30), jmod(k, 30) + 1];
}
/* Public conversions: Gregorian [y,m,d] <-> Jalali [y,m,d] */
function g2j(gy, gm, gd) {
  return d2j(g2d(gy, gm, gd));
}
function j2g(jy, jm, jd) {
  return d2g(j2d(jy, jm, jd));
}
function jalaliOf(d) {
  return g2j(d.getFullYear(), d.getMonth() + 1, d.getDate());
}
/* ================= /Jalali calendar math ================= */

const J_MONTHS = {
  fa: [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ],
  en: [
    "Farvardin",
    "Ordibehesht",
    "Khordad",
    "Tir",
    "Mordad",
    "Shahrivar",
    "Mehr",
    "Aban",
    "Azar",
    "Dey",
    "Bahman",
    "Esfand",
  ],
};
const G_MONTHS = {
  fa: [
    "ژانویه",
    "فوریه",
    "مارس",
    "آوریل",
    "مه",
    "ژوئن",
    "ژوئیه",
    "اوت",
    "سپتامبر",
    "اکتبر",
    "نوامبر",
    "دسامبر",
  ],
  en: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
};
const DOW_FA = [
  "یکشنبه",
  "دوشنبه",
  "سه‌شنبه",
  "چهارشنبه",
  "پنجشنبه",
  "جمعه",
  "شنبه",
]; // indexed by Date.getDay()
const DOW_EN = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const DOW_FA_S = ["ی", "د", "س", "چ", "پ", "ج", "ش"];
const DOW_EN_S = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const toFa = (s) => String(s).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[+d]);
const FA_NAMES = {
  "New York": "نیویورک",
  "Los Angeles": "لس‌آنجلس",
  Toronto: "تورنتو",
  "Mexico City": "مکزیکوسیتی",
  "São Paulo": "سائوپائولو",
  "Buenos Aires": "بوئنوس آیرس",
  London: "لندن",
  Paris: "پاریس",
  Berlin: "برلین",
  Madrid: "مادرید",
  Rome: "رم",
  Amsterdam: "آمستردام",
  Stockholm: "استکهلم",
  Istanbul: "استانبول",
  Dubai: "دبی",
  Tehran: "تهران",
  Riyadh: "ریاض",
  Doha: "دوحه",
  Cairo: "قاهره",
  Lagos: "لاگوس",
  Nairobi: "نایروبی",
  "Cape Town": "کیپ‌تاون",
  Casablanca: "کازابلانکا",
  Tokyo: "توکیو",
  Seoul: "سئول",
  Beijing: "پکن",
  Singapore: "سنگاپور",
  Bangkok: "بانکوک",
  Jakarta: "جاکارتا",
  Mumbai: "بمبئی",
  Karachi: "کراچی",
  Dhaka: "داکا",
  Sydney: "سیدنی",
  Perth: "پرت",
  Auckland: "اوکلند",
  "United States": "ایالات متحده",
  Canada: "کانادا",
  Mexico: "مکزیک",
  Brazil: "برزیل",
  Argentina: "آرژانتین",
  "United Kingdom": "بریتانیا",
  France: "فرانسه",
  Germany: "آلمان",
  Spain: "اسپانیا",
  Italy: "ایتالیا",
  Netherlands: "هلند",
  Sweden: "سوئد",
  Türkiye: "ترکیه",
  "United Arab Emirates": "امارات متحده عربی",
  Iran: "ایران",
  "Saudi Arabia": "عربستان سعودی",
  Qatar: "قطر",
  Egypt: "مصر",
  Nigeria: "نیجریه",
  Kenya: "کنیا",
  "South Africa": "آفریقای جنوبی",
  Morocco: "مراکش",
  Japan: "ژاپن",
  "South Korea": "کره جنوبی",
  China: "چین",
  Thailand: "تایلند",
  Indonesia: "اندونزی",
  India: "هند",
  Pakistan: "پاکستان",
  Bangladesh: "بنگلادش",
  Australia: "استرالیا",
  "New Zealand": "نیوزیلند",
};
const REGION_FA = {
  All: "همه",
  Americas: "قاره آمریکا",
  Europe: "اروپا",
  "Middle East": "خاورمیانه",
  Africa: "آفریقا",
  "Asia Pacific": "آسیا و اقیانوسیه",
};
const localName = (value) => (lang === "fa" ? FA_NAMES[value] || value : value);

const P = `New York|United States|US|America/New_York|Americas
Los Angeles|United States|US|America/Los_Angeles|Americas
Toronto|Canada|CA|America/Toronto|Americas
Mexico City|Mexico|MX|America/Mexico_City|Americas
São Paulo|Brazil|BR|America/Sao_Paulo|Americas
Buenos Aires|Argentina|AR|America/Argentina/Buenos_Aires|Americas
London|United Kingdom|GB|Europe/London|Europe
Paris|France|FR|Europe/Paris|Europe
Berlin|Germany|DE|Europe/Berlin|Europe
Madrid|Spain|ES|Europe/Madrid|Europe
Rome|Italy|IT|Europe/Rome|Europe
Amsterdam|Netherlands|NL|Europe/Amsterdam|Europe
Stockholm|Sweden|SE|Europe/Stockholm|Europe
Istanbul|Türkiye|TR|Europe/Istanbul|Europe
Dubai|United Arab Emirates|AE|Asia/Dubai|Middle East
Tehran|Iran|IR|Asia/Tehran|Middle East
Riyadh|Saudi Arabia|SA|Asia/Riyadh|Middle East
Doha|Qatar|QA|Asia/Qatar|Middle East
Cairo|Egypt|EG|Africa/Cairo|Africa
Lagos|Nigeria|NG|Africa/Lagos|Africa
Nairobi|Kenya|KE|Africa/Nairobi|Africa
Cape Town|South Africa|ZA|Africa/Johannesburg|Africa
Casablanca|Morocco|MA|Africa/Casablanca|Africa
Tokyo|Japan|JP|Asia/Tokyo|Asia Pacific
Seoul|South Korea|KR|Asia/Seoul|Asia Pacific
Beijing|China|CN|Asia/Shanghai|Asia Pacific
Singapore|Singapore|SG|Asia/Singapore|Asia Pacific
Bangkok|Thailand|TH|Asia/Bangkok|Asia Pacific
Jakarta|Indonesia|ID|Asia/Jakarta|Asia Pacific
Mumbai|India|IN|Asia/Kolkata|Asia Pacific
Karachi|Pakistan|PK|Asia/Karachi|Asia Pacific
Dhaka|Bangladesh|BD|Asia/Dhaka|Asia Pacific
Sydney|Australia|AU|Australia/Sydney|Asia Pacific
Perth|Australia|AU|Australia/Perth|Asia Pacific
Auckland|New Zealand|NZ|Pacific/Auckland|Asia Pacific`
  .split("\n")
  .map((x) => {
    const [city, country, code, zone, region] = x.split("|");
    return { city, country, code, zone, region };
  });

const C = {
  en: {
    clocks: "World clocks",
    about: "About",
    calendar: "Calendar",
    wiki: "Wiki",
    brandSub: "WORLD CLOCK",
    pageTitle: "IVA TIME | World Clock",
    eyebrow: "THE WORLD, RIGHT ON TIME",
    line1: "Every city.",
    line2: "One moment.",
    lead: "A beautifully simple world clock for teams, travelers, and everyone across time zones.",
    cta: "Explore the world ↓",
    local: "YOUR LOCAL TIME",
    label: "WORLD CLOCKS",
    title: "Time, everywhere.",
    desc: "Search cities and countries. Accurate, live, and always in sync.",
    search: "Search city or country…",
    more: "Show more clocks ＋",
    calLabel: "SOLAR CALENDAR",
    calTitle: "Every day, in both calendars.",
    calDesc:
      "Live Persian (Jalali) and Gregorian months, kept in step with NTP-synchronized time.",
    today: "TODAY",
    tTime: "LOCAL TIME · NTP SYNC",
    calJ: "Persian (Jalali)",
    calG: "Gregorian",
    src: "Source",
    srcAuto: "Auto · NTP network",
    srcLocal: "Local clock only",
    syncNow: "Sync now",
    made: "MADE FOR REAL LIFE",
    sync: "Built to keep you in sync.",
    accurate: "Always accurate",
    accurateP: "Automatic daylight-saving updates powered by your browser.",
    find: "Find anywhere",
    findP: "Search cities and countries and filter by global region.",
    night: "Day or night",
    nightP: "Know whether the sun is up before you call.",
    footer: "Time connects us all.",
    empty: "No matching city found.",
    theme: "Switch light/dark theme",
    prev: "Previous month",
    next: "Next month",
    skip: "Skip to content",
    install: "Install",
    manageCities: "＋ Manage cities",
    compare: "Compare time",
    planner: "Meeting planner",
    plannerHelp: "Select cities to find overlapping working hours.",
    findTimes: "Find suitable times",
    sort: "Sort",
    sortDefault: "Default",
    sortFavorites: "Favorites",
    sortName: "Name",
    sortOffset: "UTC offset",
    share: "Share settings",
    citySearch: "Search city or time zone…",
    done: "Done",
  },
  fa: {
    clocks: "ساعت‌های جهان",
    about: "درباره",
    calendar: "تقویم",
    wiki: "راهنما",
    brandSub: "آیوا تایم",
    pageTitle: "IVA TIME | آیوا تایم",
    eyebrow: "جهان، دقیق و به‌موقع",
    line1: "هر شهر.",
    line2: "یک لحظه.",
    lead: "ساعتی زیبا و ساده برای تیم‌ها، مسافران و همه‌ی کسانی که میان منطقه‌های زمانی زندگی می‌کنند.",
    cta: "سفر در زمان ↓",
    local: "زمان محلی شما",
    label: "ساعت‌های جهان",
    title: "زمان، در هر نقطه.",
    desc: "شهرها و کشورها را جست‌وجو کنید؛ دقیق، زنده و همیشه هماهنگ.",
    search: "جست‌وجوی شهر یا کشور…",
    more: "نمایش ساعت‌های بیشتر ＋",
    calLabel: "تقویم شمسی",
    calTitle: "هر روز، در دو تقویم.",
    calDesc:
      "ماه‌های شمسی (جلالی) و میلادی به‌صورت زنده، هماهنگ با زمان شبکه (NTP).",
    today: "امروز",
    tTime: "زمان محلی · همگام NTP",
    calJ: "شمسی (جلالی)",
    calG: "میلادی",
    src: "منبع",
    srcAuto: "خودکار · شبکه (NTP)",
    srcLocal: "فقط ساعت محلی",
    syncNow: "همگام‌سازی",
    made: "برای زندگی واقعی",
    sync: "برای هماهنگ ماندن ساخته شده.",
    accurate: "همیشه دقیق",
    accurateP: "تنظیم خودکار ساعت تابستانی با مرورگر شما.",
    find: "هرجا را پیدا کن",
    findP: "شهرها را جست‌وجو و بر اساس منطقه فیلتر کنید.",
    night: "روز یا شب",
    nightP: "پیش از تماس، روز یا شب بودن مقصد را ببینید.",
    footer: "زمان، همه‌ی ما را به هم متصل می‌کند.",
    empty: "شهری با این مشخصات پیدا نشد.",
    theme: "تغییر حالت روشن و تیره",
    prev: "ماه قبل",
    next: "ماه بعد",
    skip: "رفتن به محتوای اصلی",
    install: "نصب برنامه",
    manageCities: "＋ مدیریت شهرها",
    compare: "مقایسه ساعت",
    planner: "برنامه‌ریز جلسه",
    plannerHelp: "شهرها را انتخاب کنید تا ساعت کاری مشترک پیدا شود.",
    findTimes: "پیداکردن زمان مناسب",
    sort: "مرتب‌سازی",
    sortDefault: "پیش‌فرض",
    sortFavorites: "محبوب‌ها",
    sortName: "نام شهر",
    sortOffset: "اختلاف UTC",
    share: "اشتراک تنظیمات",
    citySearch: "جست‌وجوی شهر یا منطقه زمانی…",
    done: "تأیید",
  },
};

let lang =
    localStorage.getItem("iva-lang") ||
    ((navigator.language || "").toLowerCase().startsWith("fa") ? "fa" : "en"),
  region = "All",
  limit = 12,
  q = "";
let calSys = "j",
  calY = 1400,
  calM = 1;
const $ = (s) => document.querySelector(s);
const num = (v) => (lang === "fa" ? toFa(v) : String(v));
const flag = (c) =>
  [...c].map((x) => String.fromCodePoint(127397 + x.charCodeAt(0))).join("");
const time = (d, z, s = false) =>
  new Intl.DateTimeFormat(lang === "fa" ? "fa-IR" : "en-GB", {
    timeZone: z,
    hour: "2-digit",
    minute: "2-digit",
    second: s ? "2-digit" : undefined,
    hour12: false,
  }).format(d);
const date = (d, z) =>
  new Intl.DateTimeFormat(lang === "fa" ? "fa-IR-u-ca-gregory" : "en-US", {
    timeZone: z,
    weekday: "short",
    month: "short",
    day: "numeric",
  }).format(d);
const LOCAL_TZ = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";

/* ================= NTP / network time sync =================
   Browsers cannot open raw UDP NTP sockets (port 123), so we synchronize
   against NTP-disciplined network time sources and apply the measured
   offset to every clock on the page. Cascade:
     1. Cloudflare edge "trace" endpoint (ts= unix timestamp, CORS *)
     2. worldtimeapi.org (NTP-disciplined, CORS *)
     3. local device clock (offset 0)
   Auto re-syncs every 5 minutes. */
let offsetMs = 0,
  syncing = false;
let syncState = { status: "idle", source: null, rtt: null, at: null };
const now = () => Date.now() + offsetMs;

/* Robust date-string parser: ISO 8601, "YYYY-MM-DD HH:mm:ss.sss±HH:MM" etc. */
function parseTimeValue(s) {
  if (!s) return null;
  s = String(s).trim();
  const t = Date.parse(s);
  if (!Number.isNaN(t)) return t;
  const m = s.match(
    /^(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?\s*(Z|[+-]\d{2}:?\d{2})?$/,
  );
  if (!m) return null;
  const frac = m[7] ? parseInt((m[7] + "000").slice(0, 3), 10) : 0;
  let base = Date.UTC(+m[1], +m[2] - 1, +m[3], +m[4], +m[5], +m[6]);
  if (m[8] && m[8] !== "Z") {
    const sign = m[8][0] === "-" ? -1 : 1;
    const oh = +m[8].slice(1, 3) || 0,
      om = +m[8].slice(-2) || 0;
    base -= sign * (oh * 3600000 + om * 60000);
  }
  return base + frac;
}

async function httpGet(url, timeoutMs = 6000) {
  const ctl = new AbortController();
  const to = setTimeout(() => ctl.abort(), timeoutMs);
  try {
    const t0 = performance.now();
    const r = await fetch(url, { cache: "no-store", signal: ctl.signal });
    const text = await r.text();
    const rtt = performance.now() - t0;
    if (!r.ok) return null;
    return { text, rtt };
  } catch {
    return null;
  } finally {
    clearTimeout(to);
  }
}

const TIME_SOURCES = [
  {
    id: "cloudflare",
    name: "Cloudflare edge",
    async get() {
      const r = await httpGet("https://www.cloudflare.com/cdn-cgi/trace");
      if (!r) return null;
      const line = r.text
        .split("\n")
        .map((x) => x.trim())
        .find((l) => l.startsWith("ts="));
      if (!line) return null;
      const ms = parseFloat(line.slice(3)) * 1000;
      return Number.isFinite(ms) ? { serverMs: ms, rtt: r.rtt } : null;
    },
  },
  {
    id: "worldtime",
    name: "WorldTimeAPI",
    async get() {
      const r = await httpGet("https://worldtimeapi.org/api/timezone/Etc/UTC");
      if (!r) return null;
      let j;
      try {
        j = JSON.parse(r.text);
      } catch {
        return null;
      }
      const ms = parseTimeValue(j && j.datetime);
      return ms ? { serverMs: ms, rtt: r.rtt } : null;
    },
  },
];

async function doSync(mode) {
  if (syncing) return;
  syncing = true;
  syncState = { status: "syncing", source: null, rtt: null, at: null };
  updateSyncUI();
  let hit = null;
  if (mode !== "local") {
    for (const s of TIME_SOURCES) {
      let res = null;
      try {
        res = await s.get();
      } catch {
        res = null;
      }
      if (res) {
        hit = { src: s, serverMs: res.serverMs, rtt: res.rtt };
        break;
      }
    }
  }
  if (hit) {
    /* estimate the local clock at the moment the server stamped the time */
    offsetMs = hit.serverMs - (Date.now() - hit.rtt / 2);
    syncState = { status: "ok", source: hit.src, rtt: hit.rtt, at: Date.now() };
  } else {
    offsetMs = 0;
    syncState = { status: "local", source: null, rtt: null, at: Date.now() };
  }
  syncing = false;
  updateSyncUI();
  render();
  renderToday();
  renderCal();
}

function updateSyncUI() {
  const el = $("#syncText");
  if (!el) return;
  const dot = $("#syncDot");
  if (dot)
    dot.className =
      "dot " +
      (syncState.status === "ok"
        ? "ok"
        : syncState.status === "syncing"
          ? "busy"
          : "warn");
  const stamp = time(new Date(now()), LOCAL_TZ, true);
  if (syncState.status === "syncing") {
    el.textContent =
      lang === "fa"
        ? "در حال همگام‌سازی با سرور زمان…"
        : "Syncing with time server…";
  } else if (syncState.status === "ok") {
    const rtt = Math.round(syncState.rtt);
    const off = Math.round(offsetMs);
    if (lang === "fa") {
      const diff =
        off === 0
          ? "ساعت محلی دقیق است"
          : off > 0
            ? `ساعت محلی ${toFa(off)} ms عقب است`
            : `ساعت محلی ${toFa(-off)} ms جلوتر است`;
      el.textContent = `همگام با NTP · ${syncState.source.name} · RTT ${toFa(rtt)} ms · ${diff} · ${stamp}`;
    } else {
      el.textContent = `NTP synced · ${syncState.source.name} · RTT ${rtt} ms · offset ${off >= 0 ? "+" : "−"}${Math.abs(off)} ms · ${stamp}`;
    }
  } else {
    el.textContent =
      lang === "fa"
        ? "ساعت محلی دستگاه (همگام‌سازی با شبکه ناموفق)"
        : "Local device clock (network sync unavailable)";
  }
}
/* ================= /NTP ================= */

/* ================= calendar ================= */
function initCal() {
  const t = new Date(now());
  const j = jalaliOf(t);
  if (calSys === "j") {
    calY = j[0];
    calM = j[1];
  } else {
    calY = t.getFullYear();
    calM = t.getMonth() + 1;
  }
}
function firstDow(sys, y, m) {
  const g = sys === "j" ? j2g(y, m, 1) : [y, m, 1];
  return new Date(Date.UTC(g[0], g[1] - 1, g[2])).getUTCDay();
}
function renderCal() {
  const el = $("#calMonth");
  if (!el) return;
  const weekStart = lang === "fa" ? 6 : 0;
  const mN = (calSys === "j" ? J_MONTHS : G_MONTHS)[lang];
  $("#calMonth").textContent = mN[calM - 1];
  $("#calYear").textContent = num(calY);
  const dN = lang === "fa" ? DOW_FA_S : DOW_EN_S;
  let wh = "";
  for (let i = 0; i < 7; i++) wh += `<span>${dN[(weekStart + i) % 7]}</span>`;
  $("#calWeek").innerHTML = wh;
  const n =
    calSys === "j"
      ? jalMonthLen(calY, calM)
      : new Date(Date.UTC(calY, calM, 0)).getUTCDate();
  const lead = (firstDow(calSys, calY, calM) - weekStart + 7) % 7;
  const t = new Date(now());
  const tj = jalaliOf(t);
  let cells = "";
  for (let i = 0; i < lead; i++) cells += '<span class="blank"></span>';
  for (let d = 1; d <= n; d++) {
    const g = calSys === "j" ? j2g(calY, calM, d) : [calY, calM, d];
    const j = calSys === "j" ? [calY, calM, d] : g2j(g[0], g[1], g[2]);
    const isToday = j[0] === tj[0] && j[1] === tj[1] && j[2] === tj[2];
    const sub =
      calSys === "j"
        ? `${num(g[2])} ${G_MONTHS[lang][g[1] - 1].slice(0, 3)} ${num(g[0])}`
        : `${num(j[2])} ${J_MONTHS[lang][j[1] - 1]} ${num(j[0])}`;
    cells += `<div class="cell${isToday ? " today" : ""}"><b>${num(calSys === "j" ? j[2] : g[2])}</b><small>${sub}</small></div>`;
  }
  const tail = (7 - ((lead + n) % 7)) % 7;
  for (let i = 0; i < tail; i++) cells += '<span class="blank"></span>';
  $("#calGrid").innerHTML = cells;
}
function calNav(dir) {
  calM += dir;
  if (calM < 1) {
    calM = 12;
    calY--;
  }
  if (calM > 12) {
    calM = 1;
    calY++;
  }
  renderCal();
}
function setCalSys(sys) {
  const t = new Date(now());
  const j = jalaliOf(t);
  calSys = sys;
  localStorage.setItem("iva-calendar", sys);
  if (sys === "j") {
    calY = j[0];
    calM = j[1];
  } else {
    calY = t.getFullYear();
    calM = t.getMonth() + 1;
  }
  document
    .querySelectorAll("#calSystem button")
    .forEach((b) => b.classList.toggle("on", b.dataset.cal === sys));
  renderCal();
  renderToday();
}
function renderToday() {
  const el = $("#calTodayDay");
  if (!el) return;
  const t = new Date(now());
  const j = jalaliOf(t);
  const refG = lang === "fa" ? "میلادی: " : "Gregorian: ";
  const refJ = lang === "fa" ? "شمسی: " : "Jalali: ";
  $("#calTodayDay").textContent = (lang === "fa" ? DOW_FA : DOW_EN)[t.getDay()];
  const chip = $("#calChip");
  if (chip)
    chip.textContent =
      (lang === "fa" ? "تقویم: " : "Calendar: ") +
      (calSys === "j" ? C[lang].calJ : C[lang].calG);
  if (calSys === "j") {
    $("#calTodayMain").textContent =
      `${num(j[2])} ${J_MONTHS[lang][j[1] - 1]} ${num(j[0])}`;
    $("#calTodaySub").textContent =
      `${refG}${num(t.getDate())} ${G_MONTHS[lang][t.getMonth()]} ${num(t.getFullYear())}`;
  } else {
    $("#calTodayMain").textContent =
      `${num(t.getDate())} ${G_MONTHS[lang][t.getMonth()]} ${num(t.getFullYear())}`;
    $("#calTodaySub").textContent =
      `${refJ}${num(j[2])} ${J_MONTHS[lang][j[1] - 1]} ${num(j[0])}`;
  }
  $("#calTodayTime").textContent = time(t, LOCAL_TZ, true);
}
/* ================= /calendar ================= */

/* ================= clocks & i18n (original, now offset-aware) ================= */
function render() {
  const d = new Date(now());
  let list = P.filter(
    (p) =>
      (region === "All" || p.region === region) &&
      `${p.city} ${p.country} ${FA_NAMES[p.city] || ""} ${FA_NAMES[p.country] || ""}`
        .toLowerCase()
        .includes(q),
  );
  if (window.ivaPrepareList) list = window.ivaPrepareList(list, d);
  $("#local").textContent = time(d, LOCAL_TZ, true);
  $("#grid").innerHTML = list
    .slice(0, limit)
    .map((p) => {
      const h = +new Intl.DateTimeFormat("en", {
        timeZone: p.zone,
        hour: "numeric",
        hourCycle: "h23",
      }).format(d);
      const actions = window.ivaCardActions ? window.ivaCardActions(p) : "";
      return `<article class="card" data-zone="${p.zone}"><div class="top"><span class="flag">${flag(p.code)}</span><span>${h > 6 && h < 19 ? (lang === "fa" ? "روز" : "Day") : lang === "fa" ? "شب" : "Night"}</span></div><div class="time">${time(d, p.zone)}</div><h3>${localName(p.city)}</h3><p>${localName(p.country)}</p><p class="date">${date(d, p.zone)}</p>${actions}</article>`;
    })
    .join("");
  $("#empty").hidden = list.length !== 0;
  $("#more").style.display = limit < list.length ? "block" : "none";
  const tickerHTML = P.slice(0, 8)
    .map(
      (p) =>
        `<span>${flag(p.code)} ${localName(p.city)} · ${time(d, p.zone)}</span>`,
    )
    .join("");
  const ticker = $("#ticker");
  if (
    ticker &&
    !ticker.firstElementChild?.classList.contains("marquee-track")
  ) {
    ticker.innerHTML = `<div class="marquee-track">${tickerHTML}${tickerHTML}</div>`;
  } else if (ticker) {
    const track = ticker.querySelector(".marquee-track");
    if (track) track.innerHTML = tickerHTML + tickerHTML;
  }
  renderToday();
}
function translate() {
  const t = C[lang];
  document.title = t.pageTitle;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i]").forEach((e) => {
    if (e.dataset.i && t[e.dataset.i] !== undefined)
      e.textContent = t[e.dataset.i];
  });
  document.querySelectorAll("[data-placeholder]").forEach((e) => {
    if (t[e.dataset.placeholder] !== undefined)
      e.placeholder = t[e.dataset.placeholder];
  });
  document.querySelectorAll("[data-aria]").forEach((e) => {
    if (t[e.dataset.aria] !== undefined)
      e.setAttribute("aria-label", t[e.dataset.aria]);
  });
  $("#lang").textContent = lang === "en" ? "فا" : "EN";
  $("#lang").setAttribute(
    "aria-label",
    lang === "en" ? "نمایش فارسی" : "Show English",
  );
  document.querySelectorAll("#filters button").forEach((b) => {
    b.textContent =
      lang === "fa" ? REGION_FA[b.dataset.region] : b.dataset.region;
  });
  render();
  renderCal();
  renderToday();
  updateSyncUI();
  if (window.ivaAfterTranslate) window.ivaAfterTranslate();
}
/* ================= /clocks & i18n ================= */

/* ================= wiring ================= */
["All", "Americas", "Europe", "Middle East", "Africa", "Asia Pacific"].forEach(
  (r) => {
    const b = document.createElement("button");
    b.textContent = r;
    b.dataset.region = r;
    b.className = r === "All" ? "on" : "";
    b.onclick = () => {
      region = r;
      limit = 12;
      document
        .querySelectorAll("#filters button")
        .forEach((x) => x.classList.toggle("on", x === b));
      render();
    };
    $("#filters").append(b);
  },
);
$("#search").oninput = (e) => {
  q = e.target.value.toLowerCase();
  limit = 12;
  render();
};
$("#more").onclick = () => {
  limit += 12;
  render();
};
$("#lang").onclick = () => {
  lang = lang === "en" ? "fa" : "en";
  localStorage.setItem("iva-lang", lang);
  translate();
};
$("#theme").onclick = () => {
  document.body.classList.toggle("light");
  localStorage.setItem(
    "iva-theme",
    document.body.classList.contains("light") ? "light" : "dark",
  );
};
$("#year").textContent = new Date().getFullYear();
$("#calPrev").onclick = () => calNav(-1);
$("#calNext").onclick = () => calNav(1);
document.querySelectorAll("#calSystem button").forEach((b) => {
  b.onclick = () => setCalSys(b.dataset.cal);
});
$("#syncBtn").onclick = () => doSync($("#syncSrc").value);
$("#syncSrc").onchange = (e) => {
  localStorage.setItem("iva-sync-source", e.target.value);
  doSync(e.target.value);
};

calSys = localStorage.getItem("iva-calendar") || calSys;
$("#syncSrc").value = localStorage.getItem("iva-sync-source") || "auto";
if (localStorage.getItem("iva-theme") === "light")
  document.body.classList.add("light");
initCal();
translate();
doSync($("#syncSrc").value);
setInterval(render, 1000);
setInterval(
  () => {
    const m = $("#syncSrc").value;
    if (m !== "local" && !syncing) doSync(m);
  },
  5 * 60 * 1000,
);

/* test hooks (harmless in the browser) */
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    g2j,
    j2g,
    g2d,
    d2g,
    j2d,
    d2j,
    jalCal,
    jalMonthLen,
    jalLeap,
    parseTimeValue,
    TIME_SOURCES,
    doSync,
    renderCal,
    render,
    renderToday,
    translate,
    setCalSys,
    calNav,
    initCal,
    updateSyncUI,
    J_MONTHS,
    G_MONTHS,
    DOW_FA,
    DOW_EN,
    state: () => ({
      lang,
      region,
      limit,
      q,
      calSys,
      calY,
      calM,
      offsetMs,
      syncState,
      syncing,
    }),
    setLang: (l) => {
      lang = l;
    },
    setOffset: (ms) => {
      offsetMs = ms;
    },
  };
}
