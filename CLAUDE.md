# 專案常駐記憶

## 產品清單（uniXecure 自研產品）

僅以下 4 款為現行自研產品。**不要再提及 SIVAS、SOC、SESC 等其他舊產品名稱。**

| 代號  | 中文名稱             | 英文全名                                                       | Logo 檔                           |
| ----- | -------------------- | -------------------------------------------------------------- | --------------------------------- |
| RAVEN | （待補，暫不顯示中文名） | Risk Analytics & Visualization for Exposure Neutralization     | `assets/products/RAVEN.svg`       |
| HEIS  | 資安意識人因分析系統 | Human Error Insight System                                     | `assets/products/HEIS.svg`        |
| SRMAS | 系統資源監控暨告警系統 | Smart Resource Monitoring and Alerting System                  | `assets/products/SRMAS.svg`       |
| LUCAS | 跡證保存系統         | Log Unified Central Analysis System                            | `assets/products/LUCAS.svg`       |

### 使用規則
- 在卡片 / 主視覺等版面，產品識別優先使用 logo（`assets/products/<CODE>.svg`），不要再用純文字代號。
- 產品 logo 一律保留原始 SVG 配色，直接用 `<img>` 呈現，**不要用 CSS mask 重新上色**（過去的彩色/灰色 mask 版本是錯誤）。代理產品 logo 同樣保留原廠配色，不另外填色。
- 中文名稱、英文全名以本表為準；不要自行翻譯或縮寫。
- RAVEN 中文名稱使用者會再補；在此之前**不要編造中文名**，只用「RAVEN」代號即可。
- 任何位置出現 SIVAS / SOC / SESC 等舊代號都應視為錯誤，刪除或替換為上表 4 款之一。

### 尺寸與字體一律偶數（或 4 的倍數）
- 全站所有 CSS 數值（font-size、line-height、padding、margin、gap、width/height、border-radius、top/left/right/bottom、box-shadow 偏移等）一律使用偶數，理想上是 4 的倍數
- 新增樣式時直接挑偶數值，不要用 13px、15px、17px、19px 等奇數
- hairline border（`border: 1px solid ...`）維持 1px，不受此規則影響

### 卡片與按鈕禁止邊框（border）
- 卡片一律**不要用 border 做邊界**，改用背景色 + box-shadow（或 hover 時的位移＋陰影）建立層次感
- 按鈕同樣不用 border，**除了 secondary／ghost／outline 樣式的按鈕**——這類按鈕本來就靠邊框當作視覺樣式，維持原樣即可
- 卡片預設狀態下不要有任何邊框或邊緣色；hover 也不要靠 border-color 變化提示，只用 transform（位移）與 box-shadow
- 新增卡片元件時直接套用這個原則，不要重新引入 `border: 1px solid ...`

## 品牌
- 品牌名：**uniXecure**（智慧資安科技）
- 設計系統：Unixecure Design System（見附加 skill）

## 官網設計規範

### 語系與文案
- 網站支援多語系切換，**所有頁面禁止出現純裝飾性的英文小標（eyebrow label）**。
  - 錯誤示範：`<div class="eyebrow">CERTIFICATIONS</div>` 放在中文標題上方
  - 正確做法：直接從中文 `<h2>` 或 `<h3>` 開始，不需英文前綴
  - 理由：切換語系後英文小標仍會殘留，造成混排，視覺上也顯得冗餘
- 已清除英文小標的頁面：`index.html`、`about.html`、`contract.html`、`contract-detail.html`
- 新建任何頁面時，**一律不加英文 eyebrow**；修改現有頁面時，若發現殘留請一併移除

### 共同供應契約
- 在 Nav 中收在「最新消息」下拉選單內（桌機為下拉最後一項、加分隔線；行動版為最新消息子選單最後一項），**不要**再放成頂層獨立項目
- 列表頁：`contract.html`；內頁：`contract-detail.html`
- Nav 中所有頁面的「共同供應契約」連結一律指向 `contract.html`

### 內頁 Hero 規範（.page-hero）
所有內頁 hero 使用 `bright/sections.css` 的 `.page-hero` 共用類，確保高度與風格一致。

```html
<!-- 一般內頁（有底部空間）-->
<header class="page-hero [page-slug]-hero" id="top">
  <div class="page-hero__deco" aria-hidden="true"><!-- 裝飾 SVG --></div>
  <div class="wrap">
    <h1 class="page-hero__title">標題<em>重點</em></h1>
    <p class="page-hero__sub">副標說明文字</p>
  </div>
</header>

<!-- 有 Tab 導覽列的內頁（底部 padding = 0，讓 tabs 貼底）-->
<header class="page-hero page-hero--tabs [page-slug]-hero" id="top">
  ...
  <nav class="...tabs">...</nav>
</header>
```

