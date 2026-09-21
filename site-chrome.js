/* ════════════════════════════════════════════════════════════
   uniXecure — 共用 CTA + Footer 元件
   單一來源，所有頁面同步。CTA 文案可用屬性客製，footer 固定。
   用法：
     <site-cta></site-cta>                         ← 預設「聯絡我們」文案
     <site-cta title-pre="想了解 RAVEN 如何"
               title-amber="保護您的組織？"
               btn-label="產品諮詢"></site-cta>
     <site-footer></site-footer>
   以 light DOM 渲染，沿用既有 .cta / .footer 樣式。
   ════════════════════════════════════════════════════════════ */
(function () {
  const CTA_DEFAULTS = {
    'title-pre': '企業方案、IT 服務、',
    'title-amber': '解決方案諮詢',
    sub: '歡迎聯繫智慧資安，與我們的資安專家面對面討論您的需求。',
    'btn-label': '聯絡我們',
    'btn-href': 'contact.html',
  };

  class SiteCta extends HTMLElement {
    connectedCallback() {
      const g = (k) => this.getAttribute(k) ?? CTA_DEFAULTS[k];
      const sectionId = this.getAttribute('section-id') || 'contact';
      const r1l = this.getAttribute('res1-label'), r1h = this.getAttribute('res1-href') || '#', r1i = this.getAttribute('res1-icon') || 'fa-file-arrow-down';
      const r2l = this.getAttribute('res2-label'), r2h = this.getAttribute('res2-href') || '#', r2i = this.getAttribute('res2-icon') || 'fa-circle-play';
      const resources = (r1l || r2l) ? `<div class="cta__resources">${r1l ? `<a class="cta__res-link" href="${r1h}"><i class="fa-solid ${r1i}"></i> ${r1l}</a>` : ''}${r2l ? `<a class="cta__res-link" href="${r2h}"><i class="fa-solid ${r2i}"></i> ${r2l}</a>` : ''}</div>` : '';
      this.outerHTML = `
  <section class="cta" id="${sectionId}">
    <div class="wrap">
      <div class="cta__card">
        <h2 class="cta__title" style="margin-top:0">${g('title-pre')}<span class="amber">${g('title-amber')}</span></h2>
        <p class="cta__sub">${g('sub')}</p>
        <div class="cta__row">
          <a class="btn btn--white" href="${g('btn-href')}">${g('btn-label')} <span class="arrow">→</span></a>
          <a class="btn btn--outline-w" href="mailto:servicedesk@unixecure.com.tw">servicedesk@unixecure.com.tw</a>
        </div>
        ${resources}
      </div>
    </div>
  </section>`;
    }
  }

  class SiteFooter extends HTMLElement {
    connectedCallback() {
      this.outerHTML = `
  <footer class="footer">
    <div class="wrap">
      <div class="footer__grid">
        <div>
          <img class="footer__logo" src="ds/unixecure-logo-white.png" alt="uniXecure" style="height:90px;width:auto;display:block;margin-left:-18px;" />
          <div class="footer__socials">
            <a class="footer__social" href="https://www.youtube.com/@unixecure3203" target="_blank" rel="noopener" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
            <a class="footer__social" href="https://www.facebook.com/uniXecure/" target="_blank" rel="noopener" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
            <a class="footer__social" href="https://www.linkedin.com/company/unixecure/" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
            <a class="footer__social footer__social--104" href="https://www.104.com.tw/company/1a2x6bmeqd" target="_blank" rel="noopener" aria-label="104 人力銀行">104</a>
            <a class="footer__social" href="mailto:servicedesk@unixecure.com.tw" aria-label="Email"><i class="fa-solid fa-envelope"></i></a>
          </div>
          <div class="footer__contact">
            <div class="footer__contact-row"><span>營業據點</span><a href="https://www.google.com/maps/search/?api=1&amp;query=%E8%87%BA%E5%8C%97%E5%B8%82%E5%85%A7%E6%B9%96%E5%8D%80%E6%B8%AF%E5%A2%98%E9%87%8C%E7%91%9E%E5%85%89%E8%B7%AF318%E8%99%9F" target="_blank" rel="noopener">臺北市內湖區港墘里瑞光路318號</a></div>
            <div class="footer__contact-row"><span>服務專線</span><a href="tel:+886424523928">04-2452-3928 分機 300、301、302</a></div>
            <div class="footer__contact-row"><span>服務信箱</span><a href="mailto:servicedesk@unixecure.com.tw">servicedesk@unixecure.com.tw</a></div>
            <div class="footer__contact-row"><span>服務時間</span><span>週一至週五 09:00–17:00（不含國定假日）</span></div>
          </div>
        </div>
        <div class="footer__col">
          <div class="footer__nav-group">
            <h4>資安法專區</h4>
            <ul>
              <li><a href="raven.html">RAVEN</a></li>
              <li><a href="#">HEIS 資安意識人因分析系統</a></li>
              <li><a href="#">SRMAS 系統資源監控暨告警系統</a></li>
              <li><a href="#">LUCAS 跡證保存系統</a></li>
            </ul>
          </div>
          <div class="footer__nav-group">
            <h4>資安服務</h4>
            <ul>
              <li><a href="#">資安健診</a></li>
              <li><a href="partners.html">所有代理產品</a></li>
            </ul>
          </div>
        </div>
        <div class="footer__col">
          <img src="uploads/pasted-1781768676078-0.png" alt="SGS ISO/IEC 27001 · ISO/IEC 27701 · ISO 20000 認證" class="footer__sgs" />
        </div>
      </div>
      <div class="footer__base">
        <span>智慧資安科技股份有限公司 © 2026 · 統一編號 90254779 · 版權所有</span>
        <span><a href="#">著作權及隱私權聲明</a></span>
      </div>
    </div>
  </footer>`;
    }
  }

  class SiteBackToTop extends HTMLElement {
    connectedCallback() {
      this.outerHTML = `<button id="backToTop" aria-label="回到頂部" title="回到頂部"><i class="fa-solid fa-chevron-up"></i></button>`;
      requestAnimationFrame(() => {
        const btn = document.getElementById('backToTop');
        if (!btn) return;
        window.addEventListener('scroll', () => btn.classList.toggle('is-visible', window.scrollY > 300), { passive: true });
        btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
      });
    }
  }

  class SiteNav extends HTMLElement {
    connectedCallback() {
      const active = this.getAttribute('active') || '';
      const link = (key, href, label) => `<a class="nav__link${key === active ? ' nav__link-contract' : ''}" href="${href}"${key === active ? ' aria-current="page"' : ''}>${label}</a>`;
      const newsGroup = ['news', 'cases', 'videos', 'reports', 'contract', 'events'];
      const newsActive = newsGroup.includes(active);
      const dropLink = (key, href, label) => `<a class="nav__drop-link" href="${href}"${key === active ? ' aria-current="page"' : ''}>${label}</a>`;
      this.outerHTML = `
<svg class="logo-sprite" width="0" height="0" aria-hidden="true" focusable="false" style="position:absolute;width:0;height:0;overflow:hidden">
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
  </svg>
<nav class="nav" id="nav">
  <div class="wrap nav__inner">
    <a class="nav__logo" href="index.html" aria-label="uniXecure">
      <img class="nav__logo-black" src="ds/unixecure-logo-black.png" alt="uniXecure" />
      <img class="nav__logo-white" src="ds/unixecure-logo-white.png" alt="uniXecure" />
    </a>
    <div class="nav__links">
      <div class="nav__item">${link('about', 'about.html', '關於我們')}</div>
      <div class="nav__item nav__item--drop">
        <a class="nav__link" href="#" aria-haspopup="true">服務項目 <i class="fa-solid fa-chevron-down nav__item-caret"></i></a>
        <div class="nav__drop nav__drop--products">
          <a class="nav__drop-product" href="raven.html"><svg class="nav__drop-plogo" viewBox="0 0 1770 500" role="img" aria-label="RAVEN"><use href="#lg-raven"></use></svg><span class="nav__drop-pdesc">資安監控維運中心</span></a>
          <a class="nav__drop-product" href="heis.html"><svg class="nav__drop-plogo" viewBox="0 0 1770 500" role="img" aria-label="HEIS"><use href="#lg-heis"></use></svg><span class="nav__drop-pdesc">資安意識人因分析系統</span></a>
          <a class="nav__drop-product" href="#"><svg class="nav__drop-plogo" viewBox="0 0 1770 500" role="img" aria-label="SRMAS"><use href="#lg-srmas"></use></svg><span class="nav__drop-pdesc">系統資源監控暨告警系統</span></a>
          <a class="nav__drop-product" href="#"><svg class="nav__drop-plogo" viewBox="0 0 1770 500" role="img" aria-label="LUCAS"><use href="#lg-lucas"></use></svg><span class="nav__drop-pdesc">跡證保存系統</span></a>
          <div class="nav__drop-divider"></div>
          <a class="nav__drop-link" href="#">資安健診</a>
        </div>
      </div>
      <div class="nav__item">${link('partners', 'partners.html', '代理產品')}</div>
      <div class="nav__item nav__item--drop">
        <a class="nav__link" href="#" aria-haspopup="true"${newsActive ? ' aria-current="page"' : ''}>最新消息 <i class="fa-solid fa-chevron-down nav__item-caret"></i></a>
        <div class="nav__drop">
          ${dropLink('news', 'news.html', '新聞中心')}
          <!-- 行銷活動已併入新聞中心（以 tag 區分），待老闆確認後移除 events.html/events-detail.html -->
          ${dropLink('cases', 'cases.html', '成功案例')}
          ${dropLink('videos', 'videos.html', '影音專區')}
          ${dropLink('reports', 'reports.html', '報告書專區')}
          ${dropLink('contract', 'contract.html', '共同供應契約')}
        </div>
      </div>
    </div>
    <div class="nav__spacer"></div>
    <div class="nav__right">
      <a class="nav__admin" href="admin/index.html" title="切換到後台 Demo"><i class="fa-solid fa-gear"></i> 後台</a>
      <div class="nav__lang" id="langPicker">
        <button class="nav__lang-btn" type="button" aria-haspopup="listbox" aria-expanded="false" id="langBtn">
          <i class="fa-solid fa-globe"></i><span id="langLabel">繁中</span>
          <i class="fa-solid fa-chevron-down nav__lang-caret"></i>
        </button>
        <ul class="nav__lang-drop" role="listbox" aria-label="選擇語言">
          <li class="is-active" role="option" data-lang="繁中">繁體中文</li>
          <li role="option" data-lang="简中">简体中文</li>
          <li role="option" data-lang="EN">English</li>
          <li role="option" data-lang="JA">日本語</li>
        </ul>
      </div>
      <button class="nav__theme" id="themeToggle" type="button" aria-label="切換亮 / 暗色模式">
        <i class="fa-solid fa-moon"></i>
      </button>
      <a class="nav__cta" href="contact.html"${active === 'contact' ? ' aria-current="page"' : ''}>聯絡我們 <i class="fa-solid fa-arrow-right"></i></a>
    </div>
    <button class="nav__hamburger" id="navHamburger" type="button" aria-label="開啟選單" aria-expanded="false" aria-controls="navMobile">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<div class="nav__mobile" id="navMobile" aria-hidden="true">
  <div class="nav__mobile-body">
    <a class="nav__m-link" href="about.html">關於我們</a>
    <div class="nav__m-label">服務項目</div>
    <a class="nav__m-link nav__m-sub" href="raven.html">RAVEN 資安監控維運中心</a>
    <a class="nav__m-link nav__m-sub" href="#">HEIS 資安意識人因分析系統</a>
    <a class="nav__m-link nav__m-sub" href="#">SRMAS 系統資源監控暨告警系統</a>
    <a class="nav__m-link nav__m-sub" href="#">LUCAS 跡證保存系統</a>
    <a class="nav__m-link nav__m-sub" href="#">資安健診</a>
    <div class="nav__m-divider"></div>
    <a class="nav__m-link" href="partners.html">代理產品</a>
    <div class="nav__m-label">最新消息</div>
    <a class="nav__m-link nav__m-sub" href="news.html">新聞中心</a>
    <a class="nav__m-link nav__m-sub" href="cases.html">成功案例</a>
    <a class="nav__m-link nav__m-sub" href="videos.html">影音專區</a>
    <a class="nav__m-link nav__m-sub" href="reports.html">報告書專區</a>
    <a class="nav__m-link nav__m-sub" href="contract.html">共同供應契約</a>
    <div class="nav__m-divider"></div>
    <a class="nav__m-link" href="admin/index.html">後台（Demo）</a>
    <a class="nav__m-cta" href="contact.html">聯絡我們 <i class="fa-solid fa-arrow-right" style="margin-left:8px"></i></a>
  </div>
</div>`;
      requestAnimationFrame(() => SiteNav.wire());
    }
  }
  SiteNav.wire = function () {
    const nav = document.getElementById('nav');
    if (!nav || nav.dataset.wired) return;
    nav.dataset.wired = '1';
    window.addEventListener('scroll', () => nav.classList.toggle('is-scrolled', window.scrollY > 8), { passive: true });
    nav.classList.toggle('is-scrolled', window.scrollY > 8);

    const root = document.documentElement, KEY = 'ux-theme';
    const themeBtn = document.getElementById('themeToggle');
    function syncIcon() {
      if (!themeBtn) return;
      const dark = root.getAttribute('data-theme') === 'dark';
      themeBtn.querySelector('i').className = dark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
      themeBtn.setAttribute('aria-pressed', String(dark));
    }
    syncIcon();
    if (themeBtn) themeBtn.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem(KEY, next); } catch (e) {}
      syncIcon();
    });

    const langBtn = document.getElementById('langBtn');
    const langDrop = document.querySelector('.nav__lang-drop');
    const langLabel = document.getElementById('langLabel');
    if (langBtn && langDrop) {
      const toggle = (open) => { langBtn.setAttribute('aria-expanded', String(open)); langDrop.classList.toggle('is-open', open); };
      langBtn.addEventListener('click', e => { e.stopPropagation(); toggle(langBtn.getAttribute('aria-expanded') !== 'true'); });
      langDrop.addEventListener('click', e => {
        const li = e.target.closest('li[data-lang]'); if (!li) return;
        langDrop.querySelectorAll('li').forEach(x => x.classList.remove('is-active'));
        li.classList.add('is-active'); langLabel.textContent = li.dataset.lang; toggle(false);
      });
      document.addEventListener('click', () => toggle(false));
      document.addEventListener('keydown', e => { if (e.key === 'Escape') toggle(false); });
    }

    const hbBtn = document.getElementById('navHamburger');
    const panel = document.getElementById('navMobile');
    if (hbBtn && panel) {
      const openMenu = (open) => {
        hbBtn.setAttribute('aria-expanded', String(open));
        panel.setAttribute('aria-hidden', String(!open));
        panel.classList.toggle('is-open', open);
        document.body.style.overflow = open ? 'hidden' : '';
      };
      hbBtn.addEventListener('click', () => openMenu(hbBtn.getAttribute('aria-expanded') !== 'true'));
      document.addEventListener('click', e => { if (!panel.contains(e.target) && !hbBtn.contains(e.target)) openMenu(false); });
      document.addEventListener('keydown', e => { if (e.key === 'Escape') openMenu(false); });
      panel.querySelectorAll('a').forEach(a => a.addEventListener('click', () => openMenu(false)));
    }
  };

  customElements.define('site-cta', SiteCta);
  customElements.define('site-footer', SiteFooter);
  customElements.define('site-back-to-top', SiteBackToTop);
  customElements.define('site-nav', SiteNav);
})();
