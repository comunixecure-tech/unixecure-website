/* ── 共用資料層(demo 用 localStorage 模擬資料庫)───────────── */
const STORAGE_KEY = 'ux_admin_news_v2';

const PRODUCT_TAGS = ['RAVEN', 'HEIS', 'SRMAS', 'LUCAS', 'SESC', 'SIVAS', '資安健診'];

/* 自家產品全名/連結/logo/標籤、代理品牌清單與 logo 路徑(對齊官網首頁產品卡與 partners.html),
   給「導入方案」這類需要挑選方案/品牌的欄位共用,之後其他模組也能直接套用。
   logo 對應官網共用的 SVG symbol(見本檔案下方 Logo Sprite);沒有 logo 的產品(SESC/SIVAS/資安健診)
   留 null,畫面上會改用 uniXecure 自己的 logo 代替。
   tag 是選了這個方案時要自動帶入標籤欄位的值。 */
const SOLUTION_PRESETS = [
  { name: 'RAVEN 資安監控維運中心', url: 'raven.html', logo: 'raven', tag: 'RAVEN' },
  { name: 'HEIS 資安意識人因分析系統', url: 'heis.html', logo: 'heis', tag: 'HEIS' },
  { name: 'SRMAS 系統資源監控暨告警系統', url: '', logo: 'srmas', tag: 'SRMAS' },
  { name: 'LUCAS 跡證保存系統', url: '', logo: 'lucas', tag: 'LUCAS' },
  { name: 'SESC 次世代郵件安全雲', url: '', logo: null, tag: 'SESC' },
  { name: 'SIVAS', url: '', logo: null, tag: 'SIVAS' },
  { name: '資安健診', url: '', logo: null, tag: '資安健診' },
];
/* 代理品牌 logo(對齊 partners.html 的 logo 路徑,從 admin/ 底下引用要加 ../) */
const PARTNER_LOGOS = {
  CHELPIS: 'assets/agents/chelpis.png',
  Delinea: 'assets/agents/delinea.png',
  illumio: 'assets/agents/illumio.svg',
  Claroty: 'assets/agents/claroty.png',
  Entrust: 'assets/agents/entrust.png',
  TrendAI: 'assets/agents/trendai.png',
  Rapid7: 'assets/agents/rapid7.png',
  CelloPoint: 'assets/agents/cellopoint.png',
  Invicti: 'assets/agents/invicti.png',
  'Recorded Future': 'assets/agents/recordedfuture.svg',
  Tufin: 'assets/agents/tufin.png',
  OPSWAT: 'assets/agents/opswat.svg',
  NEiTHNET: 'assets/agents/neithnet.png',
  AuthenTrend: 'assets/agents/authentrend.png',
  eLock: 'assets/agents/elock.png',
};
const PARTNER_BRANDS = Object.keys(PARTNER_LOGOS);
const UX_LOGO_PATH = 'ds/unixecure-logo-black.png';

/* 依名稱找出對應的 logo 顯示方式:自家有 SVG logo 的產品 → svg symbol;
   自家沒 logo 的產品、代理品牌以外的自訂名稱 → uniXecure logo;代理品牌 → 品牌 logo 圖檔。
   回傳 {type:'svg', logo} | {type:'img', src, alt},給不同大小的顯示情境各自組 HTML。 */
function resolveSolutionLogo(name) {
  const preset = SOLUTION_PRESETS.find(p => p.name === name);
  if (preset) {
    return preset.logo ? { type: 'svg', logo: preset.logo, alt: name } : { type: 'img', src: UX_LOGO_PATH, alt: 'uniXecure' };
  }
  const partnerLogo = PARTNER_LOGOS[name];
  if (partnerLogo) return { type: 'img', src: partnerLogo, alt: name };
  return { type: 'img', src: UX_LOGO_PATH, alt: 'uniXecure' };
}

/* 內頁預覽用的大版 logo(導入方案卡片) */
function solutionLogoHtml(name, rootPrefix) {
  const prefix = rootPrefix || '';
  const r = resolveSolutionLogo(name);
  return r.type === 'svg'
    ? `<svg class="mock-case-product__logo-svg" viewBox="0 0 1770 500" role="img" aria-label="${escapeHtml(r.alt)}"><use href="#lg-${r.logo}"></use></svg>`
    : `<img class="mock-case-product__logo-img" src="${prefix}${r.src}" alt="${escapeHtml(r.alt)}" />`;
}

const SEED_NEWS = [
  {
    id: 'n1', slug: 'gsoc-2-0-upgrade',
    title: 'uniXecure 攜手主管機關推動公部門 G-SOC 2.0 升級',
    publishAt: '2026-05-12T09:00',
    desc: '強化跨部會威脅情資聯防能力，打造一體化資安韌性，並與行政院資安處協同建置跨部會事件通報機制。',
    cover: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
    tags: ['RAVEN', '公部門', 'SOC'],
    body: '隨著跨機關資安威脅日益複雜，單一機關獨立應變已難以因應大規模、跨系統的攻擊行動。uniXecure 攜手主管機關，協同建置跨部會事件通報機制。\n\n本次升級重點如下:\n- 自動化派工與分級應變流程\n  - 依事件嚴重度自動指派處理單位\n  - 支援跨機關協作案件追蹤\n- 定期產出**合規報告**供主管機關查核\n- 詳細架構請參考 [RAVEN 產品介紹](raven.html)\n\n大幅縮短從事件發現到跨機關協處完成的整體時間。',
    seoTitle: '', seoDesc: '', status: 'published',
    createdAt: '2026-05-10T10:00', updatedAt: '2026-05-12T09:00',
  },
  {
    id: 'n2', slug: 'raven-iso27701',
    title: 'RAVEN 監控中心通過 ISO 27701 隱私資訊管理驗證',
    publishAt: '2026-04-28T09:00',
    desc: '成為國內少數同時取得 ISO 27001 與 27701 雙證的資安維運廠商，強化個資保護與安全管理雙軌並行。',
    cover: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    tags: ['RAVEN', '合規認證'],
    body: 'uniXecure 資安監控維運中心正式通過 ISO 27701 隱私資訊管理系統驗證，成為國內少數同時具備 ISO 27001 與 27701 雙證的資安維運廠商。\n\n此次驗證涵蓋客戶個資蒐集、處理、傳輸與刪除全流程，確保監控維運服務在資安防護之外，也符合國際隱私保護標準。',
    seoTitle: '', seoDesc: '', status: 'published',
    createdAt: '2026-04-25T10:00', updatedAt: '2026-04-28T09:00',
  },
  {
    id: 'n3', slug: 'heis-ai-engine-upgrade',
    title: 'HEIS 全面升級 AI 行為意識分析引擎',
    publishAt: '2026-03-15T09:00',
    desc: '以行為訊號量化員工資安意識，識別準確率提升 47%，並支援多語系報表輸出與主管儀表板整合。',
    cover: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    tags: ['HEIS', 'AI', '產品更新'],
    body: 'HEIS 資安意識人因分析系統推出全新 AI 行為意識分析引擎，透過量化員工日常行為訊號，識別高風險使用者的準確率較前一版本提升 **47%**。\n\n新版本同步支援:\n- 跨語系情境模擬\n- 主管儀表板整合\n- 自動化週報輸出\n\n協助企業更直觀掌握全員資安意識現況。',
    seoTitle: '', seoDesc: '', status: 'published',
    createdAt: '2026-03-12T10:00', updatedAt: '2026-03-15T09:00',
  },
  {
    id: 'n4', slug: 'srmas-cloud-alert-module',
    title: 'SRMAS 新增雲端資源異常告警模組',
    publishAt: '2026-11-05T09:00',
    desc: '即時偵測雲端主機資源異常波動，結合告警規則引擎，降低誤報並縮短事件應變時間。',
    cover: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    tags: ['SRMAS', '雲端監控'],
    body: 'SRMAS 系統資源監控暨告警系統推出雲端資源異常告警模組，可即時偵測雲端主機 CPU、記憶體與網路流量的異常波動。\n\n結合可調校的告警規則引擎，協助維運團隊降低誤報干擾，將人力聚焦在真正需要處理的異常事件上。',
    seoTitle: '', seoDesc: '', status: 'published',
    createdAt: '2026-02-18T10:00', updatedAt: '2026-02-20T09:00',
  },
  {
    id: 'n5', slug: 'lucas-forensic-compat',
    title: 'LUCAS 跡證保存系統通過司法鑑識標準相容測試',
    publishAt: '2025-12-09T09:00',
    desc: '完成第三方鑑識工具相容性驗證，確保跡證保存鏈完整可供法遵佐證。',
    cover: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
    tags: ['LUCAS', '法遵鑑識'],
    body: 'LUCAS 跡證保存系統完成與主流第三方司法鑑識工具的相容性驗證測試，確保系統輸出的日誌與跡證資料能無縫銜接既有鑑識流程。\n\n此次驗證強化了跡證保存鏈的完整性與可信度，協助企業在面對法規稽核或司法程序時，能提供具公信力的佐證資料。',
    seoTitle: '', seoDesc: '', status: 'published',
    createdAt: '2025-12-05T10:00', updatedAt: '2025-12-09T09:00',
  },
  {
    id: 'n6', slug: 'raven-iso20000-renewal',
    title: 'uniXecure 資安監控維運中心通過 ISO 20000 續驗',
    publishAt: '2025-10-30T09:00',
    desc: '服務管理制度持續優化，維運 SLA 達成率連續三年超過 99.5%。',
    cover: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    tags: ['RAVEN', '合規認證'],
    body: 'uniXecure 資安監控維運中心通過 ISO 20000 資訊服務管理系統續驗，顯示公司服務管理制度持續優化並穩定運作。\n\n過去三年，維運中心的 SLA 達成率皆維持在 99.5% 以上，展現高可用性與服務穩定度。',
    seoTitle: '', seoDesc: '', status: 'published',
    createdAt: '2025-10-28T10:00', updatedAt: '2025-10-30T09:00',
  },
  {
    id: 'n7', slug: 'raven-heis-joint-webinar-preview',
    title: 'RAVEN × HEIS 聯合技術分享會即將登場(排程發布示範)',
    publishAt: '2026-10-20T10:00',
    desc: '這則新聞的發布時間設定在未來，用來示範「排程發布」功能——時間到之前會顯示「已排程」。',
    cover: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    tags: ['RAVEN', 'HEIS', '活動預告'],
    body: '這是一則示範用的新聞，發布日期設定在未來時間。\n\n在發布時間到達之前，列表會顯示**已排程**狀態;時間一到，系統會自動視為已發布，不需要手動切換。',
    seoTitle: '', seoDesc: '', status: 'published',
    createdAt: '2026-07-28T10:00', updatedAt: '2026-07-28T10:00',
  },
  {
    id: 'n8', slug: 'lucas-next-version-draft',
    title: 'LUCAS 下一版功能預告',
    publishAt: '2026-09-01T09:00',
    desc: '這是一篇草稿示範——內容還在編輯中，不會出現在官網上，直到按下「發布」為止。',
    cover: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    tags: ['LUCAS', '草稿示範'],
    body: '內容尚在撰寫中……',
    seoTitle: '', seoDesc: '', status: 'draft',
    createdAt: '2026-07-29T15:00', updatedAt: '2026-07-29T15:00',
  },
];