- 標準 top padding：`148px`，bottom padding：`72px`（`--tabs` 變體為 `0`）
- 標題字級：`clamp(36px, 5vw, 60px)`，統一由 `.page-hero__title` 控制，**不要在 page-slug CSS 中覆寫 font-size**
- 副標用 `.page-hero__sub`（同理）
- page-slug 專屬 CSS 只放背景色差異或裝飾圖層，不動 padding 與字級
- 已套用此規範：`about.html`（--tabs）、`contract.html`

### 內頁 CSS 規範（新增頁面必讀）

所有內頁**只載入下列三個共用 CSS**，不要再新增第四個全域 CSS：

```html
<link rel="stylesheet" href="ds/colors_and_type.css" />
<link rel="stylesheet" href="bright/bright.css" />
<link rel="stylesheet" href="bright/sections.css" />
```

架構類 CSS（`bright/architecture.css`）僅首頁需要，內頁不要引入。

#### 可直接使用的共用 class（不要在頁面 `<style>` 重複定義）

| 用途 | Class |
|------|-------|
| 內頁 Hero（一般） | `page-hero [page-slug]-hero` |
| 內頁 Hero（有 Tab） | `page-hero page-hero--tabs [page-slug]-hero` |
| Hero 標題 | `page-hero__title`（禁止在頁面 CSS 覆寫 font-size）|
| Hero 副標 | `page-hero__sub` |
| 內頁 Section | `page-section` |
| Section 背景 | `page-section--tint` / `--white` / `--dark` |
| 麵包屑 | `breadcrumb` / `breadcrumb__sep` / `breadcrumb__current` |
| 卡片 hover 動畫 | `card-hover`（搭配任何卡片元素） |
| 容器寬度 | `wrap` |
| 滾動顯現 | `reveal` |

#### 頁面專屬 `<style>` 只放以下內容
- `[page-slug]-hero` 的背景色 / 裝飾圖層
- 該頁獨有的 layout 元件（如 contract 的篩選列、detail 的資料表）
- **禁止**：在頁面 `<style>` 重新定義 padding、font-size、color 等已由共用 class 管控的屬性

#### 新增/編輯頁面前必查清單（避免規則漂移）
動手寫頁面 `<style>` 之前，先確認要寫的 class 名稱有沒有已經存在於共用 CSS：
1. `grep` 一次 `bright/*.css`，確認這個 class（或同用途的規則）是否已存在
2. 若已存在 → 直接套用共用 class，不要在頁面 style 重新定義
3. 若某段樣式在 2 個以上頁面重複出現 → 應該搬進共用 CSS（`bright/bright.css` 全站通用、`bright/list-page.css` 清單/detail 頁通用、`bright/product.css` 產品頁通用），不要留在頁面 style 裡各自維護
4. Detail 頁（news/events/cases/reports-detail）通用骨架已在 `bright/list-page.css`：`.detail-content`、`.article`（預設 760px）、`.btn-back`、`.detail-page .nav.is-scrolled` — 頁面 style 只需保留 `.detail-page{background:...}` 這種頁面專屬色差
5. Nav active 樣式（`.nav__link[aria-current="page"]`、`.nav.is-scrolled`）已在 `bright/bright.css`，任何頁面都不需要再寫

#### 字體大小規範（統一三段，不要再用中間值）
| 用途 | Size |
|------|------|
| 標籤 / meta / 次要說明 | `14px` |
| 一般內文 / 卡片內容 | `14px`–`16px` |
| 導引文字（lead） | `18px` |
| 標題由 `page-hero__title` 或 `arch__title` 控制，不另設 |

#### 內頁 Hero 裝飾規則
`.page-hero::before`（點格紋）**所有內頁自動出現**，不需處理。

`page-hero__deco`（六角 SVG）依頁面類型決定：
- 有 `page-hero--tabs` 的頁面（如 about）→ **不加**，tab 列已提供底部視覺收尾
- 無 tabs 的獨立內頁（如 contract、產品頁、活動頁）→ **加上**，補足視覺份量

```html
<!-- 無 tabs 獨立內頁：加 deco -->
<header class="page-hero [page-slug]-hero">
  <div class="page-hero__deco" aria-hidden="true">
    <!-- 六角 SVG，參考 contract.html -->
  </div>
  <div class="wrap"> ... </div>
</header>

<!-- 有 tabs 內頁：不加 deco -->
<header class="page-hero page-hero--tabs [page-slug]-hero">
  <div class="wrap"> ... </div>
  <nav class="...tabs"> ... </nav>
</header>
```

#### 例外：可新增專屬 CSS 的情況
- 產品內頁（複雜的功能說明區塊、截圖展示）
- 新聞 / 案例內頁（文章排版、引言樣式）
- 活動頁（倒數計時、報名表單等互動元件）

