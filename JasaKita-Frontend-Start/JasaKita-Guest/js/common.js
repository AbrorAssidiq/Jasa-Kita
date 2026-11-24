/* ===== FUNGSI BERSAMA (dipakai semua halaman) ===== */
let toastTimer;
function toast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.className = 's';
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.className = '', 2000);
}
function pickChip(btn) {                       // chip filter (Semua / Terdekat / Rating)
  btn.parentNode.querySelectorAll('.chip').forEach(c => c.classList.remove('on'));
  btn.classList.add('on');
}
function togglePassword() {                    // tombol mata di halaman login
  const p = document.getElementById('pw');
  p.type = p.type === 'password' ? 'text' : 'password';
}
