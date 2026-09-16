/* 客製化下拉選單：漸進增強 .filter-bar__select-wrap > select.filter-bar__select
   保留原生 select 做為資料來源（value / change event），不動各頁篩選邏輯 */
(function () {
  function enhance(wrap) {
    const select = wrap.querySelector('select.filter-bar__select');
    if (!select || wrap.dataset.csEnhanced) return;
    wrap.dataset.csEnhanced = '1';
    select.classList.add('cselect-native');

    const trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'cselect-trigger';
    const label = document.createElement('span');
    label.className = 'cselect-trigger__label';
    trigger.appendChild(label);
    const icon = wrap.querySelector('.filter-bar__select-icon');
    if (icon) trigger.appendChild(icon);

    const menu = document.createElement('div');
    menu.className = 'cselect-menu';
    menu.setAttribute('role', 'listbox');

    const opts = Array.from(select.options).map((o, i) => {
      const item = document.createElement('div');
      item.className = 'cselect-option';
      item.setAttribute('role', 'option');
      item.dataset.value = o.value;
      item.textContent = o.textContent;
      if (o.selected) item.classList.add('is-selected');
      menu.appendChild(item);
      return item;
    });

    function sync() {
      const cur = select.options[select.selectedIndex];
      label.textContent = cur ? cur.textContent : '';
      opts.forEach(el => el.classList.toggle('is-selected', el.dataset.value === select.value));
    }
    sync();

    function place() {
      const r = trigger.getBoundingClientRect();
      menu.style.left = r.left + 'px';
      menu.style.top = (r.bottom + 6) + 'px';
      menu.style.minWidth = r.width + 'px';
    }
    function open(v) {
      wrap.classList.toggle('is-open', v);
      menu.classList.toggle('is-open', v);
      trigger.setAttribute('aria-expanded', String(v));
      if (v) { place(); document.body.appendChild(menu); }
      else if (menu.parentElement === document.body) { wrap.appendChild(menu); }
    }
    trigger.addEventListener('click', () => open(!wrap.classList.contains('is-open')));
    window.addEventListener('scroll', () => { if (wrap.classList.contains('is-open')) place(); }, true);
    window.addEventListener('resize', () => { if (wrap.classList.contains('is-open')) place(); });
    opts.forEach(item => {
      item.addEventListener('click', () => {
        if (select.value !== item.dataset.value) {
          select.value = item.dataset.value;
          select.dispatchEvent(new Event('change', { bubbles: true }));
        }
        sync();
        open(false);
      });
    });
    document.addEventListener('click', e => { if (!wrap.contains(e.target)) open(false); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') open(false); });
    select.addEventListener('change', sync);

    wrap.appendChild(trigger);
    wrap.appendChild(menu);
  }

  function init() {
    document.querySelectorAll('.filter-bar__select-wrap').forEach(enhance);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
