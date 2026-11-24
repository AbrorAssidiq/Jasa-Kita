/* ===== FUNGSI BERSAMA (semua halaman) ===== */
let toastTimer;
function toast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.className = 's';
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.className = '', 2000);
}
function pickChip(btn) {
  btn.parentNode.querySelectorAll('.chip').forEach(c => c.classList.remove('on'));
  btn.classList.add('on');
}
function togglePassword() {
  const p = document.getElementById('pw');
  p.type = p.type === 'password' ? 'text' : 'password';
}
/* Perpindahan halaman dengan animasi geser keluar */
function goTo(url)  { document.body.classList.add('leaving'); setTimeout(() => location.href = url, 190); }
function goBack()   { document.body.classList.add('leaving', 'back'); setTimeout(() => history.back(), 190); }
document.addEventListener('click', e => {
  const a = e.target.closest('a[href]');
  if (!a || a.target || e.ctrlKey || e.metaKey) return;
  const h = a.getAttribute('href');
  if (!h || h[0] === '#' || /^(https?:|javascript:)/.test(h)) return;
  e.preventDefault(); goTo(h);
});
addEventListener('pageshow', () => document.body.classList.remove('leaving', 'back'));
