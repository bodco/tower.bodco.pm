// 2026-10-30: comparison tables you can scan without reading.
// A Markdown table becomes a comparison table (class "cmp") when at least one body cell starts with a mark:
//   ✓ yes   ✗ no   ◐ partial, paid or limited
// What this step does at build time (no client script, nothing for the CSP):
// - the mark becomes <span class="mk mk--yes|no|part" aria-hidden="true"> plus a screen-reader word;
//   the rest of the cell goes into <span class="cmp__txt">, both inside <span class="cmp__cell">;
// - a column whose header is "Pacenote" gets class "is-pn" (subtly highlighted);
// - a body row whose first cell has text and all other cells are empty becomes a group header row
//   (<tr class="cmp__grp"><th colspan=N>);
// - every cell gets data-col (its column header), used by the phone layout;
// - the table is wrapped in <div class="cmp-wrap"> and carries --cols (number of product columns).
// Tables without marks are left exactly as they were.

const MARKS = { '✓': 'yes', '✗': 'no', '◐': 'part' };
const SR = {
  en: { yes: 'Yes: ', no: 'No: ', part: 'Partly: ' },
  uk: { yes: 'Так: ', no: 'Ні: ', part: 'Частково: ' },
};

const isEl = (n, tag) => n && n.type === 'element' && (!tag || n.tagName === tag);
const kids = (n, tag) => (n.children || []).filter((c) => isEl(c, tag));
function text(n) {
  if (!n) return '';
  if (n.type === 'text') return n.value;
  return (n.children || []).map(text).join('');
}
function firstText(n) {
  for (const c of n.children || []) {
    if (c.type === 'text') { if (c.value.trim()) return c; continue; }
    if (c.type === 'element') { const t = firstText(c); if (t) return t; }
  }
  return null;
}
function addClass(n, cls) {
  const p = (n.properties ||= {});
  const cur = Array.isArray(p.className) ? p.className : p.className ? String(p.className).split(/\s+/) : [];
  p.className = [...cur, cls];
}
const span = (cls, children, extra = {}) => ({ type: 'element', tagName: 'span', properties: { className: [cls].flat(), ...extra }, children });

function rowsOf(table) {
  const head = kids(table, 'thead')[0];
  const body = kids(table, 'tbody')[0];
  return { head, body, headRow: head ? kids(head, 'tr')[0] : null, bodyRows: body ? kids(body, 'tr') : [] };
}

function transformTable(table, lang) {
  const { headRow, body, bodyRows } = rowsOf(table);
  if (!headRow || !bodyRows.length) return false;
  const hasMark = bodyRows.some((tr) => kids(tr).some((td) => {
    const t = firstText(td);
    return t && MARKS[t.value.trimStart()[0]];
  }));
  if (!hasMark) return false;

  const heads = kids(headRow).map((th) => text(th).trim());
  const ncol = heads.length;
  const pn = heads.findIndex((h) => /^pacenote\b/i.test(h));
  const sr = SR[lang] || SR.en;

  kids(headRow).forEach((th, i) => {
    if (i === pn) addClass(th, 'is-pn');
    if (i === 0) addClass(th, 'cmp__corner');
  });

  for (const tr of bodyRows) {
    const cells = kids(tr);
    const label = text(cells[0] || {}).trim();
    if (cells.length > 1 && label && cells.slice(1).every((c) => !text(c).trim())) {
      addClass(tr, 'cmp__grp');
      const first = cells[0];
      tr.children = [{ type: 'element', tagName: 'th', properties: { colSpan: ncol, scope: 'colgroup' }, children: first.children }];
      continue;
    }
    cells.forEach((td, i) => {
      td.properties ||= {};
      if (heads[i]) td.properties.dataCol = heads[i];
      if (i === 0) { addClass(td, 'cmp__label'); return; }
      if (i === pn) addClass(td, 'is-pn');
      const t = firstText(td);
      const lead = t ? t.value.trimStart() : '';
      const kind = MARKS[lead[0]];
      if (!kind) return;
      t.value = lead.slice(1).replace(/^\s+/, '');
      addClass(td, 'has-mk');
      td.children = [span('cmp__cell', [
        span(['mk', `mk--${kind}`], [{ type: 'text', value: lead[0] }], { ariaHidden: 'true' }),
        span('pn-sr', [{ type: 'text', value: sr[kind] }]),
        span('cmp__txt', td.children),
      ])];
    });
  }

  addClass(table, 'cmp');
  table.properties.style = `--cols: ${Math.max(1, ncol - 1)}`;
  return true;
}

function walk(node, lang) {
  const list = node.children || [];
  for (let i = 0; i < list.length; i++) {
    const c = list[i];
    if (isEl(c, 'table')) {
      if (transformTable(c, lang)) {
        list[i] = { type: 'element', tagName: 'div', properties: { className: ['cmp-wrap'] }, children: [c] };
      }
    } else if (c.type === 'element' || c.type === 'root') {
      walk(c, lang);
    }
  }
}

export default function rehypeCompare() {
  return (tree, file) => {
    const p = String((file && (file.path || (file.history && file.history[0]))) || '');
    const lang = /[\\/]uk[\\/]/.test(p) ? 'uk' : 'en';
    walk(tree, lang);
  };
}
