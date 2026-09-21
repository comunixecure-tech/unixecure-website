/* ── 共用資料層(demo 用 localStorage 模擬資料庫)───────────── */
const STORAGE_KEY = 'ux_admin_news_v2';

const PROD_OPTIONS = [
  { value: 'RAVEN', label: 'RAVEN 資安監控維運中心' },
  { value: 'HEIS', label: 'HEIS 資安意識人因分析系統' },
  { value: 'SRMAS', label: 'SRMAS 系統資源監控暨告警系統' },
  { value: 'LUCAS', label: 'LUCAS 跡證保存系統' },
];

const SEED_NEWS = [
  {
    id: 'n1', slug: 'gsoc-2-0-upgrade',
    title: 'uniXecure 攜手主管機關推動公部門 G-SOC 2.0 升級',
    publishAt: '2026-05-12T09:00', prods: ['RAVEN'],
    desc: '強化跨部會威脅情資聯防能力,打造一體化資安韌性,並與行政院資安處協同建置跨部會事件通報機制。',
    cover: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
    tags: ['RAVEN', '公部門', 'SOC'],
    body: '隨著跨機關資安威脅日益複雜,單一機關獨立應變已難以因應大規模、跨系統的攻擊行動。uniXecure 攜手主管機關,協同建置跨部會事件通報機制。\n\n本次升級重點如下:\n- 自動化派工與分級應變流程\n  - 依事件嚴重度自動指派處理單位\n  - 支援跨機關協作案件追蹤\n- 定期產出**合規報告**供主管機關查核\n- 詳細架構請參考 [RAVEN 產品介紹](raven.html)\n\n大幅縮短從事件發現到跨機關協處完成的整體時間。',
    seoTitle: '', seoDesc: '', status: 'published',
    createdAt: '2026-05-10T10:00', updatedAt: '2026-05-12T09:00',
  },
  {
    id: 'n2', slug: 'raven-iso27701',
    title: 'RAVEN 監控中心通過 ISO 27701 隱私資訊管理驗證',
    publishAt: '2026-04-28T09:00', prods: ['RAVEN'],
    desc: '成為國內少數同時取得 ISO 27001 與 27701 雙證的資安維運廠商,強化個資保護與安全管理雙軌並行。',
    cover: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    tags: ['RAVEN', '合規認證'],
    body: 'uniXecure 資安監控維運中心正式通過 ISO 27701 隱私資訊管理系統驗證,成為國內少數同時具備 ISO 27001 與 27701 雙證的資安維運廠商。\n\n此次驗證涵蓋客戶個資蒐集、處理、傳輸與刪除全流程,確保監控維運服務在資安防護之外,也符合國際隱私保護標準。',
    seoTitle: '', seoDesc: '', status: 'published',
    createdAt: '2026-04-25T10:00', updatedAt: '2026-04-28T09:00',
  },
  {
    id: 'n3', slug: 'heis-ai-engine-upgrade',
    title: 'HEIS 全面升級 AI 行為意識分析引擎',
    publishAt: '2026-03-15T09:00', prods: ['HEIS'],
    desc: '以行為訊號量化員工資安意識,識別準確率提升 47%,並支援多語系報表輸出與主管儀表板整合。',
    cover: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    tags: ['HEIS', 'AI', '產品更新'],
    body: 'HEIS 資安意識人因分析系統推出全新 AI 行為意識分析引擎,透過量化員工日常行為訊號,識別高風險使用者的準確率較前一版本提升 **47%**。\n\n新版本同步支援:\n- 跨語系情境模擬\n- 主管儀表板整合\n- 自動化週報輸出\n\n協助企業更直觀掌握全員資安意識現況。',
    seoTitle: '', seoDesc: '', status: 'published',
    createdAt: '2026-03-12T10:00', updatedAt: '2026-03-15T09:00',
  },
  {
    id: 'n4', slug: 'srmas-cloud-alert-module',
    title: 'SRMAS 新增雲端資源異常告警模組',
    publishAt: '2026-02-20T09:00', prods: ['SRMAS'],
    desc: '即時偵測雲端主機資源異常波動,結合告警規則引擎,降低誤報並縮短事件應變時間。',
    cover: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    tags: ['SRMAS', '雲端監控'],
    body: 'SRMAS 系統資源監控暨告警系統推出雲端資源異常告警模組,可即時偵測雲端主機 CPU、記憶體與網路流量的異常波動。\n\n結合可調校的告警規則引擎,協助維運團隊降低誤報干擾,將人力聚焦在真正需要處理的異常事件上。',
    seoTitle: '', seoDesc: '', status: 'published',
    createdAt: '2026-02-18T10:00', updatedAt: '2026-02-20T09:00',
  },
  {
    id: 'n5', slug: 'lucas-forensic-compat',
    title: 'LUCAS 跡證保存系統通過司法鑑識標準相容測試',
    publishAt: '2025-12-09T09:00', prods: ['LUCAS'],
    desc: '完成第三方鑑識工具相容性驗證,確保跡證保存鏈完整可供法遵佐證。',
    cover: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
    tags: ['LUCAS', '法遵鑑識'],
    body: 'LUCAS 跡證保存系統完成與主流第三方司法鑑識工具的相容性驗證測試,確保系統輸出的日誌與跡證資料能無縫銜接既有鑑識流程。\n\n此次驗證強化了跡證保存鏈的完整性與可信度,協助企業在面對法規稽核或司法程序時,能提供具公信力的佐證資料。',
    seoTitle: '', seoDesc: '', status: 'published',
    createdAt: '2025-12-05T10:00', updatedAt: '2025-12-09T09:00',
  },
  {
    id: 'n6', slug: 'raven-iso20000-renewal',
    title: 'uniXecure 資安監控維運中心通過 ISO 20000 續驗',
    publishAt: '2025-10-30T09:00', prods: ['RAVEN'],
    desc: '服務管理制度持續優化,維運 SLA 達成率連續三年超過 99.5%。',
    cover: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    tags: ['RAVEN', '合規認證'],
    body: 'uniXecure 資安監控維運中心通過 ISO 20000 資訊服務管理系統續驗,顯示公司服務管理制度持續優化並穩定運作。\n\n過去三年,維運中心的 SLA 達成率皆維持在 99.5% 以上,展現高可用性與服務穩定度。',
    seoTitle: '', seoDesc: '', status: 'published',
    createdAt: '2025-10-28T10:00', updatedAt: '2025-10-30T09:00',
  },
  {
    id: 'n7', slug: 'raven-heis-joint-webinar-preview',
    title: 'RAVEN × HEIS 聯合技術分享會即將登場(排程發布示範)',
    publishAt: '2026-08-15T10:00', prods: ['RAVEN', 'HEIS'],
    desc: '這則新聞的發布時間設定在未來,用來示範「排程發布」功能——時間到之前會顯示「已排程」。',
    cover: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    tags: ['RAVEN', 'HEIS', '活動預告'],
    body: '這是一則示範用的新聞,發布日期設定在未來時間。\n\n在發布時間到達之前,列表會顯示**已排程**狀態;時間一到,系統會自動視為已發布,不需要手動切換。',
    seoTitle: '', seoDesc: '', status: 'published',
    createdAt: '2026-07-28T10:00', updatedAt: '2026-07-28T10:00',
  },
  {
    id: 'n8', slug: 'lucas-next-version-draft',
    title: 'LUCAS 下一版功能預告(草稿,尚未對外發布)',
    publishAt: '2026-09-01T09:00', prods: ['LUCAS'],
    desc: '這是一篇草稿示範——內容還在編輯中,不會出現在官網上,直到按下「發布」為止。',
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
  try { return JSON.parse(raw); } catch (e) { return [...SEED_NEWS]; }
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

/* ── 格式化 / 狀態判斷 ─────────────────────────────────── */
function formatDateTime(v) {
  if (!v) return '';
  const [d, t] = v.split('T');
  return d.replaceAll('-', ' / ') + (t ? ' ' + t : '');
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

/* ── 極簡 Markdown → HTML(支援粗體、連結、圖片、巢狀列點)── */
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