這些情況才在 `bright/` 下新增對應 CSS 檔，命名為 `[feature].css`。

### 卡片設計禁止事項

**卡片上嚴禁任何彩色邊條裝飾**，包括但不限於：
- `::before` / `::after` 偽元素製作的頂部色條（`height: 3px`、`height: 4px` 等）
- `::before` / `::after` 偽元素製作的左側色條（`width: 3px`、`width: 5px` 等）
- `border-top`、`border-left` 使用品牌色或自訂 CSS 變數製作的彩色邊框

卡片只允許使用中性色邊框（`border: 1px solid var(--b-line)` 或類似的低對比線條）與陰影來建立層次感。

### 卡片 hover：非連結卡片不得出現線條
- **沒有超連結（非 `<a>`、不可點擊）的卡片，hover 後一律不得出現任何邊框／線條裝飾**。
  - 例：首頁 `.stat`（30+、7×24、91%）、`.cert`（ISO 卡片）、`.pcard`（產品卡）、`about` 的 `.iso-card` 等資訊型卡片
  - hover 可保留輕微位移（transform）與陰影，但**不要 `border-color` 變化**
  - 只有真正可點擊的卡片（`<a>` 包裹）才允許 hover 浮現邊框
- 延伸原則：**減少 outline／硬邊界的使用**，卡片以填色對比與陰影界定，避免靠邊框

### 文案結尾不加句號
- 短句、標題、卡片內文的結尾**一律不加句號**（顯得破碎）；只有多句連續的段落文才用句號。

### 產品頁 Hero 附圖規則
依實際素材情況，固定套用以下四種模式之一（各頁自己的 `.[product]-hero__device` 容器內處理）：

| 情境 | 處理方式 |
|------|---------|
| 只有 desktop 截圖 | 只放 macOS 視窗框，置中或靠右（如 heis.html） |
| 只有 mobile 截圖 | 只放手機框，置中即可，不硬湊桌機框 |
| 兩者都有 | 桌機視窗為主，手機框疊在右下角（如 raven.html） |
| 完全沒有截圖 | 不放裝置框佔位圖，改用 `bright/hero-art.css` 的抽象裝飾插畫（純裝飾、無 UI 文案、跨語系安全） |

### 產品頁 CMS 欄位規範
建立/改版產品頁文案時，依下列欄位與建議字數整理，缺欄位的區塊比照前述「選配區塊」規則整段不顯示：

| 欄位 | 字數／格式 |
|------|-----------|
| 產品代號 | 英文縮寫 |
| 產品中文名稱 / 英文全名 | 需與 Foster 查證正式名稱 |
| Hero 一句話價值主張 | 20–40 字，說清楚解決什麼問題，避免形容詞堆疊 |
| 產品簡介 | 大標｜一段說明文（一組，缺一不放） |
| 痛點描述 | 2–3 點，一行一點，每點 30–50 字 |
| 關鍵數據 | 2–3 組，「數字或關鍵字｜說明（20 字內）」，需附出處 |
| 核心功能 | 3–5 項，「標題（12 字內）｜說明 30–50 字」，配圖另外提供 |
| 差異化優勢 | 2–3 項，每項 40–60 字，避免與核心功能重複 |
| 法規合規對應 | 「法規名＋條文」一行一項，沒有可留白（選配） |
| 產業應用情境 | 「產業別（4–8 字）＋情境說明（60–100 字，不用句號）」2–3 則，可增減 |
| 外部網址 | 標題｜網址；內部連結系統自動帶 |
| SEO Title | 30 字內，產品名＋主要關鍵字 |
| Meta Description | 70–110 字，痛點＋解法＋行動 |
| 文案負責人 / 狀態 | 待填寫／撰寫中／待審核／完成 |

### 產品頁模板（bright/product.css）
- 產品內頁共用模板樣式在 `bright/product.css`（prod-* 類），區塊順序：麵包屑 → Hero → 痛點 → 關鍵數據 → 核心功能 → 差異化優勢 → 客戶案例 → 法規合規（選配）→ 中段轉換 → 聯絡表單
- **不放「相關產品推薦」區塊**（產品數量少，已移除）
- 客戶案例**不放客戶 logo 列**，且客戶一律匿名、只以行業別稱呼（如「某政府機關」「某金融業者」），不寫出可識別的客戶名稱
- 卡片內 icon **不加區塊底色**（避免卡片包卡片感）；核心功能卡 icon 用放大、漸層透明的水印樣式
- 核心功能標題格式：`{產品代號} 核心功能`（如「RAVEN 核心功能」），所有產品頁比照
- 核心功能配圖規則：
  - 有配圖 → 用 `.prod-features__split`（左側卡片直排、右側大附圖，兩欄等高：卡片以 grid-auto-rows:1fr 平均分配高度、附圖 object-fit:cover 撐滿），卡片加 `prod-feat--select` + `data-shot` / `data-cap`，點卡切換附圖；附圖欄用 `.prod-features__shotcol` 包 figure+caption（參考 raven.html）
  - 功能超過 3 個 → 三個一組拆成多個 `__split` 群組，第二組加 `prod-features__split--flip`（卡片與附圖左右對調），以此交錯；切圖 JS 以群組為 scope（querySelectorAll('.prod-features__split') 迭代）
  - 個別卡片沒配圖 → 該卡不加 `data-shot`，也不放 `prod-feat__cue`，點擊只切換 active 不換圖
  - 整個核心功能都沒配圖 → 維持原本橫排 `.prod-features__grid`（三欄），不加 `__split` 與附圖區、不加 JS

