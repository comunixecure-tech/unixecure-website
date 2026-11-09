/* 產品頁文案即時串接 Google Sheets：只吃狀態為「待審核」「完成」的列，其餘維持隱藏 */
(function () {
  var SHEET_ID = '10muKVa2PGvPXsEP-07fZ1GzVV4pKK3DIxrxkDrC8xc8';
  var GID = '2037813989';
  var OK_STATUS = ['待審核', '完成'];
  var URL = 'https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?tqx=out:csv&gid=' + GID;

  function parseCsv(text) {
    var rows = [], row = [], cell = '', q = false;
    for (var i = 0; i < text.length; i++) {
      var c = text[i];
      if (q) {
        if (c === '"' && text[i + 1] === '"') { cell += '"'; i++; }
        else if (c === '"') q = false;
        else cell += c;
      } else if (c === '"') q = true;
      else if (c === ',') { row.push(cell); cell = ''; }
      else if (c === '\n') { row.push(cell); rows.push(row); row = []; cell = ''; }
      else if (c !== '\r') cell += c;
    }
    if (cell || row.length) { row.push(cell); rows.push(row); }
    return rows;
  }

  var section = document.querySelector('[data-sheet-product]');
  if (!section) return;
  var code = section.getAttribute('data-sheet-product');

  fetch(URL).then(function (r) { return r.text(); }).then(function (text) {
    var rows = parseCsv(text), head = rows[0] || [];
    var iCode = head.indexOf('產品代號'), iStatus = head.indexOf('狀態'), iIntro = head.indexOf('產品簡介');
    if (iCode < 0 || iStatus < 0 || iIntro < 0) return;
    var hit = rows.slice(1).filter(function (r) {
      return (r[iCode] || '').trim() === code && OK_STATUS.indexOf((r[iStatus] || '').trim()) > -1;
    })[0];
    var lines = hit ? (hit[iIntro] || '').split(/\n+/).map(function (s) { return s.trim(); }).filter(Boolean) : [];
    if (!lines.length) return;
    var wrap = section.querySelector('.wrap');
    wrap.textContent = '';
    lines.forEach(function (line) {
      var p = document.createElement('p');
      p.className = 'prod-section__lead';
      p.textContent = line;
      wrap.appendChild(p);
    });
    section.hidden = false;
  }).catch(function () {});
})();
