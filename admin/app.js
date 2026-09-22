/* ── 共用資料層(demo 用 localStorage 模擬資料庫)───────────── */
const STORAGE_KEY = 'ux_admin_news_v2';

const PRODUCT_TAGS = ['RAVEN', 'HEIS', 'SRMAS', 'LUCAS', 'SESC', 'SIVAS', '資安健診'];

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
const CASE_INDUSTRIES = ['一般製造', '科技製造', '零售/流通', '一般服務', '政府/教育', '醫療', '金融', '資訊服務', '其他'];

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
/* ── 標籤(新聞 / 成功案例 / 影音專區共用同一個標籤池)────────
   產品標籤固定寫法;其餘標籤由各編輯頁存檔時寫入共用標籤池。 */
const TAG_POOL_KEY = 'ux_admin_tags_v1';

function loadCustomTags() {
  try { return JSON.parse(localStorage.getItem(TAG_POOL_KEY)) || []; } catch (e) { return []; }
}

function addTagsToPool(tags) {
  const set = new Set(loadCustomTags());
  (tags || []).forEach(t => { if (!PRODUCT_TAGS.includes(t)) set.add(t); });
  localStorage.setItem(TAG_POOL_KEY, JSON.stringify([...set]));
}

/* 常用標籤 = 標籤池 + 目前新聞用到的標籤(扣掉產品標籤),依使用次數排序 */
function getCommonTags() {
  const count = new Map();
  loadNews().forEach(n => (n.tags || []).forEach(t => count.set(t, (count.get(t) || 0) + 1)));
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

/* 標籤選擇元件:已選標籤 + 輸入新增 + 可點選的產品 / 常用標籤 */
function createTagPicker(root, initial, onChange) {
  let selected = sortTags(initial);
  root.classList.add('tag-picker');
  root.innerHTML = `
    <div class="tag-picker__box">
      <span class="tag-picker__selected"></span>
      <input class="tag-picker__input" type="text" placeholder="輸入標籤後按 Enter 新增" />
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
  return { getTags: () => selected };
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
    <button type="button" class="btn" id="colToggleBtn">欄位設定 <i class="fa-solid fa-chevron-down" style="font-size:10px"></i></button>
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