### 小字突顯時不要再加括號
- 若已用小字級／淺色 `<span>` 來區別次要說明，文案本身**不要再包圓括號（）**。
  - 錯誤：`<span style="font-size:12px">（巴黎科技大樓）</span>`
  - 正確：`<span style="font-size:12px">巴黎科技大樓</span>`
  - 理由：字級與顏色已足夠區分主從，括號是多餘的視覺雜訊

### Nav 連結規範
- 關於我們 → 公司簡介：`about.html`
- 共同供應契約（在最新消息下拉內）：`contract.html`
- 其餘未完成頁面暫用 `href="#"`

### 清單頁篩選 / 標籤點擊（news.html 為第一個案例）
- 從內頁標籤（`#RAVEN` 等）點擊回集合頁時，用 `?tag=xxx` 帶入，直接塞進關鍵字搜尋框觸發同一套篩選即可；不另外顯示「篩選中」chip 或提示文字，保留關鍵字 input 內容本身作為唯一狀態呈現。
- **待辦（純 UI 階段先記錄，接 CMS/後台時處理）**：目前關鍵字搜尋只比對 title/desc 純文字。之後應同時比對「內文全文」與獨立的「標籤（tags）」欄位，讓從標籤連結進來的篩選與手動關鍵字搜尋都能準確命中（即使標籤字眼沒有逐字出現在標題/描述裡）。`news.html` 的 `applyFilter()` 內已留 TODO 註解，其餘清單頁（events/cases/videos/reports）之後套用同樣的標籤點擊機制時，一併比照處理。

---

## 首頁三層架構圖技術規範

### 流向 SVG 路徑規則（`arch-flow`）

首頁三層架構的連接流向線統一使用 `viewBox="0 0 920 80"` 的 SVG，有兩種變體：

#### converge（向上匯聚，`arch-flow--converge`）
資料從各節點往上收攏到核心，路徑起點在 y=80（底部），終點在 y=18：
```html
<path d="M{x},80 C{x},60 460,38 460,18" />
```

#### diverge（向下發散，`arch-flow--diverge`）
核心往下展開到各產品卡，路徑起點在 y=62（頂部），終點在 y=0：
```html
<path d="M460,62 C460,42 {x},20 {x},0" />
```

#### 節點 x 座標（左右各三個）
| 位置 | 左群組 | 右群組 |
|------|--------|--------|
| 第一 | 175    | 631    |
| 第二 | 232    | 688    |
| 第三 | 289    | 745    |

每條路徑都有兩個疊層：`.flow-base`（靜態底色線）和 `.flow-dash`（動態虛線，帶 `--d` CSS 變數設定延遲）。

---

## hero-art.css 共用說明

**檔案位置**：`bright/hero-art.css`

首頁與各產品頁 hero 右側的抽象數位插圖（分層玻璃面板）共用同一套 CSS，不重複撰寫。

### 使用方式
在需要 hero 插圖的頁面載入此 CSS，並使用以下 HTML 結構：
```html
<link rel="stylesheet" href="bright/hero-art.css" />

<div class="hero-art" aria-hidden="true">
  <div class="hero-art__stage">
    <div class="hero-art__grid"></div>
    <div class="hero-art__glow hero-art__glow--indigo"></div>
    <div class="hero-art__glow hero-art__glow--amber"></div>
    <div class="hero-art__panes">
      <!-- .hero-art__pane × N -->
    </div>
    <!-- 節點、連線等裝飾元素 -->
  </div>
</div>
```

### 設計原則
- 純裝飾、無產品 UI 文案，跨語系安全
- 輕微呼吸浮動（`heroBreath`）＋節點微閃（`heroNode`）動畫
- 尊重 `prefers-reduced-motion`，已在 CSS 內處理
- **不要**在頁面 `<style>` 重複定義任何 `.hero-art__*` 規則