function loadNews() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_NEWS));
    return [...SEED_NEWS];
  }
  try { return JSON.parse(raw).map(normalizeNews); } catch (e) { return [...SEED_NEWS]; }
}

/* 舊資料相容:早期版本有獨立的 prods(產品線)欄位,併入 tags */
function normalizeNews(n) {
  if (!n.prods) return n;
  const { prods, ...rest } = n;
  return { ...rest, tags: sortTags([...prods, ...(n.tags || [])]) };
}

function saveNewsList(list) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

function getNewsById(id) {
  return loadNews().find(n => n.id === id) || null;
}

function upsertNews(item) {
  const list = loadNews();
  const now = new Date().toISOString();
  item.updatedAt = now;
  addTagsToPool(item.tags);
  if (item.id) {
    const idx = list.findIndex(n => n.id === item.id);
    if (idx > -1) { list[idx] = item; saveNewsList(list); return item; }
  }
  item.id = 'n' + Date.now();
  item.createdAt = now;
  list.unshift(item);
  saveNewsList(list);
  return item;
}

/* 目前時間,格式與 <input type=datetime-local> 的 value 一致(YYYY-MM-DDTHH:MM) */
function nowLocalInputValue() {
  const d = new Date();
  const p = n => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}T${p(d.getHours())}:${p(d.getMinutes())}`;
}

/* ── 格式化 / 狀態判斷 ─────────────────────────────────── */
function formatDateTime(v) {
  if (!v) return '';
  const [d, t] = v.split('T');
  return d.replaceAll('-', ' / ') + (t ? ' ' + t : '');
}

/* 列表用:日期與時間固定分行顯示,欄位不用跟著最長的那筆撐寬 */
function dateTimeCellHtml(v) {
  if (!v) return '';
  const [d, t] = v.split('T');
  return `${d.replaceAll('-', ' / ')}${t ? `<div class="data-date__time">${t}</div>` : ''}`;
}

function isScheduled(item) {
  if (!item.publishAt) return false;
  return new Date(item.publishAt).getTime() > Date.now();
}

/* 回傳 'draft' | 'scheduled' | 'published' */
function getStatus(item) {
  if (item.status === 'draft') return 'draft';
  if (isScheduled(item)) return 'scheduled';
  return 'published';
}

const STATUS_LABEL = { draft: '草稿', scheduled: '已排程', published: '已發布' };

function slugify(str) {
  return (str || '').toString().trim().toLowerCase()
    .replace(/[^\w一-龥]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/* ── 垃圾桶(軟刪除)────────────────────────────────────
   刪除不會真的從資料裡移除,只標記 trashed;文章還在垃圾桶裡時
   仍會佔用它的 slug(避免還原後撞網址)。永久刪除才會真的清掉,
   清掉之後 slug 就完全釋放,可以重新使用。──────────────── */
function loadActiveNews() { return loadNews().filter(n => !n.trashed); }
function loadTrashedNews() { return loadNews().filter(n => n.trashed); }

function trashNewsById(id) {
  const list = loadNews();
  const idx = list.findIndex(n => n.id === id);
  if (idx === -1) return;
  list[idx].trashed = true;
  list[idx].trashedAt = new Date().toISOString();
  saveNewsList(list);
}

function restoreNewsById(id) {
  const list = loadNews();
  const idx = list.findIndex(n => n.id === id);
  if (idx === -1) return;
  list[idx].trashed = false;
  list[idx].trashedAt = null;
  saveNewsList(list);
}

function purgeNewsById(id) {
  saveNewsList(loadNews().filter(n => n.id !== id));
}

/* 回傳 slug 使用狀態:
   free = 可以使用(不管是全新的,還是曾經被永久刪除過的舊 slug)
   self = 就是這篇文章目前已存的 slug,不算衝突
   live = 被其他「現存」文章使用中
   trash = 被垃圾桶裡的文章佔用中(還沒永久刪除,還原時會需要這個網址)
   兩種衝突都會擋存檔;permanently 刪除過的文章不會留下任何紀錄,可以直接重用。
*/
function checkSlugStatus(slug, excludeId) {
  if (!slug) return { status: 'free' };
  const hit = loadNews().find(n => n.slug === slug);
  if (!hit) return { status: 'free' };
  if (hit.id === excludeId) return { status: 'self' };
  return { status: hit.trashed ? 'trash' : 'live', title: hit.title };
}

/* ── 通用內容資料層工廠(成功案例 / 影音專區共用,新聞中心維持原本寫法不動,
   避免更動已經驗證過的邏輯)。行為與上面新聞中心的資料層一致:load 時自動塞入種子資料、
   軟刪除進垃圾桶、slug 衝突檢查同樣區分 free/self/live/trash。──────────── */
function createContentStore(storageKey, seedData, idPrefix) {
  function load() {
    const raw = localStorage.getItem(storageKey);
    if (!raw) {
      localStorage.setItem(storageKey, JSON.stringify(seedData));
      return [...seedData];
    }
    try { return JSON.parse(raw); } catch (e) { return [...seedData]; }
  }
  function saveList(list) { localStorage.setItem(storageKey, JSON.stringify(list)); }
  function loadActive() { return load().filter(x => !x.trashed); }
  function loadTrashed() { return load().filter(x => x.trashed); }
  function getById(id) { return load().find(x => x.id === id) || null; }

  function upsert(item) {
    const list = load();
    const now = new Date().toISOString();
    item.updatedAt = now;
    if (item.tags) addTagsToPool(item.tags);
    if (item.id) {
      const idx = list.findIndex(x => x.id === item.id);
      if (idx > -1) { list[idx] = item; saveList(list); return item; }
    }
    item.id = idPrefix + Date.now();
    item.createdAt = now;
    list.unshift(item);
    saveList(list);
    return item;
  }

  function trashById(id) {
    const list = load();
    const idx = list.findIndex(x => x.id === id);
    if (idx === -1) return;
    list[idx].trashed = true;
    list[idx].trashedAt = new Date().toISOString();
    saveList(list);
  }
  function restoreById(id) {
    const list = load();
    const idx = list.findIndex(x => x.id === id);
    if (idx === -1) return;
    list[idx].trashed = false;
    list[idx].trashedAt = null;
    saveList(list);
  }
  function purgeById(id) { saveList(load().filter(x => x.id !== id)); }

  function checkSlugStatus(slug, excludeId) {
    if (!slug) return { status: 'free' };
    const hit = load().find(x => x.slug === slug);
    if (!hit) return { status: 'free' };
    if (hit.id === excludeId) return { status: 'self' };
    return { status: hit.trashed ? 'trash' : 'live', title: hit.title };
  }

  return { load, loadActive, loadTrashed, getById, upsert, trashById, restoreById, purgeById, checkSlugStatus };
}

/* ── 成功案例種子資料 ─────────────────────────────────────
   產業別固定選項,跟官網 cases.html 的篩選下拉選單對齊。 */
const CASE_INDUSTRIES = ['一般製造', '科技製造', '零售/流通', '一般服務', '政府/教育', '醫療', '金融', '資訊服務', '其他產業'];

const SEED_CASES = [
  {
    id: 'c1', slug: 'gov-cross-agency-raven',
    title: '某政府機關導入 RAVEN 強化跨部會聯防監控',
    industry: '政府/教育',
    tags: ['RAVEN', '跨機關聯防'],
    publishAt: '2026-05-20T09:00',
    desc: '透過 24 小時資安監控維運，整合跨部會威脅情資，事件平均應變時間縮短逾 60%。',
    cover: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
    body: {
      intro: '面對日益頻繁的跨機關網路攻擊，該政府機關過去仰賴各單位獨立的資安監控機制，事件研判與情資交換缺乏統一窗口，難以在攻擊初期掌握全貌。',
      need: '27 個下屬機關各自建置防護措施，告警規則與通報流程不一致，一旦發生跨機關串連攻擊，資安團隊得耗費大量人力彙整各單位回報資料，往往在釐清全貌時已錯失第一時間應變的黃金時機。',
      solution: 'uniXecure 導入 [RAVEN](raven.html) 風險分析暨視覺化平台，建置跨機關聯防指揮中心，統一彙整各下屬機關的資安事件與威脅情資，並以視覺化儀表板呈現攻擊路徑與影響範圍，讓資安團隊能即時掌握全局。',
      value: '導入後，該機關已完成 27 個下屬機關的連線整合，建立起跨機關威脅情資聯防機制，大幅提升整體資安韌性。',
    },
    solutions: [
      { name: 'RAVEN 資安監控維運中心', url: 'raven.html' },
      { name: 'Claroty OT 資安防護平台', url: '' },
    ],
    ctaText: '', ctaUrl: '', seoTitle: '', seoDesc: '', status: 'published',
    createdAt: '2026-05-15T10:00', updatedAt: '2026-05-20T09:00',
  },
  {
    id: 'c2', slug: 'financial-heis-awareness',
    title: '某金融業者以 HEIS 提升員工資安意識',
    industry: '金融',
    tags: ['HEIS'],
    publishAt: '2026-04-10T09:00',
    desc: '導入行為分析與模擬釣魚演練，員工資安意識識別準確率大幅提升，降低社交工程風險。',
    cover: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    body: {
      intro: '該金融業者過去員工資安意識訓練多為年度單次課程，缺乏持續性的行為監測，難以掌握實際風險缺口。',
      need: '員工面對社交工程與釣魚郵件的辨識能力參差不齊，且無法量化訓練成效，資安主管難以向管理層說明投資效益。',
      solution: 'uniXecure 導入 [HEIS](heis.html) 資安意識人因分析系統，透過模擬釣魚演練與行為訊號分析量化每位員工的風險等級，並提供主管儀表板追蹤全公司訓練成效。',
      value: '導入後員工資安意識識別準確率大幅提升，模擬演練的誤點擊率明顯下降，有效降低社交工程造成的資安風險。',
    },
    solutions: [{ name: 'HEIS 資安意識人因分析系統', url: 'heis.html' }],
    ctaText: '', ctaUrl: '', seoTitle: '', seoDesc: '', status: 'published',
    createdAt: '2026-04-05T10:00', updatedAt: '2026-04-10T09:00',
  },
  {
    id: 'c3', slug: 'manufacturing-srmas-monitoring',
    title: '某製造業大廠以 SRMAS 監控雲端與地端資源',
    industry: '一般製造',
    tags: ['SRMAS'],
    publishAt: '2026-02-25T09:00',
    desc: '整合多雲與地端維運視角，即時告警機制降低系統異常導致的產線中斷風險。',
    cover: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    body: {
      intro: '該製造業大廠橫跨多個雲端平台與地端機房，過去各環境監控系統各自獨立，難以即時掌握整體資源健康狀況。',
      need: '系統異常發生時，維運團隊得分頭查詢不同平台的監控介面，拉長事件應變時間，曾因此造成產線短暫中斷。',
      solution: 'uniXecure 導入 SRMAS 系統資源監控暨告警系統，整合多雲與地端環境的監控視角，建立統一告警規則引擎，即時通知維運團隊異常事件。',
      value: '導入後系統異常平均應變時間明顯縮短，產線因系統問題中斷的次數大幅降低。',
    },
    solutions: [{ name: 'SRMAS 系統資源監控暨告警系統', url: '' }],
    ctaText: '', ctaUrl: '', seoTitle: '', seoDesc: '', status: 'published',
    createdAt: '2026-02-20T10:00', updatedAt: '2026-02-25T09:00',
  },
  {
    id: 'c4', slug: 'financial-lucas-forensic',
    title: '某金融機構以 LUCAS 完善跡證保存鏈',
    industry: '金融',
    tags: ['LUCAS'],
    publishAt: '2025-12-15T09:00',
    desc: '建立符合法遵要求的日誌保存架構，協助內部稽核與法律訴訟佐證需求。',
    cover: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    body: {
      intro: '該金融機構因應法規要求，需要建立可長期保存且不可竄改的日誌與跡證保存機制，供稽核與司法程序使用。',
      need: '既有日誌分散在多套系統，保存格式不一致，內部稽核與外部查核時得花大量時間彙整比對，也難以證明保存鏈完整未經竄改。',
      solution: 'uniXecure 導入 LUCAS 跡證保存系統，統一彙整各系統日誌並建立具公信力的保存鏈，完整記錄每一筆資料的存取與異動軌跡。',
      value: '導入後內部稽核作業時間大幅縮短，也讓該機構在面對法律訴訟時能提供具公信力的佐證資料。',
    },
    solutions: [{ name: 'LUCAS 跡證保存系統', url: '' }],
    ctaText: '', ctaUrl: '', seoTitle: '', seoDesc: '', status: 'published',
    createdAt: '2025-12-10T10:00', updatedAt: '2025-12-15T09:00',
  },
  {
    id: 'c5', slug: 'healthcare-raven-monitoring',
    title: '某醫療機構委託 RAVEN 進行全院資安監控',
    industry: '醫療',
    tags: ['RAVEN'],
    publishAt: '2025-10-08T09:00',
    desc: '因應病歷資料保護法規要求，建置全天候資安監控機制並定期產出合規報告。',
    cover: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
    body: {
      intro: '該醫療機構持有大量病患個資與病歷資料，資安防護等級須符合主管機關法規要求，但內部缺乏 24 小時監控量能。',
      need: '院內資安人力有限，無法全天候監控各項系統告警，一旦下班時間發生異常事件，往往隔天上班才發現，錯失第一時間應變機會。',
      solution: 'uniXecure 委託 [RAVEN](raven.html) 資安監控維運中心提供全天候監控服務，即時偵測異常事件並依嚴重度分級通報，同時定期產出合規報告供院方留存查核。',
      value: '導入後該機構具備全天候資安監控能力，並順利通過主管機關的法規查核。',
    },
    solutions: [{ name: 'RAVEN 資安監控維運中心', url: 'raven.html' }],
    ctaText: '', ctaUrl: '', seoTitle: '', seoDesc: '', status: 'published',
    createdAt: '2025-10-03T10:00', updatedAt: '2025-10-08T09:00',
  },
  {
    id: 'c6', slug: 'government-heis-training',
    title: '某政府機關以 HEIS 執行全員資安教育訓練',
    industry: '政府/教育',
    tags: ['HEIS'],
    publishAt: '2025-08-12T09:00',
    desc: '涵蓋逾千名公務人員的模擬演練與教育訓練，有效提升整體資安意識水準。',
    cover: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    body: {
      intro: '該政府機關每年須依規定辦理全員資安教育訓練，但過去以單次講習為主，難以掌握同仁實際的風險意識水準。',
      need: '逾千名公務人員分屬不同單位與職等，統一辦理實體講習成本高，訓練成效也無法量化，難以向上級機關說明具體改善情形。',
      solution: 'uniXecure 導入 [HEIS](heis.html) 資安意識人因分析系統，以線上模擬釣魚演練搭配情境化教育訓練，並提供主管儀表板彙整全院訓練成效。',
      value: '導入後完成逾千名公務人員的訓練覆蓋，整體資安意識水準明顯提升，也讓機關具備可量化的成效數據供上級查核。',
    },
    solutions: [{ name: 'HEIS 資安意識人因分析系統', url: 'heis.html' }],
    ctaText: '', ctaUrl: '', seoTitle: '', seoDesc: '', status: 'published',
    createdAt: '2025-08-07T10:00', updatedAt: '2025-08-12T09:00',
  },
];

/* ── 極簡 Markdown → HTML(支援粗體、連結、圖片、巢狀列點)── */
/* ── 標籤(新聞 / 成功案例 / 影音專區共用同一套語言)──────────
   還沒有資料庫後端,但共用邏輯先在這裡定案,之後接後端只是換掉存取方式:
   1. PRODUCT_TAGS 是固定的產品代碼,所有模組都能選,順序也一律排最前面(見 sortTags)。
   2. 自訂標籤(非產品代碼)一律寫進同一個 TAG_POOL_KEY,不分模組,新聞中心加的標籤
      成功案例選標籤時馬上看得到,反之亦然。
   3. 「常用標籤」的使用次數統計要橫跨所有模組,不能只看新聞中心自己的資料,
      不然使用者在成功案例常用的標籤在新聞中心編輯頁完全排不到前面,語言就不是真的共用。
      TAG_SOURCES 註冊每個模組的 storage key + 種子資料,之後新增影音專區只要在這裡加一行。 */
const TAG_POOL_KEY = 'ux_admin_tags_v1';

const TAG_SOURCES = [
  { key: STORAGE_KEY, seed: SEED_NEWS },
  { key: 'ux_admin_cases_v1', seed: SEED_CASES },
];

function loadCustomTags() {
  try { return JSON.parse(localStorage.getItem(TAG_POOL_KEY)) || []; } catch (e) { return []; }
}

function addTagsToPool(tags) {
  const set = new Set(loadCustomTags());
  (tags || []).forEach(t => { if (!PRODUCT_TAGS.includes(t)) set.add(t); });
  localStorage.setItem(TAG_POOL_KEY, JSON.stringify([...set]));
}

/* 常用標籤 = 標籤池 + 所有模組(TAG_SOURCES)目前用到的標籤(扣掉產品標籤),依使用次數排序 */
function getCommonTags() {
  const count = new Map();
  TAG_SOURCES.forEach(src => {
    let list = src.seed;
    try { const raw = localStorage.getItem(src.key); if (raw) list = JSON.parse(raw); } catch (e) {}
    (list || []).forEach(item => (item.tags || []).forEach(t => count.set(t, (count.get(t) || 0) + 1)));
  });
  loadCustomTags().forEach(t => { if (!count.has(t)) count.set(t, 0); });
  return [...count.entries()].filter(([t]) => !PRODUCT_TAGS.includes(t)).sort((a, b) => b[1] - a[1]).map(([t]) => t);
}

/* 產品標籤排前面(依 PRODUCT_TAGS 順序),其餘維持原順序 */
function sortTags(tags) {
  const uniq = [...new Set(tags || [])];
  return [...PRODUCT_TAGS.filter(p => uniq.includes(p)), ...uniq.filter(t => !PRODUCT_TAGS.includes(t))];
}

/* 輸入的標籤若和既有標籤只差大小寫,一律用既有寫法(避免 Raven / RAVEN 變兩個) */
function canonicalTag(raw) {
  const t = (raw || '').trim().replace(/^#+/, '').trim();
  if (!t) return '';
  return [...PRODUCT_TAGS, ...getCommonTags()].find(x => x.toLowerCase() === t.toLowerCase()) || t;
}

/* 列表 / 預覽用:最多顯示 max 個,其餘收成 +N */
function tagChipsHtml(tags, max, cls, emptyHtml = '') {
  const list = sortTags(tags);
  if (!list.length) return emptyHtml;
  const shown = list.slice(0, max).map(t => `<span class="${cls}">${escapeHtml(t)}</span>`).join(' ');
  return shown + (list.length > max ? ` <span class="${cls} tag-more">+${list.length - max}</span>` : '');
}

/* 「導入方案」列表欄用:純文字版(不帶 logo),最多顯示 max 個,其餘收成 +N */
function solutionsChipsHtml(solutions, max, cls, emptyHtml = '') {
  const list = solutions || [];
  if (!list.length) return emptyHtml;
  const shown = list.slice(0, max).map(s => `<span class="${cls}">${escapeHtml(s.name)}</span>`).join(' ');
  return shown + (list.length > max ? ` <span class="${cls} tag-more">+${list.length - max}</span>` : '');
}

/* 標籤選擇元件:已選標籤 + 輸入新增 + 可點選的產品 / 常用標籤 */
function createTagPicker(root, initial, onChange) {
  let selected = sortTags(initial);
  root.classList.add('tag-picker');
  root.innerHTML = `
    <div class="tag-picker__box">
      <span class="tag-picker__selected"></span>
      <input class="tag-picker__input" type="text" placeholder="按 Enter 新增" />
    </div>
    <div class="tag-picker__group"><span class="tag-picker__label">產品</span><div class="chip-select" data-group="prod"></div></div>
    <div class="tag-picker__group" data-wrap="common"><span class="tag-picker__label">常用標籤</span><div class="chip-select" data-group="common"></div></div>`;
  const box = root.querySelector('.tag-picker__box');
  const input = root.querySelector('.tag-picker__input');

  const toggleBtn = t => `<button type="button" class="chip-toggle ${selected.includes(t) ? 'is-active' : ''}" data-toggle="${escapeHtml(t)}">${escapeHtml(t)}</button>`;

  function render() {
    root.querySelector('.tag-picker__selected').innerHTML = selected.map(t => `
      <span class="tag-chip ${PRODUCT_TAGS.includes(t) ? 'tag-chip--prod' : ''}">${escapeHtml(t)}<button type="button" data-remove="${escapeHtml(t)}" aria-label="移除 ${escapeHtml(t)}">×</button></span>`).join('');
    root.querySelector('[data-group=prod]').innerHTML = PRODUCT_TAGS.map(toggleBtn).join('');
    const common = getCommonTags().slice(0, 5);
    root.querySelector('[data-group=common]').innerHTML = common.map(toggleBtn).join('');
    root.querySelector('[data-wrap=common]').style.display = common.length ? '' : 'none';
  }
  function change() { render(); onChange && onChange(selected); }
  function add(raw) {
    const t = canonicalTag(raw);
    if (t && !selected.includes(t)) { selected = sortTags([...selected, t]); change(); }
  }

  root.addEventListener('click', e => {
    const tg = e.target.closest('[data-toggle]');
    const rm = e.target.closest('[data-remove]');
    if (tg) {
      const t = tg.dataset.toggle;
      selected = selected.includes(t) ? selected.filter(x => x !== t) : sortTags([...selected, t]);
      change();
    } else if (rm) {
      selected = selected.filter(x => x !== rm.dataset.remove);
      change();
    }
  });
  box.addEventListener('click', () => input.focus());
  input.addEventListener('keydown', e => {
    if (e.isComposing || e.keyCode === 229) return;
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      add(input.value); input.value = '';
    } else if (e.key === 'Backspace' && !input.value && selected.length) {
      selected = selected.slice(0, -1); change();
    }
  });
  input.addEventListener('input', e => {
    if (e.isComposing || !/[,，]/.test(input.value)) return;
    input.value.split(/[,，]/).forEach(add);
    input.value = '';
  });
  input.addEventListener('blur', () => { add(input.value); input.value = ''; });

  render();
  return { getTags: () => selected, addTag: add };
}

/* ── 分頁元件(共用)────────────────────────────────────────
   建立一次,回傳的物件負責記住目前頁碼／每頁筆數(存在 localStorage,依 storageKey 各列表分開記)。
   呼叫端流程:render() 裡呼叫 pagination.paginate(filteredList) 拿到這一頁要顯示的資料,
   畫完列表後呼叫 pagination.renderControls(total, totalPages) 把每頁筆數選單／頁碼畫出來。
   搜尋或篩選條件改變時呼叫 pagination.resetPage(),讓使用者回到第 1 頁。──────────────── */
function createPagination(sizeBoxEl, pagesBoxEl, storageKey, onChange) {
  const SIZE_OPTIONS = [10, 20, 50];
  let pageSize = Number(localStorage.getItem(storageKey)) || 10;
  let currentPage = 1;

  sizeBoxEl.addEventListener('change', e => {
    if (!e.target.matches('select')) return;
    pageSize = Number(e.target.value);
    localStorage.setItem(storageKey, String(pageSize));
    currentPage = 1;
    onChange();
  });
  pagesBoxEl.addEventListener('click', e => {
    const btn = e.target.closest('button[data-page]');
    if (!btn || btn.disabled) return;
    currentPage = Number(btn.dataset.page);
    onChange();
  });

  return {
    resetPage() { currentPage = 1; },
    paginate(list) {
      const totalPages = Math.max(1, Math.ceil(list.length / pageSize));
      if (currentPage > totalPages) currentPage = totalPages;
      return {
        pageList: list.slice((currentPage - 1) * pageSize, currentPage * pageSize),
        total: list.length,
        totalPages,
      };
    },
    renderControls(total, totalPages) {
      sizeBoxEl.innerHTML = `<label class="pagination__size">每頁顯示
        <select>${SIZE_OPTIONS.map(n => `<option value="${n}" ${n === pageSize ? 'selected' : ''}>${n}</option>`).join('')}</select>
        筆，共 ${total} 筆</label>`;
      if (totalPages <= 1) { pagesBoxEl.innerHTML = ''; return; }
      pagesBoxEl.innerHTML = `
        <button type="button" class="btn btn-sm" data-page="${currentPage - 1}" ${currentPage === 1 ? 'disabled' : ''}>上一頁</button>
        ${Array.from({ length: totalPages }, (_, i) => i + 1).map(p => `<button type="button" class="btn btn-sm ${p === currentPage ? 'btn-primary' : ''}" data-page="${p}">${p}</button>`).join('')}
        <button type="button" class="btn btn-sm" data-page="${currentPage + 1}" ${currentPage === totalPages ? 'disabled' : ''}>下一頁</button>`;
    },
  };
}

/* ── 表頭篩選元件(共用):狀態、標籤這類「依值篩選欄位」都能用 ──────────
   建立一次;組表頭 HTML 時呼叫 filter.headerCell(key, 顯示文字, 面板標題, 取得選項的函式, 目前已選的 Set)
   換到那顆篩選鈕(選項函式延遲呼叫,每次開面板才重算,標籤這種會變動的清單才會即時)。
   render() 尾端呼叫 filter.syncPanel(),讓面板內容跟著資料同步(不會自己重新定位)。
   面板浮在 body 上、fixed 定位,不受表格橫向捲動裁切。──────────────────────────── */
function createHeaderFilter(panelEl, tableWrapEl, onChange) {
  const columns = {};
  let openKey = null;

  function renderPanel() {
    if (!openKey) { panelEl.hidden = true; return; }
    const col = columns[openKey];
    const opts = col.getOptions();
    panelEl.innerHTML = `
      <div class="th-filter__head">${escapeHtml(col.title)}${col.selected.size ? `<button type="button" class="th-filter__clear" data-clear>清除</button>` : ''}</div>
      <div class="th-filter__list">${opts.map(o => `<label class="col-toggle__item"><input type="checkbox" data-value="${escapeHtml(o.value)}" ${col.selected.has(o.value) ? 'checked' : ''} /> ${escapeHtml(o.label)}</label>`).join('')}</div>`;
    panelEl.hidden = false;
  }

  tableWrapEl.addEventListener('click', e => {
    const btn = e.target.closest('.th-filter__btn');
    if (!btn) return;
    const key = btn.dataset.filterKey;
    if (openKey === key) { openKey = null; renderPanel(); return; }
    openKey = key;
    renderPanel();
    const r = btn.getBoundingClientRect();
    panelEl.style.top = (r.bottom + window.scrollY + 6) + 'px';
    panelEl.style.left = Math.max(8, r.right + window.scrollX - 200) + 'px';
  });

  panelEl.addEventListener('click', e => {
    if (!openKey) return;
    const cb = e.target.closest('input[type=checkbox]');
    if (cb) {
      const sel = columns[openKey].selected;
      const v = cb.dataset.value;
      sel.has(v) ? sel.delete(v) : sel.add(v);
      renderPanel();
      onChange();
      return;
    }
    if (e.target.closest('[data-clear]')) {
      columns[openKey].selected.clear();
      renderPanel();
      onChange();
    }
  });

  document.addEventListener('click', e => {
    if (!openKey) return;
    if (e.target.closest('.th-filter__panel') || e.target.closest('.th-filter__btn')) return;
    openKey = null;
    panelEl.hidden = true;
  });

  return {
    headerCell(key, label, title, getOptions, selected) {
      columns[key] = { title, getOptions, selected };
      return `<div class="th-filter-wrap">
        <span>${escapeHtml(label)}</span>
        <button type="button" class="th-filter__btn ${selected.size ? 'is-active' : ''}" data-filter-key="${key}"><i class="fa-solid fa-filter"></i></button>
      </div>`;
    },
    syncPanel: renderPanel,
  };
}

/* ── 列表欄位顯示設定(封面 / 標籤 / 狀態等可勾選顯示,locked 欄位一律顯示)
   共用元件,之後成功案例、影音專區列表可直接套用,只要換 storageKey 和 columns。
   設定存在 localStorage,尚未設定過時預設全部顯示。──────────────────── */
function createColumnToggle(root, storageKey, columns, onChange) {
  function loadVisible() {
    const raw = localStorage.getItem(storageKey);
    let saved = null;
    if (raw !== null) { try { saved = JSON.parse(raw); } catch (e) {} }
    if (!Array.isArray(saved)) return columns.map(() => true);
    return columns.map(c => c.locked || saved.includes(c.key));
  }
  let visible = loadVisible();

  function visibleKeys() { return columns.filter((c, i) => visible[i]).map(c => c.key); }
  function persist() { localStorage.setItem(storageKey, JSON.stringify(visibleKeys())); }

  root.classList.add('col-toggle');
  root.innerHTML = `
    <button type="button" class="btn" id="colToggleBtn">顯示欄位 <i class="fa-solid fa-chevron-down" style="font-size:10px"></i></button>
    <div class="col-toggle__panel" id="colTogglePanel" hidden>
      ${columns.map((c, i) => `
        <label class="col-toggle__item ${c.locked ? 'is-locked' : ''}">
          <input type="checkbox" data-i="${i}" ${visible[i] ? 'checked' : ''} ${c.locked ? 'disabled' : ''} />
          ${escapeHtml(c.label)}
        </label>`).join('')}
    </div>`;

  const btn = root.querySelector('#colToggleBtn');
  const panel = root.querySelector('#colTogglePanel');
  btn.addEventListener('click', e => { e.stopPropagation(); panel.hidden = !panel.hidden; });
  document.addEventListener('click', e => { if (!root.contains(e.target)) panel.hidden = true; });
  panel.querySelectorAll('input').forEach(input => {
    input.addEventListener('change', () => {
      visible[Number(input.dataset.i)] = input.checked;
      persist();
      onChange(visibleKeys());
    });
  });

  onChange(visibleKeys());
}

function escapeHtml(s) {
  return (s || '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function mdInline(text) {
  let t = escapeHtml(text);
  t = t.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" class="mock-article__img" />');
  t = t.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  t = t.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  return t;
}

function mdRenderList(items) {
  let html = '';
  const stack = [];
  items.forEach(({ indent, text }) => {
    if (!stack.length) {
      stack.push(indent);
      html += `<ul><li>${mdInline(text)}`;
    } else {
      const top = stack[stack.length - 1];
      if (indent === top) {
        html += `</li><li>${mdInline(text)}`;
      } else if (indent > top) {
        stack.push(indent);
        html += `<ul><li>${mdInline(text)}`;
      } else {
        while (stack.length && stack[stack.length - 1] > indent) {
          html += '</li></ul>';
          stack.pop();
        }
        if (stack.length && stack[stack.length - 1] === indent) {
          html += `</li><li>${mdInline(text)}`;
        } else {
          stack.push(indent);
          html += `<ul><li>${mdInline(text)}`;
        }
      }
    }
  });
  while (stack.length) { html += '</li></ul>'; stack.pop(); }
  return html;
}

function mdToHtml(md) {
  const lines = (md || '').replace(/\r\n/g, '\n').split('\n');
  let html = '';
  let i = 0;
  let para = [];
  const flushPara = () => {
    if (para.length) { html += `<p>${mdInline(para.join(' '))}</p>`; para = []; }
  };
  while (i < lines.length) {
    const m = lines[i].match(/^(\s*)-\s+(.*)$/);
    if (m) {
      flushPara();
      const items = [];
      while (i < lines.length) {
        const mm = lines[i].match(/^(\s*)-\s+(.*)$/);
        if (!mm) break;
        items.push({ indent: Math.floor(mm[1].length / 2), text: mm[2] });
        i++;
      }
      html += mdRenderList(items);
      continue;
    }
    if (lines[i].trim() === '') { flushPara(); i++; continue; }
    para.push(lines[i].trim());
    i++;
  }
  flushPara();
  return html || '<p style="color:var(--ink-4)">(尚未輸入內文)</p>';
}

/* ── Markdown 工具列:操作 textarea 的小工具 ──────────────── */
function mdInsertAtCursor(textarea, before, after, placeholder) {
  const start = textarea.selectionStart, end = textarea.selectionEnd;
  const val = textarea.value;
  const selected = val.slice(start, end) || placeholder;
  textarea.value = val.slice(0, start) + before + selected + after + val.slice(end);
  const pos = start + before.length + selected.length + after.length;
  textarea.focus();
  textarea.setSelectionRange(pos, pos);
  textarea.dispatchEvent(new Event('input', { bubbles: true }));
}

function mdPrefixLines(textarea, prefixFn) {
  const start = textarea.selectionStart, end = textarea.selectionEnd;
  const val = textarea.value;
  const lineStart = val.lastIndexOf('\n', start - 1) + 1;
  let lineEnd = val.indexOf('\n', end);
  if (lineEnd === -1) lineEnd = val.length;
  const block = val.slice(lineStart, lineEnd);
  const newBlock = block.split('\n').map(prefixFn).join('\n');
  textarea.value = val.slice(0, lineStart) + newBlock + val.slice(lineEnd);
  textarea.focus();
  textarea.setSelectionRange(lineStart, lineStart + newBlock.length);
  textarea.dispatchEvent(new Event('input', { bubbles: true }));
}


/* ── 產品 Logo Sprite(跟官網 site-chrome.js 用同一份 SVG symbol 定義,後台預覽卡片顯示真實產品 logo 用)──
   官網之後若更新 logo 圖案,這裡要手動同步。 */
(function () {
  if (document.getElementById('uxLogoSprite')) return;
  const wrap = document.createElement('div');
  wrap.innerHTML = `<svg id="uxLogoSprite" class="logo-sprite" width="0" height="0" aria-hidden="true" focusable="false" style="position:absolute;width:0;height:0;overflow:hidden">
    <symbol id="lg-raven" viewBox="0 0 1770 500"><g>
    <path fill="#E2231A" d="M397.76,314.89l26.48-45.85c.59-1.03.59-2.29,0-3.31l-26.46-45.86c-1.28-2.21-4.46-2.21-5.74,0l-26.48,45.85c-.59,1.03-.59,2.29,0,3.31l26.46,45.86c1.28,2.21,4.46,2.21,5.74,0Z"></path>
    <path fill="#E2231A" d="M474.75,314.89l26.48-45.85c.59-1.03.59-2.29,0-3.31l-26.46-45.86c-1.28-2.21-4.46-2.21-5.74,0l-26.48,45.85c-.59,1.03-.59,2.29,0,3.31l26.46,45.86c1.28,2.21,4.46,2.21,5.74,0Z"></path>
    <path fill="#E2231A" d="M436.52,382.33l26.48-45.85c.59-1.03.59-2.29,0-3.31l-26.46-45.86c-1.28-2.21-4.46-2.21-5.74,0l-26.48,45.85c-.59,1.03-.59,2.29,0,3.31l26.46,45.86c1.28,2.21,4.46,2.21,5.74,0h0Z"></path>
    <path fill="#E2231A" d="M436.52,247.45l26.48-45.85c.59-1.03.59-2.29,0-3.31l-26.46-45.86c-1.28-2.21-4.46-2.21-5.74,0l-26.48,45.85c-.59,1.03-.59,2.29,0,3.31l26.46,45.86c1.28,2.21,4.46,2.21,5.74,0Z"></path>
    <path fill="currentColor" d="M234.67,156.1c-.07-1.31.67-2.54,1.87-3.09,50.8-23.09,109.56-36.31,172.11-36.31,36.89,0,72.43,4.62,105.82,13.13,1.91.49,3.79-.86,3.92-2.82.09-1.36.18-2.73.25-4.1.07-1.31-.67-2.53-1.86-3.08-50.8-23.1-109.52-36.31-172.08-36.31s-121.32,13.21-172.11,36.3c-1.2.54-1.94,1.78-1.87,3.09,6.61,125.11,74.16,233.32,172.31,293.07,1.02.62,2.31.62,3.33,0,1.76-1.07,3.5-2.16,5.24-3.27s1.94-3.57.41-4.97c-67.76-62.3-112.07-151.56-117.35-251.65h.01Z"></path>
  </g>
  <g>
    <path fill="currentColor" d="M630.49,334.76h-45.73v-169.38h114.64c12.33,0,22.79,1.27,31.38,3.81,8.59,2.55,15.57,6.16,20.95,10.86,5.38,4.68,9.29,10.33,11.71,16.94,2.42,6.62,3.63,14,3.63,22.14,0,7.14-1.01,13.4-3.02,18.74-2.01,5.34-4.73,9.92-8.14,13.74-3.41,3.82-7.37,7.04-11.89,9.67s-9.29,4.82-14.3,6.53l55.47,66.94h-53.5l-51.28-62.37h-49.93v62.37h0ZM720.85,218.88c0-3.29-.43-6.09-1.29-8.38-.86-2.31-2.36-4.18-4.5-5.62s-4.99-2.49-8.57-3.14c-3.57-.66-8.03-.98-13.38-.98h-62.63v36.24h62.63c5.34,0,9.8-.32,13.38-.98,3.58-.66,6.43-1.71,8.57-3.14,2.13-1.44,3.63-3.31,4.5-5.61.86-2.31,1.29-5.09,1.29-8.38h0Z"></path>
    <path fill="currentColor" d="M938.94,302.7h-94.43l-15.9,32.06h-51.04l88.64-169.38h51.04l88.64,169.38h-51.03l-15.91-32.06h-.01ZM860.91,269.66h61.89l-30.82-62.37-31.07,62.37Z"></path>
    <path fill="currentColor" d="M1101.47,334.76h-53.25l-85.68-169.38h51.04l61.64,127.47,61.52-127.47h51.03l-86.29,169.38h-.01Z"></path>
    <path fill="currentColor" d="M1199.37,334.76v-169.38h171.48v36.11h-124.51v27.99h118.1v36.11h-118.1v33.04h126.24v36.13h-173.21Z"></path>
    <path fill="currentColor" d="M1551.47,334.76l-114.28-116.38v116.38h-45.73v-169.38h49.68l114.4,116.86v-116.86h45.49v169.38h-49.56Z"></path>
  </g></symbol>
    <symbol id="lg-heis" viewBox="0 0 1770 500"><g>
    <path fill="currentColor" d="M857.64,334.44v-70.53h-116.2v70.53h-45.67v-169.13h45.67v61.55h116.2v-61.55h45.67v169.13h-45.67Z"></path>
    <path fill="currentColor" d="M968.84,334.44v-169.13h171.23v36.07h-124.33v27.94h117.92v36.07h-117.92v32.99h126.05v36.07h-172.95Z"></path>
    <path fill="currentColor" d="M1198.46,334.44v-169.13h45.67v169.13h-45.67Z"></path>
    <path fill="currentColor" d="M1473.89,214.74c-3.28-1.48-24.47-8.69-31.28-10.37-6.81-1.68-14.21-3.08-22.2-4.22-7.99-1.13-16.19-1.7-24.59-1.7-6.73,0-12.46.2-17.22.59-4.75.39-8.74.9-11.98,1.52-3.24.62-5.8,1.35-7.69,2.17-1.89.82-3.34,1.66-4.35,2.52-1.01.86-1.66,1.72-1.95,2.58s-.44,1.64-.44,2.34c0,2.34,1.26,4.39,3.78,6.15,2.52,1.76,5.97,3.32,10.34,4.69,4.37,1.37,9.46,2.66,15.26,3.87,5.8,1.21,11.96,2.46,18.48,3.75,6.52,1.29,13.24,2.69,20.18,4.22,6.94,1.52,13.66,3.3,20.18,5.33,6.52,2.03,12.68,4.39,18.48,7.09,5.8,2.69,10.89,5.84,15.26,9.43s7.82,7.73,10.34,12.42c2.52,4.69,3.78,10.03,3.78,16.05,0,7.73-1.47,14.37-4.41,19.91-2.94,5.54-6.87,10.23-11.79,14.06-4.92,3.83-10.62,6.89-17.09,9.2-6.47,2.3-13.26,4.08-20.37,5.33-7.1,1.25-14.29,2.07-21.57,2.46-7.27.39-14.19.59-20.75.59-17.15,0-33.02-1.31-47.61-3.92-14.59-2.62-27.47-5.88-38.66-9.78v-38.42c11.52,5.94,24.66,10.58,39.41,13.94,14.76,3.36,30.54,5.04,47.36,5.04,9.92,0,18.01-.49,24.28-1.46s11.16-2.23,14.69-3.75c3.53-1.52,5.93-3.18,7.19-4.98,1.26-1.8,1.89-3.51,1.89-5.15,0-2.58-1.26-4.82-3.78-6.74s-5.97-3.59-10.34-5.04c-4.37-1.44-9.46-2.77-15.26-3.98-5.8-1.21-11.96-2.42-18.48-3.63-6.52-1.21-13.22-2.52-20.12-3.92-6.89-1.41-13.6-3.07-20.12-4.98-6.52-1.91-12.68-4.14-18.48-6.68-5.8-2.54-10.89-5.54-15.26-9.02-4.37-3.48-7.82-7.5-10.34-12.07-2.52-4.57-3.78-9.86-3.78-15.87,0-7.11,1.35-13.24,4.04-18.39,2.69-5.15,6.33-9.55,10.91-13.18,4.58-3.63,9.88-6.58,15.89-8.84,6.01-2.26,12.34-4.02,18.98-5.27,6.64-1.25,13.37-2.11,20.18-2.58,6.81-.47,13.28-.7,19.42-.7,6.73,0,13.64.31,20.75.94,7.1.62,14.1,1.5,21,2.64,6.89,1.13,13.56,2.44,19.99,3.92,6.43,1.48,12.38,3.05,17.85,4.69v37.25Z"></path>
  </g>
  <g>
    <path fill="currentColor" d="M345.84,155.87c-.07-1.31.68-2.55,1.87-3.09,50.92-23.15,109.83-36.4,172.54-36.4,36.98,0,72.62,4.63,106.08,13.17,1.91.49,3.8-.86,3.93-2.83.09-1.37.18-2.74.25-4.11.07-1.31-.67-2.54-1.87-3.08-50.92-23.15-109.79-36.4-172.51-36.4s-121.62,13.24-172.54,36.4c-1.2.54-1.94,1.78-1.88,3.1,6.62,125.42,74.35,233.91,172.74,293.8,1.02.62,2.32.62,3.34,0,1.76-1.08,3.51-2.17,5.25-3.28,1.75-1.11,1.94-3.58.41-4.99-67.93-62.45-112.35-151.94-117.65-252.28Z"></path>
    <path fill="#E2231A" d="M613.08,265.76l-26.54-45.98c-1.28-2.21-4.47-2.22-5.75-.01l-33.06,56.82c-1.29,2.21-4.48,2.2-5.75-.02l-32.62-56.76c-1.28-2.22-4.48-2.22-5.76,0l-26.55,45.95c-.59,1.03-.59,2.29,0,3.32l37.9,65.95h0s1.35,2.34,1.35,2.34l.02.03h0l26.12,45.27c1.28,2.22,4.48,2.22,5.76,0l27.51-47.62-.5-.86,37.86-65.08c.6-1.03.6-2.3,0-3.33Z"></path>
    <path fill="#E2231A" d="M548.21,221.15l18.95-32.81c.59-1.03.59-2.29,0-3.32l-18.95-32.81c-1.28-2.22-4.48-2.22-5.76,0l-18.95,32.81c-.59,1.03-.59,2.29,0,3.32l18.95,32.81c1.28,2.22,4.48,2.22,5.76,0Z"></path>
  </g></symbol>
    <symbol id="lg-srmas" viewBox="0 0 1770 500"><g>
    <path fill="currentColor" d="M233.08,155.87c-.07-1.31.68-2.55,1.87-3.09,50.92-23.15,109.83-36.4,172.54-36.4,36.98,0,72.62,4.63,106.08,13.17,1.91.49,3.8-.86,3.93-2.83.09-1.37.18-2.74.25-4.11.07-1.31-.67-2.54-1.87-3.08-50.92-23.15-109.79-36.4-172.51-36.4s-121.62,13.24-172.54,36.4c-1.2.54-1.94,1.78-1.88,3.1,6.62,125.42,74.35,233.91,172.74,293.8,1.02.62,2.32.62,3.34,0,1.76-1.08,3.51-2.17,5.25-3.28s1.94-3.58.41-4.99c-67.93-62.45-112.35-151.94-117.65-252.28Z"></path>
    <path fill="#E2231A" d="M388.99,301.9l18.95-32.81c.59-1.03.59-2.29,0-3.32l-18.95-32.81c-1.28-2.22-4.48-2.22-5.76,0l-18.95,32.81c-.59,1.03-.59,2.29,0,3.32l18.95,32.81c1.28,2.22,4.48,2.22,5.76,0Z"></path>
    <path fill="#E2231A" d="M481.38,301.9l18.95-32.81c.59-1.03.59-2.29,0-3.32l-18.95-32.81c-1.28-2.22-4.48-2.22-5.76,0l-18.95,32.81c-.59,1.03-.59,2.29,0,3.32l18.95,32.81c1.28,2.22,4.48,2.22,5.76,0Z"></path>
    <path fill="#E2231A" d="M435.18,316.44l26.55-45.96c.59-1.03.59-2.29,0-3.32l-26.53-45.97c-1.28-2.22-4.48-2.22-5.76,0l-26.55,45.96c-.59,1.03-.59,2.29,0,3.32l26.53,45.97c1.28,2.22,4.48,2.22,5.76,0Z"></path>
  </g>
  <g>
    <path fill="currentColor" d="M822.59,334.69h-43.52v-169.13h109.1c11.73,0,21.68,1.27,29.85,3.82,8.17,2.54,14.82,6.15,19.94,10.83,5.12,4.68,8.84,10.32,11.14,16.93,2.31,6.61,3.46,13.97,3.46,22.1,0,7.14-.96,13.38-2.87,18.71-1.92,5.33-4.5,9.91-7.74,13.73-3.25,3.82-7.02,7.04-11.32,9.66-4.3,2.63-8.84,4.8-13.61,6.52l52.79,66.84h-50.91l-48.8-62.29h-47.51v62.29ZM908.57,218.98c0-3.28-.41-6.07-1.23-8.37-.82-2.3-2.25-4.16-4.28-5.6-2.03-1.44-4.75-2.48-8.15-3.14-3.4-.66-7.64-.98-12.73-.98h-59.59v36.19h59.59c5.08,0,9.33-.33,12.73-.98,3.4-.66,6.12-1.7,8.15-3.14,2.03-1.44,3.46-3.3,4.28-5.6.82-2.3,1.23-5.09,1.23-8.37Z"></path>
    <path fill="currentColor" d="M1166.69,334.69v-118.79l-57.48,118.79h-40.12l-57.48-118.79v118.79h-41.81v-169.13h56.8l62.55,128.02,62.55-128.02h56.57v169.13h-41.59Z"></path>
    <path fill="currentColor" d="M1355.95,302.44h-86.41l-14.55,32h-46.7l81.11-169.13h46.7l81.11,169.13h-46.7l-14.55-32ZM1284.54,269.45h56.63l-28.2-62.29-28.43,62.29Z"></path>
    <path fill="currentColor" d="M754.68,214.36c-3.3-1.46-7.65-3.12-13.06-4.97-5.41-1.85-11.54-3.6-18.39-5.26-6.85-1.65-14.29-3.04-22.32-4.16-8.03-1.11-16.28-1.67-24.73-1.67-6.76,0-12.54.19-17.31.57-4.78.4-8.8.89-12.05,1.51-3.26.62-5.84,1.33-7.74,2.14-1.9.81-3.36,1.64-4.38,2.48-1.01.85-1.67,1.7-1.97,2.55s-.44,1.62-.44,2.32c0,2.31,1.27,4.33,3.81,6.06s6,3.28,10.4,4.62c4.4,1.35,9.51,2.62,15.34,3.81,5.83,1.19,12.03,2.43,18.58,3.7,6.55,1.27,13.31,2.66,20.29,4.16,6.98,1.5,13.74,3.25,20.29,5.26,6.55,2,12.74,4.34,18.57,6.99,5.84,2.66,10.95,5.76,15.34,9.31,4.4,3.55,7.86,7.63,10.4,12.25,2.54,4.62,3.8,9.91,3.8,15.84,0,7.63-1.48,14.18-4.44,19.65-2.96,5.48-6.91,10.1-11.86,13.88-4.94,3.78-10.67,6.8-17.18,9.07-6.51,2.27-13.34,4.02-20.48,5.26-7.14,1.23-14.37,2.04-21.68,2.44-7.31.38-14.26.57-20.86.57-17.24,0-33.2-1.29-47.87-3.87-14.67-2.58-27.63-5.8-38.87-9.65v-37.92c11.58,5.85,24.79,10.44,39.63,13.76,14.84,3.31,30.71,4.96,47.62,4.96,9.97,0,18.11-.48,24.41-1.44,6.3-.96,11.22-2.2,14.77-3.69,3.55-1.51,5.96-3.14,7.23-4.92,1.27-1.77,1.91-3.46,1.91-5.08,0-2.55-1.27-4.76-3.81-6.65-2.54-1.88-6-3.54-10.4-4.97-4.4-1.42-9.51-2.73-15.34-3.92-5.84-1.19-12.03-2.39-18.58-3.58-6.55-1.19-13.3-2.49-20.23-3.88-6.94-1.39-13.67-3.02-20.23-4.91-6.55-1.89-12.74-4.09-18.58-6.59-5.83-2.51-10.95-5.48-15.34-8.9s-7.86-7.4-10.4-11.91c-2.54-4.5-3.81-9.72-3.81-15.66,0-7.01,1.35-13.07,4.06-18.15,2.71-5.09,6.36-9.42,10.97-13,4.61-3.58,9.93-6.5,15.98-8.73,6.04-2.23,12.4-3.97,19.08-5.2,6.68-1.23,13.44-2.09,20.29-2.55,6.84-.46,13.35-.69,19.53-.69,6.76,0,13.71.3,20.86.92,7.14.62,14.18,1.49,21.11,2.6,6.93,1.12,13.63,2.42,20.1,3.88,6.47,1.46,12.45,3,17.94,4.62v36.76Z"></path>
    <path fill="currentColor" d="M1586.57,214.36c-3.3-1.46-7.65-3.12-13.06-4.97-5.41-1.85-11.54-3.6-18.39-5.26-6.85-1.65-14.29-3.04-22.32-4.16-8.03-1.11-16.28-1.67-24.73-1.67-6.76,0-12.54.19-17.31.57-4.78.4-8.8.89-12.05,1.51-3.26.62-5.84,1.33-7.74,2.14-1.9.81-3.36,1.64-4.38,2.48-1.01.85-1.67,1.7-1.97,2.55s-.44,1.62-.44,2.32c0,2.31,1.27,4.33,3.81,6.06s6,3.28,10.4,4.62c4.4,1.35,9.51,2.62,15.34,3.81s12.03,2.43,18.58,3.7c6.55,1.27,13.31,2.66,20.29,4.16,6.98,1.5,13.74,3.25,20.29,5.26,6.55,2,12.74,4.34,18.57,6.99,5.84,2.66,10.95,5.76,15.34,9.31,4.4,3.55,7.86,7.63,10.4,12.25,2.54,4.62,3.8,9.91,3.8,15.84,0,7.63-1.48,14.18-4.44,19.65-2.96,5.48-6.91,10.1-11.86,13.88-4.94,3.78-10.67,6.8-17.18,9.07-6.51,2.27-13.34,4.02-20.48,5.26-7.14,1.23-14.37,2.04-21.68,2.44-7.31.38-14.26.57-20.86.57-17.24,0-33.2-1.29-47.87-3.87s-27.63-5.8-38.87-9.65v-37.92c11.58,5.85,24.79,10.44,39.63,13.76,14.84,3.31,30.71,4.96,47.62,4.96,9.97,0,18.11-.48,24.41-1.44,6.3-.96,11.22-2.2,14.77-3.69,3.55-1.51,5.96-3.14,7.23-4.92,1.27-1.77,1.91-3.46,1.91-5.08,0-2.55-1.27-4.76-3.81-6.65-2.54-1.88-6-3.54-10.4-4.97-4.4-1.42-9.51-2.73-15.34-3.92-5.84-1.19-12.03-2.39-18.58-3.58-6.55-1.19-13.3-2.49-20.23-3.88-6.94-1.39-13.67-3.02-20.23-4.91-6.55-1.89-12.74-4.09-18.58-6.59-5.83-2.51-10.48-5.48-14.69-8.9-4.4-3.43-7.86-7.4-10.4-11.91-2.54-4.5-3.81-9.72-3.81-15.66,0-7.01,1.35-13.07,4.06-18.15,2.71-5.09,6.36-9.42,10.97-13,4.61-3.58,9.93-6.5,15.98-8.73,6.04-2.23,12.4-3.97,19.08-5.2,6.68-1.23,13.44-2.09,20.29-2.55,6.84-.46,13.35-.69,19.53-.69,6.76,0,13.71.3,20.86.92,7.14.62,14.18,1.49,21.11,2.6,6.93,1.12,13.63,2.42,20.1,3.88,6.47,1.46,12.45,3,17.94,4.62v36.76Z"></path>
  </g></symbol>
    <symbol id="lg-lucas" viewBox="0 0 1770 500"><g>
    <path fill="currentColor" d="M234.51,156.34c-.07-1.31.67-2.54,1.86-3.08,50.67-23.04,109.28-36.22,171.68-36.22,36.8,0,72.25,4.61,105.55,13.1,1.9.49,3.78-.85,3.91-2.81.09-1.36.18-2.72.25-4.09.07-1.3-.67-2.53-1.86-3.07-50.67-23.04-109.24-36.22-171.65-36.22s-121.01,13.18-171.68,36.21c-1.19.54-1.93,1.77-1.87,3.08,6.59,124.8,73.97,232.74,171.88,292.33,1.02.62,2.31.62,3.33,0,1.75-1.07,3.49-2.16,5.23-3.26,1.74-1.11,1.93-3.56.41-4.96-67.59-62.14-111.79-151.18-117.06-251.02Z"></path>
    <path fill="#E2231A" d="M473.99,314.73l26.42-45.73c.59-1.02.59-2.28,0-3.31l-26.4-45.74c-1.27-2.2-4.45-2.21-5.73,0l-26.42,45.73c-.59,1.02-.59,2.28,0,3.31l26.4,45.74c1.27,2.2,4.45,2.21,5.73,0Z"></path>
    <path fill="#E2231A" d="M426.01,265.68l36.53-63.65c.58-1.02.58-2.27,0-3.29l-26.4-46.05c-1.27-2.22-4.46-2.22-5.74,0l-64.84,112.98c-.58,1.02-.58,2.27,0,3.29l64.79,113.01c1.27,2.22,4.46,2.22,5.74,0l26.43-46.05c.58-1.02.58-2.27,0-3.29l-36.5-63.68c-.58-1.02-.58-2.27,0-3.29Z"></path>
  </g>
  <g>
    <path fill="currentColor" d="M583.72,334.76v-169.38h45.11v132.28h121.95v37.1h-167.05Z"></path>
    <path fill="currentColor" d="M951.47,297.39c-4.01,7.19-10.03,13.47-18.05,18.83-8.01,5.38-18.02,9.61-30.01,12.74-11.99,3.12-26,4.67-42.04,4.67s-30.09-1.55-42.16-4.67c-12.07-3.13-22.11-7.36-30.13-12.74-8.02-5.37-14.03-11.65-18.04-18.83-4.01-7.19-6.01-14.84-6.01-22.98v-107.92h43.63v92.17c0,5.44.69,10.6,2.07,15.45,1.37,4.86,3.97,9.11,7.78,12.74,3.81,3.63,9.16,6.51,16.04,8.64,6.88,2.13,15.82,3.2,26.82,3.2s19.81-1.07,26.65-3.2c6.84-2.14,12.16-5.02,15.98-8.64,3.82-3.64,6.39-7.88,7.72-12.74,1.34-4.85,2.01-10.01,2.01-15.45v-92.17h43.75v107.92c0,8.14-2.01,15.79-6.01,22.98Z"></path>
    <path fill="currentColor" d="M1152.18,325.74c-5.74,1.87-11.67,3.49-17.81,4.86-6.13,1.36-12.6,2.4-19.4,3.1-6.8.71-14.09,1.05-21.87,1.05-16.51,0-31.7-1.75-45.57-5.27-13.87-3.51-25.82-8.8-35.84-15.87-10.03-7.07-17.82-15.9-23.41-26.47-5.58-10.58-8.37-22.94-8.37-37.07s2.79-26.49,8.37-37.08c5.58-10.58,13.38-19.41,23.41-26.47,10.02-7.07,21.97-12.36,35.84-15.87,13.87-3.52,29.07-5.27,45.57-5.27,7.78,0,15.07.34,21.87,1.05,6.8.7,13.26,1.74,19.4,3.1,6.13,1.37,12.06,2.99,17.81,4.86,5.74,1.88,11.44,3.99,17.1,6.33v39.12c-4.48-2.42-9.2-4.82-14.15-7.21-4.95-2.37-10.41-4.53-16.39-6.43-5.97-1.92-12.54-3.48-19.69-4.69-7.16-1.21-15.21-1.82-24.17-1.82-13.76,0-25.17,1.41-34.25,4.22-9.08,2.81-16.33,6.57-21.76,11.25-5.42,4.68-9.24,10.06-11.44,16.11-2.2,6.05-3.3,12.32-3.3,18.8,0,4.29.47,8.53,1.42,12.7.94,4.18,2.52,8.13,4.71,11.84,2.2,3.71,5.07,7.12,8.61,10.25,3.54,3.12,7.94,5.81,13.21,8.08,5.26,2.26,11.42,4.04,18.45,5.33,7.03,1.29,15.15,1.94,24.35,1.94s17.02-.57,24.17-1.7c7.15-1.13,13.72-2.64,19.69-4.51,5.98-1.87,11.44-4,16.39-6.39,4.95-2.37,9.67-4.81,14.15-7.32v39.13c-5.66,2.34-11.36,4.45-17.1,6.32Z"></path>
    <path fill="currentColor" d="M1346.32,302.7h-99.15l-16.7,32.05h-53.58l93.07-169.38h53.58l93.07,169.38h-53.59l-16.7-32.05ZM1264.39,269.67h64.98l-32.36-62.38-32.62,62.38Z"></path>
    <path fill="currentColor" d="M1588.22,215.27c-3.16-1.46-7.32-3.12-12.5-4.97-5.18-1.85-11.05-3.6-17.6-5.26-6.56-1.65-13.68-3.04-21.36-4.16-7.69-1.11-15.58-1.67-23.67-1.67-6.47,0-12,.19-16.57.57-4.57.4-8.42.89-11.53,1.51-3.12.62-5.59,1.33-7.41,2.14s-3.22,1.64-4.19,2.48c-.97.85-1.6,1.7-1.88,2.55s-.42,1.62-.42,2.32c0,2.31,1.22,4.33,3.64,6.06,2.43,1.74,5.74,3.28,9.95,4.62,4.21,1.35,9.1,2.62,14.69,3.81,5.58,1.19,11.51,2.43,17.78,3.7,6.27,1.27,12.74,2.66,19.42,4.16,6.68,1.5,13.15,3.25,19.42,5.26,6.27,2,12.2,4.34,17.78,6.99,5.59,2.66,10.48,5.76,14.69,9.31,4.21,3.55,7.53,7.63,9.96,12.25,2.43,4.62,3.64,9.91,3.64,15.84,0,7.63-1.41,14.18-4.25,19.65-2.84,5.48-6.61,10.1-11.35,13.88-4.73,3.78-10.21,6.8-16.45,9.07-6.23,2.27-12.77,4.02-19.6,5.26-6.84,1.23-13.75,2.04-20.75,2.44-7,.38-13.65.57-19.97.57-16.5,0-31.78-1.29-45.82-3.87-14.04-2.58-26.44-5.8-37.2-9.65v-37.92c11.09,5.85,23.73,10.44,37.93,13.76,14.2,3.31,29.39,4.96,45.58,4.96,9.55,0,17.33-.48,23.36-1.44,6.03-.96,10.74-2.2,14.14-3.69,3.4-1.51,5.71-3.14,6.92-4.92,1.22-1.77,1.82-3.46,1.82-5.08,0-2.55-1.22-4.76-3.64-6.65-2.43-1.88-5.75-3.54-9.95-4.97-4.21-1.42-9.1-2.73-14.69-3.92-5.59-1.19-11.52-2.39-17.78-3.58-6.27-1.19-12.73-2.49-19.36-3.88-6.64-1.39-13.09-3.02-19.36-4.91-6.27-1.89-12.2-4.09-17.78-6.59-5.58-2.51-10.48-5.48-14.69-8.9-4.21-3.43-7.53-7.4-9.95-11.91-2.43-4.5-3.64-9.72-3.64-15.66,0-7.01,1.29-13.07,3.88-18.15,2.59-5.09,6.09-9.42,10.5-13,4.41-3.58,9.5-6.5,15.29-8.73,5.78-2.23,11.87-3.97,18.27-5.2,6.39-1.23,12.87-2.09,19.42-2.55,6.55-.46,12.78-.69,18.69-.69,6.47,0,13.13.3,19.97.92,6.84.62,13.57,1.49,20.21,2.6,6.63,1.12,13.05,2.42,19.23,3.88s11.92,3,17.17,4.62v36.76Z"></path>
  </g></symbol>
  </svg>`;
  document.body.prepend(wrap.firstElementChild);
})();
